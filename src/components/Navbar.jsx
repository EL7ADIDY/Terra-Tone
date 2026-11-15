import React, { useState, useEffect } from 'react';
import { HangingLampToggle } from './HangingLampToggle';
import { Volume2, VolumeX, Globe, Menu, X, Sparkles, HelpCircle, Layers, Contrast, Info } from 'lucide-react';

export function Navbar({
  theme,
  onToggleTheme,
  lang,
  onToggleLang,
  soundEnabled,
  onToggleSound,
  isHighContrast = false,
  onToggleHighContrast,
  isLargeText = false,
  onToggleLargeText,
  onOpenAbout,
  onOpenShortcuts,
  onOpenEICModal
}) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { id: 'science', label: lang === 'ar' ? 'العلم والمبدأ' : 'The Science' },
    { id: 'explore', label: lang === 'ar' ? 'استكشاف البيانات' : 'Explore Data' },
    { id: 'studio', label: lang === 'ar' ? 'استوديو الصوتيات' : 'Sonification Studio' },
    { id: 'discover', label: lang === 'ar' ? 'دليل الاستماع' : 'Discover' },
    { id: 'about', label: lang === 'ar' ? 'عن المشروع' : 'About' },
  ];

  // Active section scroll spy via IntersectionObserver / scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPos) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="navbar-brand"
        >
          <div className="brand-logo-icon">
            <span className="logo-pulse-ring" />
            <span className="logo-core" />
          </div>
          <div className="brand-text">
            <span className="brand-title">TERRA-TONE</span>
            <span className="brand-tag">NASA DATA SONIFICATION</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-link-btn nav-link-${link.id} ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="nav-active-pill" />}
            </button>
          ))}
        </nav>

        {/* Right Controls: Lamp + Utility buttons */}
        <div className="navbar-actions">
          {/* Audio toggle */}
          <button
            onClick={onToggleSound}
            className="navbar-icon-btn"
            title={soundEnabled ? (lang === 'ar' ? 'كتم الصوت' : 'Mute Sound') : (lang === 'ar' ? 'تشغيل الصوت' : 'Unmute Sound')}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* High Contrast Accessibility Toggle with Spin & Glow Animation */}
          <button
            onClick={onToggleHighContrast}
            className={`navbar-icon-btn a11y-toggle-btn contrast-btn ${isHighContrast ? 'is-active' : ''}`}
            title={lang === 'ar'
              ? (isHighContrast ? 'إلغاء التباين العالي' : 'تفعيل وضع التباين العالي (WCAG AAA)')
              : (isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast (WCAG AAA)')}
            aria-label="Toggle High Contrast Mode"
            aria-pressed={isHighContrast}
          >
            <Contrast size={17} className="contrast-icon-anim" />
            <span className="a11y-badge-dot" />
          </button>

          {/* Big Text Accessibility Toggle with Bounce & Pop Animation */}
          <button
            onClick={onToggleLargeText}
            className={`navbar-icon-btn a11y-toggle-btn text-size-btn ${isLargeText ? 'is-active' : ''}`}
            title={lang === 'ar'
              ? (isLargeText ? 'استعادة حجم الخط العادي' : 'تكبير حجم الخط (نص كبير)')
              : (isLargeText ? 'Reset Normal Font Size' : 'Enlarge Font Size (Large Text)')}
            aria-label="Toggle Large Font Size"
            aria-pressed={isLargeText}
          >
            <span className="text-size-icon-anim">
              <span className="letter-base">A</span>
              <span className="letter-plus">+</span>
            </span>
            <span className="a11y-badge-dot" />
          </button>

          {/* About / Info Modal Button */}
          <button
            onClick={onOpenAbout}
            className="navbar-icon-btn about-btn"
            title={lang === 'ar' ? 'معلومات عن المشروع والمصادر العلمية' : 'About Project & NASA Scientific Sources'}
            aria-label="About Terra-Tone Project"
          >
            <Info size={17} />
          </button>

          {/* Language Switch */}
          <button
            onClick={onToggleLang}
            className="navbar-pill-btn"
            title="Toggle Language (English / العربية)"
          >
            <Globe size={14} />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Interactive Hanging Lamp Theme Toggle */}
          <div className="navbar-lamp-wrapper" title="Interactive Hanging Lamp">
            <HangingLampToggle
              theme={theme}
              onToggleTheme={onToggleTheme}
              soundEnabled={soundEnabled}
            />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Quick Accessibility Controls */}
          <div className="mobile-a11y-row">
            <button
              onClick={onToggleHighContrast}
              className={`mobile-a11y-chip ${isHighContrast ? 'is-active' : ''}`}
            >
              <Contrast size={16} className="contrast-icon-anim" />
              <span>{lang === 'ar' ? 'تباين عالي' : 'High Contrast'}</span>
            </button>
            <button
              onClick={onToggleLargeText}
              className={`mobile-a11y-chip ${isLargeText ? 'is-active' : ''}`}
            >
              <span className="text-size-icon-anim" style={{ display: 'inline-flex', fontSize: '0.9rem', fontWeight: 800 }}>A+</span>
              <span>{lang === 'ar' ? 'تكبير النص' : 'Big Text'}</span>
            </button>
          </div>

          <div className="mobile-nav-footer">
            <button onClick={onOpenAbout} className="mobile-nav-sublink">
              <Sparkles size={16} />
              <span>{lang === 'ar' ? 'عن المشروع' : 'About Project'}</span>
            </button>
            <button onClick={onOpenShortcuts} className="mobile-nav-sublink">
              <HelpCircle size={16} />
              <span>{lang === 'ar' ? 'اختصارات المفاتيح' : 'Keyboard Shortcuts'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
