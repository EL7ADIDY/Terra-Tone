import React, { useState } from 'react';
import {
  FileText,
  Database,
  Globe,
  Calendar,
  Compass,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers
} from 'lucide-react';

export const EICScientificInformation = ({ resource, lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="eic-info-card" aria-label="Scientific Metadata and Source Attributions">
      <div
        className="eic-info-header"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        aria-expanded={isOpen}
      >
        <div className="eic-info-header-title">
          <FileText className="icon-sm text-cyan" aria-hidden="true" />
          <h3 className="eic-info-heading">
            {lang === 'ar' ? 'التفاصيل العلمية والبيانات المعتمدة' : 'Scientific Information & NASA Attributions'}
          </h3>
          <span className="eic-svs-badge-sm">SVS #{resource.svsId}</span>
        </div>
        <button
          type="button"
          className="eic-expand-btn"
          aria-label={isOpen ? 'Collapse scientific information' : 'Expand scientific information'}
        >
          {isOpen ? <ChevronUp className="icon-sm" /> : <ChevronDown className="icon-sm" />}
        </button>
      </div>

      {isOpen && (
        <div className="eic-info-content animate-fade-in">
          {/* Metadata Grid */}
          <div className="eic-metadata-grid">
            {/* 1. Phenomenon */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Globe className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'الظاهرة العلمية' : 'Scientific Phenomenon'}
              </span>
              <p className="meta-value">
                {lang === 'ar' ? resource.phenomenonAr : resource.phenomenon}
              </p>
            </div>

            {/* 2. Dataset Name */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Database className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'اسم مجموعة البيانات' : 'Dataset Name'}
              </span>
              <p className="meta-value font-mono-sm">{resource.datasetName}</p>
            </div>

            {/* 3. Original Provider */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Layers className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'الجهة الموفرة للبيانات' : 'Data Provider'}
              </span>
              <p className="meta-value">{resource.dataProvider}</p>
            </div>

            {/* 4. Instrument / Model */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Cpu className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'الأداة أو النموذج الفضائي' : 'Instrument / Model'}
              </span>
              <p className="meta-value">{resource.instrument}</p>
            </div>

            {/* 5. Units */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Compass className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'وحدات القياس' : 'Measurement Units'}
              </span>
              <p className="meta-value">{resource.unitEn}</p>
            </div>

            {/* 6. Temporal Coverage */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Calendar className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'التغطية الزمنية' : 'Temporal Coverage'}
              </span>
              <p className="meta-value">{resource.temporalCoverage}</p>
            </div>

            {/* 7. Geographic Coverage */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <Globe className="icon-xs" aria-hidden="true" />
                {lang === 'ar' ? 'التغطية الجغرافية' : 'Geographic Coverage'}
              </span>
              <p className="meta-value">{resource.geographicCoverage}</p>
            </div>

            {/* 8. Data Type & Verification */}
            <div className="eic-meta-item">
              <span className="meta-label">
                <CheckCircle2 className="icon-xs text-emerald" aria-hidden="true" />
                {lang === 'ar' ? 'نوع ومنهجية البيانات' : 'Methodology & Type'}
              </span>
              <p className="meta-value">{resource.dataType}</p>
            </div>
          </div>

          {/* Collection / Modeling Description */}
          <div className="eic-methodology-box">
            <h4 className="methodology-title">
              {lang === 'ar' ? 'منهجية الرصد والنمذجة العلمية' : 'Data Collection & Modeling Methodology'}
            </h4>
            <p className="methodology-text">{resource.dataCollectionMethod}</p>
          </div>

          {/* Links & Attribution Footnote */}
          <div className="eic-info-footer-links">
            <a
              href={resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eic-primary-link-btn"
            >
              <span>{lang === 'ar' ? 'صفحة المشروع الأصلية في ناسا SVS' : 'Official NASA SVS Project Entry'}</span>
              <ExternalLink className="icon-xs" aria-hidden="true" />
            </a>

            <a
              href="https://www.nasa.gov/earth-information-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="eic-secondary-link-btn"
            >
              <span>{lang === 'ar' ? 'بوابة مركز معلومات الأرض' : 'NASA Earth Information Center Portal'}</span>
              <ExternalLink className="icon-xs" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
