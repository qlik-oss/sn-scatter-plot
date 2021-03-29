import { scaleLinear } from 'd3-scale';
import getCount from './count';

export default function getTicks({ layoutModel, size, min, max }) {
  // estimate number of major ticks based on chart size and axis spacing
  const count = getCount({
    layoutModel,
    size,
  });
  // get a "nice" scale using d3-scale
  const scale = scaleLinear().domain([min, max]).nice(count);

  const ticks = scale.ticks(count);

  return ticks;
}
