import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { EIC_RESOURCES, getEicResourceById } from '../services/eic/eicResources';
import { EICPlaybackController } from '../services/eic/eicTimelineService';
import { eicDataService } from '../services/eic/eicDataService';
import { playEICTone, getPercentageAndFreq, EIC_SOUND_PROFILES } from '../services/eic/eicAudioService';
import { ensureAudioContextRunning } from '../utils/audioUtils';
import { EICVisualization } from './eic/EICVisualization';
import { EICScientificGraph } from './eic/EICScientificGraph';
import { EICScientificInformation } from './eic/EICScientificInformation';
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
  Sparkles,
  Info,
  Maximize2
} from 'lucide-react';

/**
 * Unified Sonification Studio:
 * Pairs original NASA/EIC visualizations side-by-side with scientific graphs,
 * real-time Web Audio API sonification, and audio-reactive oscilloscope + spectrum visualizers.
 */
export function SonificationStudio({
  lang = 'en',
  isDark = true,
  selectedDatasetId = 'night-lights-decade',
  onDatasetChange
}) {
  const isArabic = lang === 'ar';

  // 1. Current Active Dataset
  const [activeResourceId, setActiveResourceId] = useState(() => {
    const mapping = {
      'aerosols': 'geos-aerosols-2017',
      'carbon': 'dyamond-co2-transport',
      'ocean': 'perpetual-ocean-2',
      'precip': 'atmospheric-river-3d',
      'nightlights': 'night-lights-decade',
      'ice': 'antarctic-sea-ice',
    };
    return mapping[selectedDatasetId] || selectedDatasetId || EIC_RESOURCES[0].id;
  });

  const resource = getEicResourceById(activeResourceId) || EIC_RESOURCES[0];

  // Sync with prop when changed externally (e.g. from ExploreDataSection)
  useEffect(() => {
    if (selectedDatasetId) {
      const mapping = {
        'aerosols': 'geos-aerosols-2017',
        'carbon': 'dyamond-co2-transport',
        'ocean': 'perpetual-ocean-2',
        'precip': 'atmospheric-river-3d',
        'nightlights': 'night-lights-decade',
        'ice': 'antarctic-sea-ice',
      };
      const targetId = mapping[selectedDatasetId] || selectedDatasetId;
      if (EIC_RESOURCES.some(r => r.id === targetId) && targetId !== activeResourceId) {
        handleSelectDataset(targetId);
      }
    }
  }, [selectedDatasetId]);

  // 2. Synchronized Timeline & Playback Controller
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [showMetadata, setShowMetadata] = useState(false);

  const controllerRef = useRef(null);
  const lastSoundTimeRef = useRef(-1);

  // Current interpolated values at the active timestamp
  const currentValues = useMemo(() => {
    return eicDataService.getInterpolatedValuesAtTime(resource, currentTime);
  }, [resource, currentTime]);

  const primarySeries = resource.graphConfig?.series?.[0];
  const primaryReadingRaw = primarySeries ? currentValues[primarySeries.key] : null;
  const primaryReading = (primaryReadingRaw && typeof primaryReadingRaw === 'object')
    ? (primaryReadingRaw.currentValue !== undefined ? primaryReadingRaw.currentValue : primaryReadingRaw.y)
    : primaryReadingRaw;

  // Live telemetry (percentage, musical frequency, note name)
  const telemetry = useMemo(() => {
    return getPercentageAndFreq(resource, primaryReading);
  }, [resource, primaryReading]);

  // Sound tone trigger
  const triggerToneForTime = useCallback((timeVal) => {
    const effectiveVol = isMuted ? 0 : volume;
    if (effectiveVol <= 0) return;

    const values = eicDataService.getInterpolatedValuesAtTime(resource, timeVal);
    const raw = primarySeries ? values[primarySeries.key] : null;
    const val = (raw && typeof raw === 'object') ? (raw.currentValue ?? raw.y) : raw;
    if (val !== null && !isNaN(val)) {
      playEICTone(resource, val, effectiveVol);
    }
  }, [resource, primarySeries, isMuted, volume]);

  const triggerToneRef = useRef(null);
  triggerToneRef.current = triggerToneForTime;

  // Centralized playback controller instantiation
  if (!controllerRef.current) {
    controllerRef.current = new EICPlaybackController({
      onTimeUpdate: (t) => {
        setCurrentTime(t);
        // Play acoustic pulse at regular intervals (~0.6s step)
        if (Math.abs(t - lastSoundTimeRef.current) >= 0.6) {
          lastSoundTimeRef.current = t;
          triggerToneRef.current?.(t);
        }
      },
      onPlayStateChange: (playing) => setIsPlaying(playing),
      onSpeedChange: (spd) => setPlaybackSpeed(spd),
      onEnded: () => {
        if (isLooping && controllerRef.current) {
          controllerRef.current.seek(0);
          controllerRef.current.play();
        } else {
          setIsPlaying(false);
        }
      }
    });
  }

  // Keep playback controller callbacks strictly synchronized with current active resource
  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.onTimeUpdate = (t) => {
        setCurrentTime(t);
        if (Math.abs(t - lastSoundTimeRef.current) >= 0.6) {
          lastSoundTimeRef.current = t;
          triggerToneForTime(t);
        }
      };
    }
  }, [triggerToneForTime]);

  // Handle switching datasets
  const handleSelectDataset = (newId) => {
    if (newId === activeResourceId) return;
    if (controllerRef.current) {
      controllerRef.current.pause();
      controllerRef.current.seek(0);
    }
    setCurrentTime(0);
    lastSoundTimeRef.current = -1;
    setIsPlaying(false);
    setActiveResourceId(newId);
    onDatasetChange?.(newId);

    // Play signature acoustic tone of newly chosen dataset immediately
    const nextResource = getEicResourceById(newId) || EIC_RESOURCES.find(r => r.id === newId);
    if (nextResource && !isMuted && volume > 0) {
      playEICTone(nextResource, 50, volume);
    }
  };

  // Attach video element when mounted
  const handleVideoAttach = useCallback((videoEl, duration) => {
    if (controllerRef.current) {
      controllerRef.current.attachVideo(videoEl, duration);
    }
  }, []);

  // Play / Pause Master Toggle
  const handleTogglePlay = async () => {
    await ensureAudioContextRunning();
    if (controllerRef.current) {
      controllerRef.current.togglePlay();
      if (!isPlaying) {
        triggerToneForTime(currentTime);
      }
    }
  };

  // Scrub / Seek
  const handleSeek = (targetSeconds) => {
    if (controllerRef.current) {
      controllerRef.current.seek(targetSeconds);
    }
    setCurrentTime(targetSeconds);
    lastSoundTimeRef.current = targetSeconds;
    triggerToneForTime(targetSeconds);
  };

  // Speed
  const handleChangeSpeed = (newSpeed) => {
    if (controllerRef.current) {
      controllerRef.current.setSpeed(newSpeed);
    }
  };

  // Reset
  const handleReset = () => {
    handleSeek(0);
    if (isPlaying && controllerRef.current) {
      controllerRef.current.pause();
    }
  };

  const soundProfile = EIC_SOUND_PROFILES[resource.id] || {
    nameEn: 'Acoustic Synthesizer',
    nameAr: 'سنثسايزر صوتي'
  };

  return (
    <section id="studio" className="studio-section">
      <div className="section-header-block">
        <span className="section-eyebrow">
          {isArabic ? 'المرئيات الأصلية والرسوم البيانية والصوت' : 'NASA VISUALS + GRAPHS + ACOUSTICS'}
        </span>
        <h2 className="section-title">
          {isArabic ? 'استوديو الصوتيات والمرئيات المتزامنة' : 'Sonification Studio'}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? 'مشاهدة محاكاة الحواسيب الفائقة لوكالة ناسا جنباً إلى جنب مع الرسوم البيانية العلمية والصوتيات في الوقت الفعلي'
            : 'Explore original NASA SVS supercomputer animations side-by-side with synchronized scientific graphs and genuine audio sonification.'}
        </p>
      </div>

      <div className="studio-unified-card">
        {/* 1. TOP SELECTOR BAR: 6 NASA SVS DATASETS */}
        <div className="studio-datasets-pill-bar" role="tablist" aria-label="NASA Scientific Datasets">
          {EIC_RESOURCES.map((res) => {
            const isCur = res.id === activeResourceId;
            return (
              <button
                key={res.id}
                role="tab"
                aria-selected={isCur}
                onClick={() => handleSelectDataset(res.id)}
                className={`studio-dataset-pill ${isCur ? 'active' : ''}`}
              >
                <span className="pill-dot" style={{ backgroundColor: res.graphConfig?.series?.[0]?.color || '#38bdf8' }} />
                <span className="pill-name">{isArabic ? res.titleAr : res.titleEn}</span>
                <span className="pill-tag">SVS #{res.svsId}</span>
              </button>
            );
          })}
        </div>

        {/* 2. MAIN STAGE: SIDE-BY-SIDE ORIGINAL NASA VISUAL + SCIENTIFIC GRAPH */}
        <div className="studio-side-by-side-stage">
          {/* LEFT: ORIGINAL NASA SVS VISUAL (VIDEO ANIMATION) */}
          <div className="studio-visual-column">
            <EICVisualization
              resource={resource}
              currentTime={currentTime}
              isPlaying={isPlaying}
              playbackSpeed={playbackSpeed}
              onTogglePlay={handleTogglePlay}
              onVideoAttach={handleVideoAttach}
              lang={lang}
            />
          </div>

          {/* RIGHT: CORRESPONDING SCIENTIFIC TIME-SERIES GRAPH */}
          <div className="studio-graph-column">
            <EICScientificGraph
              resource={resource}
              currentTime={currentTime}
              onSeek={handleSeek}
              lang={lang}
              theme={isDark ? 'dark' : 'light'}
            />
          </div>
        </div>

        {/* 3. SYNCHRONIZED MASTER CONTROLS & TIMELINE BAR */}
        <div className="studio-master-controls-bar">
          <div className="master-transport-group">
            {/* Master Play/Pause */}
            <button
              onClick={handleTogglePlay}
              className={`master-play-btn ${isPlaying ? 'is-playing' : ''}`}
              title={isPlaying ? 'Pause' : 'Play synchronized visual, graph & sound'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              <span>{isPlaying ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل الكل' : 'Play Sync')}</span>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="master-icon-btn"
              title="Reset Timeline to Beginning"
              aria-label="Reset Timeline"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          {/* Center Scrubber Slider */}
          <div className="master-scrubber-group">
            <div className="scrubber-labels-row">
              <span className="scrubber-current-time">
                {eicDataService.formatTime(currentTime)}
              </span>
              <span className="scrubber-milestone-text">
                {eicDataService.getCurrentMilestone(resource, currentTime)?.label || (isArabic ? 'تزامن علمي' : 'Synchronized Timeline')}
              </span>
              <span className="scrubber-duration-time">
                {eicDataService.formatTime(resource.durationSeconds)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={resource.durationSeconds}
              step="0.1"
              value={currentTime}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="studio-scrubber-slider"
              aria-label="Synchronized Timeline Scrubber"
            />
          </div>

          {/* Right Group: Cadence & Volume */}
          <div className="master-aux-group">
            {/* Speed Cadence */}
            <div className="aux-speed-pills">
              {[0.5, 1.0, 1.5, 2.0].map((spd) => (
                <button
                  key={spd}
                  onClick={() => handleChangeSpeed(spd)}
                  className={`aux-speed-btn ${playbackSpeed === spd ? 'active' : ''}`}
                >
                  {spd}x
                </button>
              ))}
            </div>

            {/* Volume */}
            <div className="aux-volume-wrapper">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="aux-vol-btn"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label="Toggle Mute"
              >
                {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
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
                className="aux-volume-slider"
                aria-label="Master Volume"
              />
            </div>
          </div>
        </div>

        {/* 4. REAL-TIME AUDIO-REACTIVE VISUALIZER & TELEMETRY HUD */}
        <div className="studio-bottom-stage-grid">
          {/* Genuine Web Audio API Analyser Visualizer */}
          <div className="studio-visualizer-card">
            <AudioVisualizerCanvas
              isPlaying={isPlaying}
              isDark={isDark}
              accentColor={resource.graphConfig?.series?.[0]?.color || '#38bdf8'}
            />
          </div>

          {/* Live Telemetry & Sound Identity HUD */}
          <div className="studio-telemetry-hud-card">
            <div className="hud-card-header">
              <span className="hud-header-eyebrow">
                {isArabic ? 'المؤشرات الحيوية للصوت' : 'LIVE ACOUSTIC TELEMETRY'}
              </span>
              <span className="hud-live-tag">
                <span className="pulse-dot" />
                <span>{isPlaying ? 'ACTIVE SYNTH' : 'IDLE'}</span>
              </span>
            </div>

            <div className="hud-metrics-row">
              <div className="hud-metric-box">
                <span className="lbl">{isArabic ? 'التردد الصوتي' : 'PITCH FREQUENCY'}</span>
                <span className="val highlight">
                  {telemetry.frequency ? `${Math.round(telemetry.frequency)} Hz` : '---'}
                </span>
                <span className="sub">{telemetry.noteName || 'Pentatonic Note'}</span>
              </div>

              <div className="hud-metric-box">
                <span className="lbl">{isArabic ? 'القيمة المرصودة' : 'CURRENT READING'}</span>
                <span className="val cyan">
                  {primaryReading !== null ? `${primaryReading} ${resource.unitShort || ''}` : '---'}
                </span>
                <span className="sub">{resource.unitEn || resource.primaryVariable}</span>
              </div>
            </div>

            <div className="hud-instrument-pill">
              <span className="inst-lbl">{isArabic ? 'جرس الآلة الفيزيائي:' : 'Acoustic Timbre:'}</span>
              <span className="inst-val">{isArabic ? soundProfile.nameAr : soundProfile.nameEn}</span>
            </div>
          </div>
        </div>

        {/* 5. COLLAPSIBLE SCIENTIFIC INFORMATION & NASA ATTRIBUTION */}
        <div className="studio-metadata-accordion">
          <button
            onClick={() => setShowMetadata(!showMetadata)}
            className="metadata-toggle-btn"
          >
            <div className="toggle-left">
              <Info size={16} />
              <span>{isArabic ? 'عرض التوثيق العلمي وبيانات ناسا المعتمدة' : 'View Authoritative Scientific Metadata & NASA Sources'}</span>
              <span className="svs-tag">SVS #{resource.svsId}</span>
            </div>
            {showMetadata ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showMetadata && (
            <div className="metadata-expanded-content">
              <EICScientificInformation resource={resource} lang={lang} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
