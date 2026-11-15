import React, { useState } from 'react';
import { Wind, Flame, Droplets, CloudRain, Moon, Snowflake, ArrowRight, Play, ExternalLink, Info } from 'lucide-react';
import { playEICTone } from '../services/eic/eicAudioService';
import { EIC_RESOURCES } from '../services/eic/eicResources';

export const SUPPORTED_DATASETS = [
  {
    id: 'aerosols',
    name: 'Aerosol Optical Depth (AOD & PM2.5)',
    nameAr: 'عمق الأيروسول البصري وجودة الهواء',
    category: 'atmosphere',
    categoryName: 'Atmosphere',
    categoryNameAr: 'الغلاف الجوي',
    sensor: 'NASA GEOS / MODIS Terra & Aqua',
    unit: 'Optical Depth (Unitless) & μg/m³',
    range: '0.05 – 1.20 AOD',
    description: 'Tracks particulate matter, dust storms, industrial smog, and wildfire smoke suspended across the atmosphere, revealing air quality variations.',
    descriptionAr: 'رصد الجسيمات الدقيقة، العواصف الغبارية، ودخان الحرائق في الغلاف الجوي لتوضيح تباين جودة الهواء وتأثيرها التنفسي.',
    icon: Wind,
    color: '#38bdf8',
    soundProfile: 'Airy flute and gentle noise breeze; higher frequencies indicate dense smog and severe pollution events.',
    soundProfileAr: 'نغمات هوائية سلسة، ترتفع حدتها كلما زادت كثافة الجسيمات العالقة والتلوث الصناعي.'
  },
  {
    id: 'carbon',
    name: 'Atmospheric Carbon Dioxide (CO₂)',
    nameAr: 'ثاني أكسيد الكربون في الغلاف الجوي',
    category: 'atmosphere',
    categoryName: 'Atmosphere',
    categoryNameAr: 'الغلاف الجوي',
    sensor: 'NASA OCO-2 / DYAMOND Simulation',
    unit: 'Parts Per Million (ppm)',
    range: '390 – 425 ppm',
    description: 'High-resolution global column measurements capturing the annual seasonal photosynthetic drawdown by Northern forests and long-term emission trends.',
    descriptionAr: 'قياسات دقيقة لتركيز الكربون ترصد التنفس السنوي للغابات ودورات التمثيل الضوئي مع التزايد التراكمي المستمر.',
    icon: Flame,
    color: '#f97316',
    soundProfile: 'Rich resonant warm drone with rhythmic annual undulations reflecting seasonal biospheric breathing.',
    soundProfileAr: 'نغمات دافئة متناغمة تعكس تنفس المحيط الحيوي للأرض وامتصاص النباتات للكربون صيفاً.'
  },
  {
    id: 'ocean',
    name: 'Sea Surface Currents & Temperature',
    nameAr: 'تيارات وحرارة سطح المحيطات',
    category: 'ocean',
    categoryName: 'Ocean',
    categoryNameAr: 'المحيطات',
    sensor: 'NASA ECCO-2 / Perpetual Ocean',
    unit: 'Degrees Celsius (°C) & m/s',
    range: '-2°C to +32°C',
    description: 'Simulates fluid planetary thermal dynamics, Western boundary currents (Gulf Stream, Kuroshio), and immense heat conveyor transport across world oceans.',
    descriptionAr: 'محاكاة التيارات المائية الدوارة وتيار الخليج الدافئ الذي ينقل الطاقة الحرارية من خط الاستواء نحو القطبين.',
    icon: Droplets,
    color: '#06b6d4',
    soundProfile: 'Deep aquatic marimba and sweeping liquid sub-oscillations whose tempo echoes oceanic kinetic energy.',
    soundProfileAr: 'أصوات ماريمبا مائية عميقة مع تموجات تعكس حركة الدوامات البحرية والطاقة الحركية.'
  },
  {
    id: 'precip',
    name: 'Atmospheric Rivers & Precipitation',
    nameAr: 'الأنهار الجوية ومعدلات الهطول',
    category: 'atmosphere',
    categoryName: 'Atmosphere',
    categoryNameAr: 'الغلاف الجوي',
    sensor: 'NASA GPM (Global Precipitation Measurement)',
    unit: 'Millimeters per Hour (mm/h)',
    range: '0 – 85 mm/h',
    description: 'Long plumes of dense atmospheric moisture carrying the equivalent flow of the Amazon river across skies, triggering torrential rain and vital snowpacks.',
    descriptionAr: 'أعمدة هائلة من بخار الماء في الغلاف الجوي تعادل تدفق نهر الأمازون، تسبب هطول أمطار غزيرة وثلوج جبلية حيوية.',
    icon: CloudRain,
    color: '#818cf8',
    soundProfile: 'Crystalline glockenspiel droplets accelerating into rhythmic storm cascades during intense precipitation pulses.',
    soundProfileAr: 'نغمات رنين بلورية تتسارع مع تدفق قطرات المطر وغزارة العواصف الرعدية.'
  },
  {
    id: 'nightlights',
    name: 'Earth Night Lights & Human Energy',
    nameAr: 'أضواء الأرض الليلية ونشاط الطاقة',
    category: 'environment',
    categoryName: 'Human Environment',
    categoryNameAr: 'البيئة البشرية',
    sensor: 'Suomi NPP VIIRS Day-Night Band',
    unit: 'Radiance (nW/cm²·sr)',
    range: '0.1 – 150 nW',
    description: 'Ten-year decadal record (2012–2023) tracking global electrification, urban growth, transit arteries, and localized energy grid disruptions.',
    descriptionAr: 'سجل زمني لتوثيق نمو المدن وشبكات الكهرباء وتوسع النشاط البشري وانقطاعات الطاقة عبر عقد كامل.',
    icon: Moon,
    color: '#fbbf24',
    soundProfile: 'Warm analog synthesizer pulses with rising brightness and harmonic overtone complexity in dense metropolitan centers.',
    soundProfileAr: 'نبضات سنثسايزر دافئة تزداد سطوعاً وتعقيداً مع كثافة التجمعات الحضرية والإضاءة.'
  },
  {
    id: 'ice',
    name: 'Cryosphere & Polar Sea Ice Extent',
    nameAr: 'الغطاء الجليدي القطبي والبحري',
    category: 'environment',
    categoryName: 'Cryosphere',
    categoryNameAr: 'البيئة الجليدية',
    sensor: 'NASA NSIDC / SSMIS Microwave',
    unit: 'Million Square Kilometers (M km²)',
    range: '3.5 – 16.0 M km²',
    description: 'Decadal satellite microwave sensing documenting the minimum and maximum Arctic and Antarctic freeze-thaw cycles and albedo dynamics.',
    descriptionAr: 'قياسات رادارية ميكروويفية توثق انكماش واتساع الجليد في القطبين وتأثيره على انعكاس الإشعاع الشمسي.',
    icon: Snowflake,
    color: '#a5f3fc',
    soundProfile: 'Chilled glass bell harmonics with descending fundamental frequencies illustrating multi-year ice loss.',
    soundProfileAr: 'أجراس زجاجية نقية تنخفض طبقتها تدريجياً لتعكس ذوبان الجليد القديم وتراجع المساحات.'
  }
];

export function ExploreDataSection({ lang = 'en', onSelectDataset }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCardId, setActiveCardId] = useState(SUPPORTED_DATASETS[0].id);
  const isArabic = lang === 'ar';

  const categories = [
    { id: 'all', label: isArabic ? 'جميع البيانات' : 'All Datasets' },
    { id: 'atmosphere', label: isArabic ? 'الغلاف الجوي' : 'Atmosphere' },
    { id: 'ocean', label: isArabic ? 'المحيطات والمياه' : 'Ocean' },
    { id: 'environment', label: isArabic ? 'المناخ والبيئة' : 'Climate & Land' },
  ];

  const filteredDatasets = selectedCategory === 'all'
    ? SUPPORTED_DATASETS
    : SUPPORTED_DATASETS.filter(d => d.category === selectedCategory);

  const activeDataset = SUPPORTED_DATASETS.find(d => d.id === activeCardId) || SUPPORTED_DATASETS[0];

  const handleLaunchStudio = (datasetId) => {
    onSelectDataset?.(datasetId);

    // Play signature acoustic preview of this scientific dataset
    const mapping = {
      'aerosols': 'geos-aerosols-2017',
      'carbon': 'dyamond-co2-transport',
      'ocean': 'perpetual-ocean-2',
      'precip': 'atmospheric-river-3d',
      'nightlights': 'night-lights-decade',
      'ice': 'antarctic-sea-ice',
    };
    const targetId = mapping[datasetId] || datasetId;
    const res = EIC_RESOURCES.find(r => r.id === targetId);
    if (res) {
      playEICTone(res, 50, 0.8);
    }

    const studioEl = document.getElementById('studio');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="explore" className="explore-section">
      <div className="section-header-block">
        <span className="section-eyebrow">
          {isArabic ? 'كتالوج ناسا العلمي' : 'OBSERVATIONAL CATALOG'}
        </span>
        <h2 className="section-title">
          {isArabic ? 'استكشف بيانات الأرض' : 'Explore Earth Data'}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? 'مجموعات بيانات علمية موثقة من أقمار ناسا ومراكز أبحاث الغلاف الجوي والمحيطات جاهزة للاستماع'
            : 'Select a verified NASA satellite observation dataset to inspect its physical parameters and auditory profile.'}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="category-filter-bar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`cat-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Dataset Cards */}
      <div className="datasets-grid">
        {filteredDatasets.map(ds => {
          const Icon = ds.icon;
          const isSelected = ds.id === activeCardId;

          return (
            <div
              key={ds.id}
              className={`dataset-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setActiveCardId(ds.id)}
            >
              <div className="card-top-row">
                <div className="card-icon-tag" style={{ color: ds.color, background: `${ds.color}18` }}>
                  <Icon size={20} />
                </div>
                <span className="card-cat-badge">
                  {isArabic ? ds.categoryNameAr : ds.categoryName}
                </span>
              </div>

              <h3 className="card-dataset-title">
                {isArabic ? ds.nameAr : ds.name}
              </h3>

              <p className="card-dataset-desc">
                {isArabic ? ds.descriptionAr : ds.description}
              </p>

              <div className="card-metrics-box">
                <div className="metric-row">
                  <span className="lbl">{isArabic ? 'المستشعر الفضائي:' : 'Sensor / Source:'}</span>
                  <span className="val">{ds.sensor}</span>
                </div>
                <div className="metric-row">
                  <span className="lbl">{isArabic ? 'وحدة القياس:' : 'Measurement Range:'}</span>
                  <span className="val">{ds.range}</span>
                </div>
              </div>

              <div className="card-actions-row">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchStudio(ds.id);
                  }}
                  className="card-explore-btn"
                >
                  <Play size={15} fill="currentColor" />
                  <span>{isArabic ? 'تجربة في استوديو الصوت' : 'Explore in Studio'}</span>
                  <ArrowRight size={14} className="arrow-launch" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Dataset Expanded Deep-Dive Preview */}
      {activeDataset && (
        <div className="dataset-deepdive-banner">
          <div className="deepdive-icon-col" style={{ color: activeDataset.color }}>
            <activeDataset.icon size={36} />
          </div>
          <div className="deepdive-info-col">
            <div className="deepdive-badge">
              {isArabic ? 'الملف الصوتي العلمي المخصص' : 'Scientific Sound Mapping Profile'}
            </div>
            <h4 className="deepdive-title">
              {isArabic ? activeDataset.nameAr : activeDataset.name}
            </h4>
            <p className="deepdive-text">
              {isArabic ? activeDataset.soundProfileAr : activeDataset.soundProfile}
            </p>
          </div>
          <div className="deepdive-cta-col">
            <button
              onClick={() => handleLaunchStudio(activeDataset.id)}
              className="deepdive-launch-btn"
            >
              <Play size={16} fill="currentColor" />
              <span>{isArabic ? 'افتح في الاستوديو الآن' : 'Load in Sonification Studio'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
