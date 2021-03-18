export default {
  getDotRadius(value, minValue, maxValue, minRadius, maxRadius) {
    if (Number.isNaN(+value) || value === null) {
      return NaN;
    }

    if (minValue === maxValue) {
      return (minRadius + maxRadius) / 2;
    }

    if (value <= minValue) {
      return minRadius;
    }

    if (value >= maxValue) {
      return maxRadius;
    }

    const scaledValue = (value - minValue) / (maxValue - minValue);
    const radius = minRadius + (maxRadius - minRadius) * Math.sqrt(scaledValue);
    return radius;
  },
  getDotMeasureSize(rValue, props, wsm) {
    const radius = this.getDotRadius(rValue, props.sizeDataMin, props.sizeDataMax, props.minDotSize, props.maxDotSize);
    return `${radius * wsm * 2}px`;
  },
  getDotSize(bubbleSize, wsm) {
    return `${bubbleSize * wsm * 2}px`;
  },
};
