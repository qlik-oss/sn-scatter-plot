import KEYS from '../../../constants/keys';
import isOutOfBounds from './oob-helper';

export default function createOutOfBounds({ colorService, tickModel }) {
  const [xMin, xMax] = tickModel.query.getXMinMax();
  const [yMin, yMax] = tickModel.query.getYMinMax();

  const oobSpace = 10;
  const oobPositions = {
    xMin: -0.005,
    xMax: 1.005,
    yMin: 1.005,
    yMax: -0.005,
  };

  return {
    key: KEYS.COMPONENT.OUT_OF_BOUNDS,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
      filter: (d) => isOutOfBounds(d.x.value, xMin, xMax) || isOutOfBounds(d.y.value, yMin, yMax),
    },
    settings: {
      x: {
        scale: KEYS.SCALE.X,
        fn: ({ datum }) => {
          if (datum.x.value < xMin) return oobPositions.xMin;
          if (datum.x.value > xMax) return oobPositions.xMax;
          return (datum.x.value - xMin) / (xMax - xMin);
        },
      },
      y: {
        scale: KEYS.SCALE.Y,
        fn: ({ datum }) => {
          if (datum.y.value < yMin) return oobPositions.yMin;
          if (datum.y.value > yMax) return oobPositions.yMax;
          return 1 - (datum.y.value - yMin) / (yMax - yMin);
        },
      },
      size: {
        fn: () => '8px',
      },
      fill: colorService.getColor(),
      strokeWidth: 2,
      stroke: '#fff',
    },
    preferredSize: () => ({
      edgeBleed: {
        top: oobSpace,
        bottom: oobSpace,
        left: oobSpace,
        right: oobSpace,
      },
    }),
    beforeRender: ({ size }) => {
      oobPositions.xMin = -oobSpace / (2 * size.width);
      oobPositions.xMax = 1 - oobPositions.xMin;
      oobPositions.yMax = -oobSpace / (2 * size.height);
      oobPositions.yMin = 1 - oobPositions.yMax;
    },
  };
}
