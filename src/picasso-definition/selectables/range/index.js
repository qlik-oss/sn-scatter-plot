import createLegend from './legend';
import createXRange from './x-range';
import createYRange from './y-range';

const EMPTY = { components: [], interactions: [] };

export default function createRange({ actions, selectionModel, dockModel, scales, legend }) {
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
