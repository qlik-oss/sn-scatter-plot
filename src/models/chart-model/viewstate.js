/**
 * Get relative zoom from:
 * - snapshot data
 * - options.viewState
 * - default to: { x: 0, y: 0 }
 */

export default function createViewState(layoutModel, viewStateOptions = {}, tickModel) {
  const source = layoutModel.meta.isSnapshot
    ? layoutModel.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;
  const [xAxisMin, xAxisMax] = tickModel.query.getXMinMax();
  const [yAxisMin, yAxisMax] = tickModel.query.getYMinMax();
  const storage = {
    zoom: { xAxisMin, xAxisMax, yAxisMin, yAxisMax },
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
