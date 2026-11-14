import React from 'react';
import {
  Volume2,
  VolumeX,
  Music,
  Activity,
  Sliders,
  Sparkles,
  Zap,
  Wind,
  Droplets,
  CloudRain,
  Snowflake
} from 'lucide-react';
import {
  EIC_SOUND_PROFILES,
  getPercentageAndFreq
} from '../../services/eic/eicAudioService';

// Environmental icon mapping per sound profile
const PROFILE_ICONS = {
  electric_bell: Zap,
  aerosol_wind: Wind,
  ocean_flow: Droplets,
  carbon_pulse: Sparkles,
  rain_marimba: CloudRain,
  ice_crystal: Snowflake
};

export const EICSonificationBar = ({
  resource,
  currentValue,
  isAudioEnabled = true,
  onToggleAudio,
  audioVolume = 0.7,
  onChangeVolume,
  onPlayTestTone,
  isPlayingTone = false,
  lang = 'en'
}) => {
  const profile = EIC_SOUND_PROFILES[resource.id] || {
    instrument: 'electric_bell',
    nameEn: 'Electric Bell Chime',
    nameAr: 'رنين الجرس الكهربائي',
    conceptEn: 'Scientific Radiance',
    conceptAr: 'الإشعاع العلمي',
    iconColor: '#38bdf8'
  };

  const { percentage, frequency, noteName } = getPercentageAndFreq(
    resource,
    currentValue
  );

  const IconComponent = PROFILE_ICONS[profile.instrument] || Music;

  // Determine register category based on percentage
  const isLow = percentage <= 33;
  const isMid = percentage > 33 && percentage <= 66;
  const isHigh = percentage > 66;

  const registerTextEn = isLow
    ? 'Low Tone (Bass Register)'
    : isMid
    ? 'Medium Tone (Mid Register)'
    : 'High Tone (Treble Register)';

  const registerTextAr = isLow
    ? 'نغمة منخفضة (تردد عميق)'
    : isMid
    ? 'نغمة معتدلة (تردد متوسط)'
    : 'نغمة مرتفعة (تردد حاد)';

  const registerBadgeClass = isLow
    ? 'tone-register-low'
    : isMid
    ? 'tone-register-mid'
    : 'tone-register-high';

  return (
    <div
      className={`eic-sonification-bar ${isPlayingTone ? 'tone-pulse-active' : ''}`}
      aria-label="NASA Scientific Sonification & Tones Bar"
    >
      {/* 1. Left Section: Dedicated Instrument & Phenomenon Profile */}
      <div className="eic-audio-instrument-col">
        <div
          className="eic-instrument-icon-box"
          style={{ borderColor: profile.iconColor, color: profile.iconColor }}
        >
          <IconComponent className="icon-sm" aria-hidden="true" />
        </div>
        <div className="eic-instrument-info">
          <div className="eic-instrument-header">
            <span className="eic-instrument-tag">
              {lang === 'ar' ? 'الآلة الصوتية المخصصة للمحاكاة' : 'Dedicated Visual Timbre'}
            </span>
          </div>
          <h4 className="eic-instrument-name">
            {lang === 'ar' ? profile.nameAr : profile.nameEn}
          </h4>
          <p className="eic-instrument-concept">
            {lang === 'ar' ? profile.conceptAr : profile.conceptEn}
          </p>
        </div>
      </div>

      {/* 2. Center Section: Scientific Percentage to Pitch Mapping Display */}
      <div className="eic-audio-pitch-col">
        <div className="eic-pitch-meta-row">
          <div className="eic-pitch-stat">
            <span className="stat-label">
              {lang === 'ar' ? 'النسبة المئوية للظاهرة' : 'Intensity Percentage'}
            </span>
            <span className="stat-value highlight-num">{percentage}%</span>
          </div>

          <div className={`eic-register-pill ${registerBadgeClass}`}>
            <Activity className="icon-xs" aria-hidden="true" />
            <span>{lang === 'ar' ? registerTextAr : registerTextEn}</span>
          </div>

          <div className="eic-pitch-stat">
            <span className="stat-label">
              {lang === 'ar' ? 'النغمة والتردد' : 'Musical Note & Frequency'}
            </span>
            <span className="stat-value note-badge">
              <strong>{noteName}</strong> • {Math.round(frequency)} Hz
            </span>
          </div>
        </div>

        {/* Visual Percentage Gauge (Low -> High) */}
        <div className="eic-pitch-gauge-wrap">
          <div className="eic-gauge-labels">
            <span className="label-low">{lang === 'ar' ? '0% نغمة منخفضة (C3)' : '0% Low Tone (C3)'}</span>
            <span className="label-mid">{lang === 'ar' ? '50% معتدل (G4)' : '50% Mid (G4)'}</span>
            <span className="label-high">{lang === 'ar' ? '100% نغمة مرتفعة (C6)' : '100% High Tone (C6)'}</span>
          </div>
          <div className="eic-pitch-gauge-track">
            <div
              className={`eic-pitch-gauge-fill ${registerBadgeClass}`}
              style={{ width: `${percentage}%` }}
            />
            <div
              className={`eic-pitch-gauge-thumb ${isPlayingTone ? 'ping' : ''}`}
              style={{ left: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Right Section: Sonification Controls (Test, Mute/Unmute, Volume) */}
      <div className="eic-audio-controls-col">
        {/* Test Tone Audition Button */}
        <button
          type="button"
          className="btn-eic-test-tone"
          onClick={onPlayTestTone}
          title={
            lang === 'ar'
              ? 'استمع للنغمة الحالية عند هذه النسبة المئوية'
              : 'Audition tone for current percentage'
          }
          aria-label={
            lang === 'ar'
              ? 'استمع للنغمة الحالية'
              : 'Audition current tone'
          }
        >
          <Music className="icon-xs" />
          <span>{lang === 'ar' ? 'تجربة النغمة' : 'Test Tone'}</span>
        </button>

        {/* Mute / Unmute Toggle Button */}
        <button
          type="button"
          className={`btn-eic-sound-toggle ${isAudioEnabled ? 'sound-active' : 'sound-muted'}`}
          onClick={onToggleAudio}
          title={
            isAudioEnabled
              ? lang === 'ar'
                ? 'كتم النغمات الصوتية أثناء الفيديو'
                : 'Mute visual sonification tones'
              : lang === 'ar'
                ? 'تفعيل النغمات الصوتية أثناء الفيديو'
                : 'Enable visual sonification tones'
          }
          aria-pressed={isAudioEnabled}
          aria-label={
            isAudioEnabled
              ? lang === 'ar'
                ? 'كتم الصوت'
                : 'Mute sonification'
              : lang === 'ar'
                ? 'تشغيل الصوت'
                : 'Unmute sonification'
          }
        >
          {isAudioEnabled ? (
            <Volume2 className="icon-sm" />
          ) : (
            <VolumeX className="icon-sm" />
          )}
        </button>

        {/* Volume Slider */}
        <div className="eic-volume-slider-group">
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={isAudioEnabled ? audioVolume : 0}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              onChangeVolume(val);
              if (val > 0 && !isAudioEnabled) {
                onToggleAudio();
              }
            }}
            className="eic-volume-slider"
            aria-label={
              lang === 'ar'
                ? 'مستوى صوت النغمات الصوتية'
                : 'Visual sonification volume'
            }
          />
          <span className="eic-volume-text">
            {isAudioEnabled ? `${Math.round(audioVolume * 100)}%` : '0%'}
          </span>
        </div>
      </div>
    </div>
  );
};
