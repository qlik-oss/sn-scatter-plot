import KEYS from '../constants/keys';

/**
 * Get relative dataView from:
 * - snapshot data
 * - options.viewState
 * - default to: { x: 0, y: 0 }
 */

export function updateViewState(viewState, layoutService, viewStateOptions = {}, tickModel, chartModel, extremumModel) {
  const source = layoutService.meta.isSnapshot
    ? layoutService.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;

  const formatters = {
    x: chartModel.query.getFormatter(KEYS.FIELDS.X),
    y: chartModel.query.getFormatter(KEYS.FIELDS.Y),
  };
  tickModel.command.updateFormatters(formatters);

  const viewHandler = chartModel.query.getViewHandler();
  if (viewHandler.getMeta().isHomeState) extremumModel.command.resetExtrema();
  const [xAxisMin, xAxisMax] = tickModel.query.getXMinMax();
  const [yAxisMin, yAxisMax] = tickModel.query.getYMinMax();
  viewState.preventSet('legendScrollOffset', source.legendScrollOffset || 0);
  viewState.set('dataView', { xAxisMin, xAxisMax, yAxisMin, yAxisMax });
  if (viewHandler.getMeta().isHomeState) viewHandler.setMeta({ homeStateDataView: viewState.get('dataView') });
}

export function initializeViewState(
  viewState,
  layoutService,
  viewStateOptions = {},
  tickModel,
  chartModel,
  extremumModel
) {
  const viewHandler = chartModel.query.getViewHandler();
  viewHandler.setMeta({ isHomeState: true });
  updateViewState(viewState, layoutService, viewStateOptions, tickModel, chartModel, extremumModel);
}
