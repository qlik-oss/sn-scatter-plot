import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import MODES from '../../../constants/modes';

export default function createMiniChartPoints(chartModel, rtl) {
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
    layout: {
      minimumLayoutMode: MODES.MINI_CHART,
    },
    data: {
      items: homeStateBins,
    },
    show: () => chartModel.query.miniChartEnabled(),
    settings: {
      x: (d) => {
        const { xAxisMin, xAxisMax } = homeStateDataView;
        const leftEnd = Math.max(d.datum.value.qText[0], xAxisMin);
        const rightEnd = Math.min(d.datum.value.qText[2], xAxisMax);
        if (rightEnd < leftEnd) {
          return false;
        }
        const xValue = (leftEnd + rightEnd) / 2;
        return rtl
          ? (1 - (xValue - xAxisMin) / (xAxisMax - xAxisMin)) * RATIO + padding.x
          : ((xValue - xAxisMin) / (xAxisMax - xAxisMin)) * RATIO + (1 - RATIO) - padding.x;
      },
      y: (d) => {
        const { yAxisMin, yAxisMax } = homeStateDataView;
        const bottomEnd = Math.max(d.datum.value.qText[3], yAxisMin);
        const topEnd = Math.min(d.datum.value.qText[1], yAxisMax);
        if (topEnd < bottomEnd) {
          return false;
        }
        const yValue = (bottomEnd + topEnd) / 2;
        return ((yAxisMax - yValue) / (yAxisMax - yAxisMin)) * RATIO + (1 - RATIO) - padding.y;
      },
      fill: {
        scale: KEYS.SCALE.HEAT_MAP_COLOR,
        fn: (d) => d.scale(d.datum.value.qNum),
      },
      shape: (d) => {
        const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = homeStateDataView;
        const leftEnd = Math.max(d.datum.value.qText[0], xAxisMin);
        const rightEnd = Math.min(d.datum.value.qText[2], xAxisMax);
        const valueWidth = rightEnd - leftEnd;
        let pxWidth;
        if (valueWidth < 0) {
          pxWidth = 0;
        } else {
          pxWidth = Math.min(bin.width.px, (valueWidth / bin.width.value) * bin.width.px);
        }

        const bottomEnd = Math.max(d.datum.value.qText[3], yAxisMin);
        const topEnd = Math.min(d.datum.value.qText[1], yAxisMax);
        const valueHeight = topEnd - bottomEnd;
        let pxHeight;
        if (valueHeight < 0) {
          pxHeight = 0;
        } else {
          pxHeight = Math.min(bin.height.px, (valueHeight / bin.height.value) * bin.height.px);
        }

        return {
          type: 'rect',
          width: pxWidth,
          height: pxHeight,
        };
      },
    },
    beforeRender: ({ size }) => {
      ({ homeStateDataView } = viewHandler.getMeta());
      const { width, height } = size;
      const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = homeStateDataView;
      bin.width.px = ((bin.width.value * width) / (xAxisMax - xAxisMin)) * RATIO;
      bin.height.px = ((bin.height.value * height) / (yAxisMax - yAxisMin)) * RATIO;
      padding.x = rtl ? (PADDING + 1) / width : (PADDING - 1) / width;
      padding.y = (PADDING - 1) / height;
    },
  };
}
