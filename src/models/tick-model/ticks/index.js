import getMinorTicks from './minor';

export default function getTicks(scale, nicing, count) {
  const majorTicks = nicing ? scale.nice(count).ticks(count) : scale.ticks(count);
  const minorTicks = getMinorTicks({
    majorTicks,
    count: 1,
  });

  // generate an array of tick objects following the format defined by picasso
  const ticks = [
    ...majorTicks.map((value) => ({ value, isMinor: false })),
    ...minorTicks.map((value) => ({ value, isMinor: true })),
  ].sort((a, b) => a.value - b.value);

  return ticks;
}
