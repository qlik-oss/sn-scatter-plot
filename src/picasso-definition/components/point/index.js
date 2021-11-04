import KEYS from '../../../constants/keys';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush';

export default function createPoint({ layoutService, colorService, chartModel }) {
  let windowSizeMultiplier;
  const sizeScaleFn = createSizeScale(layoutService);
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
      transform: () => {
        if (chartModel.query.isPanEnded()) {
          return false;
        }
        if (chartModel.query.isInteractionInProgess()) {
          const { deltaX, deltaY } = chartModel.query.getViewState().get('dataView');
          return {
            horizontalScaling: 1,
            horizontalSkewing: 0,
            verticalSkewing: 0,
            verticalScaling: 1,
            horizontalMoving: deltaX,
            verticalMoving: deltaY,
          };
        }
        return false;
      },
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 0,
      }),
    },
  };
}
