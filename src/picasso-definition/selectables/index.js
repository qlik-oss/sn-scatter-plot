import createTap from './tap';
import createRange from './range';
import createLasso from './lasso';

const EMPTY = { components: [], interactions: [] };

export default function createSelectables({ models, actions, scales, flags, chart }) {
  const tap = createTap({ models, actions, flags }) || EMPTY;

  const range = createRange({ models, actions, scales, chart }) || EMPTY;

  const lasso = createLasso({ models, actions }) || EMPTY;

  return {
    components: [...tap.components, ...range.components, ...lasso.components],
    gestures: [...tap.interactions, ...range.interactions, ...lasso.interactions],
  };
}
