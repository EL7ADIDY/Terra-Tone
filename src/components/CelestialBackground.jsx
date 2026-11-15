import React, { useMemo } from 'react';

/**
 * CelestialBackground
 * Cosmic Observatory immersive background layer:
 * - Midnight Galaxy (Dark): Starfield, Twinkling Stars, Shooting Stars, Crescent Moon, Nebulae
 * - Solar Horizon (Light): Sunrise Atmosphere, Glowing Sun with Rays, Drifting Clouds, Sparkles
 *
 * Smooth 1s crossfade transitions between themes.
 * Zero pointer-events, full viewport coverage behind all content.
 * Disabled completely in high-contrast mode and respects prefers-reduced-motion.
 */
export default function CelestialBackground({ theme = 'dark', isHighContrast = false }) {
  if (isHighContrast) return null;

  // Generate deterministic stars once (seeded coordinates)
  const stars = useMemo(() => {
    const list = [];
    // 84 small stars
    for (let i = 0; i < 84; i++) {
      // Pseudo-random deterministic placement using sine hash
      const x = Math.abs(Math.sin(i * 12.9898 + 78.233) * 100).toFixed(2);
      const y = Math.abs(Math.sin(i * 93.9898 + 33.233) * 100).toFixed(2);
      const size = (0.9 + ((i % 5) * 0.35)).toFixed(2); // 0.9px - 2.3px
      const baseOpacity = (0.35 + ((i % 7) * 0.09)).toFixed(2);
      const duration = (2.8 + ((i % 9) * 0.55)).toFixed(2); // 2.8s - 7.2s
      const delay = ((i % 13) * 0.45).toFixed(2);
      const isBlueTint = i % 4 === 0;

      list.push({
        id: `star-${i}`,
        x: `${x}%`,
        y: `${y}%`,
        size: `${size}px`,
        opacity: baseOpacity,
        duration: `${duration}s`,
        delay: `${delay}s`,
        color: isBlueTint ? '#DCE8FF' : '#FFFFFF'
      });
    }

    // 6 larger prominent glowing stars with soft diffraction
    const prominent = [
      { id: 'prom-1', x: '12%', y: '18%', size: '3.2px', duration: '4.2s', delay: '0.2s', color: '#DCE8FF' },
      { id: 'prom-2', x: '42%', y: '12%', size: '3.5px', duration: '5.1s', delay: '1.4s', color: '#70CFFF' },
      { id: 'prom-3', x: '78%', y: '24%', size: '3.0px', duration: '4.6s', delay: '2.1s', color: '#A78BFA' },
      { id: 'prom-4', x: '28%', y: '65%', size: '3.2px', duration: '5.8s', delay: '0.8s', color: '#DCE8FF' },
      { id: 'prom-5', x: '88%', y: '72%', size: '3.6px', duration: '4.8s', delay: '2.9s', color: '#70CFFF' },
      { id: 'prom-6', x: '62%', y: '84%', size: '2.8px', duration: '5.4s', delay: '1.7s', color: '#FFFFFF' }
    ];

    return { regular: list, prominent };
  }, []);

  // Solar particles for light mode
  const solarParticles = useMemo(() => {
    return [
      { id: 'sp-1', x: 'calc(100% - 130px)', y: '60px', size: '2.5px', delay: '0s', dur: '3.2s' },
      { id: 'sp-2', x: 'calc(100% - 60px)', y: '135px', size: '3px', delay: '1.2s', dur: '4.1s' },
      { id: 'sp-3', x: 'calc(100% - 150px)', y: '110px', size: '2px', delay: '0.6s', dur: '3.8s' },
      { id: 'sp-4', x: 'calc(100% - 40px)', y: '75px', size: '2.2px', delay: '2.1s', dur: '4.5s' },
      { id: 'sp-5', x: 'calc(100% - 105px)', y: '150px', size: '2.8px', delay: '1.8s', dur: '3.5s' }
    ];
  }, []);

  const isDark = theme === 'dark';

  return (
    <div
      className={`celestial-system ${isDark ? 'mode-dark' : 'mode-light'}`}
      aria-hidden="true"
    >
      {/* ===================================================================
          1. MIDNIGHT GALAXY (DARK MODE)
          =================================================================== */}
      <div className="celestial-layer celestial-night">
        {/* Subtle Cosmic Nebula Gradients */}
        <div className="celestial-nebula-wrap">
          <div className="celestial-nebula neb-purple" />
          <div className="celestial-nebula neb-blue" />
          <div className="celestial-nebula neb-cyan" />
          <div className="celestial-nebula neb-violet" />
        </div>

        {/* Regular Twinkling Starfield */}
        <div className="celestial-starfield">
          {stars.regular.map((s) => (
            <span
              key={s.id}
              className="celestial-star"
              style={{
                left: s.x,
                top: s.y,
                width: s.size,
                height: s.size,
                backgroundColor: s.color,
                '--star-opacity': s.opacity,
                '--star-dur': s.duration,
                '--star-delay': s.delay
              }}
            />
          ))}

          {/* Prominent Glowing Stars with soft diffraction */}
          {stars.prominent.map((p) => (
            <div
              key={p.id}
              className="celestial-star-prominent"
              style={{
                left: p.x,
                top: p.y,
                '--prom-dur': p.duration,
                '--prom-delay': p.delay
              }}
            >
              <span
                className="prom-core"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color
                }}
              />
              <span
                className="prom-glow"
                style={{ borderColor: p.color }}
              />
            </div>
          ))}
        </div>

        {/* Occasional Shooting Stars */}
        <div className="celestial-shooting-star star-1" />
        <div className="celestial-shooting-star star-2" />

        {/* Crescent Moon in Upper Right */}
        <div className="celestial-moon-container">
          <div className="moon-halo-outer" />
          <div className="moon-halo-inner" />
          <svg
            className="moon-svg"
            viewBox="0 0 100 100"
            width="78"
            height="78"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Moon silver-blue illuminated gradient */}
              <linearGradient id="moonGleam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="50%" stopColor="#DCE8FF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#70CFFF" stopOpacity="0.85" />
              </linearGradient>

              {/* Faint earthshine shading for dark side */}
              <radialGradient id="earthshine" cx="45%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#10172B" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#080B1A" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#080B1A" stopOpacity="0.9" />
              </radialGradient>

              {/* Moon soft edge glow filter */}
              <filter id="moonGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Faint dark lunar sphere (earthshine) */}
            <circle cx="50" cy="50" r="40" fill="url(#earthshine)" />

            {/* Crescent moon path: crisp, elegant, scientific curve */}
            <path
              d="M 50 10 
                 A 40 40 0 0 1 50 90 
                 A 33 33 0 0 0 50 10 Z"
              fill="url(#moonGleam)"
              filter="url(#moonGlowFilter)"
            />

            {/* Subtle illuminated edge highlight */}
            <path
              d="M 50 10 A 40 40 0 0 1 50 90"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* ===================================================================
          2. SOLAR HORIZON (LIGHT MODE)
          =================================================================== */}
      <div className="celestial-layer celestial-day">
        {/* Soft atmospheric gradients */}
        <div className="celestial-atmosphere-wrap">
          <div className="celestial-sky-wash" />
          <div className="celestial-sunrise-glow" />
        </div>

        {/* Soft Drifting Atmospheric Clouds */}
        <div className="celestial-clouds-wrap">
          <svg className="celestial-cloud cloud-1" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 40 90 Q 60 50 110 55 Q 140 25 200 35 Q 260 20 300 50 Q 350 50 365 85 Q 375 110 320 110 L 60 110 Q 30 110 40 90 Z"
              fill="rgba(255, 255, 255, 0.45)"
            />
          </svg>
          <svg className="celestial-cloud cloud-2" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 30 75 Q 50 40 95 45 Q 120 15 170 25 Q 220 15 255 40 Q 295 40 310 70 Q 320 90 270 90 L 50 90 Q 20 90 30 75 Z"
              fill="rgba(255, 255, 255, 0.35)"
            />
          </svg>
          <svg className="celestial-cloud cloud-3" viewBox="0 0 450 130" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 100 Q 75 55 130 60 Q 165 25 240 40 Q 310 20 355 55 Q 410 55 425 95 Q 435 120 370 120 L 70 120 Q 40 120 50 100 Z"
              fill="rgba(255, 255, 255, 0.28)"
            />
          </svg>
        </div>

        {/* Glowing Sun with Corona and Subtle Sunlight Rays */}
        <div className="celestial-sun-container">
          <div className="sun-corona-outer" />
          <div className="sun-corona-mid" />
          <div className="sun-corona-inner" />

          {/* Rotating Subtle Sunlight Rays */}
          <div className="sun-rays-rotator">
            <svg
              className="sun-rays-svg"
              viewBox="0 0 240 240"
              width="240"
              height="240"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="rayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E9A83A" stopOpacity="0.32" />
                  <stop offset="60%" stopColor="#FFD6A0" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#E9A83A" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* 8 radiating light beam segments */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <path
                  key={`ray-${angle}`}
                  d="M 118 10 L 122 10 L 121 72 L 119 72 Z"
                  fill="url(#rayGrad)"
                  transform={`rotate(${angle} 120 120)`}
                />
              ))}
            </svg>
          </div>

          {/* Golden Sun Core */}
          <div className="sun-core-sphere" />
        </div>

        {/* Tiny sparkling particles near the sun */}
        <div className="celestial-sun-particles">
          {solarParticles.map((sp) => (
            <span
              key={sp.id}
              className="sun-sparkle"
              style={{
                left: sp.x,
                top: sp.y,
                width: sp.size,
                height: sp.size,
                animationDuration: sp.dur,
                animationDelay: sp.delay
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
