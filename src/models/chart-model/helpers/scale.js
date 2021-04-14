import { scaleLinear } from 'd3-scale';
import KEYS from '../../../constants/keys';

const AXIS_SPACING = {
  NARROW: 50,
  MEDIUM: 100,
  WIDE: 200,
  FALLBACK: 125,
};

const getDistance = (spacing) => {
  switch (spacing) {
    case 0.5:
      return AXIS_SPACING.NARROW;
    case 1:
      return AXIS_SPACING.MEDIUM;
    case 2:
      return AXIS_SPACING.WIDE;
    default:
      return spacing * AXIS_SPACING.FALLBACK;
  }
};

function getCount({ layoutModel, scaleName, size }) {
  const path = scaleName === KEYS.SCALE.X ? 'xAxis.spacing' : 'yAxis.spacing';
  const spacing = layoutModel.getLayoutValue(path, 2);
  const distance = getDistance(spacing);

  return Math.max(1, Math.round(size / distance));
}

export default function getD3Scale({ layoutModel, scaleName, size, min, max }) {
  const count = getCount({
    layoutModel,
    scaleName,
    size,
  });
  let localMin = min;
  let localMax = max;
  // const scale = scaleLinear().domain([localMin, localMax]).nice(count);
  const api = {
    getScale: () => scaleLinear().domain([localMin, localMax]).nice(count),
    getDomain: () => scaleLinear().domain([localMin, localMax]).nice(count).domain(),
    getTicks: () => scaleLinear().domain([localMin, localMax]).nice(count).ticks(count),
    updateMinMax: (newMin, newMax) => {
      localMin = newMin;
      localMax = newMax;
    },
  };

  return api;
}
