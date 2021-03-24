const DIAMETER_OVER_RADIUS = 2;

export default {
  getDotRadius({ sizeDataMin, minDotSize, sizeDataMax, maxDotSize, value }) {
    if (Number.isNaN(+value) || value === null) {
      return NaN;
    }

    if (sizeDataMin === sizeDataMax) {
      return (minDotSize + maxDotSize) / 2;
    }

    if (value <= sizeDataMin) {
      return minDotSize;
    }

    if (value >= sizeDataMax) {
      return maxDotSize;
    }

    const scaledValue = (value - sizeDataMin) / (sizeDataMax - sizeDataMin);
    const radius = minDotSize + (maxDotSize - minDotSize) * Math.sqrt(scaledValue);
    return radius;
  },
  getDotMeasureSize({ sizeDataMin, minDotSize, sizeDataMax, maxDotSize, value, windowSizeMultiplier }) {
    const radius = this.getDotRadius({ sizeDataMin, minDotSize, sizeDataMax, maxDotSize, value });
    return `${radius * windowSizeMultiplier * DIAMETER_OVER_RADIUS}px`;
  },
  getDotSize({ dotSize, windowSizeMultiplier }) {
    return `${dotSize * windowSizeMultiplier * DIAMETER_OVER_RADIUS}px`;
  },
};
