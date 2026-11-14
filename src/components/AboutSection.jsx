import React from 'react';
import { Sparkles, Globe, Database, Cpu, Users, ExternalLink, Heart, Award } from 'lucide-react';

export function AboutSection({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  const dataProviders = [
    {
      name: 'NASA Earth Information Center (EIC)',
      nameAr: 'مركز معلومات الأرض التابع لناسا',
      desc: 'Interactive climate exhibits, physical visualizations, and Earth systems data.',
      url: 'https://www.nasa.gov/earth-information-center/'
    },
    {
      name: 'NASA Scientific Visualization Studio (SVS)',
      nameAr: 'استوديو التصور العلمي التابع لناسا',
      desc: 'Hyper-detailed cinematic planetary animations and scientific visual simulations.',
      url: 'https://svs.gsfc.nasa.gov/'
    },
    {
      name: 'NASA GIBS & Worldview',
      nameAr: 'نظام تصفح الصور العالمية للأقمار الصناعية',
      desc: 'Full-resolution near real-time satellite imagery layers and spectral bands.',
      url: 'https://worldview.earthdata.nasa.gov/'
    },
    {
      name: 'NASA POWER Project',
      nameAr: 'مشروع التنبؤ بموارد الطاقة العالمية',
      desc: 'Decadal solar radiation, surface meteorology, and climate time-series.',
      url: 'https://power.larc.nasa.gov/'
    },
    {
      name: 'NASA GMAO & GEOS Models',
      nameAr: 'مكتب النمذجة والاستيعاب العالمي',
      desc: 'Global atmospheric chemical transport and aerosol assimilation systems.',
      url: 'https://gmao.gsfc.nasa.gov/'
    },
    {
      name: 'NASA/JPL ECCO-2 Ocean Circulation',
      nameAr: 'مشروع تقدير دوران ومناخ المحيطات',
      desc: 'Global ocean thermal physics, eddies, currents, and sea surface anomalies.',
      url: 'https://ecco-group.org/'
    }
  ];

  const technologies = [
    { name: 'React 18', role: 'Component Architecture & Reactive State' },
    { name: 'Three.js', role: 'Procedural 3D Earth, Orbit & Atmosphere Engine' },
    { name: 'Web Audio API', role: 'Dual Synthesizer, AnalyserNode & Real-time Acoustics' },
    { name: 'Chart.js & Leaflet', role: 'Scientific Time-Series & Geospatial Maps' },
    { name: 'Vite', role: 'High-Performance Modern Build Pipeline' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header-block">
        <span className="section-eyebrow">
          {isArabic ? 'عن المشروع والرسالة' : 'MISSION & BACKGROUND'}
        </span>
        <h2 className="section-title">
          {isArabic ? 'مشروع تيرا-تون' : 'About Terra-Tone'}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? 'مبادرة علمية تفاعلية تم تطويرها ضمن تحدي ناسا الدولي لتطبيقات الفضاء ٢٠٢٦'
            : 'Developed for the NASA International Space Apps Challenge 2026: The Earth Information Jukebox.'}
        </p>
      </div>

      {/* Challenge Mission Banner */}
      <div className="about-mission-card">
        <div className="mission-badge">
          <Award size={18} />
          <span>NASA SPACE APPS CHALLENGE 2026 — THE EARTH INFORMATION JUKEBOX</span>
        </div>
        <h3 className="mission-title">
          {isArabic
            ? 'تحويل الأرقام الفضائية المعقدة إلى لغة يفهمها الجميع'
            : 'Bridging Scientific Data and Human Emotion through Acoustic Sonification'}
        </h3>
        <p className="mission-text">
          {isArabic
            ? 'يهدف مشروع Terra-Tone إلى تمكين الباحثين والطلاب والمهتمين بالبيئة، بمن فيهم ذوي التحديات البصرية، من تجربة نبض كوكب الأرض وفهم مؤشراته الحيوية دون الحاجة إلى التحديق في مئات الجداول الإحصائية المعقدة. عبر دمج فيزياء الصوت بالبيانات الفضائية، تصبح التغيرات المناخية حقيقة ملموسة تُسمع بوضوح.'
            : 'Terra-Tone translates planetary observations into harmonically rich acoustic landscapes. By converting satellite telemetry into calibrated musical frequencies, it reveals planetary cycles, climate anomalies, and seasonal dynamics in a multisensory format accessible to scientists, students, and visually impaired explorers worldwide.'}
        </p>
      </div>

      {/* Two Column Grid: Data Providers & Tech Stack */}
      <div className="about-meta-grid">
        {/* Left Column: NASA Data Providers */}
        <div className="about-subcard">
          <div className="subcard-header">
            <Database size={20} className="subcard-icon" />
            <h3 className="subcard-title">
              {isArabic ? 'مصادر وبيانات ناسا الرسمية' : 'Official NASA Data Providers'}
            </h3>
          </div>
          <div className="providers-list">
            {dataProviders.map((dp, i) => (
              <a
                key={i}
                href={dp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="provider-item"
              >
                <div className="provider-info">
                  <span className="provider-name">{isArabic ? dp.nameAr : dp.name}</span>
                  <span className="provider-desc">{dp.desc}</span>
                </div>
                <ExternalLink size={14} className="provider-ext-icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Technology Stack & Team */}
        <div className="about-subcard">
          <div className="subcard-header">
            <Cpu size={20} className="subcard-icon" />
            <h3 className="subcard-title">
              {isArabic ? 'البنية التقنية والمكتبات' : 'Technology Stack & Architecture'}
            </h3>
          </div>
          <div className="tech-stack-list">
            {technologies.map((tech, i) => (
              <div key={i} className="tech-item">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-role">{tech.role}</span>
              </div>
            ))}
          </div>

          <div className="team-acknowledgment-box">
            <div className="ack-header">
              <Users size={18} />
              <span>{isArabic ? 'فريق العمل والتقدير' : 'Team & Acknowledgments'}</span>
            </div>
            <p className="ack-text">
              {isArabic
                ? 'تم بناء هذا النظام بفخر بواسطة فريق Terra-Tone، مهدىً إلى علماء ناسا وجميع الباحثين الذين يكرسون جهودهم لحماية كوكبنا الأزرق الجميل.'
                : 'Built with scientific rigor by the Terra-Tone Team for NASA Space Apps Challenge 2026. Dedicated to Earth scientists and researchers worldwide working to preserve our living planet.'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <footer className="terra-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">TERRA-TONE</span>
            <span className="footer-copy">© 2026 NASA Space Apps Challenge Project</span>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/EL7ADIDY/Terra-Tone"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub Repository
            </a>
            <span className="footer-sep">•</span>
            <a
              href="https://www.spaceappschallenge.org/2026/challenges/the-earth-information-jukebox/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              NASA Space Apps 2026
            </a>
            <span className="footer-sep">•</span>
            <a
              href="https://www.nasa.gov/earth-information-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Earth Information Center
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
