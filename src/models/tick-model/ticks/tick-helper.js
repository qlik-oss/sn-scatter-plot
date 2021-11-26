import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

const tickHelper = {
  getTicksAndMinMax(scale, nicing, count, originalMin, originalMax) {
    if (nicing) {
      scale.nice(count).nice(count);
    }
    let ticks = scale.ticks(count);
    let [min, max] = scale.domain();

    // Corner case: nicing is true and there is only one tick generated. We then have to make it two.
    if (nicing && ticks.length === 1) {
      scale.domain([originalMin, originalMax]).nice(2).nice(2);
      [min, max] = scale.domain();
      ticks = [min, max];
    }
    return { ticks, min, max };
  },

  valid({ ticks, scale, distance, size, formatter, measure }) {
    // It is not valid if the space between two major ticks is smaller than 80% of the distance (i.e. too many ticks)
    const tolerance = 0.8;
    const space = (scale(ticks[1]) - scale(ticks[0])) * size;
    if (space < distance * tolerance) {
      return false;
    }

    // It is also not valid if the axis labels overlap
    const labels = ticks.map(formatter);
    const available = size / ticks.length;
    return Math.max(...labels.map(measure)) <= available;
  },

  getDistance(spacing) {
    switch (spacing) {
      case 0.5:
        return NUMBERS.GRID_DISTANCE.NARROW;
      case 1:
        return NUMBERS.GRID_DISTANCE.MEDIUM;
      case 2:
        return NUMBERS.GRID_DISTANCE.WIDE;
      default:
        return NUMBERS.GRID_DISTANCE.FALLBACK;
    }
  },

  getSize(dockService, chartModel, chart, dimension) {
    const dataHandler = chartModel.query.getDataHandler();
    const size = chartModel.query.isPrelayout()
      ? dockService.meta.chart.size[dimension]
      : chart.component(dataHandler.getMeta().isBinnedData ? KEYS.COMPONENT.HEAT_MAP : KEYS.COMPONENT.POINT).rect[
          dimension
        ];
    return size;
  },
};

export default tickHelper;
