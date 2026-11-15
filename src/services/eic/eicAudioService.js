/**
 * NASA Earth Information Center (EIC) - Scientific Sonification Engine
 * 
 * Provides distinct acoustic timbres for each NASA EIC visual phenomenon,
 * mapping scientific intensity/percentage directly to pitch:
 * - Low percentage (0% - 25%) -> Deep low tones (C3 ~ 131 Hz to E3 ~ 165 Hz)
 * - Medium percentage (25% - 75%) -> Rich mid-range tones (G3 ~ 196 Hz to E5 ~ 659 Hz)
 * - High percentage (75% - 100%) -> Bright soaring tones (G5 ~ 784 Hz to C6 ~ 1047 Hz)
 * 
 * Every visual has its own dedicated physical timbre:
 * 1. Night Lights (SVS 5276): Electric Bell Chime (electrification & urban radiance)
 * 2. Aerosols (SVS 30910): Resonant Wind Synth (atmospheric smoke, dust, and wind transport)
 * 3. Ocean / SST (SVS 3912/5425): Deep Aquatic Pluck (marine boundary currents & thermal heat)
 * 4. DYAMOND CO2 (SVS 5196): Synoptic Gas Pulse (ethereal greenhouse gas advection)
 * 5. Atmospheric River (SVS 4960): Rain Marimba (tropical moisture flux & precipitation impact)
 * 6. Antarctic Sea Ice (SVS 5064): Polar Glass Crystal (cryospheric freeze-thaw & albedo)
 */

import {
  getAudioContext,
  getAudioAnalyser,
  ensureAudioContextRunning,
  PENTATONIC_FREQUENCIES
} from '../../utils/audioUtils.js';
import { EIC_RESOURCES } from './eicResources.js';

export const PENTATONIC_NOTE_NAMES = [
  'C3', 'D3', 'E3', 'G3', 'A3',
  'C4', 'D4', 'E4', 'G4', 'A4',
  'C5', 'D5', 'E5', 'G5', 'A5',
  'C6'
];

export const EIC_SOUND_PROFILES = {
  'night-lights-decade': {
    instrument: 'electric_bell',
    nameEn: 'Electric Bell Chime',
    nameAr: 'رنين الجرس الكهربائي',
    conceptEn: 'Urban Electrification & Radiance',
    conceptAr: 'الإشعاع الحضري والكهرباء',
    iconColor: '#38bdf8'
  },
  'geos-aerosols-2017': {
    instrument: 'aerosol_wind',
    nameEn: 'Resonant Wind Synth',
    nameAr: 'رياح رنينية جوية',
    conceptEn: 'Atmospheric Smoke, Dust & Sea Salt Plumes',
    conceptAr: 'سحب الدخان والغبار والرياح الجوية',
    iconColor: '#f97316'
  },
  'perpetual-ocean-2': {
    instrument: 'ocean_flow',
    nameEn: 'Deep Aquatic Pluck',
    nameAr: 'نغمة مائية محيطية',
    conceptEn: 'Ocean Boundary Currents & Heat Advection',
    conceptAr: 'تيارات المحيط العميقة ونقل الحرارة',
    iconColor: '#06b6d4'
  },
  'dyamond-co2-transport': {
    instrument: 'carbon_pulse',
    nameEn: 'Synoptic Gas Pulse',
    nameAr: 'نبض غازات الاحتباس الحراري',
    conceptEn: 'Atmospheric CO₂ Advection & Weather Systems',
    conceptAr: 'حركة ثاني أكسيد الكربون وأنظمة الطقس',
    iconColor: '#a855f7'
  },
  'atmospheric-river-3d': {
    instrument: 'rain_marimba',
    nameEn: 'Precipitation Marimba',
    nameAr: 'ماريمبا الهطول والسيول',
    conceptEn: 'Moisture Vapor Flux & Heavy Rainfall',
    conceptAr: 'تدفق بخار الماء والهطول الغزير',
    iconColor: '#10b981'
  },
  'antarctic-sea-ice': {
    instrument: 'ice_crystal',
    nameEn: 'Polar Glass Crystal',
    nameAr: 'بلورات الجليد القطبية',
    conceptEn: 'Cryospheric Freeze-Melt & Polar Albedo',
    conceptAr: 'تجمد وذوبان الجليد والوضاءة القطبية',
    iconColor: '#93c5fd'
  }
};

// Aliases for quick lookup
EIC_SOUND_PROFILES['aerosols'] = EIC_SOUND_PROFILES['geos-aerosols-2017'];
EIC_SOUND_PROFILES['carbon'] = EIC_SOUND_PROFILES['dyamond-co2-transport'];
EIC_SOUND_PROFILES['ocean'] = EIC_SOUND_PROFILES['perpetual-ocean-2'];
EIC_SOUND_PROFILES['precip'] = EIC_SOUND_PROFILES['atmospheric-river-3d'];
EIC_SOUND_PROFILES['nightlights'] = EIC_SOUND_PROFILES['night-lights-decade'];
EIC_SOUND_PROFILES['ice'] = EIC_SOUND_PROFILES['antarctic-sea-ice'];

/**
 * Robustly resolve resource object from either an object or string ID / alias
 */
export function resolveResource(res) {
  if (!res) return EIC_RESOURCES[0];
  if (typeof res === 'object' && res.graphConfig?.series?.[0]) return res;

  const idStr = typeof res === 'string' ? res : (res?.id || '');
  const aliases = {
    'aerosols': 'geos-aerosols-2017',
    'carbon': 'dyamond-co2-transport',
    'ocean': 'perpetual-ocean-2',
    'precip': 'atmospheric-river-3d',
    'nightlights': 'night-lights-decade',
    'ice': 'antarctic-sea-ice',
  };
  const targetId = aliases[idStr] || idStr;
  return EIC_RESOURCES.find(r => r.id === targetId) || EIC_RESOURCES[0];
}

/**
 * Calculate scientific percentage (0% to 100%) and musical frequency for a resource value
 */
export function getPercentageAndFreq(rawResource, value, seriesKey = null) {
  const resource = resolveResource(rawResource);
  if (!resource || !resource.graphConfig?.series?.[0]) {
    return {
      percentage: 50,
      frequency: 440,
      noteName: 'A4',
      minY: 0,
      maxY: 100
    };
  }

  // Map against the requested series (e.g. 'rainRate') when the value is in that series' units;
  // otherwise fall back to the primary series.
  const series =
    (seriesKey && resource.graphConfig.series.find((s) => s.key === seriesKey)) ||
    resource.graphConfig.series[0];
  const yVals = series.data.map((d) => d.y);
  const minY = Math.min(...yVals);
  const maxY = Math.max(...yVals);
  const span = maxY - minY || 1;

  const rawVal = typeof value === 'number' && !isNaN(value) ? value : minY;
  const percentage = Math.max(
    0,
    Math.min(100, Math.round(((rawVal - minY) / span) * 100))
  );

  // Map percentage onto pentatonic frequency scale
  const noteIdx = Math.round(
    (percentage / 100) * (PENTATONIC_FREQUENCIES.length - 1)
  );
  const frequency = PENTATONIC_FREQUENCIES[noteIdx];
  const noteName = PENTATONIC_NOTE_NAMES[noteIdx];

  return {
    percentage,
    frequency,
    noteName,
    minY,
    maxY,
    currentValue: rawVal
  };
}

/**
 * Shared Noise Buffer Generator for atmospheric aerosol wind
 */
function getOrCreateNoiseBuffer(ctx) {
  if (ctx._aerosolNoiseBuffer) return ctx._aerosolNoiseBuffer;
  const bufferSize = Math.floor(ctx.sampleRate * 1.5);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    channelData[i] = Math.random() * 2 - 1;
  }
  ctx._aerosolNoiseBuffer = buffer;
  return buffer;
}

/**
 * Play a synthesized scientific tone using the resource's distinct instrument.
 * Each of the 6 NASA EIC datasets possesses a completely unique acoustic timbre,
 * register, synthesis technique, and physical sound character.
 */
export async function playEICTone(rawResource, value, volume = 0.7, seriesKey = null) {
  if (volume <= 0) return;

  const running = await ensureAudioContextRunning();
  if (!running) return;

  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  const resource = resolveResource(rawResource);
  const { percentage, frequency } = getPercentageAndFreq(resource, value, seriesKey);
  const profile = EIC_SOUND_PROFILES[resource.id] || EIC_SOUND_PROFILES['night-lights-decade'];
  const now = ctx.currentTime;
  const effectiveVol = Math.max(0.01, Math.min(1, volume));

  switch (profile.instrument) {
    case 'electric_bell':
      // 1. Night Lights: Shimmering FM Electric Bell with high harmonic sparkle
      playElectricBell(ctx, frequency, effectiveVol, now);
      break;

    case 'aerosol_wind':
      // 2. Aerosols: Real atmospheric swept wind & white noise smoke plume
      playAerosolWind(ctx, frequency, effectiveVol, now);
      break;

    case 'ocean_flow':
      // 3. Perpetual Ocean & SST: Cavernous Sub-aquatic bass + liquid bubbling swell
      playOceanFlow(ctx, frequency, effectiveVol, now);
      break;

    case 'carbon_pulse':
      // 4. DYAMOND CO2: Warm analog detuned pad with slow biospheric breathing envelope
      playCarbonPulse(ctx, frequency, effectiveVol, now);
      break;

    case 'rain_marimba':
      // 5. Atmospheric River: Dual-tap raindrop cascade & woody percussive marimba
      playRainMarimba(ctx, frequency, effectiveVol, now);
      break;

    case 'ice_crystal':
      // 6. Antarctic Sea Ice: Brittle crystalline glass bell with high frosty shimmer
      playIceCrystal(ctx, frequency, effectiveVol, now);
      break;

    default:
      playElectricBell(ctx, frequency, effectiveVol, now);
      break;
  }
}

// -----------------------------------------------------------------------------
// 1. Electric Bell (Night Lights - SVS 5276): Shimmering FM Electronic Chime
// -----------------------------------------------------------------------------
function playElectricBell(ctx, freq, vol, now) {
  // Carrier in bright register
  const carrier = ctx.createOscillator();
  const modulator = ctx.createOscillator();
  const modGain = ctx.createGain();
  const masterGain = ctx.createGain();
  const sparkle = ctx.createOscillator();
  const sparkleGain = ctx.createGain();

  carrier.type = 'sine';
  carrier.frequency.setValueAtTime(freq, now);

  // Inharmonic FM bell modulation (2.756x ratio)
  modulator.type = 'sine';
  modulator.frequency.setValueAtTime(freq * 2.756, now);
  modGain.gain.setValueAtTime(freq * 1.5, now);
  modGain.gain.exponentialRampToValueAtTime(1, now + 0.35);

  modulator.connect(carrier.frequency); // Frequency Modulation

  // High sparkle ping (5.4x overtone)
  sparkle.type = 'sine';
  sparkle.frequency.setValueAtTime(freq * 5.4, now);
  sparkleGain.gain.setValueAtTime(0.0001, now);
  sparkleGain.gain.linearRampToValueAtTime(vol * 0.35, now + 0.006);
  sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.linearRampToValueAtTime(vol * 0.75, now + 0.008);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

  carrier.connect(masterGain);
  sparkle.connect(sparkleGain);
  sparkleGain.connect(masterGain);
  masterGain.connect(getAudioAnalyser() || ctx.destination);

  carrier.start(now);
  modulator.start(now);
  sparkle.start(now);

  carrier.stop(now + 0.5);
  modulator.stop(now + 0.5);
  sparkle.stop(now + 0.15);
}

// -----------------------------------------------------------------------------
// 2. Resonant Wind Synth (Aerosols - SVS 30910): Swept Atmospheric Wind & Noise Haze
// -----------------------------------------------------------------------------
function playAerosolWind(ctx, freq, vol, now) {
  // Real White Noise Generator for atmospheric haze
  const noiseBuffer = getOrCreateNoiseBuffer(ctx);
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  // Sweeping resonant bandpass filter (simulates whistling desert dust and smoke gusts)
  const bandpass = ctx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.Q.setValueAtTime(5.5, now);
  const center = Math.min(2800, Math.max(260, freq * 2.2));
  bandpass.frequency.setValueAtTime(center * 0.7, now);
  bandpass.frequency.exponentialRampToValueAtTime(center * 1.3, now + 0.22);
  bandpass.frequency.exponentialRampToValueAtTime(center * 0.6, now + 0.55);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.linearRampToValueAtTime(vol * 0.75, now + 0.08); // wind swell
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);

  noise.connect(bandpass);
  bandpass.connect(noiseGain);

  // Breathy whistling tonal center
  const whistle = ctx.createOscillator();
  whistle.type = 'triangle';
  whistle.frequency.setValueAtTime(freq * 0.9, now);
  whistle.frequency.exponentialRampToValueAtTime(freq * 1.08, now + 0.3);

  const whistleGain = ctx.createGain();
  whistleGain.gain.setValueAtTime(0.0001, now);
  whistleGain.gain.linearRampToValueAtTime(vol * 0.35, now + 0.05);
  whistleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);

  whistle.connect(whistleGain);

  const target = getAudioAnalyser() || ctx.destination;
  noiseGain.connect(target);
  whistleGain.connect(target);

  noise.start(now);
  whistle.start(now);

  noise.stop(now + 0.62);
  whistle.stop(now + 0.55);
}

// -----------------------------------------------------------------------------
// 3. Ocean Flow (Perpetual Ocean & SST - SVS 3912/5425): Sub-Aquatic Liquid Bass & Bubble
// -----------------------------------------------------------------------------
function playOceanFlow(ctx, freq, vol, now) {
  // Deep subterranean ocean bass (60 Hz to 220 Hz)
  const oceanFreq = Math.max(55, freq * 0.55);

  const subOsc = ctx.createOscillator();
  subOsc.type = 'sine';
  subOsc.frequency.setValueAtTime(oceanFreq, now);
  // Pitch drop glide mimicking diving into water
  subOsc.frequency.exponentialRampToValueAtTime(oceanFreq * 0.9, now + 0.55);

  const bodyOsc = ctx.createOscillator();
  bodyOsc.type = 'triangle';
  bodyOsc.frequency.setValueAtTime(oceanFreq * 2, now);

  // Liquid bubbling LFO modulating filter cutoff
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.setValueAtTime(6.0, now); // 6 Hz water ripple
  lfoGain.gain.setValueAtTime(160, now);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(Math.min(700, oceanFreq * 3.5), now);
  filter.Q.setValueAtTime(4.2, now);

  lfo.connect(filter.frequency);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.85, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

  subOsc.connect(filter);
  bodyOsc.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  subOsc.start(now);
  bodyOsc.start(now);
  lfo.start(now);

  subOsc.stop(now + 0.7);
  bodyOsc.stop(now + 0.7);
  lfo.stop(now + 0.7);
}

// -----------------------------------------------------------------------------
// 4. Carbon Pulse (DYAMOND CO2 - SVS 5196): Warm Biospheric Breathing Analog Drone
// -----------------------------------------------------------------------------
function playCarbonPulse(ctx, freq, vol, now) {
  // Detuned dual analog saw/triangle oscillators (+/- 5 cents)
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  osc1.type = 'sawtooth';
  osc2.type = 'triangle';

  osc1.frequency.setValueAtTime(freq, now);
  osc2.frequency.setValueAtTime(freq * 1.006, now); // Analog chorus detune

  const sub5th = ctx.createOscillator();
  sub5th.type = 'sine';
  sub5th.frequency.setValueAtTime(freq * 0.75, now); // 4th/5th below weight

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq * 1.8, now);
  filter.Q.setValueAtTime(1.8, now);

  const masterGain = ctx.createGain();
  // Slow planetary breathing attack (0.09s) and lush sustain (0.75s)
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.linearRampToValueAtTime(vol * 0.7, now + 0.09);
  masterGain.gain.exponentialRampToValueAtTime(vol * 0.45, now + 0.4);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.78);

  osc1.connect(filter);
  osc2.connect(filter);
  sub5th.connect(filter);
  filter.connect(masterGain);
  masterGain.connect(getAudioAnalyser() || ctx.destination);

  osc1.start(now);
  osc2.start(now);
  sub5th.start(now);

  osc1.stop(now + 0.82);
  osc2.stop(now + 0.82);
  sub5th.stop(now + 0.82);
}

// -----------------------------------------------------------------------------
// 5. Rain Marimba (Atmospheric River - SVS 4960): Dual-Tap Raindrop Splash & Wood Marimba
// -----------------------------------------------------------------------------
function playRainMarimba(ctx, freq, vol, now) {
  // Tap 1: Woody marimba mallet strike
  const mallet = ctx.createOscillator();
  mallet.type = 'triangle';
  mallet.frequency.setValueAtTime(freq, now);

  const malletGain = ctx.createGain();
  malletGain.gain.setValueAtTime(0.0001, now);
  malletGain.gain.linearRampToValueAtTime(vol * 0.85, now + 0.003); // Instant acoustic strike
  malletGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

  // Tap 2: Micro-delayed (+65ms) water droplet plink (falling raindrop splash ripple)
  const drop = ctx.createOscillator();
  drop.type = 'sine';
  const dropFreq = freq * 2.85;
  drop.frequency.setValueAtTime(dropFreq, now + 0.065);
  drop.frequency.exponentialRampToValueAtTime(dropFreq * 1.25, now + 0.13); // upward water plink

  const dropGain = ctx.createGain();
  dropGain.gain.setValueAtTime(0.0001, now);
  dropGain.gain.setValueAtTime(0.0001, now + 0.064);
  dropGain.gain.linearRampToValueAtTime(vol * 0.65, now + 0.072);
  dropGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);

  const target = getAudioAnalyser() || ctx.destination;
  mallet.connect(malletGain);
  malletGain.connect(target);

  drop.connect(dropGain);
  dropGain.connect(target);

  mallet.start(now);
  drop.start(now + 0.065);

  mallet.stop(now + 0.32);
  drop.stop(now + 0.28);
}

// -----------------------------------------------------------------------------
// 6. Polar Ice Crystal (Antarctic Sea Ice - SVS 5064): Brittle High Frost Glass Bell
// -----------------------------------------------------------------------------
function playIceCrystal(ctx, freq, vol, now) {
  // High crystalline freeze register (650 Hz to 2400 Hz)
  const iceFreq = Math.max(680, freq * 1.55);

  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const osc3 = ctx.createOscillator();

  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(iceFreq, now);

  // Inharmonic metallic glass ratios
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(iceFreq * 2.76, now);

  osc3.type = 'sine';
  osc3.frequency.setValueAtTime(iceFreq * 5.42, now);

  // Highpass filter removing all warmth/bass (leaving pure cold brittle frost)
  const hpFilter = ctx.createBiquadFilter();
  hpFilter.type = 'highpass';
  hpFilter.frequency.setValueAtTime(1100, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.7, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65); // Shimmering frost ring

  osc1.connect(hpFilter);
  osc2.connect(hpFilter);
  osc3.connect(hpFilter);
  hpFilter.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc1.start(now);
  osc2.start(now);
  osc3.start(now);

  osc1.stop(now + 0.7);
  osc2.stop(now + 0.7);
  osc3.stop(now + 0.7);
}
