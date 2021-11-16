import KEYS from '../../../constants/keys';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush';

export default function createPoint({ layoutService, colorService, chartModel }) {
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
  const viewHandler = chartModel.query.getViewHandler();
  const { transform } = viewHandler;
  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    brush: createBrush(),
    settings: {
      x: {
        scale: KEYS.SCALE.X,
      },
      y: {
        scale: KEYS.SCALE.Y,
      },
      size: (d) => sizeScaleFn(d, windowSizeMultiplier) || '8px',
      fill: colorService.getColor(),
      // opacity: 0.8,
      strokeWidth: 0.5,
      stroke: '#fff',
      shape: (d) => (sizeScaleFn(d, windowSizeMultiplier) ? 'circle' : 'saltire'),
    },
    beforeRender: ({ size }) => {
      windowSizeMultiplier = Math.min(size.height, size.width) / 300;
    },
    rendererSettings: {
      transform,
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 100,
      }),
    },
  };
}
