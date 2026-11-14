import React, { useState, useRef, useCallback, useEffect } from 'react';
import { getAudioContext } from '../utils/audioUtils';

/**
 * Interactive Hanging Lamp Theme Toggle
 * Features:
 * - Suspended modern pendant lamp with pull-string cord
 * - Pointer drag physics on the cord (stretch down, threshold >= 20px, snap-back bounce)
 * - Click on lamp head or pull bead toggles theme
 * - Visual illuminated glow cone in Dark Mode, extinguished in Light Mode
 * - Keyboard accessible (Enter / Space)
 * - Subtle switch click audio via Web Audio oscillator
 */
export function HangingLampToggle({ theme, onToggleTheme, soundEnabled = true }) {
  const [pullY, setPullY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const dragStartYRef = useRef(0);
  const currentPullRef = useRef(0);

  const isDark = theme === 'dark';

  // Play a very subtle mechanical switch click sound using Web Audio API
  const playClickSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || ctx.state !== 'running') return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      // Realistic dual-click switch sound
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isDark ? 520 : 680, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
    } catch {
      // Audio may be blocked by autoplay or unsupported
    }
  }, [soundEnabled, isDark]);

  const triggerToggle = useCallback(() => {
    playClickSound();
    onToggleTheme();
  }, [playClickSound, onToggleTheme]);

  // Pointer Drag Handlers on the Pull Cord / Bead
  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setIsBouncing(false);
    dragStartYRef.current = e.clientY;
    currentPullRef.current = 0;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - dragStartYRef.current;
    // Clamp pull between 0px and 45px
    const clampedY = Math.max(0, Math.min(45, deltaY));
    currentPullRef.current = clampedY;
    setPullY(clampedY);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    const finalPull = currentPullRef.current;
    if (finalPull >= 18) {
      triggerToggle();
    }
    // Snap back with spring bounce
    setIsBouncing(true);
    setPullY(0);
    setTimeout(() => setIsBouncing(false), 500);
  };

  // Direct Click on Lamp Body
  const handleLampClick = (e) => {
    e.stopPropagation();
    setIsBouncing(true);
    setPullY(15);
    setTimeout(() => {
      setPullY(0);
      triggerToggle();
      setTimeout(() => setIsBouncing(false), 450);
    }, 120);
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLampClick(e);
    }
  };

  return (
    <div
      className={`hanging-lamp-container ${isDark ? 'lamp-on' : 'lamp-off'}`}
      role="button"
      tabIndex={0}
      aria-label={`Toggle theme: current theme is ${theme}. Pull cord or click lamp to switch.`}
      onKeyDown={handleKeyDown}
      title={`Theme: ${isDark ? 'Cosmic Dark' : 'Scientific Light'} (Click or pull string to switch)`}
    >
      {/* Upper Ceiling Mount Cord */}
      <div className="lamp-mount-wire" />

      {/* Lamp Head (Shade + Bulb) */}
      <div className="lamp-head" onClick={handleLampClick}>
        <svg
          className="lamp-svg"
          viewBox="0 0 48 36"
          width="44"
          height="33"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="shadeGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="shadeGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="40%" stopColor="#fde047" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Lamp Socket Collar */}
          <rect x="21" y="2" width="6" height="4" rx="1" fill={isDark ? '#64748b' : '#475569'} />

          {/* Modern Pendant Shade */}
          <path
            d="M 12 16 Q 24 6 36 16 L 40 22 Q 24 24 8 22 Z"
            fill={isDark ? 'url(#shadeGradDark)' : 'url(#shadeGradLight)'}
            stroke={isDark ? '#38bdf8' : '#94a3b8'}
            strokeWidth="1"
          />

          {/* Bulb */}
          <circle
            cx="24"
            cy="24"
            r="6"
            className="lamp-bulb-element"
            fill={isDark ? 'url(#bulbGlow)' : '#cbd5e1'}
            stroke={isDark ? '#fef08a' : '#94a3b8'}
            strokeWidth="1"
          />
        </svg>

        {/* Ambient Light Cone radiating downward in Dark Mode */}
        {isDark && <div className="lamp-light-cone" />}
      </div>

      {/* Pull-String Assembly with interactive drag */}
      <div
        className={`lamp-pull-cord-assembly ${isBouncing ? 'is-springing' : ''}`}
        style={{
          transform: `translateY(${pullY}px)`,
          transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Pull String Line */}
        <div className="lamp-cord-line" />

        {/* Pull Bead / Brass Switch Handle */}
        <div
          className={`lamp-pull-bead ${isDragging ? 'is-dragging' : ''}`}
          title="Drag down or click to switch theme"
        >
          <div className="bead-inner" />
        </div>
      </div>
    </div>
  );
}
