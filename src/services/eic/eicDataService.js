/**
 * NASA EIC Data Service
 * Provides helper functions for retrieving, interpolating, and mapping
 * scientific values at arbitrary video timestamps without drift.
 */

export const eicDataService = {
  /**
   * Find the closest data points for each series at the given timestamp t
   */
  getInterpolatedValuesAtTime(resource, currentTime) {
    if (!resource || !resource.graphConfig || !resource.graphConfig.series) {
      return {};
    }

    const duration = resource.durationSeconds || 1;
    const clampedTime = Math.max(0, Math.min(currentTime, duration));
    const results = {};

    resource.graphConfig.series.forEach((s) => {
      const data = s.data || [];
      if (data.length === 0) return;

      if (clampedTime <= data[0].timestamp) {
        results[s.key] = {
          currentValue: data[0].y,
          label: data[0].x,
          index: 0,
          interpolated: false
        };
        return;
      }

      if (clampedTime >= data[data.length - 1].timestamp) {
        const lastIdx = data.length - 1;
        results[s.key] = {
          currentValue: data[lastIdx].y,
          label: data[lastIdx].x,
          index: lastIdx,
          interpolated: false
        };
        return;
      }

      // Linear interpolation between the surrounding points
      for (let i = 0; i < data.length - 1; i++) {
        const p1 = data[i];
        const p2 = data[i + 1];
        if (clampedTime >= p1.timestamp && clampedTime <= p2.timestamp) {
          const tSpan = p2.timestamp - p1.timestamp;
          const factor = tSpan > 0 ? (clampedTime - p1.timestamp) / tSpan : 0;
          const interpolatedY = p1.y + factor * (p2.y - p1.y);

          results[s.key] = {
            currentValue: Number(interpolatedY.toFixed(2)),
            label: factor > 0.5 ? p2.x : p1.x,
            index: factor > 0.5 ? i + 1 : i,
            interpolated: true,
            p1,
            p2,
            factor
          };
          break;
        }
      }
    });

    return results;
  },

  /**
   * Get the active milestone or label for display on the video overlay
   */
  getCurrentMilestone(resource, currentTime) {
    if (!resource || !resource.timePoints || resource.timePoints.length === 0) {
      return null;
    }

    let activePoint = resource.timePoints[0];
    for (let i = 0; i < resource.timePoints.length; i++) {
      if (currentTime >= resource.timePoints[i].timestamp) {
        activePoint = resource.timePoints[i];
      } else {
        break;
      }
    }
    return activePoint;
  },

  /**
   * Format seconds to mm:ss
   */
  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
};
