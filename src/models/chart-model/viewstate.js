function getMinMax(layoutModel) {
  return {
    xAxisMin: layoutModel.getHyperCubeValue('qMeasureInfo.0.qMin', 0),
    xAxisMax: layoutModel.getHyperCubeValue('qMeasureInfo.0.qMax', 1),
    yAxisMin: layoutModel.getHyperCubeValue('qMeasureInfo.1.qMin', 0),
    yAxisMax: layoutModel.getHyperCubeValue('qMeasureInfo.1.qMax', 1),
  };
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
