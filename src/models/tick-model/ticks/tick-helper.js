import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

function hasDuplicateItems(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      return true;
    }
  }
  return false;
}

const tickHelper = {
  getTicksAndMinMax(scale, nicing, count, originalMin, originalMax) {
    if (nicing) {
      scale.nice(count).nice(count);
    }
    let ticks = scale.ticks(count);
    let [min, max] = scale.domain();

    // Corner case: there is only one tick generated. We then have to make at least two.
    if (ticks.length === 1) {
      if (nicing) {
        scale.domain([originalMin, originalMax]).nice(2).nice(2);
        [min, max] = scale.domain();
        if (min * max >= 0) {
          ticks = [min, max];
        } else if (
          Math.abs(max) > Math.abs(min) ||
          (Math.abs(max) === Math.abs(min) && Math.abs(originalMax) > Math.abs(originalMin))
        ) {
          min = originalMin;
          ticks = [0, max];
        } else {
          max = originalMax;
          ticks = [min, 0];
        }
      } else {
        let newCount = 2;
        while (ticks.length === 1) {
          ticks = scale.ticks(newCount++);
        }
      }
    }
    return { ticks, min, max };
  },

  valid({ ticks, scale, distance, size, formatter, measure }) {
    // It is not valid if the space between two major ticks is smaller than tolerance times distance (i.e. too many ticks)
    const tolerance = ticks.length <= 4 ? 0.5 : 0.8;
    const space = (scale(ticks[1]) - scale(ticks[0])) * size;
    if (space < distance * tolerance) {
      return false;
    }

    // It is also not valid if the axis labels overlap
    const labels = ticks.map(formatter);
    const hasDuplicateLabels = hasDuplicateItems(labels);
    if (hasDuplicateLabels) {
      return false;
    }
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

  getSize(dockService, chartModel, chart, dimension, layoutService) {
    if (layoutService.meta.isSnapshot || chartModel.query.getMeta().isPrelayout) {
      return dockService.meta.chart.size[dimension];
    }
    const pointDimension = chart.component(KEYS.COMPONENT.POINT)?.rect.computedPhysical[dimension];
    const heatMapDimension = chart.component(KEYS.COMPONENT.HEAT_MAP)?.rect.computedPhysical[dimension];
    return Math.max(...[pointDimension, heatMapDimension].filter(Number.isFinite));
  },
};

export default tickHelper;
