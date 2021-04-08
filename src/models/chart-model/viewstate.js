function getMinMax(layoutModel) {
  // Choose between data min/max and explicit min/max.
  // Explicit min/max have higher priority

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
 * - default to: { x: 0, y:0 }
 */
function getInitialViewState({ layoutModel, viewStateOptions = {} }) {
  const source = layoutModel.meta.isSnapshot
    ? layoutModel.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;

  const minMax = getMinMax(layoutModel);

  const storage = {
    zoom: {
      xAxisMin: typeof source.xAxisMin === 'number' ? source.xAxisMin : minMax.xAxisMin,
      xAxisMax: typeof source.xAxisMax === 'number' ? source.xAxisMax : minMax.xAxisMax,
      yAxisMin: typeof source.yAxisMin === 'number' ? source.yAxisMin : minMax.yAxisMin,
      yAxisMax: typeof source.yAxisMax === 'number' ? source.yAxisMax : minMax.yAxisMax,
    },
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

export default function createViewState({ layoutModel, options }) {
  const viewState = getInitialViewState({
    layoutModel,
    viewStateOptions: options.viewState,
  });

  return viewState;
}
