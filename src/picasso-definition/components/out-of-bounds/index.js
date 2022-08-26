import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import createSizeScale from '../../scales/size';
import isOob from './is-oob';

export function createSpace({ models }) {
  const { dockService, layoutService } = models;
  if (layoutService.meta.isBigData || layoutService.meta.isLargeNumDataPoints) {
    return [];
  }
  const space = (dock) => ({
    key: `${KEYS.COMPONENT.OUT_OF_BOUNDS}-space-${dock}`,
    type: 'container',
    layout: { dock },
    preferredSize: () => NUMBERS.OOB_SPACE,
  });

  return [space(dockService.meta.x.opposite), space(dockService.meta.y.opposite)];
}

export default function createOutOfBounds({ models, context, chart }) {
  const { chartModel, colorService, layoutService } = models;
  const viewHandler = chartModel.query.getViewHandler();
  const { rtl } = context;
  const sizeScaleFn = createSizeScale(layoutService);
  const oobPositions = {
    xMin: -0.005,
    xMax: 1.005,
    yMin: 1.005,
    yMax: -0.005,
  };
  let compSize;
  let windowSizeMultiplier = 0;

  const oobDefinition =
    !layoutService.meta.isBigData && !layoutService.meta.isLargeNumDataPoints
      ? {
          key: KEYS.COMPONENT.OUT_OF_BOUNDS,
          type: 'point',
          data: {
            collection: KEYS.COLLECTION.MAIN,
            filter: (nodeData) => isOob({ nodeData, compSize, chart, sizeScaleFn, viewHandler }),
          },
          settings: {
            x: {
              scale: KEYS.SCALE.X,
              fn: ({ datum }) => {
                const { xAxisMin, xAxisMax } = viewHandler.getDataView();
                if (datum.x.value < xAxisMin) {
                  return rtl ? oobPositions.xMax : oobPositions.xMin;
                }
                if (datum.x.value > xAxisMax) {
                  return rtl ? oobPositions.xMin : oobPositions.xMax;
                }
                return rtl
                  ? (datum.x.value - xAxisMax) / (xAxisMin - xAxisMax)
                  : (datum.x.value - xAxisMin) / (xAxisMax - xAxisMin);
              },
            },
            y: {
              scale: KEYS.SCALE.Y,
              fn: ({ datum }) => {
                const { yAxisMin, yAxisMax } = viewHandler.getDataView();
                if (datum.y.value < yAxisMin) {
                  return oobPositions.yMin;
                }
                if (datum.y.value > yAxisMax) {
                  return oobPositions.yMax;
                }
                return 1 - (datum.y.value - yAxisMin) / (yAxisMax - yAxisMin);
              },
            },
            size: () =>
              `${Math.min(
                Math.ceil(NUMBERS.OOB_SIZE * windowSizeMultiplier * NUMBERS.DIAMETER_OVER_RADIUS),
                NUMBERS.OOB_SIZE
              )}px`,
            fill: colorService.getColor(),
          },
          preferredSize: () => ({
            edgeBleed: {
              top: NUMBERS.OOB_SPACE,
              bottom: NUMBERS.OOB_SPACE,
              left: NUMBERS.OOB_SPACE,
              right: NUMBERS.OOB_SPACE,
            },
          }),
          beforeRender: ({ size }) => {
            // can be changed back to 2 * size.h (size.w) if we want to render it in the middle of the oob space;
            // 1.5 * size.h (size.w) to render it near the edge of the oob space like for old scatterplot
            oobPositions.xMin = -NUMBERS.OOB_SPACE / (1.5 * size.width);
            oobPositions.xMax = 1 - oobPositions.xMin;
            oobPositions.yMax = -NUMBERS.OOB_SPACE / (1.5 * size.height);
            oobPositions.yMin = 1 - oobPositions.yMax;
            windowSizeMultiplier = Math.min(size.height, size.width) / NUMBERS.WINDOW_SIZE_BASE;
            compSize = chart.component(KEYS.COMPONENT.POINT).rect;
          },
        }
      : undefined;

  return oobDefinition;
}
