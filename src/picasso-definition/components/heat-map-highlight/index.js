import KEYS from '../../../constants/keys';

export default function createHeatMapHighLight({ chartModel, layoutService, actions, flags }) {
  if (!layoutService.meta.isBigData || !flags.isEnabled('DATA_BINNING') || layoutService.meta.isSnapshot) {
    return false;
  }

  const viewHandler = chartModel.query.getViewHandler();

  return {
    key: KEYS.COMPONENT.HEAT_MAP_HIGHLIGHT,
    type: 'heat-map-highlight',
    settings: {
      actions,
      dataView: () => viewHandler.getDataView(),
    },
  };
}
