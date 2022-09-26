import picassoQ from 'picasso-plugin-q';
import { selectionService as createSelectionService } from 'qlik-chart-modules';
import qBrush from './bin-selection/q-brush';
import KEYS from '../../constants/keys';
import isRangeHandlersVisible from './is-range-handlers-visible';
import addListeners from '../../utils/add-listeners';
import removeListeners from '../../utils/remove-listeners';

export default function createService({ chart, actions, selections }) {
  const allowSimultaneous = [...Array(15)].map((d, i) => `qHyperCube/qMeasureInfo/${i}`);
  allowSimultaneous.push('binData/binX');
  allowSimultaneous.push('binData/binY');

  const service = createSelectionService({
    chart,
    actions,
    selections,
    config: {
      brushEvents: {
        update: ({ selectionInfo }) => {
          if (selectionInfo.event === 'binXRange' || selectionInfo.event === 'binYRange') {
            const brush = chart.brush('selection');
            const brushArray = brush.brushes();
            if (brushArray?.length && actions?.select?.emit) {
              const res =
                selectionInfo.event === 'binXRange'
                  ? brushArray.filter((b) => b.id === 'binData/binX')
                  : brushArray.filter((b) => b.id === 'binData/binY');

              if (res?.length) {
                actions.select.emit(selectionInfo.event, res[0].brush.ranges()[0]);
              }
            }
          }
        },
      },
      allowSimultaneous,
      selectionActions: {
        clear: ({ clearMinor, clearLegend, selectionInfo, cleared }) => {
          const isSelectingRanges = ['xRange', 'yRange', 'binXRange', 'binYRange'].includes(selectionInfo.event);
          const isSelectingBinRanges = ['binXRange', 'binYRange'].includes(selectionInfo.event);

          // To check if the previous selection is range selection
          const rangeHandlersVisible = isRangeHandlersVisible();

          if (cleared || !isSelectingRanges) {
            clearMinor({ eventName: 'xRange', componentName: KEYS.BRUSH.X_RANGE });
            clearMinor({ eventName: 'yRange', componentName: KEYS.BRUSH.Y_RANGE });
            clearMinor({ eventName: 'binXRange', componentName: KEYS.BRUSH.BIN_X_RANGE });
            clearMinor({ eventName: 'binYRange', componentName: KEYS.BRUSH.BIN_Y_RANGE });
            if (isSelectingBinRanges) {
              actions.select.emit('binsRangeSelectionClear');
            }
          }

          if (cleared || rangeHandlersVisible || isSelectingRanges || isSelectingBinRanges) {
            chart.brush('lazySelection').clear();
          }

          clearLegend();
        },
      },
      selectionsFn: (brush, qBrushOptions, layout) => {
        if (layout.qHyperCube.qDataPages.length) {
          return picassoQ.selections(brush, qBrushOptions, layout);
        }
        return qBrush(brush, qBrushOptions, layout);
      },
    },
  });

  const lazyBrush = chart.brush('lazySelection');

  const lazySelectionListeners = {
    activate: () => {},
    deactivated: () => lazyBrush.end(),
    cleared: () => lazyBrush.clear(),
    canceled: () => lazyBrush.end(),
  };

  addListeners(selections, lazySelectionListeners);

  service.destroyLazySelection = () => {
    removeListeners(selections, lazySelectionListeners);
  };

  return service;
}
