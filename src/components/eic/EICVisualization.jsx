import React, { useRef, useState, useEffect } from 'react';
import { eicDataService } from '../../services/eic/eicDataService';
import {
  Maximize,
  Minimize,
  RefreshCw,
  ExternalLink,
  Film,
  AlertTriangle,
  Play,
  Pause
} from 'lucide-react';

export const EICVisualization = ({
  resource,
  currentTime,
  isPlaying,
  playbackSpeed,
  onTogglePlay,
  onVideoAttach,
  lang = 'en'
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Attach video element to parent playback controller on mount or source change
  useEffect(() => {
    if (videoRef.current) {
      onVideoAttach(videoRef.current, resource.durationSeconds);
      videoRef.current.playbackRate = playbackSpeed;
    }
    setIsLoading(true);
    setHasError(false);
  }, [resource.id, onVideoAttach]);

  // Sync playback rate when changed from outside
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Fullscreen change handler
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const activeMilestone = eicDataService.getCurrentMilestone(resource, currentTime);
  const formattedCurrentTime = eicDataService.formatTime(currentTime);
  const formattedDuration = eicDataService.formatTime(resource.durationSeconds);

  return (
    <div
      ref={containerRef}
      className={`eic-visual-card ${isFullscreen ? 'fullscreen-mode' : ''}`}
      aria-label="NASA Scientific Visualization Player"
    >
      {/* Header bar of visual container */}
      <div className="eic-visual-header">
        <div className="eic-visual-title-box">
          <div className="eic-badge-row">
            <span className="eic-live-tag">
              <Film className="icon-xs" aria-hidden="true" />
              ORIGINAL NASA SVS
            </span>
            <span className="eic-id-tag">ID #{resource.svsId}</span>
          </div>
          <h3 className="eic-visual-title">
            {lang === 'ar' ? resource.titleAr : resource.titleEn}
          </h3>
        </div>

        <div className="eic-visual-header-actions">
          <a
            href={resource.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eic-icon-link"
            title={lang === 'ar' ? 'عرض على موقع ناسا الرسمي' : 'View on official NASA SVS page'}
          >
            <ExternalLink className="icon-xs" aria-hidden="true" />
            <span className="sr-only">NASA SVS</span>
          </a>
          <button
            type="button"
            className="eic-icon-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? (lang === 'ar' ? 'خروج من وضع ملء الشاشة' : 'Exit Fullscreen') : (lang === 'ar' ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize className="icon-xs" /> : <Maximize className="icon-xs" />}
          </button>
        </div>
      </div>

      {/* Video Container Frame */}
      <div className="eic-video-viewport">
        {isLoading && !hasError && (
          <div className="eic-video-loading-overlay">
            <RefreshCw className="icon spin" aria-hidden="true" />
            <span>
              {lang === 'ar' ? 'جاري تحميل محاكاة ناسا الأصلية...' : 'Streaming official NASA visualization...'}
            </span>
          </div>
        )}

        {hasError && (
          <div className="eic-video-error-overlay">
            <AlertTriangle className="icon error-icon" aria-hidden="true" />
            <p>
              {lang === 'ar'
                ? 'تعذر بث الفيديو مباشرة من خادم ناسا (قد يتطلب اتصالاً مباشراً بدون حظر).'
                : 'Unable to stream direct video from NASA SVS server.'}
            </p>
            <a
              href={resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eic-btn-retry"
            >
              {lang === 'ar' ? 'فتح المحاكاة في صفحة ناسا SVS' : 'Open in NASA SVS Portal'}
            </a>
          </div>
        )}

        <video
          ref={videoRef}
          src={resource.videoUrl}
          poster={resource.previewImage}
          preload="metadata"
          playsInline
          className="eic-native-video"
          onLoadedData={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          onClick={onTogglePlay}
        />

        {/* Milestone Callout Overlay */}
        {activeMilestone && (
          <div className="eic-milestone-overlay animate-fade-in">
            <span className="eic-milestone-dot" />
            <span className="eic-milestone-text">
              {activeMilestone.label || activeMilestone.date}
            </span>
          </div>
        )}

        {/* Big Center Play Button Overlay if paused */}
        {!isPlaying && !isLoading && !hasError && (
          <button
            type="button"
            className="eic-center-play-btn"
            onClick={onTogglePlay}
            aria-label="Play NASA Visualization"
          >
            <Play className="icon-lg" />
          </button>
        )}

        {/* Bottom Time Stamp Pill */}
        <div className="eic-time-pill">
          <span>{formattedCurrentTime}</span>
          <span className="separator">/</span>
          <span>{formattedDuration}</span>
        </div>
      </div>

      {/* Scientific context caption */}
      <div className="eic-visual-caption">
        <p className="eic-caption-text">
          {lang === 'ar' ? resource.shortDescriptionAr : resource.shortDescriptionEn}
        </p>
      </div>
    </div>
  );
};
