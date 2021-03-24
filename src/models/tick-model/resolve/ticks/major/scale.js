// import { d3Nice } from '@qlik/chart-commons';
import { scaleLinear } from 'd3-scale';

export default function getScale({ min, max, count }) {
  const scale = scaleLinear().domain([min, max]).nice(count);
  return scale;
}
