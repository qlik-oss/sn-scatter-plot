import getMinorTicks from './minor';
import tickHelper from './tick-helper';

export default function getTicks({ scale, explicitType, distance, size, measure, formatter }) {
  const [originalMin, originalMax] = scale.domain();

  // 'Nice' if at least one end is implicit (extendable). You can't nice only one end with d3 scale
  const nicing = explicitType !== 'minMax';
  const count = Math.max(1, Math.round(size / distance));

  let { ticks: majorTicks, min, max } = tickHelper.getTicksAndMinMax(scale, nicing, count, originalMin, originalMax);
  for (let c = count - 1; c > 0; c--) {
    if (tickHelper.valid({ scale, ticks: majorTicks, distance, size, measure, formatter })) {
      break;
    }
    ({ ticks: majorTicks, min, max } = tickHelper.getTicksAndMinMax(scale, nicing, c, originalMin, originalMax));
  }

  const minorTicks = getMinorTicks({ majorTicks, count: 1 });

  // Generate an array of tick objects following the format defined by picasso
  const ticks = [
    ...majorTicks.map((value) => ({ value, isMinor: false })),
    ...minorTicks.map((value) => ({ value, isMinor: true })),
  ].sort((a, b) => a.value - b.value);

  // Post-processing min and max
  if (explicitType === 'min') {
    min = originalMin;
  }
  if (explicitType === 'max') {
    max = originalMax;
  }
  const minMax = [min, max];

  return { ticks, minMax };
}
