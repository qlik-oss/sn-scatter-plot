import KEYS from '../../../constants/keys';

export default function createHeatMapHighLight(chartModel, actions) {
  const dataHandler = chartModel.query.getDataHandler();
  const viewHandler = chartModel.query.getViewHandler();

  return {
    key: KEYS.COMPONENT.HEAT_MAP_HIGH_LIGHT,
    type: 'heat-map-high-light',
    show: () => dataHandler.getMeta().isBinnedData,
    settings: {
      actions,
      dataView: () => viewHandler.getDataView(),
    },
  };
}
