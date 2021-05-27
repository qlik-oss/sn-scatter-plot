import { scaleLinear } from 'd3-scale';
import extend from 'extend';
import picasso from 'picasso.js';
import KEYS from '../../constants/keys';
import NUMBERS from '../../constants/numbers';
import getTicks from './ticks';

export function getDistance(spacing) {
  switch (spacing) {
    case 0.5:
      return NUMBERS.GRID_DISTANCE.NARROW;
    case 1:
      return NUMBERS.GRID_DISTANCE.MEDIUM;
    case 2:
      return NUMBERS.GRID_DISTANCE.WIDE;
    default:
      return NUMBERS.GRID_DISTANCE.FALLBACK;
  }
}

export function getSize(dockService, chartModel, chart, dimension) {
  const size = chartModel.query.isPrelayout()
    ? dockService.meta.chart.size[dimension]
    : chart.component(KEYS.COMPONENT.POINT).rect[dimension];
  return size;
}

export default function createTickModel({
  layoutService,
  dockService,
  extremumModel,
  themeService,
  chartModel,
  chart,
}) {
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

    const size = getSize(dockService, chartModel, chart, dimension);
    const distance = getDistance(spacing);

    // Get the measureText function from renderer
    const { measureText } = picasso.renderer('svg')();
    const style = themeService.getStyles();
    const measure = (text) =>
      measureText({
        text,
        fontFamily: style.axis.label.name.fontFamily,
        fontSize: style.axis.label.name.fontSize,
      })[dimension];

    return { min, max, explicitType, distance, size, measure };
  }

  const formatters = {
    x: chartModel.query.getFormatter(KEYS.FIELDS.X),
    y: chartModel.query.getFormatter(KEYS.FIELDS.Y),
  };

  function resolve(axis, prop) {
    const { min, max, explicitType, distance, size, measure } = getChartProperties(axis);
    const scale = scaleLinear().domain([min, max]);
    const formatter = axis === KEYS.SCALE.X ? formatters.x : formatters.y;
    const tickObject = getTicks({ scale, explicitType, distance, size, measure, formatter });
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
