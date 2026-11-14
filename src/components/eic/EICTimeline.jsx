import React, { useId } from 'react';
import { eicDataService } from '../../services/eic/eicDataService';
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Rewind,
  Repeat,
  Gauge,
  Volume2,
  VolumeX
} from 'lucide-react';

export const EICTimeline = ({
  resource,
  currentTime,
  isPlaying,
  playbackSpeed,
  isLooping,
  onTogglePlay,
  onSeek,
  onChangeSpeed,
  onToggleLoop,
  isAudioEnabled = true,
  onToggleAudio,
  audioVolume = 0.7,
  onChangeVolume,
  lang = 'en'
}) => {
  const sliderId = useId();
  const duration = resource.durationSeconds || 1;
  const progressPercent = Math.min(100, Math.max(0, (currentTime / duration) * 100));

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    onSeek(newTime);
  };

  const stepTime = (deltaSeconds) => {
    const nextTime = Math.max(0, Math.min(duration, currentTime + deltaSeconds));
    onSeek(nextTime);
  };

  const speeds = [0.5, 1.0, 1.5, 2.0];

  return (
    <div className="eic-timeline-card" aria-label="Shared EIC Timeline Controls">
      {/* Top row: Interactive Scrubber Bar with Milestones */}
      <div className="eic-scrubber-row">
        <div className="eic-scrubber-track-wrap">
          <input
            id={sliderId}
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={currentTime}
            onChange={handleSliderChange}
            className="eic-timeline-slider"
            aria-label={lang === 'ar' ? 'شريط التمرير الزمني المتزامن' : 'Synchronized Timeline Scrubber'}
          />
          {/* Progress fill behind slider */}
          <div
            className="eic-slider-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />

          {/* Milestone markers on timeline */}
          {resource.timePoints && (
            <div className="eic-timeline-milestones" aria-hidden="true">
              {resource.timePoints.map((pt, i) => {
                const markPct = (pt.timestamp / duration) * 100;
                const isPassed = currentTime >= pt.timestamp;
                return (
                  <button
                    key={i}
                    type="button"
                    className={`eic-milestone-tick ${isPassed ? 'passed' : ''}`}
                    style={{ left: `${markPct}%` }}
                    onClick={() => onSeek(pt.timestamp)}
                    title={pt.label || pt.date}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Bottom row: Play/Pause, Step buttons, Readout, Speed & Loop */}
      <div className="eic-timeline-controls-row">
        {/* Left: Playback controls */}
        <div className="eic-timeline-actions-left">
          <button
            type="button"
            className="eic-control-btn eic-btn-step"
            onClick={() => stepTime(-5)}
            title={lang === 'ar' ? 'تراجع 5 ثوانٍ' : 'Step Back 5s'}
            aria-label="Step Back 5s"
          >
            <Rewind className="icon-sm" />
          </button>

          <button
            type="button"
            className="eic-control-btn eic-btn-play-primary"
            onClick={onTogglePlay}
            title={isPlaying ? (lang === 'ar' ? 'إيقاف مؤقت' : 'Pause') : (lang === 'ar' ? 'تشغيل' : 'Play')}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
          </button>

          <button
            type="button"
            className="eic-control-btn eic-btn-step"
            onClick={() => stepTime(5)}
            title={lang === 'ar' ? 'تقدم 5 ثوانٍ' : 'Step Forward 5s'}
            aria-label="Step Forward 5s"
          >
            <FastForward className="icon-sm" />
          </button>

          <button
            type="button"
            className="eic-control-btn eic-btn-reset"
            onClick={() => onSeek(0)}
            title={lang === 'ar' ? 'إعادة إلى البداية' : 'Restart from beginning'}
            aria-label="Restart"
          >
            <RotateCcw className="icon-xs" />
          </button>

          {/* Time Readout */}
          <div className="eic-timeline-time-display">
            <span className="current">{eicDataService.formatTime(currentTime)}</span>
            <span className="sep">/</span>
            <span className="total">{eicDataService.formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Sonification Sound, Playback Speed & Loop */}
        <div className="eic-timeline-actions-right">
          {/* Quick Sound Toggle Button */}
          {typeof onToggleAudio === 'function' && (
            <button
              type="button"
              className={`eic-control-btn eic-btn-sound ${isAudioEnabled ? 'active' : ''}`}
              onClick={onToggleAudio}
              title={
                isAudioEnabled
                  ? lang === 'ar'
                    ? 'كتم النغمات الصوتية'
                    : 'Mute visual sonification'
                  : lang === 'ar'
                    ? 'تشغيل النغمات الصوتية'
                    : 'Enable visual sonification'
              }
              aria-pressed={isAudioEnabled}
            >
              {isAudioEnabled ? (
                <Volume2 className="icon-xs" />
              ) : (
                <VolumeX className="icon-xs text-rose" />
              )}
              <span className="btn-label">{lang === 'ar' ? 'صوت' : 'Audio'}</span>
            </button>
          )}

          {/* Loop toggle */}
          <button
            type="button"
            className={`eic-control-btn eic-btn-loop ${isLooping ? 'active' : ''}`}
            onClick={onToggleLoop}
            title={lang === 'ar' ? 'تكرار مستمر' : 'Loop Playback'}
            aria-pressed={isLooping}
          >
            <Repeat className="icon-xs" />
            <span className="btn-label">{lang === 'ar' ? 'تكرار' : 'Loop'}</span>
          </button>

          {/* Speed selector */}
          <div className="eic-speed-selector">
            <Gauge className="icon-xs text-muted" aria-hidden="true" />
            <div className="eic-speed-pills">
              {speeds.map((spd) => {
                const isActive = playbackSpeed === spd;
                return (
                  <button
                    key={spd}
                    type="button"
                    className={`eic-speed-pill ${isActive ? 'active' : ''}`}
                    onClick={() => onChangeSpeed(spd)}
                    aria-pressed={isActive}
                  >
                    {spd}x
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
