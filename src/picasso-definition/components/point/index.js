import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import createSizeScale from '../../scales/size';
import createBrush from '../../brush/point-brush';
import isOob from '../out-of-bounds/is-oob';
import compensateForLayoutChanges from '../animations/point/compensate';

export default function createPoint({ models, chart, animationsEnabled }) {
  const { layoutService, largeDataService, colorService, chartModel } = models;
  let compSize;
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
    brush: createBrush({
      layoutService,
      largeDataService,
      chartModel,
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
    },
    animations: {
      enabled: animationsEnabled,
      isMainComponent: true,
      compensateForLayoutChanges,
    },
    rendererSettings: {
      transform,
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 100,
      }),
      progressive: layoutService.meta.isProgressiveEnabled
        ? () => {
            const meta = chartModel.query.getMeta();
            return meta.progressive;
          }
        : undefined,
    },
  };
}
