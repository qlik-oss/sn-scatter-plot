import KEYS from '../../constants/keys';
import getD3Scale from './helpers/scale';

function getMinMax(layoutModel) {
  // Choose between data min/max and explicit min/max. Explicit values have higher priority
  let xAxisMin = layoutModel.getHyperCubeValue('qMeasureInfo.0.qMin', 0);
  let xAxisMax = layoutModel.getHyperCubeValue('qMeasureInfo.0.qMax', 1);
  let yAxisMin = layoutModel.getHyperCubeValue('qMeasureInfo.1.qMin', 0);
  let yAxisMax = layoutModel.getHyperCubeValue('qMeasureInfo.1.qMax', 1);

  let { autoMinMax, minMax, min, max } = layoutModel.getLayoutValue('xAxis');
  if (!autoMinMax) {
    switch (minMax) {
      case 'min':
        xAxisMin = min;
        break;
      case 'max':
        xAxisMax = max;
        break;
      default:
        xAxisMin = min;
        xAxisMax = max;
        break;
    }
  }

  ({ autoMinMax, minMax, min, max } = layoutModel.getLayoutValue('yAxis'));
  if (!autoMinMax) {
    switch (minMax) {
      case 'min':
        yAxisMin = min;
        break;
      case 'max':
        yAxisMax = max;
        break;
      default:
        yAxisMin = min;
        yAxisMax = max;
        break;
    }
  }

  return { xAxisMin, xAxisMax, yAxisMin, yAxisMax };
}

/**
 * Get relative zoom from:
 * - snapshot data
 * - options.viewState
 * - default to: { x: 0, y: 0 }
 */
function getInitialViewState({ layoutModel, dockModel, viewStateOptions = {} }) {
  const source = layoutModel.meta.isSnapshot
    ? layoutModel.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;

  const layoutMinMax = getMinMax(layoutModel);

  const xAxisMin = typeof source.xAxisMin === 'number' ? source.xAxisMin : layoutMinMax.xAxisMin;
  const xAxisMax = typeof source.xAxisMax === 'number' ? source.xAxisMax : layoutMinMax.xAxisMax;
  const yAxisMin = typeof source.yAxisMin === 'number' ? source.yAxisMin : layoutMinMax.yAxisMin;
  const yAxisMax = typeof source.yAxisMax === 'number' ? source.yAxisMax : layoutMinMax.yAxisMax;

  const { width, height } = dockModel.chartSize;
  const scaleX = getD3Scale({ layoutModel, scaleName: KEYS.SCALE.X, size: width, min: xAxisMin, max: xAxisMax });
  const scaleY = getD3Scale({ layoutModel, scaleName: KEYS.SCALE.Y, size: height, min: yAxisMin, max: yAxisMax });
  const minMax = {
    xAxisMin: scaleX.getDomain()[0],
    xAxisMax: scaleX.getDomain()[1],
    yAxisMin: scaleY.getDomain()[0],
    yAxisMax: scaleY.getDomain()[1],
  };
  const storage = {
    zoom: minMax,
    scale: { scaleX, scaleY },
    legendScrollOffset: source.legendScrollOffset || 0,
  };

  const onChanged = {};

  let suppress = false;

  // TODO: use shared module for this (storage module from la-vie...)
  const api = {};

  api.get = (property) => storage[property];

  api.set = (property, value) => {
    const previous = storage[property];

    storage[property] = value;

    if (!suppress && onChanged[property]) {
      onChanged[property](storage[property], previous);
    }
  };

  api.preventSet = (property, value) => {
    suppress = true;
    api.set(property, value);
    suppress = false;
  };

  api.onChanged = (property, action) => {
    onChanged[property] = action;
  };

  return api;
}

export default function createViewState({ layoutModel, dockModel, options }) {
  const viewState = getInitialViewState({
    layoutModel,
    dockModel,
    viewStateOptions: options.viewState,
  });

  return viewState;
}
