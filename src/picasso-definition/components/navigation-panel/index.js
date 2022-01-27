import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import move from '../../../view-handler/move';
import zoom from '../../../view-handler/zoom';
import clearMinor from '../../../utils/clear-minor';

export default function createNavigationPanel({ layoutService, chartModel, chart, actions, context }) {
  if (layoutService.meta.isSnapshot) {
    return false;
  }
  const width = NUMBERS.NAVIGATION_PANEL.BUTTON_WIDTH;
  const viewHandler = chartModel.query.getViewHandler();
  const { rtl, translator, model, constraints } = context;
  const { element } = chart;
  const navigation = layoutService.getLayoutValue('navigation');
  const showPanZoomButtons =
    navigation &&
    element.clientWidth >= NUMBERS.LAYOUT_MODES.MEDIUM_NAV.width &&
    element.clientHeight >= NUMBERS.LAYOUT_MODES.MEDIUM_NAV.height;
  const disabled = () => constraints.active || !model;
  return [
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.UP,
      type: 'button',
      show: showPanZoomButtons,
      settings: {
        title: translator.get('Object.Navigation.PanUp'),
        disabled,
        callback: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'y', percent: 10 });
        },
        presentation: {
          icon: 'UP',
          width,
          vertical: 0,
          horizontal: width,
          rtl,
        },
      },
    },
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.LEFT,
      type: 'button',
      show: showPanZoomButtons,
      settings: {
        title: translator.get('Object.Navigation.PanLeft'),
        disabled,
        callback: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'x', percent: -10, rtl });
        },
        presentation: {
          icon: 'LEFT',
          width,
          vertical: width,
          horizontal: rtl ? 0 : 2 * width,
          rtl,
        },
      },
    },
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.HOME,
      type: 'button',
      settings: {
        title: translator.get('Object.Navigation.ResetZoom'),
        show: () => navigation || !viewHandler.getMeta().isHomeState,
        disabled: () => viewHandler.getMeta().isHomeState || constraints.active || !model,
        callback: () => {
          clearMinor({ chart, actions });
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
        },
        presentation: {
          icon: 'HOME',
          width,
          vertical: !showPanZoomButtons ? 0 : width,
          horizontal: !showPanZoomButtons ? 0 : width,
          rtl,
        },
      },
    },
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.RIGHT,
      type: 'button',
      show: showPanZoomButtons,
      settings: {
        title: translator.get('Object.Navigation.PanRight'),
        disabled,
        callback: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'x', percent: 10, rtl });
        },
        presentation: {
          icon: 'RIGHT',
          width,
          vertical: width,
          horizontal: rtl ? 2 * width : 0,
          rtl,
        },
      },
    },
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.DOWN,
      type: 'button',
      show: showPanZoomButtons,
      settings: {
        title: translator.get('Object.Navigation.PanDown'),
        disabled,
        callback: () => {
          clearMinor({ chart, actions });
          move({ viewHandler, direction: 'y', percent: -10 });
        },
        presentation: {
          icon: 'DOWN',
          width,
          vertical: 2 * width,
          horizontal: width,
          rtl,
        },
      },
    },
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.ZOOM_IN,
      type: 'button',
      show: showPanZoomButtons,
      settings: {
        title: translator.get('Object.Navigation.ZoomIn'),
        disabled,
        callback: () => {
          clearMinor({ chart, actions });
          zoom({ viewHandler, buttonZoomDirection: 'in' });
        },
        presentation: {
          icon: 'ZOOM_IN',
          width,
          vertical: 3 * width,
          horizontal: width,
          rtl,
        },
      },
    },
    {
      key: KEYS.COMPONENT.NAVIGATION_PANEL.ZOOM_OUT,
      type: 'button',
      show: showPanZoomButtons,
      settings: {
        title: translator.get('Object.Navigation.ZoomOut'),
        disabled,
        callback: () => {
          clearMinor({ chart, actions });
          zoom({ viewHandler, buttonZoomDirection: 'out' });
        },
        presentation: {
          icon: 'ZOOM_OUT',
          width,
          vertical: 4 * width,
          horizontal: width,
          rtl,
        },
      },
    },
  ];
}
