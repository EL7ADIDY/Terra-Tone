import React, { useState, useEffect } from 'react';
import { HangingLampToggle } from './HangingLampToggle';
import { Volume2, VolumeX, Globe, Menu, X, Sparkles, HelpCircle, Layers } from 'lucide-react';

export function Navbar({
  theme,
  onToggleTheme,
  lang,
  onToggleLang,
  soundEnabled,
  onToggleSound,
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
    { id: 'eic-visuals', label: lang === 'ar' ? 'مرئيات EIC' : 'EIC Visuals' },
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
              className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
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
