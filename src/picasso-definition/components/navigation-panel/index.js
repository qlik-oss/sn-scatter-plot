import NUMBERS from '../../../constants/numbers';
import KEYS from '../../../constants/keys';
import translate from '../../../utils/math/translate';
import zoom from '../../../utils/math/zoom';

export default function createNavigationPanel({ layoutService, chartModel, context }) {
  const navigation = layoutService.getLayoutValue('navigation');
  const viewHandler = chartModel.query.getViewHandler();
  const { rtl } = context;
  return {
    key: KEYS.COMPONENT.NAVIGATION_PANEL,
    type: 'navigation-panel',
    show: navigation,
    style: { padding: NUMBERS.NAVIGATION_PANEL.PADDING, gridWidth: NUMBERS.NAVIGATION_PANEL.GRID_WIDTH },
    settings: {
      actions: {
        home: () => {
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
        },
        left: () => {
          translate({ viewHandler, direction: 'x', percent: -10, rtl });
        },
        right: () => {
          translate({ viewHandler, direction: 'x', percent: 10, rtl });
        },
        up: () => {
          translate({ viewHandler, direction: 'y', percent: 10 });
        },
        down: () => {
          translate({ viewHandler, direction: 'y', percent: -10 });
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
    },
  };
}
