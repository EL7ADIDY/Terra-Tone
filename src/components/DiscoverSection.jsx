import React, { useState } from 'react';
import { HelpCircle, Eye, Volume2, ArrowUpDown, Sparkles, Check, Play, Square } from 'lucide-react';
import { playEICTone } from '../services/eic/eicAudioService';
import { EIC_RESOURCES } from '../services/eic/eicResources';
import { ensureAudioContextRunning } from '../utils/audioUtils';

export function DiscoverSection({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  // State for Dual Audition Comparison Tool
  const [activePreset, setActivePreset] = useState(0);
  const [playingSlot, setPlayingSlot] = useState(null); // 'A' | 'B' | null

  const comparisonPresets = [
    {
      id: 'air-contrast',
      title: isArabic ? 'مقارنة نقاء الهواء: القطب الشمالي ضد مركز صناعي' : 'Air Quality: Pristine Arctic vs Industrial Hub',
      desc: isArabic
        ? 'استمع إلى الفرق الصوتي بين هواء القطب النقي ذو الهباء المنخفض، مقابل الكثافة العالية للتلوث الصناعي والعواصف الغبارية.'
        : 'Contrast clean background atmosphere against extreme particulate loading from heavy industry and dust storms.',
      slotA: {
        title: isArabic ? 'القطب الشمالي النقي (AOD 0.06)' : 'Pristine Arctic (AOD 0.06)',
        desc: isArabic ? 'تردد خافت منخفض (C3 ~ 131 Hz) يعكس صفاء الهواء.' : 'Deep low frequency (C3 ~ 131 Hz) indicating clean atmospheric transparency.',
        resourceId: 'geos-aerosols-2017',
        val: 0.06
      },
      slotB: {
        title: isArabic ? 'مركز صناعي ملوث (AOD 0.95)' : 'Dense Industrial Hub (AOD 0.95)',
        desc: isArabic ? 'تردد حاد مرتفع (C6 ~ 1047 Hz) يعكس حجب الضوء واحتجاز الملوثات.' : 'Soaring high frequency (C6 ~ 1047 Hz) signaling severe aerosol optical depth.',
        resourceId: 'geos-aerosols-2017',
        val: 0.95
      }
    },
    {
      id: 'co2-decade',
      title: isArabic ? 'تراكم ثاني أكسيد الكربون: عقد من الانبعاثات' : 'Carbon Dioxide: 2012 Baseline vs 2023 Modern',
      desc: isArabic
        ? 'لاحظ ارتفاع طبقة الصوت الإجمالية الناتجة عن تراكم أكثر من 25 جزء في المليون من غازات الاحتباس الحراري عبر عقد من الزمن.'
        : 'Notice the distinct upward pitch shift driven by 25+ ppm of atmospheric CO₂ accumulation over a decade.',
      slotA: {
        title: isArabic ? 'خط الأساس لعام 2012 (393.8 ppm)' : 'Year 2012 Baseline (393.8 ppm)',
        desc: isArabic ? 'نغمة قرار دافئة ومستقرة نسبياً.' : 'Warm foundational pitch in the lower-mid register.',
        resourceId: 'dyamond-co2-transport',
        val: 393.8
      },
      slotB: {
        title: isArabic ? 'المستوى المسجل لعام 2023 (421.3 ppm)' : 'Year 2023 Record (421.3 ppm)',
        desc: isArabic ? 'طبقة نغمية أكثر حدة مع رنين مضاعف يعكس الطاقة المحتبسة.' : 'Higher register with energized harmonics reflecting amplified radiative forcing.',
        resourceId: 'dyamond-co2-transport',
        val: 421.3
      }
    },
    {
      id: 'ocean-thermal',
      title: isArabic ? 'تيارات المحيط: المياه القطبية مقابل تيار الخليج الدافئ' : 'Ocean Thermal: Polar Waters vs Gulf Stream Current',
      desc: isArabic
        ? 'استمع إلى الفرق في الطاقة الحركية ودرجة الحرارة بين المسطحات المائية القطبية الباردة والتيارات الاستوائية السريعة.'
        : 'Experience the kinetic energy and thermal variance between subpolar gyres and the roaring tropical Gulf Stream.',
      slotA: {
        title: isArabic ? 'مياه القطب الباردة (1.2°C)' : 'Polar Subpolar Water (1.2°C)',
        desc: isArabic ? 'نغمة بحرية عميقة وبطيئة تعكس الخمول الحراري.' : 'Sub-bass aquatic thud indicating near-freezing thermal inertia.',
        resourceId: 'perpetual-ocean-2',
        val: 1.2
      },
      slotB: {
        title: isArabic ? 'تيار الخليج الدافئ (27.8°C)' : 'Warm Gulf Stream Core (27.8°C)',
        desc: isArabic ? 'إيقاع ماريمبا سريع ومشرق يعبر عن سرعة تدفق الحرارة.' : 'Bright, agile aquatic resonance reflecting massive thermal convection.',
        resourceId: 'perpetual-ocean-2',
        val: 27.8
      }
    },
    {
      id: 'rain-river',
      title: isArabic ? 'الأنهار الجوية: الرذاذ الخفيف مقابل هطول السيول الغزيرة' : 'Atmospheric River: Light Drizzle vs Torrential Deluge',
      desc: isArabic
        ? 'استمع إلى تسارع نقرات الماريمبا المائية مع تدفق ملايين الأطنان من بخار الماء في الغلاف الجوي.'
        : 'Experience the cascade of dual-tap raindrop plinks accelerating from gentle mist to torrential precipitation.',
      slotA: {
        title: isArabic ? 'رذاذ خفيف (3 mm/h)' : 'Light Drizzle (3 mm/h)',
        desc: isArabic ? 'نقرات ماريمبا خشبية متفرقة وهادئة.' : 'Sparse, gentle wooden marimba drops.',
        resourceId: 'atmospheric-river-3d',
        val: 3
      },
      slotB: {
        title: isArabic ? 'طوفان نهري جوي (68 mm/h)' : 'Atmospheric Deluge (68 mm/h)',
        desc: isArabic ? 'شلال إيقاعي سريع يحاكي هطول الأمطار الغزيرة.' : 'Rapid dual-tap droplet cascade simulating intense rainfall.',
        resourceId: 'atmospheric-river-3d',
        val: 68
      }
    },
    {
      id: 'polar-ice',
      title: isArabic ? 'الجليد القطبي: ذوبان الصيف مقابل تجمد الشتاء' : 'Cryosphere: Summer Melt Minimum vs Winter Freeze Peak',
      desc: isArabic
        ? 'لاحظ رنين الزجاج البلوري البارد الحاد الذي يتصاعد مع تمدد الغطاء الجليدي القطبي عبر ملايين الكيلومترات.'
        : 'Hear the high crystalline glass bell resonance and frost harmonics expanding across the frozen cryosphere.',
      slotA: {
        title: isArabic ? 'أدنى ذوبان صيفي (4.2 M km²)' : 'Summer Melt Minimum (4.2 M km²)',
        desc: isArabic ? 'رنين جليدي خافت ومنخفض يعكس انحسار الجليد.' : 'Lower frosted glass pitch reflecting retreated sea ice pack.',
        resourceId: 'antarctic-sea-ice',
        val: 4.2
      },
      slotB: {
        title: isArabic ? 'ذروة التجمد الشتوي (18.5 M km²)' : 'Winter Freeze Peak (18.5 M km²)',
        desc: isArabic ? 'رنين بلوري ساطع وحاد يوضح اتساع القشرة الجليدية.' : 'Brilliant, piercing crystal overtone signaling vast sea ice coverage.',
        resourceId: 'antarctic-sea-ice',
        val: 18.5
      }
    },
    {
      id: 'urban-lights',
      title: isArabic ? 'أضواء الأرض: الساحل الريفي مقابل المدن الكبرى' : 'Night Lights: Rural Darkness vs Megacity Radiance',
      desc: isArabic
        ? 'تباين نغمات الرنين الكهربائي الرقمي بين ظلمة السماء الريفية والوهج الساطع للعواصم العالمية.'
        : 'Contrast the gentle hum of rural areas against the sparkling FM electric chimes of major metropolitan centers.',
      slotA: {
        title: isArabic ? 'سماء ريفية مظلمة (4 nW)' : 'Rural Dark Sky (4 nW)',
        desc: isArabic ? 'نغمة إلكترونية هادئة مع رنين طفيف.' : 'Quiet digital bell chime in low harmonic register.',
        resourceId: 'night-lights-decade',
        val: 4
      },
      slotB: {
        title: isArabic ? 'إشعاع عاصمة عملاقة (120 nW)' : 'Megacity Radiance (120 nW)',
        desc: isArabic ? 'أجراس كهربائية متلألئة ذات رنين معدني ساطع.' : 'Shimmering FM bell synth with sparkling high overtones.',
        resourceId: 'night-lights-decade',
        val: 120
      }
    }
  ];

  const currentPreset = comparisonPresets[activePreset];

  const playSlotTone = async (slotKey) => {
    const slot = slotKey === 'A' ? currentPreset.slotA : currentPreset.slotB;
    const res = EIC_RESOURCES.find(r => r.id === slot.resourceId) || EIC_RESOURCES[0];

    await ensureAudioContextRunning();
    setPlayingSlot(slotKey);
    playEICTone(res, slot.val, 0.85);

    setTimeout(() => {
      setPlayingSlot(null);
    }, 600);
  };

  return (
    <section id="discover" className="discover-section">
      <div className="section-header-block">
        <span className="section-eyebrow">
          {isArabic ? 'دليل الإدراك والتحليل' : 'DECODING GUIDE'}
        </span>
        <h2 className="section-title">
          {isArabic ? 'اكتشف ما تستمع إليه' : 'Discover What You Are Hearing'}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? 'كيف تقرأ الأذن البشرية أنماط الكوكب المناخية؟ دليل فك شفرة الترددات والجرس الصوتي'
            : 'Unlocking the scientific meaning behind acoustics: how frequency, timbre, and cadence encode Earth observations.'}
        </p>
      </div>

      {/* 4 Fundamental Scientific Mapping Cards */}
      <div className="mapping-principles-grid">
        <div className="principle-card">
          <div className="principle-number">01</div>
          <h3 className="principle-title">{isArabic ? 'طبقة الصوت (التردد Hz)' : 'Pitch & Frequency'}</h3>
          <p className="principle-text">
            {isArabic
              ? 'تتوافق شدة القياس مباشرة مع التردد: كلما ارتفعت درجات الحرارة أو زاد تركيز ثاني أكسيد الكربون أو تكاثف التلوث، ارتفعت طبقة الصوت إلى نغمات أكثر حدة.'
              : 'Direct proportional relationship: higher temperatures, thicker aerosols, or elevated ppm concentrations trigger higher acoustic frequencies in Hertz.'}
          </p>
          <div className="principle-tag">LOW VAL = BASS • HIGH VAL = TREBLE</div>
        </div>

        <div className="principle-card">
          <div className="principle-number">02</div>
          <h3 className="principle-title">{isArabic ? 'جرس الآلة الفيزيائي' : 'Acoustic Timbre'}</h3>
          <p className="principle-text">
            {isArabic
              ? 'تمتلك كل ظاهرة هوية صوتية خاصة: الرياح للهباء الجوي، الماريمبا المائية للتيارات البحرية، والأجراس الزجاجية النقية لصفائح الجليد القطبي.'
              : 'Each domain possesses an acoustic identity: resonant wind for aerosols, percussive fluid drops for rainfall, and crystalline bells for polar sea ice.'}
          </p>
          <div className="principle-tag">PHYSICAL PHENOMENON TIMBRES</div>
        </div>

        <div className="principle-card">
          <div className="principle-number">03</div>
          <h3 className="principle-title">{isArabic ? 'الأنماط والدورات السنوية' : 'Seasonal Rhythms'}</h3>
          <p className="principle-text">
            {isArabic
              ? 'تظهر الدورات الموسمية بوضوح: يلاحظ المستمع نغمات منخفضة في فصل الصيف مع امتصاص الغابات للكربون، ونغمات صاعدة في الشتاء مع تراجع التمثيل الضوئي.'
              : 'Annual cycles produce recognizable waves: hear the dip during Northern Hemisphere summer photosynthesis and the peak during winter dormancy.'}
          </p>
          <div className="principle-tag">BIOSPHERE BREATHING</div>
        </div>

        <div className="principle-card">
          <div className="principle-number">04</div>
          <h3 className="principle-title">{isArabic ? 'المؤشرات الشاذة والقصوى' : 'Anomalies & Disruption'}</h3>
          <p className="principle-text">
            {isArabic
              ? 'القفزات النغمية الحادة غير المتوقعة تدل فوراً على حرائق غابات مفاجئة، عواصف رملية، أو انخفاض ملحوظ كالذي حدث أثناء فترات الإغلاق في 2020.'
              : 'Abrupt sonic leaps immediately signal anomalies: sudden wildfire smoke outbreaks, atmospheric river landfalls, or the noticeable 2020 pandemic dip.'}
          </p>
          <div className="principle-tag">INSTANT EAR DETECTION</div>
        </div>
      </div>

      {/* Interactive Dual Audition Comparison Module */}
      <div className="comparison-module-card">
        <div className="comp-header">
          <div className="comp-title-group">
            <ArrowUpDown size={20} className="comp-icon" />
            <h3 className="comp-title">
              {isArabic ? 'مختبر المقارنة السمعية التفاعلي' : 'Interactive Acoustic Comparison Lab'}
            </h3>
          </div>
          <span className="comp-badge">{isArabic ? 'مقارنة بيئية فورية' : 'DUAL AUDITION'}</span>
        </div>

        <p className="comp-desc">
          {isArabic
            ? 'اختر إحدى المقارنات العلمية ثم استمع للعينتين لتختبر بنفسك كيف تبدو الظروف البيئية المختلفة في العالم الحقيقي.'
            : 'Select a scientific scenario and listen to both samples to experience how contrasting environmental states produce distinct acoustic signatures.'}
        </p>

        {/* Preset Selector Tabs */}
        <div className="comp-tabs-bar">
          {comparisonPresets.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePreset(idx);
                setPlayingSlot(null);
              }}
              className={`comp-tab-btn ${activePreset === idx ? 'active' : ''}`}
            >
              {preset.title}
            </button>
          ))}
        </div>

        {/* Dual Audition Player Slots */}
        <div className="comp-slots-grid">
          {/* Slot A */}
          <div className={`comp-slot-card ${playingSlot === 'A' ? 'is-sounding' : ''}`}>
            <div className="slot-badge slot-a">SAMPLE A</div>
            <h4 className="slot-title">{currentPreset.slotA.title}</h4>
            <p className="slot-desc">{currentPreset.slotA.desc}</p>
            <button
              onClick={() => playSlotTone('A')}
              className="slot-audition-btn"
            >
              {playingSlot === 'A' ? <Volume2 size={18} className="pulse-icon" /> : <Play size={18} fill="currentColor" />}
              <span>{isArabic ? 'استمع إلى العينة (أ)' : 'Audition Sample A'}</span>
            </button>
          </div>

          <div className="comp-slots-vs">
            <span className="vs-circle">VS</span>
          </div>

          {/* Slot B */}
          <div className={`comp-slot-card ${playingSlot === 'B' ? 'is-sounding' : ''}`}>
            <div className="slot-badge slot-b">SAMPLE B</div>
            <h4 className="slot-title">{currentPreset.slotB.title}</h4>
            <p className="slot-desc">{currentPreset.slotB.desc}</p>
            <button
              onClick={() => playSlotTone('B')}
              className="slot-audition-btn"
            >
              {playingSlot === 'B' ? <Volume2 size={18} className="pulse-icon" /> : <Play size={18} fill="currentColor" />}
              <span>{isArabic ? 'استمع إلى العينة (ب)' : 'Audition Sample B'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
