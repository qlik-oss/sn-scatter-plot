import KEYS from '../../../constants/keys';

export default function createHeatMap({ models, flags }) {
  const { layoutService, chartModel } = models;
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
        },
      },
    },
    show: () => layoutService.meta.isBigData && flags.isEnabled('DATA_BINNING'),
    // brush: { consume: [highlight, highlightIntersect, highlightColor] },
    settings: {
      x: {
        scale: KEYS.SCALE.X,
      },
      y: {
        scale: KEYS.SCALE.Y,
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
      const viewHandler = chartModel.query.getViewHandler();
      const dataView = viewHandler.getDataView();
      const dataHandler = chartModel.query.getDataHandler();
      const bins = dataHandler.binArray;
      if (bins.length) {
        const firstBin = bins[0];
        const binWidth = Math.abs(firstBin.qText[0] - firstBin.qText[2]);
        const binHeight = Math.abs(firstBin.qText[1] - firstBin.qText[3]);

        binWidthPx = Math.ceil((binWidth * size.width) / (dataView.xAxisMax - dataView.xAxisMin));
        binHeightPx = Math.ceil(binHeight * size.height) / (dataView.yAxisMax - dataView.yAxisMin);
      }
    },
  };
}
