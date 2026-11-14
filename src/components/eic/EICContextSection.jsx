import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  EIC_RESOURCES,
  STAGE_EIC_CONNECTIONS,
  getEICResourceForStage,
  getAvailableEICResourcesForStage
} from '../../services/eic/eicResources';
import { eicDataService } from '../../services/eic/eicDataService';
import {
  playEICTone,
  getPercentageAndFreq
} from '../../services/eic/eicAudioService';
import { EICVisualization } from './EICVisualization';
import { EICScientificGraph } from './EICScientificGraph';
import { EICTimeline } from './EICTimeline';
import { EICScientificInformation } from './EICScientificInformation';
import { EICSonificationBar } from './EICSonificationBar';
import {
  Globe,
  Compass,
  FileText,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Link2
} from 'lucide-react';
import '../../styles/eic.css';

export function EICContextSection({
  stageId = 'air',
  selectedAnimation = null,
  lang = 'en',
  theme = 'dark'
}) {
  const animationId = selectedAnimation?.id || stageId;
  const availableResources = getAvailableEICResourcesForStage(stageId);
  const defaultResource = getEICResourceForStage(stageId, animationId);

  const [activeResourceId, setActiveResourceId] = useState(defaultResource.id);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isLooping, setIsLooping] = useState(true);
  const [showMetadata, setShowMetadata] = useState(false);

  // Sonification Tones State
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [audioVolume, setAudioVolume] = useState(0.7);
  const [isPlayingTone, setIsPlayingTone] = useState(false);

  const videoElementRef = useRef(null);
  const isAudioEnabledRef = useRef(isAudioEnabled);
  const audioVolumeRef = useRef(audioVolume);
  const lastToneTimeRef = useRef(0);
  const activeToneTimeoutRef = useRef(null);

  useEffect(() => {
    isAudioEnabledRef.current = isAudioEnabled;
  }, [isAudioEnabled]);

  useEffect(() => {
    audioVolumeRef.current = audioVolume;
  }, [audioVolume]);

  // When stage or animation changes, update to the most relevant EIC resource
  useEffect(() => {
    const matching = getEICResourceForStage(stageId, animationId);
    if (matching && matching.id !== activeResourceId) {
      setActiveResourceId(matching.id);
      setCurrentTime(0);
      setIsPlaying(false);
      lastToneTimeRef.current = 0;
    }
  }, [stageId, animationId]);

  const activeResource =
    EIC_RESOURCES.find((r) => r.id === activeResourceId) || defaultResource;

  const connectionInfo =
    STAGE_EIC_CONNECTIONS[animationId] || STAGE_EIC_CONNECTIONS[stageId] || null;

  // Real-time interpolated values and primary measurement
  const currentInterpolatedValues = useMemo(() => {
    return eicDataService.getInterpolatedValuesAtTime(activeResource, currentTime);
  }, [activeResource, currentTime]);

  const primarySeries = activeResource.graphConfig?.series?.[0];
  const primaryValue = primarySeries
    ? currentInterpolatedValues[primarySeries.key]?.currentValue
    : null;

  const currentToneInfo = useMemo(() => {
    if (typeof primaryValue !== 'number') return null;
    return getPercentageAndFreq(activeResource, primaryValue);
  }, [activeResource, primaryValue]);

  // Trigger musical tone corresponding to current percentage
  const triggerTone = useCallback(
    (timeToUse, force = false) => {
      if (!isAudioEnabledRef.current && !force) return;
      const vals = eicDataService.getInterpolatedValuesAtTime(
        activeResource,
        timeToUse
      );
      const pKey = activeResource.graphConfig?.series?.[0]?.key;
      const numVal = pKey ? vals[pKey]?.currentValue : null;
      if (typeof numVal === 'number') {
        playEICTone(activeResource, numVal, audioVolumeRef.current);
        setIsPlayingTone(true);
        if (activeToneTimeoutRef.current) {
          clearTimeout(activeToneTimeoutRef.current);
        }
        activeToneTimeoutRef.current = setTimeout(() => {
          setIsPlayingTone(false);
        }, 280);
      }
    },
    [activeResource]
  );

  // Video attach callback
  const handleVideoAttach = useCallback(
    (videoEl) => {
      videoElementRef.current = videoEl;
      if (!videoEl) return;

      const onTimeUpdate = () => {
        const t = videoEl.currentTime || 0;
        setCurrentTime(t);
        if (!videoEl.paused && isAudioEnabledRef.current) {
          const dt = Math.abs(t - lastToneTimeRef.current);
          if (dt >= 0.4 || t < lastToneTimeRef.current) {
            lastToneTimeRef.current = t;
            triggerTone(t);
          }
        }
      };

      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);
      const onEnded = () => {
        if (isLooping) {
          videoEl.currentTime = 0;
          lastToneTimeRef.current = 0;
          videoEl.play().catch(() => {});
        } else {
          setIsPlaying(false);
        }
      };

      videoEl.addEventListener('timeupdate', onTimeUpdate);
      videoEl.addEventListener('play', onPlay);
      videoEl.addEventListener('pause', onPause);
      videoEl.addEventListener('ended', onEnded);

      videoEl.playbackRate = playbackSpeed;

      return () => {
        videoEl.removeEventListener('timeupdate', onTimeUpdate);
        videoEl.removeEventListener('play', onPlay);
        videoEl.removeEventListener('pause', onPause);
        videoEl.removeEventListener('ended', onEnded);
      };
    },
    [isLooping, playbackSpeed, triggerTone]
  );

  // Play / Pause toggle
  const handleTogglePlay = useCallback(() => {
    const v = videoElementRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, []);

  // Seek handler (bidirectional synchronized scrubbing)
  const handleSeek = useCallback(
    (newTime) => {
      setCurrentTime(newTime);
      if (videoElementRef.current) {
        videoElementRef.current.currentTime = newTime;
      }
      lastToneTimeRef.current = newTime;
      triggerTone(newTime, true);
    },
    [triggerTone]
  );

  // Speed change handler
  const handleChangeSpeed = useCallback((speed) => {
    setPlaybackSpeed(speed);
    if (videoElementRef.current) {
      videoElementRef.current.playbackRate = speed;
    }
  }, []);

  return (
    <section
      className="card eic-integrated-card"
      aria-labelledby="eic-section-heading"
    >
      {/* Header with NASA EIC Branding and Connection Callout */}
      <div className="card-header eic-card-header">
        <div className="card-title-group">
          <Globe className="section-icon text-cyan" aria-hidden="true" />
          <div>
            <div className="eic-badge-row">
              <span className="eic-live-tag">
                <Sparkles className="icon-xs" aria-hidden="true" />
                NASA EARTH INFORMATION CENTER
              </span>
              {connectionInfo && (
                <span className="eic-connection-pill">
                  <Link2 className="icon-xs" aria-hidden="true" />
                  {lang === 'ar' ? connectionInfo.tagAr : connectionInfo.tagEn}
                </span>
              )}
            </div>
            <h2 id="eic-section-heading" className="card-title">
              {lang === 'ar' ? activeResource.titleAr : activeResource.titleEn}
            </h2>
            <p className="card-sub">
              {activeResource.dataProvider} â€¢ SVS #{activeResource.svsId}
            </p>
          </div>
        </div>

        {/* Resource Switcher (if stage has multiple relevant showcases) */}
        {availableResources.length > 1 && (
          <div
            className="eic-switcher-group"
            role="tablist"
            aria-label="Available EIC Showcases"
          >
            {availableResources.map((res) => {
              const isSelected = res.id === activeResource.id;
              return (
                <button
                  key={res.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`eic-switcher-tab ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    setActiveResourceId(res.id);
                    setCurrentTime(0);
                    setIsPlaying(false);
                    lastToneTimeRef.current = 0;
                    if (videoElementRef.current) {
                      videoElementRef.current.currentTime = 0;
                    }
                    triggerTone(0, true);
                  }}
                >
                  <span>{lang === 'ar' ? res.titleAr : res.titleEn}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Scientific Connection Banner */}
      {connectionInfo && (
        <div className="eic-connection-banner" role="note">
          <p className="eic-connection-text">
            <strong>
              {lang === 'ar' ? 'الصلة بالبيانات المعروضة: ' : 'Scientific Corroboration: '}
            </strong>
            {lang === 'ar' ? connectionInfo.noteAr : connectionInfo.noteEn}
          </p>
        </div>
      )}

      {/* SCIENTIFIC SONIFICATION ENGINE BAR */}
      <EICSonificationBar
        resource={activeResource}
        currentValue={primaryValue}
        isAudioEnabled={isAudioEnabled}
        onToggleAudio={() => setIsAudioEnabled((prev) => !prev)}
        audioVolume={audioVolume}
        onChangeVolume={setAudioVolume}
        onPlayTestTone={() => triggerTone(currentTime, true)}
        isPlayingTone={isPlayingTone}
        lang={lang}
      />

      {/* THE PRIMARY REQUIREMENT: VISUAL BESIDE SCIENTIFIC GRAPH */}
      <div className="eic-main-experience-grid">
        {/* LEFT: ORIGINAL NASA EIC VISUAL */}
        <div className="eic-column-left">
          <EICVisualization
            resource={activeResource}
            currentTime={currentTime}
            isPlaying={isPlaying}
            playbackSpeed={playbackSpeed}
            onTogglePlay={handleTogglePlay}
            onVideoAttach={handleVideoAttach}
            isAudioEnabled={isAudioEnabled}
            onToggleAudio={() => setIsAudioEnabled((prev) => !prev)}
            currentToneInfo={currentToneInfo}
            isPlayingTone={isPlayingTone}
            lang={lang}
          />
        </div>

        {/* RIGHT: SCIENTIFIC GRAPH */}
        <div className="eic-column-right">
          <EICScientificGraph
            resource={activeResource}
            currentTime={currentTime}
            onSeek={handleSeek}
            lang={lang}
            theme={theme}
          />
        </div>
      </div>

      {/* Synchronized Timeline Controller Bar */}
      <div className="eic-integrated-timeline-wrap">
        <EICTimeline
          resource={activeResource}
          currentTime={currentTime}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          isLooping={isLooping}
          onTogglePlay={handleTogglePlay}
          onSeek={handleSeek}
          onChangeSpeed={handleChangeSpeed}
          onToggleLoop={() => setIsLooping((prev) => !prev)}
          isAudioEnabled={isAudioEnabled}
          onToggleAudio={() => setIsAudioEnabled((prev) => !prev)}
          audioVolume={audioVolume}
          onChangeVolume={setAudioVolume}
          lang={lang}
        />
      </div>

      {/* Expandable Scientific Metadata & Documentation Drawer */}
      <div className="eic-meta-toggle-row">
        <button
          type="button"
          className="btn-eic-meta-toggle"
          onClick={() => setShowMetadata((prev) => !prev)}
          aria-expanded={showMetadata}
        >
          <FileText className="icon-xs" aria-hidden="true" />
          <span>
            {showMetadata
              ? lang === 'ar'
                ? 'Ø¥Ø®Ù Ø§Ø¡ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø©'
                : 'Hide Scientific Documentation & Instrument Details'
              : lang === 'ar'
                ? 'Ø¹Ø±Ø¶ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© (NASA Attribution)'
                : 'View Scientific Documentation & Instrument Details (NASA Attribution)'}
          </span>
          {showMetadata ? (
            <ChevronUp className="icon-xs" />
          ) : (
            <ChevronDown className="icon-xs" />
          )}
        </button>
      </div>

      {showMetadata && (
        <div className="eic-metadata-drawer animate-fade-in">
          <EICScientificInformation resource={activeResource} lang={lang} />
        </div>
      )}
    </section>
  );
}
