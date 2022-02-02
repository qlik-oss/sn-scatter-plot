import KEYS from '../../../constants/keys';

export default function createHeatMapHighLight({ chartModel, layoutService, actions, context }) {
  if (!layoutService.meta.isBigData || layoutService.meta.isSnapshot) {
    return false;
  }

  const viewHandler = chartModel.query.getViewHandler();

  return {
    key: KEYS.COMPONENT.HEAT_MAP_HIGHLIGHT,
    type: 'heat-map-highlight',
    settings: {
      actions,
      dataView: () => viewHandler.getDataView(),
      rtl: context.rtl,
    },
  };
}
