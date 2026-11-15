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
    range: '0.05 – 1.40 AOD',
    description: 'Tracks particulate matter, dust storms, industrial smog, and wildfire smoke suspended across the atmosphere, revealing air quality variations.',
    descriptionAr: 'رصد الجسيمات الدقيقة، العواصف الغبارية، ودخان الحرائق في الغلاف الجوي لتوضيح تباين جودة الهواء وتأثيرها التنفسي.',
    icon: Wind,
    color: '#38bdf8',
    soundProfile: 'Resonant wind synth with a soft breathy texture; higher pitches indicate dense smoke, dust, and severe pollution events.',
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
    soundProfile: 'Pulsing gas tone whose pitch rises with CO₂ concentration as plumes from power plants, cities, and fires are carried by the weather.',
    soundProfileAr: 'نبضات صوتية ترتفع طبقتها مع تركيز ثاني أكسيد الكربون أثناء انتقال الانبعاثات من المحطات والمدن والحرائق مع الطقس.'
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
    soundProfile: 'Deep aquatic plucks whose pitch rises with water temperature as the camera moves between the world\'s strongest currents.',
    soundProfileAr: 'نقرات مائية عميقة ترتفع طبقتها مع حرارة المياه أثناء التنقل بين أقوى التيارات المحيطية.'
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
    soundProfile: 'Rain-drop marimba notes that climb in pitch as moisture transport and rainfall intensify at landfall.',
    soundProfileAr: 'نغمات ماريمبا كقطرات المطر ترتفع طبقتها مع اشتداد نقل الرطوبة وغزارة الهطول عند وصول النهر الجوي إلى اليابسة.'
  },
  {
    id: 'nightlights',
    name: 'Earth Night Lights & Human Energy',
    nameAr: 'أضواء الأرض الليلية ونشاط الطاقة',
    category: 'human-polar',
    categoryName: 'Human Environment',
    categoryNameAr: 'البيئة البشرية',
    sensor: 'Suomi NPP VIIRS Day-Night Band',
    unit: 'Radiance (nW/cm²·sr)',
    range: '0.1 – 150 nW/(cm²·sr)',
    description: 'Twelve-year record (2012–2023) tracking global electrification, urban growth, transit arteries, and localized energy grid disruptions.',
    descriptionAr: 'سجل زمني (2012–2023) لتوثيق نمو المدن وشبكات الكهرباء وتوسع النشاط البشري وانقطاعات الطاقة.',
    icon: Moon,
    color: '#fbbf24',
    soundProfile: 'Shimmering electric bell chimes that rise in pitch and sparkle as cities grow brighter.',
    soundProfileAr: 'رنين أجراس كهربائية لامعة ترتفع طبقتها كلما ازداد سطوع المدن.'
  },
  {
    id: 'ice',
    name: 'Antarctic Sea Ice Extent',
    nameAr: 'امتداد الجليد البحري في القارة القطبية الجنوبية',
    category: 'human-polar',
    categoryName: 'Cryosphere',
    categoryNameAr: 'البيئة الجليدية',
    sensor: 'JAXA AMSR2 (GCOM-W1) / NSIDC Sea Ice Index',
    unit: 'Million Square Kilometers (M km²)',
    range: '2.0 – 17.2 M km² (2024)',
    description: 'Daily satellite microwave sensing of Antarctic sea ice through 2024, from its February summer minimum to its September winter maximum.',
    descriptionAr: 'قياسات ميكروويفية يومية من الأقمار الصناعية للجليد البحري حول القارة القطبية الجنوبية خلال 2024، من أدنى امتداد صيفي في فبراير إلى أقصى امتداد شتوي في سبتمبر.',
    icon: Snowflake,
    color: '#a5f3fc',
    soundProfile: 'Brittle glass-crystal tones that rise as the ice expands in winter and fall as it melts back in summer.',
    soundProfileAr: 'نغمات زجاجية بلورية ترتفع مع تمدد الجليد شتاءً وتنخفض مع ذوبانه صيفاً.'
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
    { id: 'human-polar', label: isArabic ? 'النشاط البشري والقطبان' : 'Human & Polar' },
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
                  <span className="lbl">{isArabic ? 'نطاق القياس:' : 'Measurement Range:'}</span>
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
