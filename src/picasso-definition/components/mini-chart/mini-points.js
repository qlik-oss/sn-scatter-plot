import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartPoints({ chartModel }) {
  const ratio = NUMBERS.MINI_CHART.RATIO;
  const padding = NUMBERS.MINI_CHART.PADDING; // Padding from the bottom right corner

  // Padding, normalized to chart size
  let px;
  let py;

  // Home state data view (corresponding the rect of the mini chart)
  let xMin0;
  let xMax0;
  let yMin0;
  let yMax0;

  // Sizes of the bin, in measure values and in pixels
  let binWidth;
  let binHeight;
  let binWidthPx;
  let binHeightPx;

  const homeStateBins = chartModel.query.getDataHandler().binArray.slice();
  if (homeStateBins.length) {
    const firstBin = homeStateBins[0];
    binWidth = Math.abs(firstBin.qText[0] - firstBin.qText[2]);
    binHeight = Math.abs(firstBin.qText[1] - firstBin.qText[3]);
  }

  const viewHandler = chartModel.query.getViewHandler();

  const show = () => {
    const { isHomeState, scale } = viewHandler.getMeta();
    return !isHomeState && scale < 1;
  };

  return {
    key: KEYS.COMPONENT.MINI_CHART_POINT,
    type: 'point',
    data: {
      items: homeStateBins,
    },
    show,
    settings: {
      x: (d) => {
        const xValue = (d.datum.value.qText[0] + d.datum.value.qText[2]) / 2;
        return ((xValue - xMin0) / (xMax0 - xMin0)) * ratio + (1 - ratio) - px;
      },
      y: (d) => {
        const yValue = (d.datum.value.qText[1] + d.datum.value.qText[3]) / 2;
        return ((yMax0 - yValue) / (yMax0 - yMin0)) * ratio + (1 - ratio) - py;
      },
      fill: {
        scale: KEYS.SCALE.HEAT_MAP_COLOR,
        fn: (d) => d.scale(d.datum.value.qNum),
      },
      shape: () => ({
        type: 'rect',
        width: binWidthPx,
        height: binHeightPx,
      }),
    },
    beforeRender: ({ size }) => {
      const { homeStateDataView } = viewHandler.getMeta();
      ({ xAxisMin: xMin0, xAxisMax: xMax0, yAxisMin: yMin0, yAxisMax: yMax0 } = homeStateDataView);
      const { width, height } = size;
      binWidthPx = ((binWidth * width) / (xMax0 - xMin0)) * ratio;
      binHeightPx = ((binHeight * height) / (yMax0 - yMin0)) * ratio;
      px = padding / width;
      py = padding / height;
    },
  };
}
