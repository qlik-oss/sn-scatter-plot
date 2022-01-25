import KEYS from '../../../constants/keys';
import move from '../../../view-handler/move';
import zoom from '../../../view-handler/zoom';
import clearMinor from '../../../utils/clear-minor';

export default function createNavigationPanel({ layoutService, chartModel, chart, actions, context }) {
  if (layoutService.meta.isSnapshot) {
    return false;
  }
  const navigation = layoutService.getLayoutValue('navigation');
  const viewHandler = chartModel.query.getViewHandler();
  const { rtl, translator, model, constraints } = context;
  const { element } = chart;
  return {
    key: KEYS.COMPONENT.NAVIGATION_PANEL,
    type: 'navigation-panel',
    settings: {
      actions: {
        home: () => {
          clearMinor({ chart, actions });
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
        },
        left: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'x', percent: -10, rtl });
        },
        right: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'x', percent: 10, rtl });
        },
        up: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'y', percent: 10 });
        },
        down: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'y', percent: -10 });
        },
        zoomIn: () => {
          clearMinor({ chart, actions });
          zoom({ viewHandler, buttonZoomDirection: 'in' });
        },
        zoomOut: () => {
          clearMinor({ chart, actions });
          zoom({ viewHandler, buttonZoomDirection: 'out' });
        },
      },
      show: {
        home: () => navigation || !viewHandler.getMeta().isHomeState,
        panZoom: () => navigation,
      },
      disabled: {
        home: () => viewHandler.getMeta().isHomeState || constraints.active || !model,
        panZoom: () => constraints.active || !model,
      },
      rtl,
      translator,
      element,
    },
  };
}
