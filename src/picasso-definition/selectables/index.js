import createTap from './tap';
import createRange from './range';
import createLasso from './lasso';

const EMPTY = { components: [], interactions: [] };

export default function createSelectables({
  actions,
  selectionModel,
  dockModel,
  scales,
  legend,
  customTooltipModel,
  flags,
}) {
  const tap =
    createTap({
      actions,
      selectionModel,
      customTooltipModel,
      flags,
    }) || EMPTY;

  const range =
    createRange({
      actions,
      selectionModel,
      dockModel,
      scales,
      legend,
    }) || EMPTY;

  const lasso =
    createLasso({
      actions,
      selectionModel,
    }) || EMPTY;

  return {
    components: [...tap.components, ...range.components, ...lasso.components],
    gestures: [...tap.interactions, ...range.interactions, ...lasso.interactions],
  };
}
