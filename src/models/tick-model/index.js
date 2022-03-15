import { scaleLinear } from 'd3-scale';
import picasso from 'picasso.js';
import KEYS from '../../constants/keys';
import getTicks from './ticks';
import tickHelper from './ticks/tick-helper';

export default function createTickModel({
  layoutService,
  dockService,
  extremumModel,
  themeService,
  chartModel,
  chart,
}) {
  let yTicks;
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

    const size = tickHelper.getSize(dockService, chartModel, chart, dimension, layoutService);
    const distance = tickHelper.getDistance(spacing);

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

  const formatPatterns = {
    [KEYS.SCALE.X]: undefined,
    [KEYS.SCALE.Y]: undefined,
  };

  function resolve(axis, prop) {
    if (!formatPatterns[axis]) {
      const field = axis === KEYS.SCALE.X ? 'qMeasureInfo.0' : 'qMeasureInfo.1';
      const isAutoFormat = layoutService.getHyperCubeValue(`${field}.qIsAutoFormat`, false);
      if (isAutoFormat) {
        formatPatterns[axis] = chartModel.query.getFormatPattern(axis);
      }
    }

    if (formatPatterns[axis]) {
      const formatters = chart.formatters();
      if (typeof formatters[axis].pattern === 'function') {
        formatters[axis].pattern(formatPatterns[axis]);
      }
    }

    const { min, max, explicitType, distance, size, measure } = getChartProperties(axis);
    const scale = scaleLinear().domain([min, max]);
    const tickObject = getTicks({ scale, explicitType, distance, size, measure, formatter: chart.formatters()[axis] });
    if (prop === 'ticks' && axis === KEYS.SCALE.Y) {
      yTicks = tickObject.ticks;
    }
    return prop === 'ticks' ? tickObject.ticks : tickObject.minMax;
  }

  return {
    query: {
      getXTicks: () => resolve(KEYS.SCALE.X, 'ticks'),
      getYTicks: () => resolve(KEYS.SCALE.Y, 'ticks'),
      getXMinMax: () => resolve(KEYS.SCALE.X, 'minMax'),
      getYMinMax: () => resolve(KEYS.SCALE.Y, 'minMax'),
      getCurrentYTicks: () => yTicks,
    },
  };
}
