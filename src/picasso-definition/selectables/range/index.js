import createLegend from './legend';
import createXRange from './x-range';
import createYRange from './y-range';
import createBinXRange from './bin-x-range';
import createBinYRange from './bin-y-range';

const EMPTY = { components: [], interactions: [] };

export default function createRange({ models, actions, scales, chart }) {
  const { selectionService, dockService, colorService, layoutService, chartModel } = models;
  const isSingleSelection = layoutService.getHyperCubeValue('qDimensionInfo.0.qIsOneAndOnlyOne', false);
  if (isSingleSelection) {
    return { components: [], interactions: [] };
  }

  const legend = colorService.custom.legendComponents();

  const dataHandler = chartModel.query.getDataHandler();

  const xRange =
    createXRange({
      actions,
      selectionService,
      dockService,
      enableInteraction: () => !dataHandler.getMeta().isBinnedData,
    }) || EMPTY;

  const binXRange =
    createBinXRange({
      actions,
      selectionService,
      dockService,
      chart,
      enableInteraction: () => dataHandler.getMeta().isBinnedData,
    }) || EMPTY;

  const yRange =
    createYRange({
      actions,
      selectionService,
      dockService,
      enableInteraction: () => !dataHandler.getMeta().isBinnedData,
    }) || EMPTY;

  const binYRange =
    createBinYRange({
      actions,
      selectionService,
      dockService,
      chart,
      enableInteraction: () => dataHandler.getMeta().isBinnedData,
    }) || EMPTY;

  const legendRange =
    createLegend({
      actions,
      selectionService,
      scales,
      legend,
    }) || EMPTY;

  return {
    components: [
      ...xRange.components,
      ...yRange.components,
      ...binXRange.components,
      ...binYRange.components,
      ...legendRange.components,
    ],
    interactions: [
      ...xRange.interactions,
      ...yRange.interactions,
      ...binXRange.interactions,
      ...binYRange.interactions,
      ...legendRange.interactions,
    ],
  };
}
