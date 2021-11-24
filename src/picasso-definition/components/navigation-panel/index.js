import NUMBERS from '../../../constants/numbers';

export default function createNavigationPanel({ layoutService, chartModel }) {
  const navigation = layoutService.getLayoutValue('navigation');
  console.log(navigation);
  return {
    key: 'navigation-panel',
    type: 'navigation-panel',
    show: navigation,
    settings: { padding: NUMBERS.NAVIGATION_PANEL.PADDING, gridWidth: NUMBERS.NAVIGATION_PANEL.GRID_WIDTH },
    buttonList: [
      {
        key: 'home',
        callBack: (e) => {
          const viewHandler = chartModel.query.getViewHandler();
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
          e.stopPropagation();
        },
      },
    ],
  };
}
