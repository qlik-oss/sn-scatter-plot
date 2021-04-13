import KEYS from '../../../constants/keys';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush';

export default function createPoint({ layoutModel, chartModel, colorService }) {
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutModel);
  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    brush: createBrush(),
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
      size: (d) => sizeScaleFn(d, windowSizeMultiplier),
      fill: colorService.getColor(),
      // opacity: 0.8,
      strokeWidth: 0.5,
      stroke: '#fff',
    },
    beforeRender: ({ size }) => {
      windowSizeMultiplier = Math.min(size.height, size.width) / 300;
    },
  };
}
