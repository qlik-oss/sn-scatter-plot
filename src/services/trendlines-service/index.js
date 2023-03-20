/* eslint-disable no-param-reassign */
import { trendlinesService } from 'qlik-chart-modules';
import KEYS from '../../constants/keys';

export default function createTrenslinesService({
  chart,
  colorService,
  animationsEnabled,
  flags,
  layoutService,
  translator,
  viewState,
}) {
  return trendlinesService({
    layoutService,
    getMinMax: ({ measureIndex }) => {
      const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewState.get('dataView');
      const useXAxis = measureIndex === 1;
      if (useXAxis) {
        return { min: xAxisMin, max: xAxisMax };
      }
      return { min: yAxisMin, max: yAxisMax };
    },
    colorService,
    chart,
    translator,
    orientation: 'horizontal',
    keys: {
      majorScale: KEYS.SCALE.X,
      minorScale: KEYS.SCALE.Y,
      trendlines: KEYS.COMPONENT.TRENDLINES,
    },
    isEnabled: () => flags.isEnabled('BEST_FIT_LINE'),
    animations: {
      enabled: animationsEnabled,
      trackBy: (node) => node.data.layer.value,
      compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
        if (currentRect.x !== previousRect.x) {
          const deltaX = currentRect.x - previousRect.x;
          const deltaY = currentRect.y - previousRect.y;
          currentNodes.forEach((node) => {
            const deltaMajor = node.major.p === 'x' ? deltaX / node.major.size : deltaY / node.major.size;
            const deltaMinor = node.minor.p === 'y' ? deltaY / node.minor.size : deltaX / node.minor.size;

            node.points.forEach((point) => {
              if (!point.modified) {
                point.major -= deltaMajor;
                point.minor -= deltaMinor;
                point.minor0 -= deltaMinor;
                point.modified = true;
              }
            });
          });
        }
      },
    },
  });
}
