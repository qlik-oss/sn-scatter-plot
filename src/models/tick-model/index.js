import { scaleLinear } from 'd3-scale';
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

export default function createTickModel(layoutModel, dockModel, extremumModel) {
  function getChartProperties(scaleName) {
    let min;
    let max;
    let size;
    let spacing;
    if (scaleName === KEYS.SCALE.X) {
      ({ xAxisMin: min, xAxisMax: max } = extremumModel.query.getXExtrema());
      size = dockModel.chartSize.width;
      spacing = layoutModel.getLayoutValue('xAxis.spacing', 1);
    } else {
      ({ yAxisMin: min, yAxisMax: max } = extremumModel.query.getYExtrema());
      size = dockModel.chartSize.height;
      spacing = layoutModel.getLayoutValue('yAxis.spacing', 1);
    }
    const count = getCount(size, spacing);
    const isHomeState = extremumModel.query.getIsHomeState();
    return { min, max, count, isHomeState };
  }

  function resolveTicks(scaleName) {
    const { min, max, count, isHomeState: nicing } = getChartProperties(scaleName);
    const scale = scaleLinear().domain([min, max]);
    const ticks = getTicks(scale, nicing, count);
    return ticks;
  }

  function resolveMinMax(scaleName) {
    let normalMin;
    let normalMax;
    let explicitType;
    if (scaleName === KEYS.SCALE.X) {
      ({
        xAxisMin: normalMin,
        xAxisMax: normalMax,
        xAxisExplicitType: explicitType,
      } = extremumModel.query.getXExtrema());
    } else {
      ({
        yAxisMin: normalMin,
        yAxisMax: normalMax,
        yAxisExplicitType: explicitType,
      } = extremumModel.query.getYExtrema());
    }
    const { isHomeState } = getChartProperties(scaleName);
    if (!isHomeState) return [normalMin, normalMax];
    const { min, max, count } = getChartProperties(scaleName);
    const [niceMin, niceMax] = scaleLinear().domain([min, max]).nice(count).domain();

    switch (explicitType) {
      case 'minMax':
        return [normalMin, normalMax];
      case 'min':
        return [normalMin, niceMax];
      case 'max':
        return [niceMin, normalMax];
      default:
        return [niceMin, niceMax];
    }
  }

  return {
    query: {
      getXTicks: () => resolveTicks(KEYS.SCALE.X),
      getYTicks: () => resolveTicks(KEYS.SCALE.Y),
      getXMinMax: () => resolveMinMax(KEYS.SCALE.X),
      getYMinMax: () => resolveMinMax(KEYS.SCALE.Y),
    },
  };
}
