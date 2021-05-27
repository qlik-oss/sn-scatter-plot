const tickHelper = {
  getTicksAndMinMax(scale, nicing, count, originalMin, originalMax) {
    if (nicing) scale.nice(count);
    let ticks = scale.ticks(count);
    const [min, max] = scale.domain();

    // Corner case: nicing is true and there is only one tick generated. We then have to make it two.
    if (nicing && ticks.length === 1) {
      scale.domain([originalMin, originalMax]).nice(2);
      ticks = scale.domain();
    }
    return { ticks, min, max };
  },

  valid({ ticks, scale, distance, size, formatter, measure }) {
    // It is not valid if the space between two major ticks is smaller than 80% of the distance (i.e. too many ticks)
    const tolerance = 0.8;
    const space = (scale(ticks[1]) - scale(ticks[0])) * size;
    if (space < distance * tolerance) return false;

    // It is also not valid if the axis labels overlap
    const labels = ticks.map(formatter);
    const available = size / ticks.length;
    return Math.max(...labels.map(measure)) <= available;
  },
};

export default tickHelper;
