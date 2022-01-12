import picassoQ from 'picasso-plugin-q';
import { selectionService as createSelectionService } from 'qlik-chart-modules';
import qBrush from './bin-selection/q-brush';
import KEYS from '../../constants/keys';

export default function createService({ chart, actions, selections }) {
  const allowSimultaneous = [...Array(15)].map((d, i) => `qHyperCube/qMeasureInfo/${i}`);
  allowSimultaneous.push('binData/binX');
  allowSimultaneous.push('binData/binY');

  const service = createSelectionService({
    chart,
    actions,
    selections,
    config: {
      allowSimultaneous,
      selectionActions: {
        clear: ({ clearMinor, clearLegend, selectionInfo, cleared }) => {
          const isSelectingRanges = ['xRange', 'yRange', 'binXRange', 'binYRange'].includes(selectionInfo.event);
          if (cleared || !isSelectingRanges) {
            clearMinor({ eventName: 'xRange', componentName: KEYS.BRUSH.X_RANGE });
            clearMinor({ eventName: 'yRange', componentName: KEYS.BRUSH.Y_RANGE });
            clearMinor({ eventName: 'binXRange', componentName: KEYS.BRUSH.BIN_X_RANGE });
            clearMinor({ eventName: 'binYRange', componentName: KEYS.BRUSH.BIN_Y_RANGE });
            if (selectionInfo.components.includes(KEYS.COMPONENT.HEAT_MAP_HIGHLIGHT)) {
              actions.select.emit('binsRangeSelectionClear');
            }
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

  return service;
}
