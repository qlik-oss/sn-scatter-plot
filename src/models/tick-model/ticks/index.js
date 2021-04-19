import getMinorTicks from './minor';

export default function getTicks({ scale, nicing, count, size, measure, formatter }) {
  let majorTicks = nicing ? scale.nice(count).ticks(count) : scale.ticks(count);

  // Reduce the number of major ticks if the axis labels are too crowded

  const fits = (labels) => {
    const available = size / majorTicks.length;
    return Math.max(...labels.map(measure)) <= available;
  };

  const valid = () => {
    const labels = majorTicks.map(formatter);
    return fits(labels);
  };

  for (let c = count - 1; c > 0; c--) {
    if (valid()) {
      break;
    }
    majorTicks = nicing ? scale.nice(c).ticks(c) : scale.ticks(c);
  }

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
