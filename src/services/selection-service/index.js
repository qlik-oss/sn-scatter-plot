import picassoQ from 'picasso-plugin-q';
import { selectionService as createSelectionService } from 'qlik-chart-modules';
import qBrush from './bin-selection/q-brush';

export default function createService({ chart, actions, selections }) {
  const allowSimultaneous = [...Array(15)].map((d, i) => `qHyperCube/qMeasureInfo/${i}`);

  const service = createSelectionService({
    chart,
    actions,
    selections,
    config: {
      allowSimultaneous,
      selectionActions: {
        clear: ({ clearMinor, clearLegend, selectionInfo, cleared }) => {
          const isSelectingRanges = ['xRange', 'yRange'].includes(selectionInfo.event);
          if (cleared || !isSelectingRanges) {
            clearMinor({ eventName: 'xRange', componentName: 'x-range-brush' });
            clearMinor({ eventName: 'yRange', componentName: 'y-range-brush' });
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
