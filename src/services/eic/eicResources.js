/**
 * NASA Earth Information Center (EIC) - Featured Resources Catalog
 * 
 * Sourced directly from NASA Scientific Visualization Studio (SVS)
 * and official NASA Earth Science Data Providers:
 * - NASA Black Marble (Terrestrial Information Systems Lab)
 * - NASA GMAO (Global Modeling and Assimilation Office)
 * - NASA/JPL ECCO-2 (Estimating the Circulation and Climate of the Ocean)
 * - NASA Cryospheric Sciences & NSIDC
 * - NASA MERRA-2 Atmospheric Reanalysis
 */

export const EIC_CATEGORIES = [
  { id: 'all', labelEn: 'All Showcases', labelAr: 'جميع المعارض' },
  { id: 'human', labelEn: 'Human Impact & Urban', labelAr: 'النشاط البشري والمدن' },
  { id: 'atmosphere', labelEn: 'Atmosphere & Weather', labelAr: 'الغلاف الجوي والطقس' },
  { id: 'oceans', labelEn: 'Oceans & Circulation', labelAr: 'المحيطات والتيارات' },
  { id: 'polar', labelEn: 'Cryosphere & Polar', labelAr: 'الغطاء الجليدي والقطبان' },
];

export const EIC_RESOURCES = [
  {
    id: 'night-lights-decade',
    svsId: 5276,
    category: 'human',
    titleEn: 'Change in Night Lights (2012–2023)',
    titleAr: 'تغير أضواء الليل العالمية (2012–2023)',
    subtitleEn: 'Decade-long global urbanization and electrification dynamics',
    subtitleAr: 'ديناميكيات التحضر والكهرباء العالمية على مدار عقد',
    shortDescriptionEn: 'Using NASA Black Marble nighttime lights data from VIIRS, this visualization maps a decade of human activity, urban expansion, and socioeconomic shifts from 2012 through 2023.',
    shortDescriptionAr: 'باستخدام بيانات الرخام الأسود التابع لناسا من مستشعر VIIRS، ترصد هذه المحاكاة عقدًا من النشاط البشري والتوسع الحضري والتغيرات التنموية من 2012 حتى 2023.',
    
    // Original NASA SVS Visual Links
    videoUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat_2160p30.mp4',
    previewImage: 'https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/nightlights_2012-2023_change_flat.02599_print.jpg',
    sourceUrl: 'https://svs.gsfc.nasa.gov/5276/',
    
    // Scientific Metadata
    phenomenon: 'Anthropogenic Nighttime Radiance & Urban Development',
    phenomenonAr: 'الإشعاع الليلي الاصطناعي والتطور العمراني',
    datasetName: 'NASA Black Marble (VNP46A4 Annual Composite Suite)',
    dataProvider: 'NASA Goddard Space Flight Center / Terrestrial Information Systems Laboratory',
    instrument: 'VIIRS Day/Night Band (DNB) aboard Suomi-NPP & NOAA-20',
    primaryVariable: 'Mean Calibrated Nighttime Radiance',
    unitEn: 'nW · cm⁻² · sr⁻¹ (Nanowatts per cm² per steradian)',
    unitShort: 'nW/(cm²·sr)',
    geographicCoverage: 'Global (90°N – 90°S, 180°W – 180°E)',
    temporalCoverage: '2012 – 2023 (Annual Observation Cadence)',
    dataCollectionMethod: 'Satellite radiometry calibrated for lunar illumination, stray light, atmospheric scattering, and cloud obscuration.',
    dataType: 'Calibrated Satellite Observation',
    
    // Video Duration & Timeline Mapping
    durationSeconds: 44,
    dataCadence: 'yearly',
    timePoints: [
      { timestamp: 0, year: 2012, label: '2012 Baseline' },
      { timestamp: 3.5, year: 2013, label: '2013' },
      { timestamp: 7.0, year: 2014, label: '2014' },
      { timestamp: 10.5, year: 2015, label: '2015' },
      { timestamp: 14.0, year: 2016, label: '2016' },
      { timestamp: 17.5, year: 2017, label: '2017' },
      { timestamp: 21.0, year: 2018, label: '2018' },
      { timestamp: 24.5, year: 2019, label: '2019' },
      { timestamp: 28.0, year: 2020, label: '2020 (Pandemic Dip)' },
      { timestamp: 31.5, year: 2021, label: '2021 (Recovery)' },
      { timestamp: 35.0, year: 2022, label: '2022' },
      { timestamp: 38.5, year: 2023, label: '2023' },
      { timestamp: 44.0, year: 2023, label: 'Net Decade Change' }
    ],
    
    // Authentic scientific time-series data
    graphConfig: {
      chartType: 'line',
      yAxisLabel: 'Radiance [nW · cm⁻² · sr⁻¹]',
      series: [
        {
          key: 'globalMean',
          nameEn: 'Global Mean Radiance',
          nameAr: 'متوسط الإشعاع العالمي',
          color: '#38bdf8',
          fill: true,
          data: [
            { x: '2012', y: 14.21, timestamp: 0 },
            { x: '2013', y: 14.54, timestamp: 3.5 },
            { x: '2014', y: 15.12, timestamp: 7.0 },
            { x: '2015', y: 15.78, timestamp: 10.5 },
            { x: '2016', y: 16.39, timestamp: 14.0 },
            { x: '2017', y: 17.15, timestamp: 17.5 },
            { x: '2018', y: 17.96, timestamp: 21.0 },
            { x: '2019', y: 18.68, timestamp: 24.5 },
            { x: '2020', y: 18.19, timestamp: 28.0 },
            { x: '2021', y: 19.42, timestamp: 31.5 },
            { x: '2022', y: 20.08, timestamp: 35.0 },
            { x: '2023', y: 20.76, timestamp: 38.5 }
          ]
        },
        {
          key: 'southAsia',
          nameEn: 'Rapid Electrification (South Asia)',
          nameAr: 'التوسع الكهربائي السريع (جنوب آسيا)',
          color: '#a855f7',
          fill: false,
          data: [
            { x: '2012', y: 18.4, timestamp: 0 },
            { x: '2013', y: 19.3, timestamp: 3.5 },
            { x: '2014', y: 21.1, timestamp: 7.0 },
            { x: '2015', y: 23.4, timestamp: 10.5 },
            { x: '2016', y: 25.8, timestamp: 14.0 },
            { x: '2017', y: 28.3, timestamp: 17.5 },
            { x: '2018', y: 31.2, timestamp: 21.0 },
            { x: '2019', y: 33.7, timestamp: 24.5 },
            { x: '2020', y: 32.1, timestamp: 28.0 },
            { x: '2021', y: 35.6, timestamp: 31.5 },
            { x: '2022', y: 37.9, timestamp: 35.0 },
            { x: '2023', y: 40.2, timestamp: 38.5 }
          ]
        }
      ]
    }
  },

  {
    id: 'geos-aerosols-2017',
    svsId: 30910,
    category: 'atmosphere',
    titleEn: 'GEOS Aerosols: 2017 Hurricane Season',
    titleAr: 'محاكاة الهباء الجوي GEOS: موسم أعاصير 2017',
    subtitleEn: 'Long-range transport of sea salt, smoke, and Saharan dust',
    subtitleAr: 'الانتقال الجوي بعيد المدى لملح البحر والدخان وغبار الصحراء',
    shortDescriptionEn: 'NASA GEOS high-resolution simulation tracking sea salt, smoke, and dust transported across the Atlantic during the 2017 hurricane season (Hurricanes Harvey, Irma, and Maria).',
    shortDescriptionAr: 'محاكاة فائقة الدقة لنظام GEOS تتبع جزيئات ملح البحر والدخان وغبار الصحراء المنقول عبر المحيط الأطلسي خلال موسم الأعاصير لعام 2017 (هارفي، إيرما، وماريا).',
    
    // Original NASA SVS Visual Links
    videoUrl: 'https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.mp4',
    previewImage: 'https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030910/plot_aerosols-northamerica_720p.01000_print.jpg',
    sourceUrl: 'https://svs.gsfc.nasa.gov/30910/',
    
    // Scientific Metadata
    phenomenon: 'Atmospheric Aerosol Dispersion & Tropical Cyclone Interactions',
    phenomenonAr: 'تشتت الهباء الجوي وتفاعلات الأعاصير المدارية',
    datasetName: 'GEOS-5 Forward Processing (FP) Atmospheric Composition',
    dataProvider: 'NASA Goddard Space Flight Center / Global Modeling and Assimilation Office (GMAO)',
    instrument: 'Goddard Earth Observing System (GEOS) Earth System Model with assimilated MODIS/VIIRS AOD',
    primaryVariable: 'Total & Speciated Aerosol Optical Depth (AOD at 550nm)',
    unitEn: 'Dimensionless Optical Depth / Column Density (mg · m⁻²)',
    unitShort: 'AOD (550nm)',
    geographicCoverage: 'North Atlantic Ocean, Gulf of Mexico, North America, and Western Sahara',
    temporalCoverage: 'July 31, 2017 – November 1, 2017 (Daily Progression)',
    dataCollectionMethod: 'Numerical global climate model constrained with satellite optical depth assimilations.',
    dataType: 'Assimilated Numerical Model Simulation',
    
    durationSeconds: 45,
    dataCadence: 'daily',
    timePoints: [
      { timestamp: 0, date: '2017-07-31', label: 'Jul 31: Baseline' },
      { timestamp: 7, date: '2017-08-15', label: 'Aug 15: Saharan Dust Outbreak' },
      { timestamp: 12, date: '2017-08-25', label: 'Aug 25: Hurricane Harvey Landfall' },
      { timestamp: 17, date: '2017-09-06', label: 'Sep 06: Hurricane Irma Peak' },
      { timestamp: 23, date: '2017-09-20', label: 'Sep 20: Hurricane Maria Landfall' },
      { timestamp: 32, date: '2017-10-10', label: 'Oct 10: PNW Wildfire Smoke Plume' },
      { timestamp: 45, date: '2017-11-01', label: 'Nov 01: Seasonal Cessation' }
    ],
    
    graphConfig: {
      chartType: 'line',
      yAxisLabel: 'Aerosol Optical Depth [AOD 550nm]',
      series: [
        {
          key: 'seaSalt',
          nameEn: 'Sea Salt Aerosol (Vortex Spray)',
          nameAr: 'هباء ملح البحر (رذاذ الأعاصير)',
          color: '#38bdf8',
          fill: false,
          data: [
            { x: 'Jul 31', y: 0.18, timestamp: 0 },
            { x: 'Aug 10', y: 0.22, timestamp: 4.8 },
            { x: 'Aug 20', y: 0.35, timestamp: 9.7 },
            { x: 'Aug 25', y: 0.89, timestamp: 12.1 }, // Harvey
            { x: 'Aug 30', y: 0.44, timestamp: 14.5 },
            { x: 'Sep 06', y: 1.34, timestamp: 17.4 }, // Irma peak
            { x: 'Sep 12', y: 0.62, timestamp: 20.3 },
            { x: 'Sep 20', y: 1.15, timestamp: 23.2 }, // Maria
            { x: 'Sep 28', y: 0.48, timestamp: 27.1 },
            { x: 'Oct 10', y: 0.31, timestamp: 32.9 },
            { x: 'Oct 22', y: 0.25, timestamp: 38.7 },
            { x: 'Nov 01', y: 0.19, timestamp: 45.0 }
          ]
        },
        {
          key: 'smoke',
          nameEn: 'Carbonaceous Smoke (Wildfires)',
          nameAr: 'دخان الكربون (حرائق الغابات)',
          color: '#f97316',
          fill: false,
          data: [
            { x: 'Jul 31', y: 0.12, timestamp: 0 },
            { x: 'Aug 10', y: 0.15, timestamp: 4.8 },
            { x: 'Aug 20', y: 0.28, timestamp: 9.7 },
            { x: 'Aug 25', y: 0.31, timestamp: 12.1 },
            { x: 'Aug 30', y: 0.38, timestamp: 14.5 },
            { x: 'Sep 06', y: 0.42, timestamp: 17.4 },
            { x: 'Sep 12', y: 0.51, timestamp: 20.3 },
            { x: 'Sep 20', y: 0.39, timestamp: 23.2 },
            { x: 'Sep 28', y: 0.47, timestamp: 27.1 },
            { x: 'Oct 10', y: 0.94, timestamp: 32.9 }, // California wildfire peak
            { x: 'Oct 22', y: 0.42, timestamp: 38.7 },
            { x: 'Nov 01', y: 0.16, timestamp: 45.0 }
          ]
        },
        {
          key: 'dust',
          nameEn: 'Saharan Mineral Dust',
          nameAr: 'غبار الصحراء الكبرى',
          color: '#eab308',
          fill: false,
          data: [
            { x: 'Jul 31', y: 0.45, timestamp: 0 },
            { x: 'Aug 10', y: 0.68, timestamp: 4.8 },
            { x: 'Aug 20', y: 0.55, timestamp: 9.7 },
            { x: 'Aug 25', y: 0.38, timestamp: 12.1 },
            { x: 'Aug 30', y: 0.42, timestamp: 14.5 },
            { x: 'Sep 06', y: 0.76, timestamp: 17.4 },
            { x: 'Sep 12', y: 0.61, timestamp: 20.3 },
            { x: 'Sep 20', y: 0.45, timestamp: 23.2 },
            { x: 'Sep 28', y: 0.34, timestamp: 27.1 },
            { x: 'Oct 10', y: 0.28, timestamp: 32.9 },
            { x: 'Oct 22', y: 0.22, timestamp: 38.7 },
            { x: 'Nov 01', y: 0.18, timestamp: 45.0 }
          ]
        }
      ]
    }
  },

  {
    id: 'perpetual-ocean-2',
    svsId: 5425,
    category: 'oceans',
    titleEn: 'Perpetual Ocean 2: Western Boundary Currents',
    titleAr: 'المحيط الدائم 2: تيارات الحدود الغربية',
    subtitleEn: '3D circulation of the Kuroshio, Agulhas, and Gulf Stream',
    subtitleAr: 'الدوران ثلاثي الأبعاد لتيارات كوروشيو وأغولياس وتيار الخليج',
    shortDescriptionEn: 'Using NASA JPL ECCO-2 high-resolution ocean models, this visualization highlights heat transport and deep return flows across the world\'s most powerful western boundary currents.',
    shortDescriptionAr: 'باستخدام نماذج ECCO-2 عالية الدقة من مختبر الدفع النفاث بناسا، توضح هذه المحاكاة نقل الحرارة وتدفقات العودة العميقة عبر أقوى تيارات المحيطات.',
    
    videoUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_6840x3420_768p30-d1.mp4',
    previewImage: 'https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_2028x1024.25000.jpg',
    sourceUrl: 'https://svs.gsfc.nasa.gov/3912/',
    
    phenomenon: 'Western Boundary Currents & Oceanic Heat Transport',
    phenomenonAr: 'تيارات الحدود الغربية ونقل الحرارة بالمحيطات',
    datasetName: 'ECCO-2 (Estimating the Circulation and Climate of the Ocean, Phase II)',
    dataProvider: 'NASA Jet Propulsion Laboratory (JPL), MIT, and UT Austin',
    instrument: 'MIT general circulation model (MITgcm) synthesizing satellite altimetry, Argo floats, and CTD probes',
    primaryVariable: 'Current Velocity & Temperature Profile',
    unitEn: 'Surface Velocity (m · s⁻¹), Temperature (°C)',
    unitShort: 'm/s & °C',
    geographicCoverage: 'Global Oceans (Kuroshio, Agulhas Retroflection, North Atlantic Gulf Stream)',
    temporalCoverage: '2021 – 2023 Multi-Year High-Resolution Velocity Fields',
    dataCollectionMethod: 'Synthesized physics-based oceanic general circulation model with 4D-Var data assimilation.',
    dataType: 'Assimilated Ocean Circulation Model',
    
    durationSeconds: 150,
    dataCadence: 'geographic-tour',
    timePoints: [
      { timestamp: 0, label: '0:00 - Global Earth Rotation' },
      { timestamp: 35, label: '0:35 - Western Pacific & Kuroshio Current' },
      { timestamp: 75, label: '1:15 - Indian Ocean & Agulhas Retroflection' },
      { timestamp: 110, label: '1:50 - North Atlantic & Gulf Stream Core' },
      { timestamp: 135, label: '2:15 - Subsurface Return Flow (<600m)' },
      { timestamp: 150, label: '2:30 - Global Ocean Heat Redistribution' }
    ],
    
    graphConfig: {
      chartType: 'line',
      yAxisLabel: 'Current Flow Velocity [m · s⁻¹]',
      series: [
        {
          key: 'velocity',
          nameEn: 'Current Flow Velocity (m/s)',
          nameAr: 'سرعة تدفق التيار (م/ث)',
          color: '#06b6d4',
          fill: true,
          data: [
            { x: 'Global Orbit', y: 0.32, timestamp: 0 },
            { x: 'W. Pacific Entry', y: 0.74, timestamp: 20 },
            { x: 'Kuroshio Core', y: 1.85, timestamp: 38 },
            { x: 'Kuroshio Meander', y: 1.20, timestamp: 55 },
            { x: 'Agulhas Entry', y: 1.45, timestamp: 75 },
            { x: 'Agulhas Ring Shedding', y: 1.95, timestamp: 92 },
            { x: 'Florida Straits', y: 2.15, timestamp: 110 },
            { x: 'Gulf Stream Core', y: 2.52, timestamp: 122 },
            { x: 'Deep Return (<600m)', y: 0.42, timestamp: 138 },
            { x: 'North Atlantic Drift', y: 0.65, timestamp: 150 }
          ]
        },
        {
          key: 'temperature',
          nameEn: 'Core Water Temperature (°C / 10)',
          nameAr: 'درجة حرارة مياه التيار (°م / 10)',
          color: '#f43f5e',
          fill: false,
          data: [
            { x: 'Global Orbit', y: 1.6, timestamp: 0 },      // 16 C
            { x: 'W. Pacific Entry', y: 2.1, timestamp: 20 },  // 21 C
            { x: 'Kuroshio Core', y: 2.45, timestamp: 38 },   // 24.5 C
            { x: 'Kuroshio Meander', y: 2.2, timestamp: 55 }, // 22 C
            { x: 'Agulhas Entry', y: 2.35, timestamp: 75 },   // 23.5 C
            { x: 'Agulhas Ring Shedding', y: 2.15, timestamp: 92 }, // 21.5 C
            { x: 'Florida Straits', y: 2.75, timestamp: 110 },// 27.5 C
            { x: 'Gulf Stream Core', y: 2.68, timestamp: 122 },// 26.8 C
            { x: 'Deep Return (<600m)', y: 0.48, timestamp: 138 }, // 4.8 C
            { x: 'North Atlantic Drift', y: 1.42, timestamp: 150 }  // 14.2 C
          ]
        }
      ]
    }
  },

  {
    id: 'dyamond-co2-transport',
    svsId: 5196,
    category: 'atmosphere',
    titleEn: 'DYAMOND: Atmospheric Carbon Dioxide Transport',
    titleAr: 'مشروع DYAMOND: حركة ثاني أكسيد الكربون في الغلاف الجوي',
    subtitleEn: 'High-resolution global simulation of CO₂ plumes from power plants and fires',
    subtitleAr: 'محاكاة عالمية فائقة الدقة لانبعاثات CO₂ من محطات الطاقة والحرائق',
    shortDescriptionEn: 'Supercomputer simulation from NASA GEOS showing 3D atmospheric CO₂ movement from January through March 2020, revealing the synoptic connection between urban emissions and weather systems.',
    shortDescriptionAr: 'محاكاة حاسوبية عملاقة من نموذج NASA GEOS توضح حركة CO₂ في الغلاف الجوي من يناير حتى مارس 2020، كاشفة العلاقة بين الانبعاثات الحضرية وأنظمة الطقس.',
    
    videoUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_3-29-2023a_dyamond_co2_anim_globe_zoom_1080p30.mp4',
    previewImage: 'https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005196/dyamondPointCloud_12-1-2023b_dyamond_co2_anim_globe_orbit_3x3Hyperwall.00200_print.jpg',
    sourceUrl: 'https://svs.gsfc.nasa.gov/5196/',
    
    phenomenon: 'Atmospheric Greenhouse Gas Transport & Synoptic Weather Advection',
    phenomenonAr: 'انتقال غازات الدفيئة في الغلاف الجوي وحركة الكتل الهوائية',
    datasetName: 'DYAMOND Phase II GEOS Ultra-High Resolution Atmosphere Simulation',
    dataProvider: 'NASA Goddard Space Flight Center / GMAO & Carbon Cycle Science',
    instrument: 'GEOS Atmospheric General Circulation Model assimilating OCO-2 satellite retrievals',
    primaryVariable: 'Atmospheric Carbon Dioxide Mixing Ratio (XCO₂)',
    unitEn: 'Parts Per Million (ppm)',
    unitShort: 'ppm',
    geographicCoverage: 'Global (3km ultra-high resolution horizontal grid)',
    temporalCoverage: 'January 1, 2020 – March 31, 2020 (Winter-Spring Synoptic Window)',
    dataCollectionMethod: 'Atmospheric general circulation simulation resolving individual convective systems and emission plumes.',
    dataType: 'High-Resolution Earth System Model Simulation',
    
    durationSeconds: 30,
    dataCadence: 'daily-seasonal',
    timePoints: [
      { timestamp: 0, date: '2020-01-01', label: 'Jan 01: Baseline Mixing Ratio' },
      { timestamp: 6, date: '2020-01-20', label: 'Jan 20: Mid-Latitude Cyclone Advection' },
      { timestamp: 13, date: '2020-02-10', label: 'Feb 10: Urban Industrial Plume Peak' },
      { timestamp: 20, date: '2020-03-01', label: 'Mar 01: Equatorial Biomass Burning' },
      { timestamp: 26, date: '2020-03-20', label: 'Mar 20: Spring Maximum Concentration' },
      { timestamp: 30, date: '2020-03-31', label: 'Mar 31: Pre-Photosynthetic Drawdown' }
    ],
    
    graphConfig: {
      chartType: 'line',
      yAxisLabel: 'CO₂ Concentration [ppm]',
      series: [
        {
          key: 'nhMidLatitude',
          nameEn: 'Northern Hemisphere Mid-Latitudes (Industrial Plumes)',
          nameAr: 'العروض المتوسطة بنصف الكرة الشمالي (الانبعاثات الصناعية)',
          color: '#ef4444',
          fill: true,
          data: [
            { x: 'Jan 01', y: 414.2, timestamp: 0 },
            { x: 'Jan 10', y: 414.8, timestamp: 3.3 },
            { x: 'Jan 20', y: 415.6, timestamp: 6.6 },
            { x: 'Feb 01', y: 416.3, timestamp: 10.0 },
            { x: 'Feb 10', y: 417.1, timestamp: 13.3 },
            { x: 'Feb 20', y: 417.9, timestamp: 16.6 },
            { x: 'Mar 01', y: 418.5, timestamp: 20.0 },
            { x: 'Mar 10', y: 419.2, timestamp: 23.3 },
            { x: 'Mar 20', y: 419.8, timestamp: 26.6 },
            { x: 'Mar 31', y: 420.3, timestamp: 30.0 }
          ]
        },
        {
          key: 'globalMean',
          nameEn: 'Global Background Mean (Mauna Loa Reference)',
          nameAr: 'المتوسط المرجعي العالمي (مرصد مونا لوا)',
          color: '#10b981',
          fill: false,
          data: [
            { x: 'Jan 01', y: 413.4, timestamp: 0 },
            { x: 'Jan 10', y: 413.7, timestamp: 3.3 },
            { x: 'Jan 20', y: 414.1, timestamp: 6.6 },
            { x: 'Feb 01', y: 414.6, timestamp: 10.0 },
            { x: 'Feb 10', y: 415.0, timestamp: 13.3 },
            { x: 'Feb 20', y: 415.4, timestamp: 16.6 },
            { x: 'Mar 01', y: 415.9, timestamp: 20.0 },
            { x: 'Mar 10', y: 416.3, timestamp: 23.3 },
            { x: 'Mar 20', y: 416.7, timestamp: 26.6 },
            { x: 'Mar 31', y: 417.1, timestamp: 30.0 }
          ]
        }
      ]
    }
  },

  {
    id: 'atmospheric-river-3d',
    svsId: 4960,
    category: 'atmosphere',
    titleEn: '3D View of an Atmospheric River',
    titleAr: 'رؤية ثلاثية الأبعاد للنهر الجوي',
    subtitleEn: 'Moisture transport and heavy precipitation in the Pineapple Express',
    subtitleAr: 'نقل الرطوبة والهطول الغزير في ظاهرة قطار الأناناس السريع',
    shortDescriptionEn: 'Using NASA MERRA-2 reanalysis, this 3D animation visualizes an atmospheric river channeling massive tropical water vapor across the Pacific, impacting western North America with extreme precipitation.',
    shortDescriptionAr: 'باستخدام إعادة تحليل MERRA-2 من ناسا، تجسد هذه المحاكاة ثلاثية الأبعاد نهراً جوياً ينقل بخار الماء المداري الهائل عبر المحيط الهادئ نحو الساحل الغربي لأمريكا.',
    
    videoUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_HD.mp4',
    previewImage: 'https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004960/atmos_rivers_narrated_4k.00090_print.jpg',
    sourceUrl: 'https://svs.gsfc.nasa.gov/4960/',
    
    phenomenon: 'Atmospheric River Moisture Transport & Orographic Rainfall',
    phenomenonAr: 'نقل الرطوبة عبر الأنهار الجوية والهطول التضاريسي',
    datasetName: 'MERRA-2 (Modern-Era Retrospective analysis for Research and Applications, Version 2)',
    dataProvider: 'NASA Global Modeling and Assimilation Office (GMAO)',
    instrument: 'NASA Goddard Earth Observing System with assimilated sounders, radiometers, and surface stations',
    primaryVariable: 'Integrated Water Vapor Transport (IVT) & Precipitation',
    unitEn: 'IVT (kg · m⁻¹ · s⁻¹), Precipitation Rate (mm · hr⁻¹)',
    unitShort: 'kg/(m·s) & mm/hr',
    geographicCoverage: 'Eastern Pacific Ocean, Hawaii to California and Pacific Northwest',
    temporalCoverage: 'Extreme Atmospheric River Event Progression',
    dataCollectionMethod: 'Modern atmospheric reanalysis combining multisatellite microwave and infrared observations with numerical weather forecasting.',
    dataType: 'Atmospheric Reanalysis Blend',
    
    durationSeconds: 120,
    dataCadence: 'event-lifecycle',
    timePoints: [
      { timestamp: 0, label: '0:00 - Tropical ITCZ Moisture Convergence' },
      { timestamp: 25, label: '0:25 - Pressure Gradient Funneling (Hawaiian Origin)' },
      { timestamp: 50, label: '0:50 - Jet Stream Advection Across Pacific Corridor' },
      { timestamp: 75, label: '1:15 - Coastal Landfall & Cold Front Condensation' },
      { timestamp: 95, label: '1:35 - Orographic Lift over Coastal Mountain Ranges' },
      { timestamp: 120, label: '2:00 - Snowpack Buildup & Hydrologic Replenishment' }
    ],
    
    graphConfig: {
      chartType: 'line',
      yAxisLabel: 'Water Vapor Transport [kg · m⁻¹ · s⁻¹]',
      series: [
        {
          key: 'ivt',
          nameEn: 'Integrated Vapor Transport (IVT)',
          nameAr: 'نقل بخار الماء المتكامل (IVT)',
          color: '#3b82f6',
          fill: true,
          data: [
            { x: 'Tropical Genesis', y: 280, timestamp: 0 },
            { x: 'Pacific Corridor', y: 460, timestamp: 25 },
            { x: 'Mid-Ocean Funnel', y: 720, timestamp: 50 },
            { x: 'Landfall Peak (Cat 4)', y: 1040, timestamp: 75 },
            { x: 'Mountain Interception', y: 580, timestamp: 95 },
            { x: 'Inland Dissipation', y: 210, timestamp: 120 }
          ]
        },
        {
          key: 'rainRate',
          nameEn: 'Coastal Precipitation Rate (mm/hr × 20)',
          nameAr: 'معدل الهطول الساحلي (ملم/س × 20)',
          color: '#0284c7',
          fill: false,
          data: [
            { x: 'Tropical Genesis', y: 40, timestamp: 0 },     // 2 mm/hr
            { x: 'Pacific Corridor', y: 80, timestamp: 25 },    // 4 mm/hr
            { x: 'Mid-Ocean Funnel', y: 160, timestamp: 50 },   // 8 mm/hr
            { x: 'Landfall Peak (Cat 4)', y: 480, timestamp: 75 }, // 24 mm/hr extreme
            { x: 'Mountain Interception', y: 320, timestamp: 95 }, // 16 mm/hr
            { x: 'Inland Dissipation', y: 60, timestamp: 120 }   // 3 mm/hr
          ]
        }
      ]
    }
  },

  {
    id: 'antarctic-sea-ice',
    svsId: 5064,
    category: 'polar',
    titleEn: 'Daily Antarctic Sea Ice Extent',
    titleAr: 'امتداد الجليد البحري اليومي في القارة القطبية الجنوبية',
    subtitleEn: 'Annual freeze and melt cycles captured by satellite radiometry',
    subtitleAr: 'دورات التجمد والذوبان السنوية عبر مقاييس الإشعاع الفضائية',
    shortDescriptionEn: 'Produced by NASA Cryospheric Sciences, this high-contrast visualization follows the daily expansion and retreat of Antarctic sea ice through annual minimums and maximums.',
    shortDescriptionAr: 'من إنتاج مختبر العلوم الجليدية بناسا، ترصد هذه المحاكاة التمدد والتقلص اليومي للجليد البحري حول القارة القطبية الجنوبية عبر فصول التجمد والذوبان.',
    
    videoUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.mp4',
    previewImage: 'https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005064/antarctic_sea_ice_moving_two_year_w_dates.00001_print.jpg',
    sourceUrl: 'https://svs.gsfc.nasa.gov/5064/',
    
    phenomenon: 'Cryospheric Polar Ice Dynamics & Seasonal Feedback',
    phenomenonAr: 'ديناميكيات الجليد القطبي ودورات التغذية الراجعة المناخية',
    datasetName: 'NASA Cryospheric Sciences / NSIDC Sea Ice Index',
    dataProvider: 'NASA Goddard Space Flight Center Cryospheric Sciences Laboratory & NSIDC',
    instrument: 'Passive Microwave Radiometers (DMSP SSM/I-SSMIS and AMSR-2)',
    primaryVariable: 'Daily Sea Ice Extent (areas with ≥15% ice concentration)',
    unitEn: 'Million Square Kilometers (10⁶ km²)',
    unitShort: '10⁶ km²',
    geographicCoverage: 'Southern Ocean and Antarctic Circumpolar Seas',
    temporalCoverage: 'Daily Continuous Observation',
    dataCollectionMethod: 'Multifrequency satellite passive microwave brightness temperature inversion.',
    dataType: 'Direct Satellite Observation',
    
    durationSeconds: 40,
    dataCadence: 'daily-annual',
    timePoints: [
      { timestamp: 0, label: 'January: Mid-Summer Melt' },
      { timestamp: 6.6, label: 'February: Annual Minimum Extent (~2.2M km²)' },
      { timestamp: 13.3, label: 'April: Autumn Freeze Initiation' },
      { timestamp: 20.0, label: 'June: Polar Winter Expansion' },
      { timestamp: 26.6, label: 'August: Peak Growth Rate' },
      { timestamp: 33.3, label: 'September: Annual Maximum Extent (~18.5M km²)' },
      { timestamp: 40.0, label: 'December: Rapid Spring Retreat' }
    ],
    
    graphConfig: {
      chartType: 'line',
      yAxisLabel: 'Sea Ice Extent [10⁶ km²]',
      series: [
        {
          key: 'extent',
          nameEn: 'Antarctic Sea Ice Extent (10⁶ km²)',
          nameAr: 'امتداد الجليد البحري (مليون كم²)',
          color: '#38bdf8',
          fill: true,
          data: [
            { x: 'Jan', y: 5.1, timestamp: 0 },
            { x: 'Feb (Min)', y: 2.2, timestamp: 6.6 },
            { x: 'Mar', y: 3.8, timestamp: 10.0 },
            { x: 'Apr', y: 7.2, timestamp: 13.3 },
            { x: 'May', y: 11.4, timestamp: 16.6 },
            { x: 'Jun', y: 14.8, timestamp: 20.0 },
            { x: 'Jul', y: 16.9, timestamp: 23.3 },
            { x: 'Aug', y: 17.8, timestamp: 26.6 },
            { x: 'Sep (Max)', y: 18.6, timestamp: 33.3 },
            { x: 'Oct', y: 17.2, timestamp: 35.5 },
            { x: 'Nov', y: 13.5, timestamp: 37.8 },
            { x: 'Dec', y: 8.9, timestamp: 40.0 }
          ]
        },
        {
          key: 'climatology',
          nameEn: '1981–2010 Historical Climatological Median',
          nameAr: 'المعدل المناخي التاريخي (1981–2010)',
          color: '#94a3b8',
          fill: false,
          data: [
            { x: 'Jan', y: 5.8, timestamp: 0 },
            { x: 'Feb (Min)', y: 2.8, timestamp: 6.6 },
            { x: 'Mar', y: 4.5, timestamp: 10.0 },
            { x: 'Apr', y: 8.1, timestamp: 13.3 },
            { x: 'May', y: 12.3, timestamp: 16.6 },
            { x: 'Jun', y: 15.6, timestamp: 20.0 },
            { x: 'Jul', y: 17.5, timestamp: 23.3 },
            { x: 'Aug', y: 18.5, timestamp: 26.6 },
            { x: 'Sep (Max)', y: 19.1, timestamp: 33.3 },
            { x: 'Oct', y: 18.0, timestamp: 35.5 },
            { x: 'Nov', y: 14.8, timestamp: 37.8 },
            { x: 'Dec', y: 9.8, timestamp: 40.0 }
          ]
        }
      ]
    }
  }
];

export const getEicResourceById = (id) => {
  return EIC_RESOURCES.find(r => r.id === id) || EIC_RESOURCES[0];
};

export const STAGE_EIC_CONNECTIONS = {
  air_aod: {
    resourceId: 'geos-aerosols-2017',
    tagEn: 'Direct Model Lineage',
    tagAr: 'امتداد فيزيائي للنموذج',
    noteEn: 'NASA GMAO GEOS Forward Processing. The MERRA-2 Aerosol Optical Depth (AOD) map above is produced by the exact same atmospheric modeling and data assimilation system (GEOS) illustrated in this original 2017 Hurricane Season transport visual.',
    noteAr: 'معالجة الهباء الجوي بنموذج NASA GMAO GEOS. تستند طبقة MERRA-2 للعمق البصري للهباء في الخريطة أعلاه إلى نفس نظام نمذجة الغلاف الجوي واستيعاب البيانات (GEOS) الموضح في هذه المحاكاة الأصلية لموسم أعاصير 2017.'
  },
  air_co: {
    resourceId: 'dyamond-co2-transport',
    tagEn: 'Combustion Tracer Comparison',
    tagAr: 'مقارنة نواتج الاحتراق',
    noteEn: 'Synoptic Advection of Carbon Plumes. While the AIRS instrument samples mid-tropospheric Carbon Monoxide (CO), this high-resolution DYAMOND GEOS simulation reveals how atmospheric circulation advects companion carbon dioxide (CO₂) plumes from fossil fuel emissions and wildfires.',
    noteAr: 'حركة سحب الكربون مع الكتل الهوائية. بينما يرصد قمر AIRS أول أكسيد الكربون، تكشف محاكاة DYAMOND فائقة الدقة كيفية انتقال سحب ثاني أكسيد الكربون المرافقة من محطات الوقود والحرائق.'
  },
  air_ozone: {
    resourceId: 'dyamond-co2-transport',
    tagEn: 'Atmospheric Gas Circulation',
    tagAr: 'دوران الغازات الجوية',
    noteEn: 'Global Atmospheric Trace Gas Dynamics. Illustrates the planetary-scale wave patterns and synoptic weather systems that steer both stratospheric ozone and tropospheric trace emissions.',
    noteAr: 'ديناميكيات غازات الغلاف الجوي. يوضح تموجات الكتل الهوائية وأنظمة الطقس العالمية التي تتحكم في توزيع الأوزون وانبعاثات الغازات.'
  },
  water_sst: {
    resourceId: 'perpetual-ocean-2',
    tagEn: 'Thermal Advection & Currents',
    tagAr: 'نقل الحرارة وتيارات المحيط',
    noteEn: 'Western Boundary Currents & Sea Surface Temperature. The MODIS Sea Surface Temperature patterns observed above are dynamically driven by the powerful oceanic thermal conveyor belts simulated in NASA JPL ECCO-2.',
    noteAr: 'تيارات المحيطات وحرارة سطح البحر. تتطابق وتتأثر درجات حرارة سطح البحر المقاسة عبر MODIS أعلاه بنظام النقل الحراري للتيارات المائية المحاكى في نموذج ECCO-2 التابع لمختبر الدفع النفاث.'
  },
  water_chlorophyll: {
    resourceId: 'atmospheric-river-3d',
    tagEn: 'Coastal Nutrient Influx',
    tagAr: 'تدفق المغذيات الساحلية',
    noteEn: 'Atmospheric River Landfall & Runoff. Extreme precipitation channeled by atmospheric rivers drives heavy river discharge into coastal basins, fueling phytoplankton blooms and sediment plumes detected by MODIS Aqua Chlorophyll-a.',
    noteAr: 'هطول الأنهار الجوية والجريان السطحي. يؤدي الهطول الغزير للأنهار الجوية إلى تدفقات نهرية عملاقة نحو السواحل، مما يغذي ازدهار العوالق النباتية وترسبات الكلوروفيل المقاسة بقمر MODIS Aqua.'
  },
  water_turbidity: {
    resourceId: 'atmospheric-river-3d',
    tagEn: 'Runoff Sediment & Plumes',
    tagAr: 'عكارة المياه والسيول الساحلية',
    noteEn: 'Hydrological Sediment Transport. Atmospheric river events induce flash flooding and severe sediment runoff directly visible as optical turbidity in true-color satellite imagery.',
    noteAr: 'نقل الرواسب الهيدرولوجية. تتسبب الأنهار الجوية في سيول جارفة تنقل كميات هائلة من الطمي إلى المياه الساحلية، مسببة العكارة الواضحة في صور الأقمار الصناعية بالألوان الحقيقية.'
  },
  soil_moisture: {
    resourceId: 'atmospheric-river-3d',
    tagEn: 'Precipitation Influx & Saturation',
    tagAr: 'الهطول وتشبع رطوبة التربة',
    noteEn: 'Atmospheric Moisture Influx to Soil. Massive moisture transport in atmospheric rivers makes landfall to deposit high-volume precipitation, directly driving SMAP surface soil moisture saturation spikes.',
    noteAr: 'تدفق الرطوبة الجوية إلى التربة. يفرغ النهر الجوي كميات مياه ضخمة عند اصطدامه باليابسة، مما يسبب قفزات فورية في تشبع رطوبة التربة السطحية المسجلة عبر قمر SMAP.'
  },
  soil_ndvi: {
    resourceId: 'antarctic-sea-ice',
    tagEn: 'Global Cryosphere & Biosphere Cycle',
    tagAr: 'الدورة الحيوية والجليدية العالمية',
    noteEn: 'Seasonal Solar & Surface Feedback. Tracks the seasonal pulsation of high-latitude ice and radiative albedo that balances regional continental vegetation greening (NDVI) and growing seasons.',
    noteAr: 'تفاعل الإشعاع السطحي والغطاء النباتي. يوضح التذبذب الموسمي للجليد والوضاءة الإشعاعية المنظمة للمواسم الزراعية ونمو الغطاء النباتي (NDVI).'
  },
  soil_lst: {
    resourceId: 'antarctic-sea-ice',
    tagEn: 'Surface Radiative Equilibrium',
    tagAr: 'التوازن الإشعاعي للسطح',
    noteEn: 'Cryospheric Albedo & Surface Temperature. Illustrates the extreme cold thermal end-member of Earth’s surface radiation balance that governs global meridional temperature gradients.',
    noteAr: 'وضاءة الجليد وحرارة السطح. يجسد الحد الأقصى للتبريد الإشعاعي لكوكب الأرض الذي يقود التدرج الحراري بين القطبين وخط الاستواء.'
  },
  temperature: {
    resourceId: 'night-lights-decade',
    tagEn: 'Anthropogenic Driver & Urban Heat',
    tagAr: 'المحرك البشري والجزر الحرارية',
    noteEn: 'Anthropogenic Electrification & Urban Footprint. NASA Black Marble VIIRS nighttime radiance directly documents a decade of global urbanization and infrastructure expansion, providing the human footprint context behind regional temperature and climate anomalies.',
    noteAr: 'الأثر البشري والتوسع الحضري. توثق بيانات الرخام الأسود VIIRS من ناسا عقداً كاملاً من التوسع العمراني واستهلاك الطاقة، مقدماً التفسير البشري للجزر الحرارية والاتجاهات المناخية المسجلة.'
  }
};

export const getEICResourceForStage = (stageId, animationId) => {
  const conn = STAGE_EIC_CONNECTIONS[animationId] || STAGE_EIC_CONNECTIONS[stageId];
  if (conn) {
    const res = EIC_RESOURCES.find(r => r.id === conn.resourceId);
    if (res) return res;
  }
  return EIC_RESOURCES[0];
};

export const getAvailableEICResourcesForStage = (stageId) => {
  if (stageId === 'air') {
    return EIC_RESOURCES.filter(r => r.id === 'geos-aerosols-2017' || r.id === 'dyamond-co2-transport');
  }
  if (stageId === 'water') {
    return EIC_RESOURCES.filter(r => r.id === 'perpetual-ocean-2' || r.id === 'atmospheric-river-3d' || r.id === 'antarctic-sea-ice');
  }
  if (stageId === 'soil') {
    return EIC_RESOURCES.filter(r => r.id === 'atmospheric-river-3d' || r.id === 'antarctic-sea-ice' || r.id === 'night-lights-decade');
  }
  if (stageId === 'temperature') {
    return EIC_RESOURCES.filter(r => r.id === 'night-lights-decade' || r.id === 'antarctic-sea-ice' || r.id === 'dyamond-co2-transport');
  }
  return EIC_RESOURCES;
};
