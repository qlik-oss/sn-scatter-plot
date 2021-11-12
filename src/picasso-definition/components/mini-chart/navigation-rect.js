import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartNavigationRect({ chartModel }) {
  const ratio = NUMBERS.MINI_CHART.RATIO;
  const padding = NUMBERS.MINI_CHART.PADDING; // Padding from the bottom right corner

  // Home state data view (corresponding the rect of the mini chart)
  let xAxisMin0;
  let xAxisMax0;
  let yAxisMin0;
  let yAxisMax0;

  // Current data view (corresponding to the rect of the navigation window)
  let xAxisMin;
  let xAxisMax;
  let yAxisMin;
  let yAxisMax;

  // Width and height of the point component
  let width;
  let height;

  // Width and height of the navigation window
  let navWidth;
  let navHeight;

  // The top left corner of the navigation window, relative to the mini chart
  let navX;
  let navY;

  const viewHandler = chartModel.query.getViewHandler();
  const show = () => {
    const { isHomeState, scale } = viewHandler.getMeta();
    return !isHomeState && scale < 1;
  };
  return {
    key: KEYS.COMPONENT.MINI_CHART_NAVIGATION,
    type: 'custom-rect',
    style: { borderColor: 'red', background: 'rgba(200, 200, 200, 0.3)' },
    rect: {
      x: () => width * (1 - ratio) - padding + navX,
      y: () => height * (1 - ratio) - padding + navY,
      width: () => navWidth,
      height: () => navHeight,
    },
    show,
    beforeRender: ({ size }) => {
      ({ width, height } = size);
      const { homeStateDataView } = viewHandler.getMeta();
      ({ xAxisMin: xAxisMin0, xAxisMax: xAxisMax0, yAxisMin: yAxisMin0, yAxisMax: yAxisMax0 } = homeStateDataView);
      ({ xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView());
      navWidth = (width * ratio * (xAxisMax - xAxisMin)) / (xAxisMax0 - xAxisMin0);
      navHeight = (height * ratio * (yAxisMax - yAxisMin)) / (yAxisMax0 - yAxisMin0);
      navX = (width * ratio * (xAxisMin - xAxisMin0)) / (xAxisMax0 - xAxisMin0);
      navY = (height * ratio * (yAxisMax0 - yAxisMax)) / (yAxisMax0 - yAxisMin0);

      // Handle the cases when the navigation window is partly outside of the minichart: we need to truncate the navigation window

      // Left
      if (navX <= 0) {
        if (navX + navWidth <= 0) {
          navWidth = 0;
        } else {
          navWidth += navX;
        }

        navX = 0;
      }

      // Right
      if (navX + navWidth >= width * ratio) {
        if (navX >= width * ratio) {
          navX = width * ratio;
          navWidth = 0;
        } else {
          navWidth = width * ratio - navX;
        }
      }

      // Top
      if (navY <= 0) {
        if (navY + navHeight <= 0) {
          navHeight = 0;
        } else {
          navHeight += navY;
        }

        navY = 0;
      }

      // Bottom
      if (navY + navHeight >= height * ratio) {
        if (navY >= height * ratio) {
          navY = height * ratio;
          navHeight = 0;
        } else {
          navHeight = height * ratio - navY;
        }
      }
    },
  };
}
