import KEYS from '../../../constants/keys';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush';

export default function createPoint({ layoutService, colorService, tickModel }) {
  const [xMin, xMax] = tickModel.query.getXMinMax();
  const [yMin, yMax] = tickModel.query.getYMinMax();
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
      // filter out oob values
      filter: (d) => d.x.value >= xMin && d.x.value <= xMax && d.y.value >= yMin && d.y.value <= yMax,
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
  };
}
