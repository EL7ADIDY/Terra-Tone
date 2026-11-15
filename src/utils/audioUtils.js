/**
 * Web Audio API Utilities and Synthesizer Engine
 * Pure Web Audio API: oscillators, gain envelopes, biquad filters, and stereo panning.
 * No external sound files or sound libraries.
 */

// Pentatonic Scale MIDI notes from C3 (48) to C6 (84)
// Major Pentatonic: Root, 2nd, 3rd, 5th, 6th
const PENTATONIC_MIDI = [
  48, 50, 52, 55, 57, // C3, D3, E3, G3, A3
  60, 62, 64, 67, 69, // C4, D4, E4, G4, A4
  72, 74, 76, 79, 81, // C5, D5, E5, G5, A5
  84                  // C6
];

/**
 * Convert MIDI note number to frequency in Hertz
 * @param {number} midi MIDI note number (e.g. 69 = A440)
 * @returns {number} Frequency in Hz
 */
export function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// Pre-calculated pentatonic frequencies
export const PENTATONIC_FREQUENCIES = PENTATONIC_MIDI.map(midiToFreq);
export const MIN_FREQ = PENTATONIC_FREQUENCIES[0]; // ~130.81 Hz (C3)
export const MAX_FREQ = PENTATONIC_FREQUENCIES[PENTATONIC_FREQUENCIES.length - 1]; // ~1046.50 Hz (C6)

/**
 * Maps a continuous data value to a frequency.
 * 
 * @param {number} value Raw data value
 * @param {number} minVal Expected minimum for variable
 * @param {number} maxVal Expected maximum for variable
 * @param {boolean} quantizeScale If true, quantizes to pentatonic scale; else continuous
 * @returns {number} Frequency in Hz
 */
export function mapValueToFrequency(value, minVal, maxVal, quantizeScale = true) {
  if (value === null || isNaN(value)) return MIN_FREQ;
  
  // Normalize value between 0.0 and 1.0
  const normalized = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal || 1)));

  if (quantizeScale) {
    const index = Math.round(normalized * (PENTATONIC_FREQUENCIES.length - 1));
    return PENTATONIC_FREQUENCIES[index];
  } else {
    // Logarithmic continuous pitch interpolation between MIN_FREQ and MAX_FREQ
    return MIN_FREQ * Math.pow(MAX_FREQ / MIN_FREQ, normalized);
  }
}

let sharedAudioContext = null;
let sharedAnalyserNode = null;

/**
 * Get or initialize the shared AudioContext handling browser autoplay policies
 * @returns {AudioContext}
 */
export function getAudioContext() {
  if (!sharedAudioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      sharedAudioContext = new AudioContextClass();
    }
  }
  return sharedAudioContext;
}

/**
 * Get shared AnalyserNode for real-time waveform and frequency visualization
 * @returns {AnalyserNode|null}
 */
export function getAudioAnalyser() {
  const ctx = getAudioContext();
  if (!ctx) return null;
  if (!sharedAnalyserNode) {
    try {
      sharedAnalyserNode = ctx.createAnalyser();
      sharedAnalyserNode.fftSize = 256;
      sharedAnalyserNode.smoothingTimeConstant = 0.8;
      sharedAnalyserNode.connect(ctx.destination);
    } catch {
      return null;
    }
  }
  return sharedAnalyserNode;
}

/**
 * Resumes AudioContext if suspended (required by browser autoplay policy after user click)
 * @returns {Promise<boolean>}
 */
export async function ensureAudioContextRunning() {
  const ctx = getAudioContext();
  if (!ctx) return false;
  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch (err) {
      console.warn('AudioContext resume failed:', err);
      return false;
    }
  }
  return ctx.state === 'running';
}

/**
 * Synthesizes and plays a tone representing a data point.
 * 
 * @param {Object} options
 * @param {number} options.frequency Frequency in Hz
 * @param {number} options.duration Note duration in seconds (default: 0.45s)
 * @param {number} options.volume Master volume (0 to 1)
 * @param {string} options.instrument 'sine' | 'triangle' | 'soft_pluck'
 * @param {number} options.pan Stereo pan (-1.0 left to +1.0 right)
 * @param {boolean} options.isRecordHigh Play bright record-high cue
 * @param {boolean} options.isRecordLow Play deep record-low cue
 * @param {number} [options.secondaryVolume] Optional secondary layer volume modifier (0.5 to 1.5)
 */
export function playDataTone({
  frequency,
  duration = 0.45,
  volume = 0.7,
  instrument = 'sine',
  pan = 0,
  isRecordHigh = false,
  isRecordLow = false,
  secondaryVolume = 1.0
}) {
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  const now = ctx.currentTime;
  const noteDuration = Math.max(0.15, duration * 0.85);

  // Master Gain for this voice
  const voiceGain = ctx.createGain();
  const effectiveVolume = Math.max(0, Math.min(1, volume * secondaryVolume));

  const targetNode = getAudioAnalyser() || ctx.destination;

  // Stereo Panning
  let pannerNode = null;
  if (ctx.createStereoPanner) {
    pannerNode = ctx.createStereoPanner();
    pannerNode.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), now);
    voiceGain.connect(pannerNode);
    pannerNode.connect(targetNode);
  } else {
    voiceGain.connect(targetNode);
  }

  // Instrument Voice Synthesis with distinct acoustic timbres
  if (instrument === 'wind' || instrument === 'WS10M') {
    // Atmospheric Wind: sweeping filtered noise & airy tone
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(frequency, now);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(4.0, now);
    filter.frequency.setValueAtTime(Math.min(2400, frequency * 2), now);
    filter.frequency.exponentialRampToValueAtTime(Math.max(150, frequency * 0.7), now + noteDuration);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.7, now + 0.05);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    osc.connect(filter);
    filter.connect(voiceGain);
    osc.start(now);
    osc.stop(now + noteDuration + 0.05);

  } else if (instrument === 'rain' || instrument === 'PRECTOTCORR') {
    // Precipitation: snappy woody attack + secondary raindrop ripple plink
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, now);

    const drop = ctx.createOscillator();
    drop.type = 'sine';
    drop.frequency.setValueAtTime(frequency * 2.8, now + 0.05);
    drop.frequency.exponentialRampToValueAtTime(frequency * 3.5, now + 0.12);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.85, now + 0.003);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    osc.connect(voiceGain);
    drop.connect(voiceGain);
    osc.start(now);
    drop.start(now + 0.05);
    osc.stop(now + noteDuration + 0.05);
    drop.stop(now + 0.2);

  } else if (instrument === 'solar' || instrument === 'ALLSKY_SFC_SW_DWN') {
    // Solar Radiation: bright radiant brassy FM chime
    const osc = ctx.createOscillator();
    const bell = ctx.createOscillator();
    osc.type = 'sine';
    bell.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);
    bell.frequency.setValueAtTime(frequency * 2.76, now);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.8, now + 0.006);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration * 1.1);

    osc.connect(voiceGain);
    bell.connect(voiceGain);
    osc.start(now);
    bell.start(now);
    osc.stop(now + noteDuration + 0.05);
    bell.stop(now + noteDuration + 0.05);

  } else if (instrument === 'water' || instrument === 'RH2M') {
    // Humidity: deep fluid aquatic bubble
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency * 0.75, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.65, now + noteDuration);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(900, frequency * 2), now);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.8, now + 0.02);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    osc.connect(filter);
    filter.connect(voiceGain);
    osc.start(now);
    osc.stop(now + noteDuration + 0.05);

  } else if (instrument === 'pressure' || instrument === 'PS') {
    // Surface Pressure: deep sub-bass barometer rumble
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(Math.max(45, frequency * 0.4), now);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.9, now + 0.04);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration * 1.2);

    osc.connect(voiceGain);
    osc.start(now);
    osc.stop(now + noteDuration + 0.05);

  } else if (instrument === 'soft_pluck' || instrument === 'temp' || instrument === 'T2M') {
    // Synthesized acoustic pluck: triangle wave with fast lowpass filter sweep
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, now);

    // Filter envelope for pluck dynamics
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(3000, frequency * 4), now);
    filter.frequency.exponentialRampToValueAtTime(Math.max(120, frequency * 0.8), now + noteDuration);

    // Amplitude envelope
    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.8, now + 0.008); // snappy attack
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    osc.connect(filter);
    filter.connect(voiceGain);

    osc.start(now);
    osc.stop(now + noteDuration + 0.05);

  } else if (instrument === 'triangle') {
    // Warm tone: primary triangle + subtle higher octave harmonic
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, now);

    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(frequency * 2, now);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.15, now);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.7, now + 0.03);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    osc.connect(voiceGain);
    subOsc.connect(subGain);
    subGain.connect(voiceGain);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + noteDuration + 0.05);
    subOsc.stop(now + noteDuration + 0.05);

  } else {
    // 'sine' default: smooth, calm, ethereal sine tone
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);

    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.linearRampToValueAtTime(effectiveVolume * 0.75, now + 0.03);
    voiceGain.gain.exponentialRampToValueAtTime(effectiveVolume * 0.35, now + noteDuration * 0.4);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    osc.connect(voiceGain);
    osc.start(now);
    osc.stop(now + noteDuration + 0.05);
  }

  // Record High Sound Cue (Bright ascending celestial sparkle chime)
  if (isRecordHigh) {
    playRecordHighChime(ctx, now + 0.06, effectiveVolume, pan);
  }

  // Record Low Sound Cue (Deep resonant tone)
  if (isRecordLow) {
    playRecordLowGong(ctx, now + 0.06, effectiveVolume, pan);
  }
}

/**
 * Play a celebratory ascending chime cue for a record high
 */
function playRecordHighChime(ctx, startTime, volume, pan) {
  const chimeFreqs = [880, 1174.66, 1760]; // A5, D6, A6
  chimeFreqs.forEach((freq, idx) => {
    const t = startTime + idx * 0.07;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(volume * 0.35, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);

    if (ctx.createStereoPanner) {
      const panner = ctx.createStereoPanner();
      panner.pan.setValueAtTime(pan, t);
      gain.connect(panner);
      panner.connect(ctx.destination);
    } else {
      gain.connect(ctx.destination);
    }

    osc.connect(gain);
    osc.start(t);
    osc.stop(t + 0.3);
  });
}

/**
 * Play a deep resonant cue for a record low
 */
function playRecordLowGong(ctx, startTime, volume, pan) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(98.0, startTime); // G2 deep pitch
  osc.frequency.exponentialRampToValueAtTime(65.41, startTime + 0.4); // C2

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(volume * 0.45, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.5);

  if (ctx.createStereoPanner) {
    const panner = ctx.createStereoPanner();
    panner.pan.setValueAtTime(pan, startTime);
    gain.connect(panner);
    panner.connect(ctx.destination);
  } else {
    gain.connect(ctx.destination);
  }

  osc.connect(gain);
  osc.start(startTime);
  osc.stop(startTime + 0.55);
}
