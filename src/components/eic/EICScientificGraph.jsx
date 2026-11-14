import React, { useMemo, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { eicDataService } from '../../services/eic/eicDataService';
import { getPercentageAndFreq } from '../../services/eic/eicAudioService';
import { Activity, Info, BarChart3, Music } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const EICScientificGraph = ({
  resource,
  currentTime,
  onSeek,
  lang = 'en',
  theme = 'dark'
}) => {
  const chartRef = useRef(null);
  const isDark = theme !== 'light';

  // Calculate interpolated values for each series at current time
  const currentValues = useMemo(() => {
    return eicDataService.getInterpolatedValuesAtTime(resource, currentTime);
  }, [resource, currentTime]);

  const seriesList = resource.graphConfig?.series || [];
  const primarySeries = seriesList[0];
  const primaryReading = primarySeries ? currentValues[primarySeries.key] : null;

  // Prepare Chart.js labels and datasets
  const chartData = useMemo(() => {
    if (!primarySeries || !primarySeries.data) {
      return { labels: [], datasets: [] };
    }

    const labels = primarySeries.data.map((d) => d.x);

    const datasets = seriesList.map((s) => {
      return {
        label: lang === 'ar' ? s.nameAr : s.nameEn,
        data: s.data.map((d) => d.y),
        borderColor: s.color,
        backgroundColor: s.fill ? `${s.color}25` : 'transparent',
        borderWidth: 2.5,
        pointRadius: (ctx) => {
          const idx = ctx.dataIndex;
          const pt = s.data[idx];
          if (!pt) return 4;
          // Highlight points near the current time
          const isNearby = Math.abs(pt.timestamp - currentTime) < (resource.durationSeconds / (s.data.length * 2));
          return isNearby ? 7 : 4;
        },
        pointHoverRadius: 8,
        pointBackgroundColor: s.color,
        pointBorderColor: isDark ? '#0f172a' : '#ffffff',
        pointBorderWidth: 2,
        tension: 0.35,
        fill: s.fill
      };
    });

    return { labels, datasets };
  }, [seriesList, primarySeries, lang, currentTime, resource.durationSeconds, isDark]);

  // Chart.js Plugin: Draw vertical cursor line at interpolated time
  const verticalCursorPlugin = useMemo(() => {
    return {
      id: 'eicVerticalCursor',
      afterDraw: (chart) => {
        if (!primarySeries || !primarySeries.data || primarySeries.data.length === 0) return;
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || meta.data.length === 0) return;

        const duration = resource.durationSeconds || 1;
        const clampedT = Math.max(0, Math.min(currentTime, duration));

        // Compute fractional pixel position across the x-axis
        const data = primarySeries.data;
        const firstTimestamp = data[0].timestamp;
        const lastTimestamp = data[data.length - 1].timestamp;
        const timeRange = lastTimestamp - firstTimestamp || 1;

        const firstX = meta.data[0].x;
        const lastX = meta.data[meta.data.length - 1].x;
        const pxRange = lastX - firstX;

        const targetX = firstX + ((clampedT - firstTimestamp) / timeRange) * pxRange;
        const topY = chart.chartArea.top;
        const bottomY = chart.chartArea.bottom;

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(targetX, topY);
        ctx.lineTo(targetX, bottomY);
        ctx.stroke();

        // Cursor head indicator
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(targetX, topY + 2, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    };
  }, [primarySeries, currentTime, resource.durationSeconds]);

  // Chart Click Handler -> Bidirectional seek to that exact data point!
  const handleChartClick = (event) => {
    const chart = chartRef.current;
    if (!chart || !primarySeries || !primarySeries.data) return;

    const elements = chart.getElementsAtEventForMode(event, 'nearest', { intersect: false }, true);
    if (elements.length > 0) {
      const index = elements[0].index;
      const targetPoint = primarySeries.data[index];
      if (targetPoint && typeof targetPoint.timestamp === 'number') {
        onSeek(targetPoint.timestamp);
      }
    }
  };

  const options = useMemo(() => {
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(148, 163, 184, 0.08)' : 'rgba(148, 163, 184, 0.18)';

    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 200 },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: textColor,
            font: { size: 12, family: 'sans-serif' },
            boxWidth: 14,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          titleColor: isDark ? '#f8fafc' : '#0f172a',
          bodyColor: isDark ? '#94a3b8' : '#334155',
          borderColor: isDark ? '#334155' : '#cbd5e1',
          borderWidth: 1,
          padding: 10,
          callbacks: {
            afterBody: (context) => {
              const rawVal = context[0]?.raw;
              const toneData = getPercentageAndFreq(resource, rawVal);
              const reg =
                toneData.percentage <= 33
                  ? lang === 'ar'
                    ? 'نغمة منخفضة (C3-G3)'
                    : 'Low Tone (C3-G3)'
                  : toneData.percentage <= 66
                  ? lang === 'ar'
                    ? 'نغمة معتدلة (A3-E5)'
                    : 'Mid Tone (A3-E5)'
                  : lang === 'ar'
                    ? 'نغمة مرتفعة (G5-C6)'
                    : 'High Tone (G5-C6)';

              return [
                `${lang === 'ar' ? 'النسبة والنغمة' : 'Intensity & Tone'}: ${toneData.percentage}% • ${toneData.noteName} (${Math.round(toneData.frequency)} Hz) [${reg}]`,
                lang === 'ar'
                  ? '(انقر فوق أي نقطة للانتقال إلى وقتها وسماع نغمتها)'
                  : '(Click any point to jump video & audition tone)'
              ];
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: textColor, font: { size: 11 } },
          grid: { color: gridColor }
        },
        y: {
          ticks: { color: textColor, font: { size: 11 } },
          grid: { color: gridColor },
          title: {
            display: true,
            text: resource.graphConfig?.yAxisLabel || resource.unitShort,
            color: textColor,
            font: { size: 12, weight: 'bold' }
          }
        }
      }
    };
  }, [isDark, lang, resource.graphConfig?.yAxisLabel, resource.unitShort]);

  return (
    <div className="eic-graph-card" aria-label="Scientific Graph Display">
      {/* Header bar of scientific graph */}
      <div className="eic-graph-header">
        <div className="eic-graph-title-group">
          <div className="eic-badge-row">
            <span className="eic-live-tag tag-graph">
              <Activity className="icon-xs" aria-hidden="true" />
              SYNCHRONIZED SCIENTIFIC DATA
            </span>
            <span className="eic-id-tag">{resource.datasetName.split('(')[0]}</span>
          </div>
          <h3 className="eic-graph-title">
            {resource.primaryVariable}
          </h3>
        </div>

        {/* Real-time Current Measurement & Tone Callout Badge */}
        {primaryReading && (() => {
          const toneData = getPercentageAndFreq(resource, primaryReading.currentValue);
          return (
            <div className="eic-live-reading-box animate-pulse-glow">
              <span className="eic-live-reading-label">
                {lang === 'ar' ? 'القيمة المتزامنة الآن' : 'Active Reading'}
              </span>
              <div className="eic-live-reading-val">
                <span className="value-num">{primaryReading.currentValue}</span>
                <span className="value-unit">{resource.unitShort}</span>
              </div>
              <div className="eic-graph-tone-tag">
                <Music className="icon-xxs" />
                <span>
                  {toneData.percentage}% • {toneData.noteName} ({Math.round(toneData.frequency)}Hz)
                </span>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Interactive Chart Container */}
      <div className="eic-chart-viewport" onClick={handleChartClick}>
        <Line
          ref={chartRef}
          data={chartData}
          options={options}
          plugins={[verticalCursorPlugin]}
        />
      </div>

      {/* Interactive Graph Guidance Footer */}
      <div className="eic-graph-footer-hint">
        <Info className="icon-xs" aria-hidden="true" />
        <span>
          {lang === 'ar'
            ? 'انقر على أي نقطة بيانية في المنحنى للانتقال المباشر إلى الإطار الزمني المقابل في محاكاة ناسا.'
            : 'Click any data point along the curve to seek the NASA animation directly to that timestamp.'}
        </span>
      </div>
    </div>
  );
};
