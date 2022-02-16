/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import MODES from '../../../constants/modes';

export default function createMiniChartNavigationWindow(chartModel, rtl) {
  const { RATIO, PADDING } = NUMBERS.MINI_CHART; // Padding from the bottom right corner

  // Current data view (corresponding to the rect of the navigation window)
  let dataView;
  // The rect of the point component
  let pointRect;
  // The rect of the navigation window, relative to the mini chart
  let navRect;

  const viewHandler = chartModel.query.getViewHandler();

  const truncateNavigationWindow = ({ nav, point }) => {
    // Left
    if (nav.x <= 0) {
      if (nav.x + nav.width <= 0) {
        nav.width = 0;
      } else {
        nav.width += nav.x;
      }

      nav.x = 0;
    }

    // Right
    if (nav.x + nav.width >= point.width * RATIO) {
      if (nav.x >= point.width * RATIO) {
        nav.x = point.width * RATIO;
        nav.width = 0;
      } else {
        nav.width = point.width * RATIO - nav.x;
      }
    }

    // Top
    if (nav.y <= 0) {
      if (nav.y + nav.height <= 0) {
        nav.height = 0;
      } else {
        nav.height += nav.y;
      }

      nav.y = 0;
    }

    // Bottom
    if (nav.y + nav.height >= point.height * RATIO) {
      if (nav.y >= point.height * RATIO) {
        nav.y = point.height * RATIO;
        nav.height = 0;
      } else {
        nav.height = point.height * RATIO - nav.y;
      }
    }
  };

  return {
    key: KEYS.COMPONENT.MINI_CHART_NAVIGATION,
    type: 'mini-chart-window',
    layout: {
      minimumLayoutMode: MODES.MINI_CHART,
    },
    style: { borderColor: '#DC423F', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '0px' },
    show: () => chartModel.query.miniChartEnabled(),
    settings: {
      rect: {
        x: () => (rtl ? PADDING + navRect.x : pointRect.width * (1 - RATIO) - PADDING + navRect.x),
        y: () => pointRect.height * (1 - RATIO) - PADDING + navRect.y,
        width: () => navRect.width,
        height: () => navRect.height,
      },
    },
    beforeRender: ({ size }) => {
      pointRect = size;
      const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getMeta().homeStateDataView;
      dataView = viewHandler.getDataView();
      navRect = {
        width: (pointRect.width * RATIO * (dataView.xAxisMax - dataView.xAxisMin)) / (xAxisMax - xAxisMin),
        height: (pointRect.height * RATIO * (dataView.yAxisMax - dataView.yAxisMin)) / (yAxisMax - yAxisMin),
        x: rtl
          ? (pointRect.width * RATIO * (-dataView.xAxisMax + xAxisMax)) / (xAxisMax - xAxisMin)
          : (pointRect.width * RATIO * (dataView.xAxisMin - xAxisMin)) / (xAxisMax - xAxisMin),
        y: (pointRect.height * RATIO * (yAxisMax - dataView.yAxisMax)) / (yAxisMax - yAxisMin),
      };

      // Handle the cases when the navigation window is partly outside of the minichart: we need to truncate the navigation window
      truncateNavigationWindow({ nav: navRect, point: pointRect });
    },
  };
}
