import KEYS from '../../../constants/keys';
import createBrush from '../../brush/heat-map-brush';

export default function createHeatMap({ chartModel, chart }) {
  const viewHandler = chartModel.query.getViewHandler();
  const { transform } = viewHandler;
  const dataHandler = chartModel.query.getDataHandler();
  let binWidthPx;
  let binHeightPx;

  return {
    key: KEYS.COMPONENT.HEAT_MAP,
    type: 'point',
    data: {
      extract: {
        source: KEYS.DATA.BIN,
        field: KEYS.FIELDS.BIN,
        props: {
          x: { field: KEYS.FIELDS.BIN_X },
          y: { field: KEYS.FIELDS.BIN_Y },
          binDensity: { field: KEYS.FIELDS.BIN_DENSITY },
          selectionDimension: {
            field: KEYS.FIELDS.BIN,
          },
        },
      },
    },
    show: () => dataHandler.getMeta().isBinnedData,
    brush: createBrush(),
    settings: {
      x: {
        scale: KEYS.SCALE.BIN_X,
      },
      y: {
        scale: KEYS.SCALE.BIN_Y,
      },
      fill: {
        scale: KEYS.SCALE.HEAT_MAP_COLOR,
        fn: (d) => d.scale(d.datum.binDensity.value),
      },
      strokeWidth: 0,
      shape: () => ({
        type: 'rect',
        width: binWidthPx,
        height: binHeightPx,
      }),
    },
    beforeRender: ({ size }) => {
      const dataView = viewHandler.getDataView();

      const bins = dataHandler.binArray;
      if (bins.length) {
        const firstBin = bins[0];
        const binWidth = Math.abs(firstBin.qText[0] - firstBin.qText[2]);
        const binHeight = Math.abs(firstBin.qText[1] - firstBin.qText[3]);

        binWidthPx = Math.max(1, (binWidth * size.width) / (dataView.xAxisMax - dataView.xAxisMin));
        binHeightPx = Math.max(1, (binHeight * size.height) / (dataView.yAxisMax - dataView.yAxisMin));
      }
    },

    animations: {
      enabled: () => viewHandler.animationEnabled,
      trackBy: (node, i) => {
        // If it is a current node (dataHanler.binArray contains current nodes)
        // Or it is an old node, but oldNodes and currentNodes are identical (corner case: select all)
        if (
          dataHandler.binArray[i] !== undefined &&
          dataHandler.binArray[i].qElemNumber === node.data.value &&
          dataHandler.binArray[i].qNum === node.data.binDensity.value
        ) {
          return node.data.value;
        }

        // Old node, make sure that its ID is different from that of current nodes
        return node.data.value + 0.5;
      },
    },

    rendererSettings: {
      transform: () =>
        transform(chart.findShapes('rect').filter((node) => node.key === KEYS.COMPONENT.HEAT_MAP).length),
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 100,
      }),
    },
  };
}
