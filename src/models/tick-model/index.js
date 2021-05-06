import { scaleLinear } from 'd3-scale';
import extend from 'extend';
import picasso from 'picasso.js';
import KEYS from '../../constants/keys';
import getTicks from './ticks';

const DISTANCE = {
  NARROW: 50,
  MEDIUM: 100,
  WIDE: 200,
  FALLBACK: 100,
};

export function getCount(size, spacing) {
  let distance;
  switch (spacing) {
    case 0.5:
      distance = DISTANCE.NARROW;
      break;
    case 1:
      distance = DISTANCE.MEDIUM;
      break;
    case 2:
      distance = DISTANCE.WIDE;
      break;
    default:
      distance = DISTANCE.FALLBACK;
  }
  return Math.max(1, Math.round(size / distance));
}

export default function createTickModel({ layoutService, dockService, extremumModel, themeService }) {
  function getChartProperties(axis) {
    let min;
    let max;
    let explicitType;
    let spacing;
    let dimension;
    if (axis === KEYS.SCALE.X) {
      ({ xAxisMin: min, xAxisMax: max, xAxisExplicitType: explicitType } = extremumModel.query.getXExtrema());
      dimension = 'width';
      spacing = layoutService.getLayoutValue('xAxis.spacing', 1);
    } else {
      ({ yAxisMin: min, yAxisMax: max, yAxisExplicitType: explicitType } = extremumModel.query.getYExtrema());
      dimension = 'height';
      spacing = layoutService.getLayoutValue('yAxis.spacing', 1);
    }
    const size = dockService.meta.chart.size[dimension];
    const count = getCount(size, spacing);

    // Get the measureText function from renderer
    const { measureText } = picasso.renderer('svg')();
    const style = themeService.getStyles();
    const measure = (text) =>
      measureText({
        text,
        fontFamily: style.axis.label.name.fontFamily,
        fontSize: style.axis.label.name.fontSize,
      })[dimension];

    return { min, max, explicitType, count, size, measure };
  }

  const formatters = {};
  function resolve(axis, prop) {
    const { min, max, explicitType, count, size, measure } = getChartProperties(axis);
    const scale = scaleLinear().domain([min, max]);
    const formatter = axis === KEYS.SCALE.X ? formatters.x : formatters.y;
    const tickObject = getTicks({ scale, explicitType, count, size, measure, formatter });
    return prop === 'ticks' ? tickObject.ticks : tickObject.minMax;
  }

  return {
    query: {
      getXTicks: () => resolve(KEYS.SCALE.X, 'ticks'),
      getYTicks: () => resolve(KEYS.SCALE.Y, 'ticks'),
      getXMinMax: () => resolve(KEYS.SCALE.X, 'minMax'),
      getYMinMax: () => resolve(KEYS.SCALE.Y, 'minMax'),
    },

    command: {
      updateFormatters: (newFormatters) => {
        extend(true, formatters, newFormatters);
      },
    },
  };
}
