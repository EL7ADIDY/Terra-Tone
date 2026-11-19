import React, { useEffect, useRef } from 'react';
import { getAudioAnalyser } from '../utils/audioUtils';

/**
 * Genuine Web Audio API Audio-Reactive Visualizer
 * Renders:
 * 1. Real-time Oscilloscope (Time-Domain Waveform)
 * 2. Real-time Frequency Spectrum Analyzer (FFT Frequency Bars)
 * Powered directly by AnalyserNode from Web Audio API.
 */
export function AudioVisualizerCanvas({ isPlaying = false, isDark = true, accentColor = '#38bdf8' }) {
  const waveformCanvasRef = useRef(null);
  const spectrumCanvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const waveCanvas = waveformCanvasRef.current;
    const specCanvas = spectrumCanvasRef.current;
    if (!waveCanvas || !specCanvas) return;

    const waveCtx = waveCanvas.getContext('2d');
    const specCtx = specCanvas.getContext('2d');

    // Handle high-DPI retina displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resizeCanvases = () => {
      const w = waveCanvas.parentElement?.clientWidth || 400;
      waveCanvas.width = w * dpr;
      waveCanvas.height = 100 * dpr;
      specCanvas.width = w * dpr;
      specCanvas.height = 100 * dpr;
    };
    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    // Buffers for AnalyserNode
    const timeBuffer = new Uint8Array(256);
    const freqBuffer = new Uint8Array(128);

    // Only animate while the visualizer is on screen and the tab is visible
    let isOnScreen = true;
    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);
      const analyser = getAudioAnalyser();

      const w = waveCanvas.width;
      const h = waveCanvas.height;

      // -----------------------------------------------------------------------
      // 1. Oscilloscope Waveform (Time Domain)
      // -----------------------------------------------------------------------
      waveCtx.clearRect(0, 0, w, h);

      // Subtle background grid
      waveCtx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.05)' : 'rgba(2, 132, 199, 0.06)';
      waveCtx.lineWidth = 1 * dpr;
      waveCtx.beginPath();
      waveCtx.moveTo(0, h * 0.5);
      waveCtx.lineTo(w, h * 0.5);
      waveCtx.stroke();

      if (analyser) {
        analyser.getByteTimeDomainData(timeBuffer);
      } else {
        timeBuffer.fill(128);
      }

      // Draw Waveform line
      waveCtx.beginPath();
      waveCtx.lineWidth = 2.5 * dpr;
      waveCtx.strokeStyle = accentColor;
      waveCtx.shadowBlur = isPlaying ? 14 : 4;
      waveCtx.shadowColor = accentColor;

      const sliceWidth = w / (timeBuffer.length - 1);
      let x = 0;

      for (let i = 0; i < timeBuffer.length; i++) {
        // v ranges from 0 to 255, 128 is center silence
        const v = timeBuffer[i] / 128.0;
        const y = (v * h) / 2;

        if (i === 0) {
          waveCtx.moveTo(x, y);
        } else {
          waveCtx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      waveCtx.stroke();
      waveCtx.shadowBlur = 0; // reset

      // -----------------------------------------------------------------------
      // 2. Frequency Spectrum (FFT Frequency Bars)
      // -----------------------------------------------------------------------
      specCtx.clearRect(0, 0, w, h);

      if (analyser) {
        analyser.getByteFrequencyData(freqBuffer);
      } else {
        freqBuffer.fill(0);
      }

      // Draw 32 modern rounded frequency bars
      const barsCount = 32;
      const barSpacing = 4 * dpr;
      const totalSpacing = barSpacing * (barsCount - 1);
      const barWidth = Math.max(3 * dpr, (w - totalSpacing) / barsCount);

      // Gradient for bars
      const grad = specCtx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, accentColor);
      grad.addColorStop(0.7, '#818cf8');
      grad.addColorStop(1, '#c084fc');

      for (let i = 0; i < barsCount; i++) {
        // Map bar index to frequency buffer index (lower frequencies take first slots)
        const freqIdx = Math.floor((i / barsCount) * (freqBuffer.length * 0.75));
        const rawVal = freqBuffer[freqIdx] || 0;

        // Add idle pulse if playing but between notes
        const minHeight = isPlaying ? 4 * dpr : 2 * dpr;
        const barHeight = Math.max(minHeight, (rawVal / 255) * h * 0.88);

        const bx = i * (barWidth + barSpacing);
        const by = h - barHeight;

        specCtx.fillStyle = grad;
        specCtx.shadowBlur = isPlaying && rawVal > 10 ? 8 : 0;
        specCtx.shadowColor = accentColor;

        // Rounded bar top
        specCtx.beginPath();
        if (specCtx.roundRect) {
          specCtx.roundRect(bx, by, barWidth, barHeight, [3 * dpr, 3 * dpr, 0, 0]);
        } else {
          specCtx.rect(bx, by, barWidth, barHeight);
        }
        specCtx.fill();
      }
      specCtx.shadowBlur = 0; // reset
    };

    const startLoop = () => {
      if (animFrameRef.current === null && isOnScreen && !document.hidden) render();
    };
    const stopLoop = () => {
      if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    };
    animFrameRef.current = null;
    startLoop();

    const observedEl = waveCanvas.closest('section') || waveCanvas.parentElement;
    const visibilityObserver =
      'IntersectionObserver' in window && observedEl
        ? new IntersectionObserver(([entry]) => {
            isOnScreen = entry.isIntersecting;
            if (isOnScreen) startLoop();
            else stopLoop();
          })
        : null;
    visibilityObserver?.observe(observedEl);
    const onVisibilityChange = () => (document.hidden ? stopLoop() : startLoop());
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      stopLoop();
      visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', resizeCanvases);
    };
  }, [isPlaying, isDark, accentColor]);

  return (
    <div className="audio-visualizer-dual-pane">
      {/* Waveform Card */}
      <div className="vis-subcard">
        <div className="vis-subcard-header">
          <div className="vis-title-pill">
            <span className="live-dot" style={{ opacity: isPlaying ? 1 : 0.4 }} />
            <span>REAL-TIME OSCILLOSCOPE WAVEFORM</span>
          </div>
          <span className="vis-tag">TIME-DOMAIN</span>
        </div>
        <div className="vis-canvas-box">
          <canvas ref={waveformCanvasRef} className="vis-canvas-element" />
        </div>
      </div>

      {/* Frequency Spectrum Card */}
      <div className="vis-subcard">
        <div className="vis-subcard-header">
          <div className="vis-title-pill">
            <span className="live-dot" style={{ opacity: isPlaying ? 1 : 0.4 }} />
            <span>FFT FREQUENCY SPECTRUM ANALYZER</span>
          </div>
          <span className="vis-tag">32-BAND FFT</span>
        </div>
        <div className="vis-canvas-box">
          <canvas ref={spectrumCanvasRef} className="vis-canvas-element" />
        </div>
      </div>
    </div>
  );
}
