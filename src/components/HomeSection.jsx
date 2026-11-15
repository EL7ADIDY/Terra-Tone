import React from 'react';
import { Earth3D } from './Earth3D';
import { ArrowRight, Compass, Sparkles, Activity, ShieldCheck, Database } from 'lucide-react';

export function HomeSection({ lang = 'en', isDark = true, onExploreClick, onHowItWorksClick }) {
  const isArabic = lang === 'ar';

  return (
    <section id="home" className="home-hero-section">
      <div className="home-hero-container">
        {/* Left Column: Typography & CTAs */}
        <div className="home-hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span>{isArabic ? 'تحدي ناسا لتطبيقات الفضاء ٢٠٢٦' : 'NASA Space Apps Challenge 2026'}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">TERRA-TONE</span>
          </h1>

          <p className="hero-subtitle">
            {isArabic
              ? 'استمع إلى الأرض. اكتشف ما تخبرنا به.'
              : 'Listen to the Earth. Discover what it tells us.'}
          </p>

          <p className="hero-description">
            {isArabic
              ? 'تجربة علمية تفاعلية مستقبلية تحول القياسات الطيفية والمناخية لأقمار ناسا الصناعية إلى تجارب صوتية حسية تكشف التغيرات البيئية والتنفس الحيوي لكوكبنا.'
              : 'A futuristic interactive scientific platform translating NASA satellite observations and Earth Information Center datasets into real-time acoustic soundscapes.'}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href="#explore"
              onClick={(e) => {
                e.preventDefault();
                onExploreClick?.();
              }}
              className="hero-btn-primary"
            >
              <Compass size={18} />
              <span>{isArabic ? 'استكشف بيانات الأرض' : 'Explore Earth Data'}</span>
              <ArrowRight size={16} className="btn-arrow-icon" />
            </a>

            <a
              href="#science"
              onClick={(e) => {
                e.preventDefault();
                onHowItWorksClick?.();
              }}
              className="hero-btn-secondary"
            >
              <Activity size={18} />
              <span>{isArabic ? 'كيف يعمل الصوت البيئي' : 'How It Works'}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Interactive 3D Earth */}
        <div className="home-hero-visual">
          <div className="earth-canvas-frame">
            <Earth3D isDark={isDark} />
          </div>
        </div>
      </div>
    </section>
  );
}
