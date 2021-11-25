/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartNavigationWindow(chartModel) {
  const { RATIO, PADDING } = NUMBERS.MINI_CHART; // Padding from the bottom right corner

  // Home state data view (corresponding the rect of the mini chart)
  let homeStateDataView;

  // Current data view (corresponding to the rect of the navigation window)
  let dataView;

  // Width and height of the point component
  let pointRect = { width: 0, height: 0 };

  // Width, height and top left corner of the navigation window, relative to the mini chart
  const navRect = { width: 0, height: 0, x: 0, y: 0 };

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
        x: () => pointRect.width * (1 - RATIO) - PADDING + navRect.x,
        y: () => pointRect.height * (1 - RATIO) - PADDING + navRect.y,
        width: () => navRect.width,
        height: () => navRect.height,
      },
    },
    beforeRender: ({ size }) => {
      pointRect = size;
      ({ homeStateDataView } = viewHandler.getMeta());
      dataView = viewHandler.getDataView();
      navRect.width =
        (pointRect.width * RATIO * (dataView.xAxisMax - dataView.xAxisMin)) /
        (homeStateDataView.xAxisMax - homeStateDataView.xAxisMin);
      navRect.height =
        (pointRect.height * RATIO * (dataView.yAxisMax - dataView.yAxisMin)) /
        (homeStateDataView.yAxisMax - homeStateDataView.yAxisMin);
      navRect.x =
        (pointRect.width * RATIO * (dataView.xAxisMin - homeStateDataView.xAxisMin)) /
        (homeStateDataView.xAxisMax - homeStateDataView.xAxisMin);
      navRect.y =
        (pointRect.height * RATIO * (homeStateDataView.yAxisMax - dataView.yAxisMax)) /
        (homeStateDataView.yAxisMax - homeStateDataView.yAxisMin);

      // Handle the cases when the navigation window is partly outside of the minichart: we need to truncate the navigation window
      truncateNavigationWindow({ nav: navRect, point: pointRect });
    },
  };
}
