/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush/point-brush';
import movePath from '../../../utils/move-path';
import { computeWidth, computeColor } from '../../../utils/width-color';

export default function createPoint({ layoutService, colorService, chartModel }) {
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
  const viewHandler = chartModel.query.getViewHandler();
  const dataHandler = chartModel.query.getDataHandler();
  const { transform } = viewHandler;
  let numDataPoints;

  const getNumDataPoints = () => {
    const dataPages = layoutService.getDataPages();
    if (dataPages.length) {
      const { qMatrix, qArea } = dataPages[0];
      const { qLeft, qTop, qWidth, qHeight } = qArea;
      const isBinnedData = dataPages.length === 1 && !qMatrix.length && !qLeft && !qTop && !qWidth && !qHeight;
      if (isBinnedData) {
        return 0;
      }
      return qMatrix.length;
    }
    return 0;
  };

  // For zoom/pan from bin data to point data
  const strokeWidthOnFlyFn = () => computeWidth(numDataPoints);
  const strokeColorOnFlyFn = () => computeColor(numDataPoints);

  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    show: () => !dataHandler.getMeta().isBinnedData,
    brush: createBrush({ layoutService, strokeWidthOnFlyFn, strokeColorOnFlyFn }),
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
      windowSizeMultiplier = Math.min(size.height, size.width) / NUMBERS.WINDOW_SIZE_BASE;
      numDataPoints = getNumDataPoints() || 1;
    },
    animations: {
      enabled: () => chartModel.query.animationEnabled(),
      compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
        if (currentRect.x !== previousRect.x) {
          const deltaX = currentRect.x - previousRect.x;
          currentNodes.forEach((node) => {
            switch (node.type) {
              case 'circle':
                node.cx -= deltaX;
                break;
              case 'path': {
                node.d = movePath(node.d, -deltaX);
                break;
              }
              default:
                break;
            }
          });
        }
      },
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
