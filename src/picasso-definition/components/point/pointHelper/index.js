export default {
  getDotRadius(value, props) {
    const { sizeDataMin, minDotSize, sizeDataMax, maxDotSize } = props;

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
  getDotMeasureSize(rValue, props, windowSizeMultiplier) {
    const radius = this.getDotRadius(rValue, props);
    return `${radius * windowSizeMultiplier * 2}px`;
  },
  getDotSize(bubbleSize, windowSizeMultiplier) {
    return `${bubbleSize * windowSizeMultiplier * 2}px`;
  },
};
