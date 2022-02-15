/**
 * Get relative dataView from:
 * - snapshot data
 * - options.viewState
 * - default to: { x: 0, y: 0 }
 */

export function updateViewState({ viewState, viewStateOptions = {}, models }) {
  const { layoutService, tickModel, chartModel, extremumModel } = models;
  const source = layoutService.meta.isSnapshot
    ? layoutService.getLayoutValue('snapshotData.content.chartData', {})
    : viewStateOptions;

  const viewHandler = chartModel.query.getViewHandler();
  if (viewHandler.getMeta().isHomeState) {
    extremumModel.command.resetExtrema();
  }
  const [xAxisMin, xAxisMax] = tickModel.query.getXMinMax();
  const [yAxisMin, yAxisMax] = tickModel.query.getYMinMax();
  viewState.preventSet('legendScrollOffset', source.legendScrollOffset || 0);
  viewState.preventSet('dataView', { xAxisMin, xAxisMax, yAxisMin, yAxisMax });
  if (viewHandler.getMeta().isHomeState) {
    viewHandler.setMeta({ homeStateDataView: viewState.get('dataView') });
  }
}

export function initializeViewState({ viewState, viewStateOptions = {}, models }) {
  const { disclaimerModel, chartModel } = models;
  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return;
  }
  const viewHandler = chartModel.query.getViewHandler();
  viewHandler.setMeta({ isHomeState: true });
  updateViewState({ viewState, viewStateOptions, models });
}
