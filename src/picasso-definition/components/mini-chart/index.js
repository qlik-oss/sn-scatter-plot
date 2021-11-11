import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChart({ chartModel }) {
  const s = NUMBERS.MINI_CHART.SCALE;
  const p = NUMBERS.MINI_CHART.PADDING; // Padding from the bottom right corner

  // Padding, normalized to chart size
  let px;
  let py;

  // Home state data view (corresponding the rect of the mini chart)
  let xMin0;
  let xMax0;
  let yMin0;
  let yMax0;

  // Current data view (corresponding to the rect of the navigation window)
  let xMin;
  let xMax;
  let yMin;
  let yMax;

  // Width and height of the point component
  let W;
  let H;

  // Horizontal and vertical coordinate of the top left corner of the navigation window, relative to the mini chart
  let u;
  let v;

  // Width and height of the navigation window (the one with red border)
  let w;
  let h;

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

  const miniChartBackground = {
    key: KEYS.COMPONENT.MINI_CHART_BACKGROUND,
    type: 'custom-rect',
    style: { borderColor: 'black', background: 'white', opacity: 0.7 },
    rect: {
      x: () => W * (1 - s) - p,
      y: () => H * (1 - s) - p,
      width: () => W * s,
      height: () => H * s,
    },
    show,
    beforeRender: ({ size }) => {
      ({ width: W, height: H } = size);
    },
  };

  const miniCharNavigationRect = {
    key: KEYS.COMPONENT.MINI_CHART_NAVIGATION,
    type: 'custom-rect',
    style: { borderColor: 'red', background: 'silver', opacity: 0.5 },
    rect: {
      x: () => W * (1 - s) - p + u,
      y: () => H * (1 - s) - p + v,
      width: () => w,
      height: () => h,
    },
    show,
    beforeRender: ({ size }) => {
      ({ width: W, height: H } = size);
      const { homeStateDataView } = viewHandler.getMeta();
      ({ xAxisMin: xMin0, xAxisMax: xMax0, yAxisMin: yMin0, yAxisMax: yMax0 } = homeStateDataView);
      ({ xAxisMin: xMin, xAxisMax: xMax, yAxisMin: yMin, yAxisMax: yMax } = viewHandler.getDataView());
      w = (W * s * (xMax - xMin)) / (xMax0 - xMin0);
      h = (H * s * (yMax - yMin)) / (yMax0 - yMin0);
      u = (W * s * (xMin - xMin0)) / (xMax0 - xMin0);
      v = (H * s * (yMax0 - yMax)) / (yMax0 - yMin0);

      // Handle the cases when the navigation window is partly outside of the minichart: we need to truncate the navigation window
      if (u <= 0) {
        if (u + w <= 0) {
          w = 0;
        } else {
          w += u;
        }

        u = 0;
      }

      if (u + w >= W * s) {
        if (u >= W * s) {
          u = W * s;
          w = 0;
        } else {
          w = W * s - u;
        }
      }

      if (v <= 0) {
        if (v + h <= 0) {
          h = 0;
        } else {
          h += v;
        }

        v = 0;
      }

      if (v + h >= H * s) {
        if (v >= H * s) {
          v = H * s;
          h = 0;
        } else {
          h = H * s - v;
        }
      }
    },
  };

  const miniChartPoints = {
    key: KEYS.COMPONENT.MINI_CHART_POINT,
    type: 'point',
    data: {
      items: homeStateBins,
    },
    show,
    settings: {
      x: (d) => {
        const xValue = (d.datum.value.qText[0] + d.datum.value.qText[2]) / 2;
        return ((xValue - xMin0) / (xMax0 - xMin0)) * s + (1 - s) - px;
      },
      y: (d) => {
        const yValue = (d.datum.value.qText[1] + d.datum.value.qText[3]) / 2;
        return ((yMax0 - yValue) / (yMax0 - yMin0)) * s + (1 - s) - py;
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
      binWidthPx = ((binWidth * width) / (xMax0 - xMin0)) * s;
      binHeightPx = ((binHeight * height) / (yMax0 - yMin0)) * s;
      px = p / width;
      py = p / height;
    },
  };
  return [miniChartBackground, miniCharNavigationRect, miniChartPoints];
}
