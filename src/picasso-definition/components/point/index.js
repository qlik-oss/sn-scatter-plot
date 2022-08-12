/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush/point-brush';
import movePath from '../../../utils/move-path';

export default function createPoint({ layoutService, colorService, chartModel }) {
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
  const viewHandler = chartModel.query.getViewHandler();
  const dataHandler = chartModel.query.getDataHandler();
  const { transform } = viewHandler;
  return {
    key: KEYS.COMPONENT.POINT,
    type: 'point',
    data: {
      collection: KEYS.COLLECTION.MAIN,
    },
    show: () => !dataHandler.getMeta().isBinnedData,
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
      windowSizeMultiplier = Math.min(size.height, size.width) / NUMBERS.WINDOW_SIZE_BASE;
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
      progressive: () => chartModel.query.getMeta().progressive,
    },
  };
}
