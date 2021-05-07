import KEYS from '../constants/keys';

/**
 * Get relative zoom from:
 * - snapshot data
 * - options.viewState
 * - default to: { x: 0, y: 0 }
 */

export default function createViewState() {
  const storage = {};
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

export function updateViewState(viewState, layoutService, viewStateOptions = {}, tickModel, chartModel, extremumModel) {
  const source = layoutService.meta.isSnapshot
    ? layoutService.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;

  const formatters = {
    x: chartModel.query.getFormatter(KEYS.FIELDS.X),
    y: chartModel.query.getFormatter(KEYS.FIELDS.Y),
  };
  tickModel.command.updateFormatters(formatters);

  const zoomHandler = chartModel.query.getZoomHandler();
  if (zoomHandler.getMeta().isHomeState) extremumModel.command.resetExtrema();
  const [xAxisMin, xAxisMax] = tickModel.query.getXMinMax();
  const [yAxisMin, yAxisMax] = tickModel.query.getYMinMax();
  viewState.set('legendScrollOffset', source.legendScrollOffset || 0);
  viewState.set('zoom', { xAxisMin, xAxisMax, yAxisMin, yAxisMax });
  if (zoomHandler.getMeta().isHomeState) zoomHandler.setMeta({ axisInfoAtHomeState: viewState.get('zoom') });
}

export function initializeViewState(
  viewState,
  layoutService,
  viewStateOptions = {},
  tickModel,
  chartModel,
  extremumModel
) {
  const zoomHandler = chartModel.query.getZoomHandler();
  zoomHandler.setMeta({ isHomeState: true, zoomLevel: 0 });
  updateViewState(viewState, layoutService, viewStateOptions, tickModel, chartModel, extremumModel);
}
