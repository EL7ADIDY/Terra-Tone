import React, { useState } from 'react';
import { Satellite, Radio, Headphones, Music, Waves, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ScienceSection({ lang = 'en' }) {
  const [activeStep, setActiveStep] = useState(0);
  const isArabic = lang === 'ar';

  const steps = [
    {
      step: '01',
      title: isArabic ? 'جمع البيانات من الفضاء' : 'COLLECT',
      subtitle: isArabic ? 'استشعار الأرض عن بُعد بواسطة أقمار ناسا' : 'Satellite Earth Observation',
      icon: Satellite,
      badge: 'NASA SATELLITES & MISSIONS',
      description: isArabic
        ? 'تقوم أساطيل ناسا الفضائية (MODIS, VIIRS, GEDI, OCO-2, SMAP) بمسح كوكب الأرض بشكل مستمر، لقياس درجات الحرارة، انبعاثات الكربون، الغطاء النباتي، ورطوبة التربة عبر أطياف ضوئية ورادارية متقدمة.'
        : 'NASA orbital constellations (MODIS, VIIRS, OCO-2, GEDI, and SMAP) continuously monitor planetary vital signs—measuring thermal radiance, carbon flux, aerosol density, and moisture levels.',
      bulletPoints: isArabic
        ? ['تغطية عالمية بدقة عالية', 'قياسات طيفية متعددة الأطوال', 'تحديثات مستمرة عبر شبكات GIBS و POWER']
        : ['Continuous global orbital telemetry', 'Multi-spectral & radiometric measurements', 'Calibrated geophysical datasets (ppm, Kelvin, AOD)']
    },
    {
      step: '02',
      title: isArabic ? 'التحويل الرياضي والموسيقي' : 'TRANSFORM',
      subtitle: isArabic ? 'خوارزميات تحويل القياسات الفيزيائية إلى ترددات ونغمات' : 'Data-to-Sound Translation',
      icon: Waves,
      badge: 'SONIFICATION ALGORITHMS',
      description: isArabic
        ? 'نقوم بتحويل الأرقام الخام إلى خصائص صوتية دقيقة: تتطابق قيم القياس المرتفعة مع ترددات نغمية أعلى، وتحدد كثافة الظواهر جرس الصوت وطبقاته الهارمونية، لإنتاج مقياس خماسي مريح للأذن يسهل تمييزه.'
        : 'Scientific metrics are systematically mapped into acoustic parameters: numerical intensity scales to pitch frequency (Hz), variability governs timbre and resonance, and time steps translate into tempo.',
      bulletPoints: isArabic
        ? ['المقياس الخماسي لضمان انسجام النغمات', 'تلوين نغمي يعبر عن طبيعة كل ظاهرة', 'حساب الفروق المعيارية لإبراز الأنماط الشاذة']
        : ['Harmonic pentatonic quantization for acoustic clarity', 'Timbral synthesis reflecting instrument physics', 'Auditory cues for historical records and anomalies']
    },
    {
      step: '03',
      title: isArabic ? 'الاستماع والإدراك الحسي' : 'LISTEN',
      subtitle: isArabic ? 'اكتشاف التغيرات المناخية عبر حاسة السمع' : 'Auditory Planetary Insight',
      icon: Headphones,
      badge: 'COGNITIVE PERCEPTION',
      description: isArabic
        ? 'تمتلك الأذن البشرية قدرة استثنائية على تمييز التغيرات الطفيفة والأنماط المعقدة في التردد والإيقاع في نفس اللحظة، مما يتيح لك "سماع" تنفس الغابات مع الفصول وارتفاع حرارة المحيطات دون الحاجة لقراءة جداول معقدة.'
        : 'The human auditory system excels at detecting subtle micro-variations and temporal polyrhythms simultaneously—allowing listeners to hear seasonal biosphere breathing and oceanic circulation instinctively.',
      bulletPoints: isArabic
        ? ['إدراك الأنماط الموسمية والدورات الطبيعية', 'اكتشاف فوري للمؤشرات المناخية القصوى', 'تجربة شاملة وشاملة لذوي التحديات البصرية']
        : ['Intuitive recognition of seasonal rhythms', 'Instant auditory detection of extreme events', 'Accessible exploration for visually impaired researchers']
    }
  ];

  return (
    <section id="science" className="science-section">
      <div className="section-header-block">
        <span className="section-eyebrow">
          {isArabic ? 'كيف يتحول كوكب الأرض إلى معزوفة' : 'HOW IT WORKS'}
        </span>
        <h2 className="section-title">
          {isArabic ? 'العلم خلف الصوت البيئي' : 'The Science of Sonification'}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? 'رحلة البيانات من مجسات الفضاء إلى الأذن البشرية في ثلاث مراحل متتالية'
            : 'How raw NASA satellite observations are transformed into meaningful, harmonic acoustic landscapes.'}
        </p>
      </div>

      {/* Interactive Process Pipeline Graphic */}
      <div className="science-pipeline-visual">
        <div className="pipeline-flow-line" />
        <div className="pipeline-nodes-grid">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = activeStep === idx;
            return (
              <div
                key={s.step}
                className={`pipeline-node-card ${isCurrent ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveStep(idx); }}
              >
                <div className="node-step-tag">{s.step}</div>
                <div className="node-icon-bubble">
                  <Icon size={24} />
                </div>
                <h3 className="node-step-title">{s.title}</h3>
                <span className="node-step-sub">{s.subtitle}</span>

                {/* Satellite Beaming Animation in Step 1 */}
                {idx === 0 && (
                  <div className="node-anim-preview sat-orbit-anim">
                    <div className="orbit-track" />
                    <div className="orbiting-sat" />
                    <div className="beaming-pulses" />
                  </div>
                )}

                {/* Waveform Transform Animation in Step 2 */}
                {idx === 1 && (
                  <div className="node-anim-preview wave-bars-anim">
                    <span className="wave-bar b1" />
                    <span className="wave-bar b2" />
                    <span className="wave-bar b3" />
                    <span className="wave-bar b4" />
                    <span className="wave-bar b5" />
                  </div>
                )}

                {/* Acoustic Soundscape Ripple in Step 3 */}
                {idx === 2 && (
                  <div className="node-anim-preview ripple-circle-anim">
                    <span className="sound-ripple r1" />
                    <span className="sound-ripple r2" />
                    <span className="sound-ripple r3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Step Detailed Breakdown Card */}
      <div className="science-detail-card">
        <div className="detail-card-header">
          <div className="detail-step-badge">{steps[activeStep].badge}</div>
          <h3 className="detail-title">{steps[activeStep].title} — {steps[activeStep].subtitle}</h3>
        </div>
        <p className="detail-description">{steps[activeStep].description}</p>
        <div className="detail-bullets-grid">
          {steps[activeStep].bulletPoints.map((bullet, i) => (
            <div key={i} className="bullet-item">
              <CheckCircle2 size={16} className="bullet-check" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
