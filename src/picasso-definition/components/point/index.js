/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush/point-brush';
import movePath from '../../../utils/move-path';
import { computeWidth, computeColor } from '../../../utils/width-color';
import isOob from '../out-of-bounds/is-oob';

export default function createPoint({ models, chart }) {
  const { layoutService, colorService, chartModel } = models;
  let compSize;
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
  const viewHandler = chartModel.query.getViewHandler();
  const dataHandler = chartModel.query.getDataHandler();
  const { transform } = viewHandler;
  let numBubblesInBigData;

  const getNumBubblesInBigData = () => {
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
  const strokeWidthInBigData = () => computeWidth(numBubblesInBigData);
  const strokeColorInBigData = () => computeColor(numBubblesInBigData);

  // For zoom/pan from large number data points to its subset
  const strokeWidthInLargeData = () => {
    const { numVisibleBubbles } = chartModel.query.getMeta() || {};
    return computeWidth(numVisibleBubbles);
  };
  const strokeColorInLargeData = () => {
    const { numVisibleBubbles } = chartModel.query.getMeta() || {};
    return computeColor(numVisibleBubbles);
  };

  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    show: () => !dataHandler.getMeta().isBinnedData,
    brush: createBrush({
      layoutService,
      strokeWidthInBigData,
      strokeColorInBigData,
      strokeWidthInLargeData,
      strokeColorInLargeData,
    }),
    settings: {
      show: (d) => !isOob({ nodeData: d.datum, compSize, chart, sizeScaleFn, viewHandler }),
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
      compSize = size;
      windowSizeMultiplier = Math.min(size.height, size.width) / NUMBERS.WINDOW_SIZE_BASE;
      numBubblesInBigData = getNumBubblesInBigData();
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
