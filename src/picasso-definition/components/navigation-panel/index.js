import NUMBERS from '../../../constants/numbers';
import KEYS from '../../../constants/keys';

export default function createNavigationPanel({ layoutService, chartModel }) {
  const navigation = layoutService.getLayoutValue('navigation');
  console.log(navigation);
  return {
    key: KEYS.COMPONENT.NAVIGATION_PANEL,
    type: 'navigation-panel',
    show: navigation,
    settings: { padding: NUMBERS.NAVIGATION_PANEL.PADDING, gridWidth: NUMBERS.NAVIGATION_PANEL.GRID_WIDTH },
    buttonList: [
      {
        key: 'home',
        callBack: () => {
          console.log('home');
          // e.stopPropagation();
          // e.preventDefault();
          const viewHandler = chartModel.query.getViewHandler();
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
        },
      },
    ],
  };
}
