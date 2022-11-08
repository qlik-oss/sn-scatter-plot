import { trendlinesService } from 'qlik-chart-modules';
import KEYS from '../../constants/keys';

function movePath(path, distance) {
  let counter = 0;
  return path.replace(/[\d.e+-]+/g, (val) => {
    ++counter;
    if (counter % 2 === 1) {
      return String(parseFloat(val) + distance);
    }
    return val;
  });
}

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
          currentNodes.forEach((node) => {
            if (node.d) {
              // eslint-disable-next-line no-param-reassign
              node.d = movePath(node.d, -deltaX);
            }
          });
        }
      },
    },
  });
}
