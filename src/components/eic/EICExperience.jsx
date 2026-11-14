import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EIC_RESOURCES, getEicResourceById } from '../../services/eic/eicResources';
import { EICPlaybackController } from '../../services/eic/eicTimelineService';
import { EICResourceSelector } from './EICResourceSelector';
import { EICVisualization } from './EICVisualization';
import { EICScientificGraph } from './EICScientificGraph';
import { EICTimeline } from './EICTimeline';
import { EICScientificInformation } from './EICScientificInformation';
import '../../styles/eic.css';

export const EICExperience = ({ lang = 'en', theme = 'dark' }) => {
  const [activeResourceId, setActiveResourceId] = useState(EIC_RESOURCES[0].id);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isLooping, setIsLooping] = useState(false);

  const activeResource = getEicResourceById(activeResourceId);
  const controllerRef = useRef(null);

  // Initialize playback controller
  if (!controllerRef.current) {
    controllerRef.current = new EICPlaybackController({
      onTimeUpdate: (t) => setCurrentTime(t),
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

  // Handle resource switching cleanly: reset time, stop previous playback
  const handleSelectResource = useCallback((newId) => {
    if (newId === activeResourceId) return;
    if (controllerRef.current) {
      controllerRef.current.pause();
      controllerRef.current.seek(0);
    }
    setCurrentTime(0);
    setIsPlaying(false);
    setActiveResourceId(newId);
  }, [activeResourceId]);

  // Attach video element when loaded in child
  const handleVideoAttach = useCallback((videoEl, duration) => {
    if (controllerRef.current) {
      controllerRef.current.attachVideo(videoEl, duration);
    }
  }, []);

  // Centralized playback controls
  const handleTogglePlay = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.togglePlay();
    }
  }, []);

  const handleSeek = useCallback((targetSeconds) => {
    if (controllerRef.current) {
      controllerRef.current.seek(targetSeconds);
    }
    setCurrentTime(targetSeconds);
  }, []);

  const handleChangeSpeed = useCallback((newSpeed) => {
    if (controllerRef.current) {
      controllerRef.current.setSpeed(newSpeed);
    }
  }, []);

  const handleToggleLoop = useCallback(() => {
    setIsLooping((prev) => !prev);
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.detachVideo();
      }
    };
  }, []);

  return (
    <div className={`eic-experience-wrapper theme-${theme}`}>
      {/* 1. Main Experience Section: Original Visual + Scientific Graph */}
      <section className="eic-main-experience-grid">
        {/* Left: Original NASA SVS Visualization */}
        <div className="eic-column-left">
          <EICVisualization
            resource={activeResource}
            currentTime={currentTime}
            isPlaying={isPlaying}
            playbackSpeed={playbackSpeed}
            onTogglePlay={handleTogglePlay}
            onVideoAttach={handleVideoAttach}
            lang={lang}
          />
        </div>

        {/* Right: Corresponding Scientific Graph */}
        <div className="eic-column-right">
          <EICScientificGraph
            resource={activeResource}
            currentTime={currentTime}
            onSeek={handleSeek}
            lang={lang}
            theme={theme}
          />
        </div>
      </section>

      {/* 2. Below Both: Central Shared Synchronized Timeline */}
      <section className="eic-timeline-section">
        <EICTimeline
          resource={activeResource}
          currentTime={currentTime}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          isLooping={isLooping}
          onTogglePlay={handleTogglePlay}
          onSeek={handleSeek}
          onChangeSpeed={handleChangeSpeed}
          onToggleLoop={handleToggleLoop}
          lang={lang}
        />
      </section>

      {/* 3. Authoritative Scientific Information & Metadata */}
      <section className="eic-details-section">
        <EICScientificInformation
          resource={activeResource}
          lang={lang}
        />
      </section>

      {/* 4. Showcase Explorer Catalog */}
      <section className="eic-selector-section">
        <EICResourceSelector
          activeResourceId={activeResourceId}
          onSelectResource={handleSelectResource}
          lang={lang}
        />
      </section>
    </div>
  );
};
