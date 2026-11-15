import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageUp, Play, RotateCcw, Square, Volume2, ShieldCheck } from 'lucide-react';
import { getAudioContext, getAudioAnalyser, ensureAudioContextRunning } from '../utils/audioUtils';

/*
 * "Turn your image into sound" — ported from the Terra Tone game's Learning Web.
 * Same mapping as the game:
 *   image (scaled to ≤640 px) → 48 vertical strips × 48 samples each
 *   → mean Rec. 709 luminance per strip (transparent pixels skipped)
 *   → linear pitch 220–880 Hz, constant volume, 8-second left-to-right scan.
 * Everything runs in the browser; the image never leaves the device.
 */
const BINS = 48;
const SAMPLES = 48;
const SCAN_SECONDS = 8;
const MIN_HZ = 220;
const MAX_HZ = 880;
const MAX_SIDE = 640;
const MAX_BYTES = 8 * 1024 * 1024;
const TYPES = ['image/png', 'image/jpeg', 'image/webp'];
const NOTE_AMPLITUDE = 0.14 * 0.75; // game: 0.14 × default listening volume

const toHz = (v) => MIN_HZ + (MAX_HZ - MIN_HZ) * Math.max(0, Math.min(1, v));

function stripBrightness(pixels, width, height) {
  const values = [];
  for (let i = 0; i < BINS; i++) {
    const x = Math.min(width - 1, Math.floor(((i + 0.5) * width) / BINS));
    let sum = 0;
    let n = 0;
    for (let j = 0; j < SAMPLES; j++) {
      const y = Math.min(height - 1, Math.floor(((j + 0.5) * height) / SAMPLES));
      const p = (y * width + x) * 4;
      if (pixels[p + 3] < 128) continue;
      sum += (0.2126 * pixels[p] + 0.7152 * pixels[p + 1] + 0.0722 * pixels[p + 2]) / 255;
      n++;
    }
    values.push(n ? sum / n : null);
  }
  return values;
}

function strikeTone(ctx, frequency) {
  const out = getAudioAnalyser() || ctx.destination;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const now = ctx.currentTime;
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(NOTE_AMPLITUDE, now + 0.02);
  gain.gain.setValueAtTime(NOTE_AMPLITUDE, now + 0.12);
  gain.gain.linearRampToValueAtTime(0, now + 0.16);
  osc.connect(gain).connect(out);
  osc.start(now);
  osc.stop(now + 0.17);
  osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  return osc;
}

export function ImageSonifierSection({ lang = 'en' }) {
  const ar = lang === 'ar';
  const T = (en, arText) => (ar ? arText : en);

  const canvasRef = useRef(null);
  const inputRef = useRef(null);
  const playbackRef = useRef(null);
  const [values, setValues] = useState(null);
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | ready | playing | done | error
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0); // 0..1
  const [current, setCurrent] = useState(-1);
  const [dragging, setDragging] = useState(false);

  const stop = useCallback(() => {
    const pb = playbackRef.current;
    if (pb) {
      pb.stopped = true;
      cancelAnimationFrame(pb.raf);
      pb.tones.forEach((t) => { try { t.stop(); } catch { /* already stopped */ } });
      playbackRef.current = null;
    }
  }, []);

  useEffect(() => stop, [stop]);

  const loadFile = useCallback((file) => {
    if (!file) return;
    if (!TYPES.includes(file.type) || file.size > MAX_BYTES) {
      setError(T('Choose a PNG, JPG or WebP smaller than 8 MB.', 'اختر صورة PNG أو JPG أو WebP أصغر من 8 ميجابايت.'));
      setStatus('error');
      return;
    }
    stop();
    setStatus('loading');
    setError('');
    setProgress(0);
    setCurrent(-1);
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const w = img.naturalWidth || 480;
      const h = img.naturalHeight || 420;
      const scale = Math.min(1, MAX_SIDE / Math.max(w, h));
      const canvas = canvasRef.current;
      canvas.width = Math.max(1, Math.round(w * scale));
      canvas.height = Math.max(1, Math.round(h * scale));
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      const v = stripBrightness(ctx.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height);
      if (!v.some((x) => x !== null)) {
        setValues(null);
        setError(T('No readable pixels in this image.', 'لا توجد بكسلات قابلة للقراءة في هذه الصورة.'));
        setStatus('error');
        return;
      }
      setValues(v);
      setFileName(file.name);
      setStatus('ready');
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError(T('The image could not be read.', 'تعذّرت قراءة الصورة.'));
      setStatus('error');
    };
    img.src = url;
  }, [ar, stop]); // eslint-disable-line react-hooks/exhaustive-deps

  const play = useCallback(async () => {
    if (!values) return;
    stop();
    await ensureAudioContextRunning();
    const ctx = getAudioContext();
    if (!ctx) return;
    const pb = { stopped: false, raf: 0, tones: [], next: 0, time: 0, last: performance.now() };
    playbackRef.current = pb;
    setStatus('playing');
    const frame = (now) => {
      if (pb.stopped) return;
      pb.time = Math.min(SCAN_SECONDS, pb.time + Math.min(100, now - pb.last) / 1000);
      pb.last = now;
      while (pb.next < BINS && (pb.next / BINS) * SCAN_SECONDS <= pb.time) {
        const v = values[pb.next];
        if (v !== null) pb.tones.push(strikeTone(ctx, toHz(v)));
        setCurrent(pb.next);
        pb.next++;
      }
      if (pb.tones.length > 8) pb.tones.splice(0, pb.tones.length - 8);
      setProgress(pb.time / SCAN_SECONDS);
      if (pb.time >= SCAN_SECONDS) {
        playbackRef.current = null;
        setStatus('done');
        return;
      }
      pb.raf = requestAnimationFrame(frame);
    };
    pb.raf = requestAnimationFrame(frame);
  }, [values, stop]);

  const onStop = () => {
    stop();
    setStatus(values ? 'ready' : 'idle');
    setProgress(0);
    setCurrent(-1);
  };

  const hasImage = !!values;
  const playing = status === 'playing';
  const cur = current >= 0 && values ? values[current] : null;

  const statusText = {
    idle: T('Choose an image, then scan it from left to right.', 'اختر صورة، ثم امسحها من اليسار إلى اليمين.'),
    loading: T('Reading your image…', 'جارٍ قراءة صورتك…'),
    ready: T('Ready. Scan image to hear its brightness.', 'جاهزة. امسح الصورة لتسمع سطوعها.'),
    playing: T('Scanning…', 'جارٍ المسح…'),
    done: T('Scan complete. Replay to compare.', 'اكتمل المسح. أعد التشغيل للمقارنة.'),
    error,
  }[status];

  return (
    <section id="image-sound" className="discover-section image-sound-section">
      <div className="section-header-block">
        <span className="section-eyebrow">{T('THE LEARNING WEB', 'شبكة التعلّم')}</span>
        <h2 className="section-title">{T('Turn Your Image Into Sound', 'حوّل صورتك إلى صوت')}</h2>
        <p className="section-subtitle">
          {T(
            'Choose your Earth or map image. Its original colors stay intact. The scan maps brightness to pitch; it does not infer pollution readings from an uncalibrated photo.',
            'اختر صورة للأرض أو خريطة. تبقى ألوانها الأصلية كما هي. يحوّل المسح السطوع إلى طبقة صوت، ولا يستنتج قراءات تلوث من صورة غير معايَرة.'
          )}
        </p>
      </div>

      <div className="comparison-module-card image-sound-card">
        <div className="comp-header">
          <div className="comp-title-group">
            <ImageUp size={20} className="comp-icon" />
            <h3 className="comp-title">{T('Image Sonification Lab', 'مختبر تحويل الصورة إلى صوت')}</h3>
          </div>
          <span className="comp-badge">220–880 Hz</span>
        </div>
        <p className="comp-desc">
          {T(
            'Brighter strips produce higher pitch (220–880 Hz), at constant volume. The scan reads 48 vertical strips from left to right over 8 seconds.',
            'الشرائح الأكثر سطوعاً تعطي نغمة أعلى (220–880 هرتز) بمستوى صوت ثابت. يقرأ المسح 48 شريحة رأسية من اليسار إلى اليمين خلال 8 ثوانٍ.'
          )}
        </p>

        <div className="image-sound-grid">
          <div
            className={`image-sound-stage ${hasImage ? 'has-image' : ''} ${dragging ? 'is-dragging' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); loadFile(e.dataTransfer.files?.[0]); }}
          >
            <div className="image-sound-viewport" dir="ltr">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label={T('Your original image; scan brightness from left to right.', 'صورتك الأصلية؛ يُمسح السطوع من اليسار إلى اليمين.')}
                hidden={!hasImage}
              />
              {hasImage && (playing || status === 'done') && (
                <span className="image-sound-scanline" style={{ left: `${progress * 100}%` }} aria-hidden="true" />
              )}
            </div>
            {!hasImage && (
              <button type="button" className="image-sound-drop" onClick={() => inputRef.current?.click()}>
                <ImageUp size={34} aria-hidden="true" />
                <strong>{T('Choose image', 'اختر صورة')}</strong>
                <span>{T('or drop it here · PNG, JPG, WebP · up to 8 MB', 'أو أفلتها هنا · PNG أو JPG أو WebP · حتى 8 ميجابايت')}</span>
              </button>
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="image-sound-input"
              onChange={(e) => { loadFile(e.target.files?.[0]); e.target.value = ''; }}
              aria-label={T('Choose image', 'اختر صورة')}
            />
          </div>

          <div className="image-sound-panel">
            <div className="image-sound-readout" aria-live="polite">
              <div>
                <span className="readout-label">{T('Strip', 'الشريحة')}</span>
                <span className="readout-value" dir="ltr">{current >= 0 ? `${current + 1} / ${BINS}` : '—'}</span>
              </div>
              <div>
                <span className="readout-label">{T('Brightness', 'السطوع')}</span>
                <span className="readout-value" dir="ltr">{cur !== null ? `${Math.round(cur * 100)}%` : '—'}</span>
              </div>
              <div>
                <span className="readout-label">{T('Pitch', 'طبقة الصوت')}</span>
                <span className="readout-value" dir="ltr">{cur !== null ? `${Math.round(toHz(cur))} Hz` : '—'}</span>
              </div>
            </div>

            <div className="image-sound-bars" dir="ltr" aria-hidden="true">
              {(values || Array(BINS).fill(null)).map((v, i) => (
                <span
                  key={i}
                  className={`bar ${i === current ? 'is-current' : ''} ${i < current ? 'is-past' : ''}`}
                  style={{ height: `${v === null ? 4 : Math.max(4, v * 100)}%` }}
                />
              ))}
            </div>
            <div className="image-sound-axis" dir="ltr" aria-hidden="true">
              <span>{T('Left', 'يسار')}</span>
              <span>{T('Mean strip brightness', 'متوسط سطوع الشريحة')}</span>
              <span>{T('Right', 'يمين')}</span>
            </div>

            <div className="image-sound-actions">
              <button type="button" className="slot-audition-btn primary" onClick={play} disabled={!hasImage || playing}>
                {playing ? <Volume2 size={18} className="pulse-icon" /> : <Play size={18} fill="currentColor" />}
                <span>{T('Scan image', 'امسح الصورة')}</span>
              </button>
              <button type="button" className="slot-audition-btn" onClick={play} disabled={!hasImage || status === 'ready'}>
                <RotateCcw size={18} />
                <span>{T('Replay image', 'أعد التشغيل')}</span>
              </button>
              <button type="button" className="slot-audition-btn" onClick={onStop} disabled={!playing}>
                <Square size={16} fill="currentColor" />
                <span>{T('Stop sound', 'أوقف الصوت')}</span>
              </button>
              {hasImage && (
                <button type="button" className="comp-tab-btn image-sound-change" onClick={() => inputRef.current?.click()}>
                  {T('Change image', 'غيّر الصورة')}
                </button>
              )}
            </div>

            <p className={`image-sound-status ${status === 'error' ? 'is-error' : ''}`} role="status">
              {statusText}{fileName && hasImage && status !== 'error' ? ` · ${fileName}` : ''}
            </p>
            <p className="image-sound-privacy">
              <ShieldCheck size={14} aria-hidden="true" />
              {T(
                'Local image pixels → mean strip brightness → 220–880 Hz. The image stays on your device.',
                'بكسلات الصورة محلياً ← متوسط سطوع الشريحة ← 220–880 هرتز. تبقى الصورة على جهازك.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
