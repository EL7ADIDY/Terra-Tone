/* Copyright (c) 2026, Graham Stalker-Wilde

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Bundled from the user-supplied web-sonifier-main.zip; ESM declarations adapted. */
(()=>{
/**
 * MetaParameter (Macro)
 *
 * A pure mathematical 1-to-N parameter mapper.
 * Takes a single scalar control value and translates it into coordinated
 * parameter updates across an instrument.
 *
 * Supports:
 * - Simple 1-segment mappings (range, curve, invert)
 * - SuperCollider-style multi-segment piecewise envelopes with mixed curves
 * - Custom functional transforms
 * - Zero Web Audio / DOM dependencies
 */
class MetaParameter {

  /**
   * @param {Object} config
   * @param {string} config.name - Identifier (e.g. 'frenzy')
   * @param {string} [config.label] - Human-readable label (e.g. 'Frenzy / Chaos')
   * @param {string} [config.description] - Description or tooltip
   * @param {[number, number]} [config.range=[0, 1]] - Input range
   * @param {number} [config.default=0.5] - Default input value
   * @param {Array<Object>} [config.mappings=[]] - Target parameter mappings
   */
  constructor(config = {}) {
    if (!config.name) {
      throw new Error('[web-sonify] MetaParameter requires a "name"')
    }

    this.name = config.name
    this.label = config.label || config.name
    this.description = config.description || ''
    this.range = config.range ?? [0, 1]
    this.default = config.default ?? (this.range[0] + (this.range[1] - this.range[0]) * 0.5)
    this.mappings = this._normalizeMappings(config.mappings || [])
  }

  /**
   * Map an input scalar value to a dictionary of target parameter values.
   * Pure function: Does not mutate sonifiers.
   *
   * @param {number} rawValue
   * @returns {Record<string, number|string|boolean>}
   */
  map(rawValue) {
    const [inMin, inMax] = this.range
    // Clamping to input range
    const clampedInput = inMax >= inMin
      ? Math.max(inMin, Math.min(inMax, rawValue))
      : Math.max(inMax, Math.min(inMin, rawValue))

    const u = inMax === inMin ? 0 : (clampedInput - inMin) / (inMax - inMin)
    const result = {}

    for (const m of this.mappings) {
      if (typeof m.map === 'function') {
        result[m.param] = m.map(u, clampedInput)
      } else if (m.points && m.points.length > 0) {
        result[m.param] = this._interpolatePoints(u, m.points)
      } else if (m.range) {
        const [outMin, outMax] = m.range
        let norm = m.invert ? (1 - u) : u
        result[m.param] = this._interpolateSegment(norm, outMin, outMax, m.curve || 'linear')
      }
    }

    return result
  }

  /**
   * Alias for map().
   * @param {number} rawValue
   * @returns {Record<string, number|string|boolean>}
   */
  evaluate(rawValue) {
    return this.map(rawValue)
  }

  /**
   * Evaluates input value and applies all updates to the target sonifier.
   *
   * @param {number} rawValue
   * @param {{ setParam: (name: string, value: any) => void }} sonifier
   * @returns {Record<string, number|string|boolean>}
   */
  apply(rawValue, sonifier) {
    if (!sonifier || typeof sonifier.setParam !== 'function') {
      throw new Error('[web-sonify] MetaParameter.apply() requires a sonifier with setParam()')
    }
    const updates = this.map(rawValue)
    for (const [param, val] of Object.entries(updates)) {
      sonifier.setParam(param, val)
    }
    return updates
  }

  /**
   * Get current serializable configuration.
   * @returns {Object}
   */
  getConfig() {
    return {
      name: this.name,
      label: this.label,
      description: this.description,
      range: [...this.range],
      default: this.default,
      mappings: JSON.parse(JSON.stringify(this.mappings))
    }
  }

  /**
   * Update configuration.
   * @param {Partial<Object>} config
   */
  setConfig(config = {}) {
    if (config.name) this.name = config.name
    if (config.label) this.label = config.label
    if (config.description !== undefined) this.description = config.description
    if (config.range) this.range = config.range
    if (config.default !== undefined) this.default = config.default
    if (config.mappings) this.mappings = this._normalizeMappings(config.mappings)
  }

  // ---------------------------------------------------------------------------
  // Internal Normalization & Math
  // ---------------------------------------------------------------------------

  _normalizeMappings(rawMappings) {
    return rawMappings.map(m => {
      const mapping = { ...m }

      // Convert SuperCollider-style levels & times into points array:
      // Env([levels], [times], [curves])
      if (Array.isArray(m.levels) && Array.isArray(m.times)) {
        const points = []
        let currentX = 0
        points.push([currentX, m.levels[0], m.curves?.[0] || 'linear'])

        for (let i = 0; i < m.times.length; i++) {
          currentX += m.times[i]
          const level = m.levels[i + 1] !== undefined ? m.levels[i + 1] : m.levels[i]
          const curve = m.curves?.[i + 1] || m.curves?.[i] || 'linear'
          points.push([currentX, level, curve])
        }
        mapping.points = points
      }

      // Ensure points are sorted by x
      if (Array.isArray(mapping.points)) {
        mapping.points = [...mapping.points].sort((a, b) => a[0] - b[0])
      }

      return mapping
    })
  }

  _interpolatePoints(u, points) {
    if (points.length === 1) return points[0][1]

    // Clamp before first point and after last point
    if (u <= points[0][0]) return points[0][1]
    const last = points[points.length - 1]
    if (u >= last[0]) return last[1]

    // Find segment [p0, p1]
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i]
      const p1 = points[i + 1]
      const x0 = p0[0]
      const x1 = p1[0]

      if (u >= x0 && u <= x1) {
        if (x1 === x0) return p1[1]
        const t = (u - x0) / (x1 - x0)
        // Use p1's curve specification if present, else p0's, else linear
        const curve = p1[2] || p0[2] || 'linear'
        return this._interpolateSegment(t, p0[1], p1[1], curve)
      }
    }

    return last[1]
  }

  _interpolateSegment(t, min, max, curve) {
    switch (curve) {
      case 'exponential':
        // Perceptual exponential mapping
        if (min > 0 && max > 0) {
          return min * Math.pow(max / min, t)
        }
        // Fallback for zero/negative endpoints
        return min + Math.pow(t, 2) * (max - min)

      case 'logarithmic': {
        const curved = t === 0 ? 0 : Math.log1p(t * (Math.E - 1))
        return min + curved * (max - min)
      }

      case 's-curve': {
        const curved = 0.5 - 0.5 * Math.cos(Math.PI * t)
        return min + curved * (max - min)
      }

      case 'linear':
      default:
        return min + t * (max - min)
    }
  }
}

/**
 * Common music technology alias for MetaParameter.
 */
const Macro = MetaParameter
/**
 * Adapter
 *
 * A stateful mapping function. Takes raw data values and maps them to
 * a sonifier parameter's value range. Knows nothing about sonifiers.
 *
 * The site author calls adapter.map(rawValue) and passes the result
 * to sonifier.setParam().
 *
 * Supports:
 * - Fixed input range
 * - Auto-ranging: derives input range from a rolling window of recent values
 * - Curves: linear, exponential, logarithmic
 */
class Adapter {

  /**
   * @param {Object} config
   * @param {string} config.param              - parameter name this adapter maps to
   * @param {[number, number]} config.outputRange - [min, max] in the sonifier's param space
   * @param {[number, number]} [config.inputRange] - fixed input range; omit to use autoRange
   * @param {'linear'|'exponential'|'logarithmic'} [config.curve='linear']
   * @param {boolean} [config.invert=false]    - if true, inverts normalized input (0 -> 1, 1 -> 0)
   * @param {Object} [config.autoRange]        - if present, input range is derived dynamically
   * @param {number} [config.autoRange.windowSize=100] - number of recent values to track
   * @param {number} [config.autoRange.padding=0.05]   - fractional padding added to derived range
   */
  constructor(config) {
    this.param = config.param
    this.outputRange = config.outputRange
    this.curve = config.curve ?? 'linear'
    this.invert = config.invert ?? false
    this._fixedInputRange = config.inputRange ?? null
    this._autoRange = config.autoRange ?? null

    // Rolling window for auto-ranging
    this._window = []
    this._windowSize = config.autoRange?.windowSize ?? 100
    this._padding = config.autoRange?.padding ?? 0.05
    // Pipeline transformers (decorators)
    this._transformers = []
  }

  /**
   * Append one or more transformer functions (decorators) to the adapter's pipeline.
   * e.g. adapter.pipe(Quantize.scale(Scales.pentatonic))
   *
   * @param {...Function} transformers
   * @returns {this} Fluent chaining
   */
  pipe(...transformers) {
    for (const fn of transformers) {
      if (typeof fn === 'function') {
        this._transformers.push(fn)
      }
    }
    return this
  }

  /**
   * Map a raw value to the output range.
   * If autoRange is enabled, updates the rolling window as a side effect.
   *
   * @param {number} rawValue
   * @returns {number} mapped value in outputRange
   */
  map(rawValue) {
    const inputRange = this._resolveInputRange(rawValue)
    if (!inputRange) {
      // Not enough data yet to derive a range
      return this.outputRange[0]
    }
    let normalised = this._normalise(rawValue, inputRange)
    if (this.invert) {
      normalised = 1 - normalised
    }
    const curved = this._applyCurve(normalised)
    let output = this._scale(curved, this.outputRange)

    // Apply any piped transformers (e.g. musical quantizers)
    for (const transform of this._transformers) {
      output = transform(output)
    }

    return output
  }

  /**
   * Seed the adapter with historical values.
   * Useful for priming the auto-range window before live data arrives.
   *
   * @param {number[]} values
   */
  seed(values) {
    for (const v of values) {
      this._updateWindow(v)
    }
  }

  /**
   * Get the current configuration (e.g. for saving or displaying in a settings dialog).
   * @returns {Object}
   */
  getConfig() {
    return {
      param: this.param,
      outputRange: [...this.outputRange],
      inputRange: this._fixedInputRange ? [...this._fixedInputRange] : null,
      curve: this.curve,
      invert: this.invert,
      autoRange: this._autoRange ? { windowSize: this._windowSize, padding: this._padding } : null
    }
  }

  /**
   * Update configuration (e.g. from a settings dialog).
   * @param {Partial<Object>} config
   */
  setConfig(config) {
    if (config.param)       this.param = config.param
    if (config.outputRange) this.outputRange = config.outputRange
    if (config.inputRange)  this._fixedInputRange = config.inputRange
    if (config.curve)       this.curve = config.curve
    if (config.invert !== undefined) this.invert = Boolean(config.invert)
    if (config.autoRange) {
      this._autoRange = config.autoRange
      this._windowSize = config.autoRange.windowSize ?? this._windowSize
      this._padding = config.autoRange.padding ?? this._padding
    }
  }

  /**
   * Get the current derived input range (useful for display in a settings dialog).
   * Returns null if using auto-range and not enough data yet.
   * @returns {[number, number]|null}
   */
  getInputRange() {
    if (this._fixedInputRange) return [...this._fixedInputRange]
    return this._deriveRangeFromWindow()
  }

  // ---------------------------------------------------------------------------
  // Private
  // ---------------------------------------------------------------------------

  _resolveInputRange(rawValue) {
    if (this._fixedInputRange) return this._fixedInputRange
    if (this._autoRange) {
      this._updateWindow(rawValue)
      return this._deriveRangeFromWindow()
    }
    console.warn('[web-sonify] Adapter has no inputRange and autoRange is not enabled')
    return null
  }

  _updateWindow(value) {
    this._window.push(value)
    if (this._window.length > this._windowSize) {
      this._window.shift()
    }
  }

  _deriveRangeFromWindow() {
    if (this._window.length < 2) return null
    const min = Math.min(...this._window)
    const max = Math.max(...this._window)
    if (min === max) return null
    const pad = (max - min) * this._padding
    return [min - pad, max + pad]
  }

  _normalise(value, [min, max]) {
    if (max === min) return 0
    return Math.max(0, Math.min(1, (value - min) / (max - min)))
  }

  _applyCurve(t) {
    switch (this.curve) {
      case 'exponential':
        // Standard perceptual mapping: min * (max/min)^t
        // We handle the scaling here because it requires access to outputRange
        return t
      case 'logarithmic':
        return t === 0 ? 0 : Math.log1p(t * (Math.E - 1))
      case 'linear':
      default:
        return t
    }
  }

  _scale(t, [min, max]) {
    if (this.curve === 'exponential') {
      // Perceptual frequency mapping: equal data changes = equal pitch intervals (octaves)
      // formula: f = fmin * (fmax / fmin) ^ t
      if (min <= 0 || max <= 0) {
        // Fallback for non-frequency use cases or invalid ranges
        return min + Math.pow(t, 2) * (max - min)
      }
      return min * Math.pow(max / min, t)
    }
    return min + t * (max - min)
  }
}

/**
 * SonifierBase
 *
 * Base class for all sonifier plugins. Plugin authors extend this class
 * and implement getParamSchema(), init(), onParam(), and destroy().
 *
 * The base class owns setParam() — it validates the value, stores it,
 * then calls onParam() for the subclass to act on.
 */
class SonifierBase {

  constructor() {
    this._paramValues = {}
  }

  // ---------------------------------------------------------------------------
  // To be implemented by subclass
  // ---------------------------------------------------------------------------

  /**
   * Return an array of parameter descriptors.
   * @returns {ParamSchema[]}
   *
   * @example
   * return [
   *   { name: 'frequency', type: 'number', range: [20, 2000], default: 220,
   *     group: 'tone', label: 'Frequency', description: 'Oscillator frequency in Hz' },
   *   { name: 'volume',    type: 'number', range: [0, 1],     default: 0.5,
   *     group: 'tone', label: 'Volume' }
   * ]
   */
  getParamSchema() {
    throw new Error(`${this.constructor.name} must implement getParamSchema()`)
  }

  /**
   * Return an array of meta-parameter descriptors.
   * Plugin authors can optionally override this to declare factory meta-parameters.
   * @returns {Array<Object>}
   */
  getMetaParamSchema() {
    return []
  }

  /**
   * Called once when the sonifier is created.
   * Plugin should build its Web Audio graph here and connect to outputNode.
   *
   * @param {AudioContext} audioContext
   * @param {AudioNode} outputNode - connect your final node to this
   */
  init(audioContext, outputNode) {
    throw new Error(`${this.constructor.name} must implement init()`)
  }

  /**
   * Called by the base class after a param value has been validated and stored.
   * Plugin should respond to the new value here (e.g. update oscillator frequency).
   *
   * @param {string} name
   * @param {*} value
   */
  onParam(name, value) {
    throw new Error(`${this.constructor.name} must implement onParam()`)
  }

  /**
   * Called when the sonifier is torn down.
   * Plugin should stop and disconnect all audio nodes here.
   */
  destroy() {
    throw new Error(`${this.constructor.name} must implement destroy()`)
  }

  // ---------------------------------------------------------------------------
  // Provided by base class — do not override
  // ---------------------------------------------------------------------------

  /**
   * Set a parameter value. Validates against schema, stores value, calls onParam().
   * This is what the site author and adapters call.
   *
   * @param {string} name
   * @param {*} value
   */
  setParam(name, value) {
    const schema = this._getSchemaEntry(name)
    if (!schema) {
      console.warn(`[web-sonify] Unknown param "${name}" on ${this.constructor.name}`)
      return
    }

    const cooked = this._validate(schema, value)
    this._paramValues[name] = cooked
    this.onParam(name, cooked)
  }

  /**
   * Get the current stored value of a parameter.
   * @param {string} name
   * @returns {*}
   */
  getParam(name) {
    return this._paramValues[name]
  }

  /**
   * Get a MetaParameter instance by name.
   * Caches instantiated MetaParameters for performance.
   * @param {string} name
   * @returns {MetaParameter|null}
   */
  getMetaParam(name) {
    if (!this._metaParams) {
      this._metaParams = new Map()
    }
    if (this._metaParams.has(name)) {
      return this._metaParams.get(name)
    }

    const schema = this.getMetaParamSchema().find(m => m.name === name)
    if (!schema) return null

    const instance = new MetaParameter(schema)
    this._metaParams.set(name, instance)
    return instance
  }

  /**
   * Set a meta-parameter value by name. Evaluates the meta-parameter and dispatches
   * setParam() updates for all mapped target parameters.
   *
   * @param {string} name
   * @param {number} value
   * @returns {Record<string, number|string|boolean>|null}
   */
  setMetaParam(name, value) {
    const meta = this.getMetaParam(name)
    if (!meta) {
      console.warn(`[web-sonify] Unknown meta-param "${name}" on ${this.constructor.name}`)
      return null
    }
    return meta.apply(value, this)
  }

  /**
   * Apply all default values from the schema.
   * Called by Runtime after init().
   */
  applyDefaults() {
    for (const entry of this.getParamSchema()) {
      if (entry.default !== undefined) {
        this.setParam(entry.name, entry.default)
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  _getSchemaEntry(name) {
    return this.getParamSchema().find(p => p.name === name) ?? null
  }

  _validate(schema, value) {
    if (schema.type === 'number') {
      const n = Number(value)
      if (isNaN(n)) {
        console.warn(`[web-sonify] Param "${schema.name}" expected a number, got ${value}`)
        return schema.default ?? 0
      }
      if (schema.range) {
        const [min, max] = schema.range
        if (n < min || n > max) {
          console.warn(`[web-sonify] Param "${schema.name}" value ${n} clamped to [${min}, ${max}]`)
          return Math.min(max, Math.max(min, n))
        }
      }
      return n
    }

    if (schema.type === 'integer') {
      const n = Number(value)
      if (isNaN(n)) {
        console.warn(`[web-sonify] Param "${schema.name}" expected an integer, got ${value}`)
        return schema.default ?? 0
      }
      let rounded = Math.round(n)
      if (schema.range) {
        const [min, max] = schema.range
        if (rounded < min || rounded > max) {
          console.warn(`[web-sonify] Param "${schema.name}" value ${rounded} clamped to [${min}, ${max}]`)
          rounded = Math.min(max, Math.max(min, rounded))
        }
      }
      return rounded
    }

    if (schema.type === 'enum') {
      const allowed = schema.values || (Array.isArray(schema.options) ? schema.options.map(o => (typeof o === 'object' && o !== null && 'value' in o ? o.value : o)) : [])
      if (!allowed.includes(value)) {
        console.warn(`[web-sonify] Param "${schema.name}" invalid value "${value}", using default`)
        return schema.default ?? allowed[0]
      }
      return value
    }

    if (schema.type === 'boolean') {
      return Boolean(value)
    }

    return value
  }
}

/**
 * @typedef {Object} ParamSchema
 * @property {string} name
 * @property {'number'|'integer'|'enum'|'boolean'} type
 * @property {[number, number]} [range]   - for type 'number' or 'integer'
 * @property {number} [step]              - step increment
 * @property {Array<string|number>} [values] - for type 'enum'
 * @property {Array<{label: string, value: any}>|Array<string|number>} [options] - for type 'enum' or discrete options
 * @property {*} [default]
 * @property {string} [group]             - semantic group (e.g. 'Tone & Pitch', 'Swell Dynamics', 'Output')
 * @property {string} [label]             - human readable title
 * @property {string} [description]       - description or tooltip
 * @property {string} [unit]              - unit string (e.g. 'Hz', 'dB', 'gain', 's', 'norm')
 * @property {'linear'|'exponential'|'logarithmic'} [curve] - suggested mapping transfer curve
 * @property {boolean} [invert]           - suggested inversion hint for data mapping
 */
/**
 * Runtime
 *
 * The core of web-sonify. Manages:
 * - The Web Audio context and master gain node
 * - The plugin registry (available sonifier types)
 * - Creation and teardown of sonifier instances
 *
 * One Runtime per page is the expected pattern.
 *
 * Usage:
 *   const runtime = new Runtime()
 *   runtime.register('tone', ToneSonifier)
 *   const tone = runtime.create('tone')
 *   runtime.setMasterVolume(0.8)
 *   tone.setParam('frequency', 440)
 *   runtime.destroy('tone')
 */
class Runtime {

  constructor() {
    this._registry = {}     // name -> class
    this._instances = {}    // name -> instance
    this._audioContext = null
    this._masterGain = null
  }

  // ---------------------------------------------------------------------------
  // Audio context
  // ---------------------------------------------------------------------------

  /**
   * Initialise the Web Audio context. Must be called from a user gesture
   * (e.g. a button click) due to browser autoplay policy.
   *
   * Safe to call multiple times — subsequent calls are no-ops.
   */
  start() {
    if (this._audioContext) return

    this._audioContext = new AudioContext()
    this._masterGain = this._audioContext.createGain()
    this._masterGain.gain.value = 1.0
    this._masterGain.connect(this._audioContext.destination)
  }

  /**
   * Suspend audio processing without destroying state.
   * Call this when the user navigates away or closes a panel.
   */
  async suspend() {
    if (this._audioContext) {
      await this._audioContext.suspend()
    }
  }

  /**
   * Resume a suspended audio context.
   */
  async resume() {
    if (this._audioContext) {
      await this._audioContext.resume()
    }
  }

  /**
   * Set the master volume. Affects all sonifiers.
   * @param {number} value - 0..1
   */
  setMasterVolume(value) {
    if (!this._masterGain) {
      console.warn('[web-sonify] Runtime.start() must be called before setMasterVolume()')
      return
    }
    const clamped = Math.max(0, Math.min(1, value))
    // Use setTargetAtTime for a smooth transition rather than a click
    this._masterGain.gain.setTargetAtTime(clamped, this._audioContext.currentTime, 0.01)
  }

  /**
   * Get the current master volume.
   * @returns {number}
   */
  getMasterVolume() {
    return this._masterGain?.gain.value ?? 1.0
  }

  // ---------------------------------------------------------------------------
  // Plugin registry
  // ---------------------------------------------------------------------------

  /**
   * Register a sonifier plugin class under a name.
   * @param {string} name
   * @param {typeof SonifierBase} pluginClass
   */
  register(name, pluginClass) {
    if (this._registry[name]) {
      console.warn(`[web-sonify] Sonifier "${name}" is already registered — overwriting`)
    }
    this._registry[name] = pluginClass
  }

  /**
   * List registered sonifier names.
   * @returns {string[]}
   */
  listRegistered() {
    return Object.keys(this._registry)
  }

  // ---------------------------------------------------------------------------
  // Instance lifecycle
  // ---------------------------------------------------------------------------

  /**
   * Create and initialise a sonifier instance.
   * Returns the plugin instance directly — the site author holds this reference
   * and calls setParam() on it.
   *
   * @param {string} name - must match a registered sonifier
   * @param {string} [instanceId] - optional; defaults to name. Use when running
   *                                multiple instances of the same plugin type.
   * @returns {SonifierBase}
   */
  create(name, instanceId) {
    const id = instanceId ?? name

    if (!this._registry[name]) {
      throw new Error(`[web-sonify] No sonifier registered as "${name}"`)
    }
    if (!this._audioContext) {
      throw new Error(`[web-sonify] Runtime.start() must be called before create()`)
    }
    if (this._instances[id]) {
      console.warn(`[web-sonify] Instance "${id}" already exists — destroying previous`)
      this.destroy(id)
    }

    const instance = new this._registry[name]()
    instance.init(this._audioContext, this._masterGain)
    instance.applyDefaults()

    this._instances[id] = instance
    return instance
  }

  /**
   * Destroy a sonifier instance by id, freeing its audio nodes.
   * @param {string} instanceId
   */
  destroy(instanceId) {
    const instance = this._instances[instanceId]
    if (!instance) {
      console.warn(`[web-sonify] No instance found with id "${instanceId}"`)
      return
    }
    instance.destroy()
    delete this._instances[instanceId]
  }

  /**
   * Destroy all instances and close the audio context.
   * Call this when the page is torn down.
   */
  async destroyAll() {
    for (const id of Object.keys(this._instances)) {
      this.destroy(id)
    }
    if (this._audioContext) {
      await this._audioContext.close()
      this._audioContext = null
      this._masterGain = null
    }
  }
}
window.WebSonifier={Adapter,SonifierBase,Runtime};
})();
