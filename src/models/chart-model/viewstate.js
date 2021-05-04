/**
 * Get relative zoom from:
 * - snapshot data
 * - options.viewState
 * - default to: { x: 0, y: 0 }
 */

export default function createViewState(layoutService, viewStateOptions = {}, tickModel) {
  function resolveZoom() {
    const [xAxisMin, xAxisMax] = tickModel.query.getXMinMax();
    const [yAxisMin, yAxisMax] = tickModel.query.getYMinMax();
    return { xAxisMin, xAxisMax, yAxisMin, yAxisMax };
  }

  const source = layoutService.meta.isSnapshot
    ? layoutService.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;
  const storage = {
    zoom: () => resolveZoom(),
    legendScrollOffset: source.legendScrollOffset || 0,
  };

  const onChanged = {};

  let suppress = false;

  // TODO: use shared module for this (storage module from la-vie...)
  const api = {};

  api.get = (property) => {
    const type = typeof storage[property];
    if (type === 'function') return storage[property]();
    return storage[property];
  };

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
