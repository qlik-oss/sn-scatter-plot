import KEYS from '../../../constants/keys';

export default function createPoint({ layoutModel, chartModel }) {
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
        scale: 'x',
      },
      y: {
        scale: 'y',
      },
      size: {
        scale: 'size',
        fn: (d) => {
          const value = d.scale(d.datum.size.value);
          const [min, max] = layoutModel.getLayoutValue('dataPoint.rangeBubbleSizes') || [];
          const minValue = min / 20; // ugly hack for now - px to relative -> / 20
          const maxValue = max / 20; // ugly hack for now - px to relative -> / 20
          const norm = (maxValue - minValue) * value + minValue;
          return norm;
        },
      },
      // fill: color,
      // opacity: 0.8,
      strokeWidth: 0.5,
      stroke: '#fff',
    },
  };
}
