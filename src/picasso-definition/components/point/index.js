import KEYS from '../../../constants/keys';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush';
import isBigData from '../../../utils/is-big-data';

export default function createPoint({ app, models, flags }) {
  const { layoutService, colorService } = models;
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    show: () => {
      const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
      return !isBigData(qcy, app.layout, flags) || !flags.isEnabled('DATA_BINNING');
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
