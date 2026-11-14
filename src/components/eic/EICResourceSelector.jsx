import React, { useState } from 'react';
import { EIC_CATEGORIES, EIC_RESOURCES } from '../../services/eic/eicResources';
import { Eye, Clock, Layers, ExternalLink, Sparkles } from 'lucide-react';

export const EICResourceSelector = ({
  activeResourceId,
  onSelectResource,
  lang = 'en'
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredResources = EIC_RESOURCES.filter((res) => {
    if (selectedCategory === 'all') return true;
    return res.category === selectedCategory;
  });

  return (
    <section className="eic-catalog-section" aria-label="NASA Earth Information Center Catalog">
      <div className="eic-catalog-header">
        <div className="eic-catalog-title-group">
          <div className="eic-badge-pill">
            <Sparkles className="icon-xs" aria-hidden="true" />
            <span>NASA EARTH INFORMATION CENTER</span>
          </div>
          <h2 className="eic-section-title">
            {lang === 'ar' ? 'معارض مركز معلومات الأرض' : 'Curated Earth Science Showcases'}
          </h2>
          <p className="eic-section-subtitle">
            {lang === 'ar'
              ? 'استكشف المرئيات العلمية الأصلية والبيانات المعتمدة المباشرة من وكالة ناسا عبر الغلاف الجوي والمحيطات والغطاء الجليدي والمدن.'
              : 'Explore original NASA SVS scientific animations and verified datasets tracking our interconnected planet.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="eic-category-filter" role="tablist" aria-label="Showcase Categories">
          {EIC_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`eic-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {lang === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Showcase Cards */}
      <div className="eic-cards-grid">
        {filteredResources.map((item) => {
          const isSelected = item.id === activeResourceId;
          return (
            <article
              key={item.id}
              className={`eic-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectResource(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectResource(item.id);
                }
              }}
              aria-current={isSelected ? 'true' : undefined}
            >
              <div className="eic-card-media-wrap">
                <img
                  src={item.previewImage}
                  alt={lang === 'ar' ? item.titleAr : item.titleEn}
                  className="eic-card-img"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if network blocked
                    e.target.style.opacity = '0.4';
                  }}
                />
                <span className="eic-svs-badge">SVS #{item.svsId}</span>
                <span className="eic-duration-badge">
                  <Clock className="icon-xs" aria-hidden="true" />
                  {item.durationSeconds}s
                </span>
                {isSelected && (
                  <div className="eic-card-active-overlay">
                    <span className="eic-active-text">
                      {lang === 'ar' ? 'المعرض النشط' : 'Active Showcase'}
                    </span>
                  </div>
                )}
              </div>

              <div className="eic-card-body">
                <div className="eic-card-meta-line">
                  <span className="eic-card-category-tag">
                    {item.dataType}
                  </span>
                  <span className="eic-card-unit-tag">{item.unitShort}</span>
                </div>

                <h3 className="eic-card-title">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>

                <p className="eic-card-desc">
                  {lang === 'ar' ? item.shortDescriptionAr : item.shortDescriptionEn}
                </p>

                <div className="eic-card-footer">
                  <div className="eic-card-source">
                    <Layers className="icon-xs" aria-hidden="true" />
                    <span className="truncate">{item.dataProvider.split('/')[0]}</span>
                  </div>
                  <button
                    type="button"
                    className="eic-card-select-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectResource(item.id);
                    }}
                  >
                    <Eye className="icon-xs" aria-hidden="true" />
                    <span>{isSelected ? (lang === 'ar' ? 'يتم العرض' : 'Viewing') : (lang === 'ar' ? 'عرض' : 'Explore')}</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
