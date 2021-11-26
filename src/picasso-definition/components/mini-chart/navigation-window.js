/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartNavigationWindow(chartModel) {
  const { RATIO, PADDING } = NUMBERS.MINI_CHART; // Padding from the bottom right corner

  const state = {
    // Home state data view (corresponding the rect of the mini chart)
    homeStateDataView: undefined,
    // Current data view (corresponding to the rect of the navigation window)
    dataView: undefined,
    // The rect of the point component
    pointRect: undefined,
    // The rect of the navigation window, relative to the mini chart
    navRect: undefined,
  };

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
    style: { borderColor: 'red', background: 'rgba(200, 200, 200, 0.3)' },
    show: () => chartModel.query.miniChartEnabled(),
    settings: {
      rect: {
        x: () => state.pointRect.width * (1 - RATIO) - PADDING + state.navRect.x,
        y: () => state.pointRect.height * (1 - RATIO) - PADDING + state.navRect.y,
        width: () => state.navRect.width,
        height: () => state.navRect.height,
      },
    },
    beforeRender: ({ size }) => {
      state.pointRect = size;
      state.homeStateDataView = viewHandler.getMeta().homeStateDataView;
      state.dataView = viewHandler.getDataView();
      state.navRect = {
        width:
          (state.pointRect.width * RATIO * (state.dataView.xAxisMax - state.dataView.xAxisMin)) /
          (state.homeStateDataView.xAxisMax - state.homeStateDataView.xAxisMin),
        height:
          (state.pointRect.height * RATIO * (state.dataView.yAxisMax - state.dataView.yAxisMin)) /
          (state.homeStateDataView.yAxisMax - state.homeStateDataView.yAxisMin),
        x:
          (state.pointRect.width * RATIO * (state.dataView.xAxisMin - state.homeStateDataView.xAxisMin)) /
          (state.homeStateDataView.xAxisMax - state.homeStateDataView.xAxisMin),
        y:
          (state.pointRect.height * RATIO * (state.homeStateDataView.yAxisMax - state.dataView.yAxisMax)) /
          (state.homeStateDataView.yAxisMax - state.homeStateDataView.yAxisMin),
      };

      // Handle the cases when the navigation window is partly outside of the minichart: we need to truncate the navigation window
      truncateNavigationWindow({ nav: state.navRect, point: state.pointRect });
    },
  };
}
