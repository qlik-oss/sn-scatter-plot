import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartPoints(chartModel) {
  const { RATIO, PADDING } = NUMBERS.MINI_CHART; // Padding from the bottom right corner

  // Padding, normalized to chart size
  const padding = { x: 0, y: 0 };

  // Home state data view (corresponding the rect of the mini chart)
  let homeStateDataView;

  // Sizes of the bin, in measure values and in pixels
  const bin = { width: { value: 0, px: 0 }, height: { value: 0, px: 0 } };

  const viewHandler = chartModel.query.getViewHandler();
  const dataHandler = chartModel.query.getDataHandler();
  const homeStateBins = dataHandler.getHomeStateBins(viewHandler.getMeta().isHomeState);
  if (homeStateBins.length) {
    const firstBin = homeStateBins[0];
    bin.width.value = Math.abs(firstBin.qText[0] - firstBin.qText[2]);
    bin.height.value = Math.abs(firstBin.qText[1] - firstBin.qText[3]);
  }

  return {
    key: KEYS.COMPONENT.MINI_CHART_POINT,
    type: 'point',
    data: {
      items: homeStateBins,
    },
    show: () => chartModel.query.miniChartEnabled(),
    settings: {
      x: (d) => {
        const xValue = (d.datum.value.qText[0] + d.datum.value.qText[2]) / 2;
        return (
          ((xValue - homeStateDataView.xAxisMin) / (homeStateDataView.xAxisMax - homeStateDataView.xAxisMin)) * RATIO +
          (1 - RATIO) -
          padding.x
        );
      },
      y: (d) => {
        const yValue = (d.datum.value.qText[1] + d.datum.value.qText[3]) / 2;
        return (
          ((homeStateDataView.yAxisMax - yValue) / (homeStateDataView.yAxisMax - homeStateDataView.yAxisMin)) * RATIO +
          (1 - RATIO) -
          padding.y
        );
      },
      fill: {
        scale: KEYS.SCALE.HEAT_MAP_COLOR,
        fn: (d) => d.scale(d.datum.value.qNum),
      },
      shape: () => ({
        type: 'rect',
        width: bin.width.px,
        height: bin.height.px,
      }),
    },
    beforeRender: ({ size }) => {
      ({ homeStateDataView } = viewHandler.getMeta());
      const { width, height } = size;
      bin.width.px = ((bin.width.value * width) / (homeStateDataView.xAxisMax - homeStateDataView.xAxisMin)) * RATIO;
      bin.height.px = ((bin.height.value * height) / (homeStateDataView.yAxisMax - homeStateDataView.yAxisMin)) * RATIO;
      padding.x = PADDING / width;
      padding.y = PADDING / height;
    },
  };
}
