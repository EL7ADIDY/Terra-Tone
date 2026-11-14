import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EIC_RESOURCES } from '../services/eic/eicResources';
import { playEICTone, getPercentageAndFreq, EIC_SOUND_PROFILES } from '../services/eic/eicAudioService';
import { ensureAudioContextRunning } from '../utils/audioUtils';
import { AudioVisualizerCanvas } from './AudioVisualizerCanvas';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Gauge,
  Sliders,
  ChevronDown,
  ChevronUp,
  Activity,
  Zap,
  Info,
  Sparkles
} from 'lucide-react';

export function SonificationStudio({
  lang = 'en',
  isDark = true,
  selectedDatasetId = 'night-lights-decade',
  onDatasetChange
}) {
  const isArabic = lang === 'ar';

  // 1. Current Resource Selection
  const [activeResourceId, setActiveResourceId] = useState(selectedDatasetId);
  const resource = EIC_RESOURCES.find(r => r.id === activeResourceId) || EIC_RESOURCES[0];

  // Sync with prop when changed externally (e.g. from ExploreDataSection)
  useEffect(() => {
    if (selectedDatasetId) {
      // Map aliases if needed
      const mapping = {
        'aerosols': 'geos-aerosols-2017',
        'carbon': 'dyamond-co2-transport',
        'ocean': 'perpetual-ocean-2',
        'precip': 'atmospheric-river-3d',
        'nightlights': 'night-lights-decade',
        'ice': 'antarctic-sea-ice',
      };
      const targetId = mapping[selectedDatasetId] || selectedDatasetId;
      if (EIC_RESOURCES.some(r => r.id === targetId)) {
        setActiveResourceId(targetId);
      }
    }
  }, [selectedDatasetId]);

  // 2. Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 0.5, 1, 1.5, 2
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [timbreOverride, setTimbreOverride] = useState('auto'); // 'auto' | specific instrument
  const [octaveShift, setOctaveShift] = useState(0); // -1, 0, 1

  // Data Points from Resource
  const seriesData = resource.graphConfig?.series?.[0]?.data || [];
  const totalPoints = seriesData.length || 1;
  const currentDataPoint = seriesData[currentIndex] || seriesData[0] || { x: 'N/A', y: 0 };

  // Calculate live frequency and percentage
  const telemetry = getPercentageAndFreq(resource, currentDataPoint?.y);

  // Playback timer ref
  const timerRef = useRef(null);
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  // Trigger single tone for a specific data index
  const playIndexTone = useCallback(async (idx) => {
    const pt = seriesData[idx];
    if (!pt) return;
    const effectiveVol = isMuted ? 0 : volume;
    if (effectiveVol <= 0) return;

    await ensureAudioContextRunning();

    // Custom frequency adjustment for octave shift
    let freqMultiplier = 1;
    if (octaveShift === 1) freqMultiplier = 2;
    if (octaveShift === -1) freqMultiplier = 0.5;

    playEICTone(resource, pt.y, effectiveVol);
  }, [seriesData, isMuted, volume, resource, octaveShift]);

  // Handle Play/Pause
  const togglePlay = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      await ensureAudioContextRunning();
      setIsPlaying(true);
      // Play immediately at current index
      playIndexTone(currentIndexRef.current);
    }
  };

  // Playback Step Loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    // Interval duration in ms based on playback speed (base ~750ms per step)
    const intervalMs = Math.round(750 / playbackSpeed);

    timerRef.current = setInterval(() => {
      const nextIdx = (currentIndexRef.current + 1) % totalPoints;
      setCurrentIndex(nextIdx);
      playIndexTone(nextIdx);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, totalPoints, playIndexTone]);

  // Handle Reset
  const handleReset = () => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIndex(0);
    playIndexTone(0);
  };

  // Scrubber Change
  const handleScrub = (e) => {
    const val = parseInt(e.target.value, 10);
    setCurrentIndex(val);
    playIndexTone(val);
  };

  // Change Dataset
  const handleSelectDataset = (id) => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveResourceId(id);
    setCurrentIndex(0);
    onDatasetChange?.(id);
  };

  const soundProfile = EIC_SOUND_PROFILES[resource.id] || {
    nameEn: 'Acoustic Synthesizer',
    nameAr: 'سنثسايزر صوتي',
    conceptEn: 'Scientific Data Sonification'
  };

  return (
    <section id="studio" className="studio-section">
      <div className="section-header-block">
        <span className="section-eyebrow">
          {isArabic ? 'المركز الصوتي التفاعلي' : 'INTERACTIVE SOUND ENGINE'}
        </span>
        <h2 className="section-title">
          {isArabic ? 'استوديو الصوتيات البيئية' : 'Sonification Studio'}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? 'حوّل سلاسل بيانات ناسا الزمنية إلى ترددات ونغمات في الوقت الفعلي مع محاكاة بصرية فورية'
            : 'Audition real NASA Earth observation time-series with authentic Web Audio oscillators and live reactive visualizers.'}
        </p>
      </div>

      <div className="studio-workbench-card">
        {/* Left Side: Controls */}
        <div className="studio-controls-pane">
          <div className="pane-header">
            <div className="pane-title-wrap">
              <Sliders size={18} className="pane-icon" />
              <h3 className="pane-title">{isArabic ? 'لوحة التحكم والتشغيل' : 'Playback & Synthesis'}</h3>
            </div>
            <span className="badge-live-ready">WEB AUDIO READY</span>
          </div>

          {/* Dataset Selector Dropdown */}
          <div className="control-field">
            <label className="field-label">
              {isArabic ? 'مجموعة بيانات ناسا:' : 'Active NASA Dataset:'}
            </label>
            <div className="custom-select-wrapper">
              <select
                value={activeResourceId}
                onChange={(e) => handleSelectDataset(e.target.value)}
                className="studio-select"
              >
                {EIC_RESOURCES.map((res) => (
                  <option key={res.id} value={res.id}>
                    {isArabic ? res.titleAr : res.titleEn} ({res.unitShort || res.primaryVariable})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Transport Bar (Play, Pause, Reset) */}
          <div className="studio-transport-row">
            <button
              onClick={togglePlay}
              className={`transport-btn-play ${isPlaying ? 'is-playing' : ''}`}
              title={isPlaying ? 'Pause Sonification' : 'Play Sonification'}
            >
              {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
              <span>{isPlaying ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل الصوت' : 'Play Sound')}</span>
            </button>

            <button
              onClick={handleReset}
              className="transport-btn-secondary"
              title="Reset Timeline to Beginning"
            >
              <RotateCcw size={18} />
              <span>{isArabic ? 'إعادة' : 'Reset'}</span>
            </button>
          </div>

          {/* Timeline Scrubber */}
          <div className="control-field timeline-scrub-field">
            <div className="scrub-meta-row">
              <span className="scrub-label">{isArabic ? 'مسار النقاط الزمنية:' : 'Observation Timeline:'}</span>
              <span className="scrub-time-indicator">
                {currentDataPoint?.x} ({currentIndex + 1} / {totalPoints})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={totalPoints - 1}
              value={currentIndex}
              onChange={handleScrub}
              className="studio-scrubber-slider"
              aria-label="Timeline Scrubber"
            />
            <div className="scrub-ticks">
              <span>{seriesData[0]?.x}</span>
              <span>{seriesData[Math.floor(totalPoints / 2)]?.x}</span>
              <span>{seriesData[totalPoints - 1]?.x}</span>
            </div>
          </div>

          {/* Volume & Speed Controls */}
          <div className="studio-dual-controls">
            {/* Volume */}
            <div className="control-subgroup">
              <div className="subgroup-label-row">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="subgroup-icon-btn"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <span className="subgroup-label">{isArabic ? 'مستوى الصوت' : 'Volume'}</span>
                <span className="subgroup-val">{isMuted ? '0%' : `${Math.round(volume * 100)}%`}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="studio-slider"
                aria-label="Volume Slider"
              />
            </div>

            {/* Speed */}
            <div className="control-subgroup">
              <div className="subgroup-label-row">
                <Gauge size={16} className="subgroup-icon" />
                <span className="subgroup-label">{isArabic ? 'سرعة التتابع' : 'Cadence'}</span>
                <span className="subgroup-val">{playbackSpeed}x</span>
              </div>
              <div className="speed-pills-row">
                {[0.5, 1, 1.5, 2].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`speed-pill ${playbackSpeed === spd ? 'active' : ''}`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Expandable Advanced Settings Accordion */}
          <div className="studio-accordion-box">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="accordion-header-btn"
            >
              <span>{isArabic ? 'إعدادات متقدمة للترددات والجرس' : 'Advanced Acoustic Controls'}</span>
              {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showAdvanced && (
              <div className="accordion-content">
                <div className="adv-field">
                  <span className="adv-lbl">{isArabic ? 'إزاحة الأوكتاف:' : 'Octave Pitch Shift:'}</span>
                  <div className="octave-pills">
                    {[-1, 0, 1].map((oct) => (
                      <button
                        key={oct}
                        onClick={() => setOctaveShift(oct)}
                        className={`oct-pill ${octaveShift === oct ? 'active' : ''}`}
                      >
                        {oct > 0 ? `+${oct}` : oct} Oct
                      </button>
                    ))}
                  </div>
                </div>

                <div className="adv-field">
                  <span className="adv-lbl">{isArabic ? 'جرس الآلة المخصص:' : 'Instrument Timbre:'}</span>
                  <span className="adv-val-tag">
                    {isArabic ? soundProfile.nameAr : soundProfile.nameEn}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Real-Time Audio-Reactive Visualizations */}
        <div className="studio-visualization-pane">
          {/* Telemetry HUD Strip */}
          <div className="studio-hud-banner">
            <div className="hud-metric-tile">
              <span className="hud-label">{isArabic ? 'القيمة المرصودة' : 'CURRENT VALUE'}</span>
              <span className="hud-val highlight">
                {currentDataPoint?.y !== undefined ? `${currentDataPoint.y} ${resource.unitShort || ''}` : '---'}
              </span>
              <span className="hud-sub">{isArabic ? resource.titleAr : resource.titleEn}</span>
            </div>

            <div className="hud-metric-tile">
              <span className="hud-label">{isArabic ? 'التردد الصوتي' : 'PITCH FREQUENCY'}</span>
              <span className="hud-val cyan">
                {telemetry.frequency ? `${Math.round(telemetry.frequency)} Hz` : '---'}
              </span>
              <span className="hud-sub">{telemetry.noteName || 'Pentatonic Note'}</span>
            </div>

            <div className="hud-metric-tile">
              <span className="hud-label">{isArabic ? 'موقع المؤشر' : 'TIMELINE STEP'}</span>
              <span className="hud-val purple">{currentDataPoint?.x || 'Baseline'}</span>
              <span className="hud-sub">
                {isPlaying ? (isArabic ? 'يعمل الآن' : 'Live Audition') : (isArabic ? 'متوقف' : 'Paused')}
              </span>
            </div>
          </div>

          {/* Genuine Web Audio API Analyser Visualizer */}
          <div className="studio-visualizer-canvas-frame">
            <AudioVisualizerCanvas
              isPlaying={isPlaying}
              isDark={isDark}
              accentColor={isDark ? '#38bdf8' : '#0284c7'}
            />
          </div>

          {/* Mini Interactive Time-Series Wave Map */}
          <div className="studio-series-tracker">
            <div className="tracker-header">
              <span className="tracker-title">
                {isArabic ? 'سلسلة البيانات الزمنية التزامنية' : 'SYNCHRONIZED DATA SEQUENCE'}
              </span>
              <span className="tracker-progress">
                {Math.round(((currentIndex + 1) / totalPoints) * 100)}% COMPLETE
              </span>
            </div>

            {/* Sparkline Points Bar */}
            <div className="tracker-bars-track">
              {seriesData.map((pt, i) => {
                const isCur = i === currentIndex;
                const isPassed = i < currentIndex;
                const pct = telemetry.minY !== undefined && telemetry.maxY !== undefined
                  ? Math.max(10, Math.min(100, ((pt.y - telemetry.minY) / (telemetry.maxY - telemetry.minY || 1)) * 100))
                  : 50;

                return (
                  <div
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      playIndexTone(i);
                    }}
                    className={`tracker-bar-step ${isCur ? 'current' : ''} ${isPassed ? 'passed' : ''}`}
                    style={{ height: `${pct}%` }}
                    title={`${pt.x}: ${pt.y} ${resource.unitShort || ''}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
