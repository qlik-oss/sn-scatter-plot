import createLegend from './legend';
import createXRange from './x-range';
import createYRange from './y-range';

const EMPTY = { components: [], interactions: [] };

export default function createRange({ models, actions, scales }) {
  const { selectionModel, dockModel, colorService, layoutService } = models;
  const isSingleSelection = layoutService.getHyperCubeValue('qDimensionInfo.0.qIsOneAndOnlyOne', false);
  if (isSingleSelection) {
    return { components: [], interactions: [] };
  }

  const legend = colorService.custom.legendComponents();

  const xRange =
    createXRange({
      actions,
      selectionModel,
      dockModel,
    }) || EMPTY;

  const yRange =
    createYRange({
      actions,
      selectionModel,
      dockModel,
    }) || EMPTY;

  const legendRange =
    createLegend({
      actions,
      selectionModel,
      scales,
      legend,
    }) || EMPTY;

  return {
    components: [...xRange.components, ...yRange.components, ...legendRange.components],
    interactions: [...xRange.interactions, ...yRange.interactions, ...legendRange.interactions],
  };
}
