import KEYS from '../../../constants/keys';
import move from '../../../view-handler/move';
import zoom from '../../../view-handler/zoom';

export default function createNavigationPanel({ layoutService, chartModel, rtl }) {
  const navigation = layoutService.getLayoutValue('navigation');
  const viewHandler = chartModel.query.getViewHandler();
  return {
    key: KEYS.COMPONENT.NAVIGATION_PANEL,
    type: 'navigation-panel',
    show: navigation,
    settings: {
      actions: {
        home: () => {
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
        },
        left: () => {
          move({ viewHandler, direction: 'x', percent: -10, rtl });
        },
        right: () => {
          move({ viewHandler, direction: 'x', percent: 10, rtl });
        },
        up: () => {
          move({ viewHandler, direction: 'y', percent: 10 });
        },
        down: () => {
          move({ viewHandler, direction: 'y', percent: -10 });
        },
        zoomIn: () => {
          zoom({ viewHandler, buttonZoomDirection: 'in' });
        },
        zoomOut: () => {
          zoom({ viewHandler, buttonZoomDirection: 'out' });
        },
      },
      isDisabled: {
        home: () => viewHandler.getMeta().isHomeState,
      },
      rtl,
    },
  };
}
