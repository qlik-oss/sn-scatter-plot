import KEYS from '../../../constants/keys';

function getDotRadius(value, minValue, maxValue, minRadius, maxRadius) {
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
}

export default function createPoint({ layoutModel, chartModel }) {
  let wsm;
  const sizeDataMin = layoutModel.meta.hasSizeMeasure ? layoutModel.getHyperCube().qMeasureInfo[2].qMin : undefined;
  const sizeDataMax = layoutModel.meta.hasSizeMeasure ? layoutModel.getHyperCube().qMeasureInfo[2].qMax : undefined;
  const [minDotSize, maxDotSize] = layoutModel.getLayoutValue('dataPoint.rangeBubbleSizes') || [];
  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    rendererSettings: {
      transform: () => {
        if (chartModel.query.isInteractionInProgess()) {
          const { x, y } = chartModel.query.getViewState().get('zoom');
          return { a: 1, b: 0, c: 0, d: 1, e: x, f: y };
        }
        return false;
      },
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 0,
      }),
    },
    settings: {
      x: {
        scale: KEYS.SCALE.X,
      },
      y: {
        scale: KEYS.SCALE.Y,
      },
      size: layoutModel.meta.hasSizeMeasure
        ? (d) => {
            const r = getDotRadius(d.datum.size.value, sizeDataMin, sizeDataMax, minDotSize, maxDotSize);
            return `${r * wsm * 2}px`;
          }
        : () => `${layoutModel.getLayoutValue('dataPoint.bubbleSizes') * wsm * 2}px`,
      // fill: color,
      // opacity: 0.8,
      strokeWidth: 0.5,
      stroke: '#fff',
    },
    beforeRender: ({ size }) => {
      wsm = Math.min(size.height, size.width) / 300;
    },
  };
}
