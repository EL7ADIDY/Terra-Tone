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

/**
 * Calculate scientific percentage (0% to 100%) and musical frequency for a resource value
 */
export function getPercentageAndFreq(resource, value) {
  if (!resource || !resource.graphConfig?.series?.[0]) {
    return {
      percentage: 50,
      frequency: 440,
      noteName: 'A4',
      minY: 0,
      maxY: 100
    };
  }

  const series = resource.graphConfig.series[0];
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
 * Play a synthesized scientific tone using the resource's distinct instrument
 */
export async function playEICTone(resource, value, volume = 0.7) {
  if (volume <= 0) return;

  const running = await ensureAudioContextRunning();
  if (!running) return;

  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  const { percentage, frequency } = getPercentageAndFreq(resource, value);
  const profile = EIC_SOUND_PROFILES[resource.id] || { instrument: 'electric_bell' };
  const now = ctx.currentTime;
  const effectiveVol = Math.max(0.01, Math.min(1, volume));

  switch (profile.instrument) {
    case 'electric_bell':
      // Night Lights: Dual-frequency harmonic bell with FM sparkle
      playElectricBell(ctx, frequency, effectiveVol, now);
      break;

    case 'aerosol_wind':
      // Aerosols: Warm resonant filtered tone with wind-like envelope
      playAerosolWind(ctx, frequency, effectiveVol, now);
      break;

    case 'ocean_flow':
      // Ocean / SST: Deep aquatic pluck with resonant lowpass filter
      playOceanFlow(ctx, frequency, effectiveVol, now);
      break;

    case 'carbon_pulse':
      // DYAMOND CO2: Ethereal ambient sine with 5th harmonic overtone
      playCarbonPulse(ctx, frequency, effectiveVol, now);
      break;

    case 'rain_marimba':
      // Atmospheric River: Percussive wooden mallet marimba drop tone
      playRainMarimba(ctx, frequency, effectiveVol, now);
      break;

    case 'ice_crystal':
      // Antarctic Sea Ice: High crystalline glass bell with shimmering octave
      playIceCrystal(ctx, frequency, effectiveVol, now);
      break;

    default:
      playElectricBell(ctx, frequency, effectiveVol, now);
      break;
  }
}

// -----------------------------------------------------------------------------
// 1. Electric Bell (Night Lights - SVS 5276)
// -----------------------------------------------------------------------------
function playElectricBell(ctx, freq, vol, now) {
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, now);

  // 2.76x overtone creates metallic bell resonance
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq * 2.76, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.7, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 0.5);
  osc2.stop(now + 0.5);
}

// -----------------------------------------------------------------------------
// 2. Resonant Wind (Aerosols - SVS 30910)
// -----------------------------------------------------------------------------
function playAerosolWind(ctx, freq, vol, now) {
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(freq, now);

  // Warm sweeping lowpass filter
  filter.type = 'lowpass';
  filter.Q.setValueAtTime(3.5, now);
  filter.frequency.setValueAtTime(Math.min(2500, freq * 3), now);
  filter.frequency.exponentialRampToValueAtTime(Math.max(100, freq * 0.8), now + 0.45);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.55, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc.start(now);
  osc.stop(now + 0.5);
}

// -----------------------------------------------------------------------------
// 3. Ocean Flow (Perpetual Ocean & SST - SVS 3912/5425)
// -----------------------------------------------------------------------------
function playOceanFlow(ctx, freq, vol, now) {
  const osc = ctx.createOscillator();
  const subOsc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  // Sub-bass undertone for aquatic depth
  subOsc.type = 'sine';
  subOsc.frequency.setValueAtTime(freq * 0.5, now);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq * 2.2, now);
  filter.Q.setValueAtTime(2.0, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.75, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

  osc.connect(filter);
  subOsc.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc.start(now);
  subOsc.start(now);
  osc.stop(now + 0.6);
  subOsc.stop(now + 0.6);
}

// -----------------------------------------------------------------------------
// 4. Carbon Pulse (DYAMOND CO2 - SVS 5196)
// -----------------------------------------------------------------------------
function playCarbonPulse(ctx, freq, vol, now) {
  const osc = ctx.createOscillator();
  const harmonic = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  // Perfect 5th overtone (1.5x) for atmospheric shimmer
  harmonic.type = 'sine';
  harmonic.frequency.setValueAtTime(freq * 1.5, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.65, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);

  osc.connect(gain);
  harmonic.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc.start(now);
  harmonic.start(now);
  osc.stop(now + 0.48);
  harmonic.stop(now + 0.48);
}

// -----------------------------------------------------------------------------
// 5. Rain Marimba (Atmospheric River - SVS 4960)
// -----------------------------------------------------------------------------
function playRainMarimba(ctx, freq, vol, now) {
  const osc = ctx.createOscillator();
  const strike = ctx.createOscillator();
  const gain = ctx.createGain();

  // Wood mallet body
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  // Fast transient strike
  strike.type = 'sine';
  strike.frequency.setValueAtTime(freq * 3.8, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.85, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

  osc.connect(gain);
  strike.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc.start(now);
  strike.start(now);
  osc.stop(now + 0.35);
  strike.stop(now + 0.1);
}

// -----------------------------------------------------------------------------
// 6. Polar Ice Crystal (Antarctic Sea Ice - SVS 5064)
// -----------------------------------------------------------------------------
function playIceCrystal(ctx, freq, vol, now) {
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, now);

  // Crystalline octave + fifth (3.0x harmonic)
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq * 2.0, now);

  filter.type = 'highpass';
  filter.frequency.setValueAtTime(Math.min(800, freq * 0.8), now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(vol * 0.6, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioAnalyser() || ctx.destination);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 0.55);
  osc2.stop(now + 0.55);
}
