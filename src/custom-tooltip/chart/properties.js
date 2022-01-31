import CONST from '../constants/index';

const objectProp = {
  createParentProp: (properties, state) => {
    const qDimensions = properties?.qHyperCubeDef?.qDimensions;
    const qMeasures = properties?.qHyperCubeDef?.qMeasures;
    const qInterColumnSortOrder = properties?.qHyperCubeDef?.qInterColumnSortOrder;
    const qStateName = state;
    return {
      qInfo: {
        qType: CONST.CHART.CHART_PARENT_TYPE,
        qId: CONST.CHART.CHART_OBJECT_ID,
      },
      qHyperCubeDef: {
        qDimensions,
        qMeasures,
        qInterColumnSortOrder,
        qInitialDataFetch: [
          {
            qWidth: 0,
            qHeight: 0,
          },
        ],
      },
      qStateName,
    };
  },
  createChildProp: (properties) => {
    const visualizationId = properties.tooltip?.chart?.object?.refId;
    return {
      qInfo: {
        qType: CONST.CHART.CHART_CHILD_TYPE,
      },
      qExtendsId: visualizationId,
    };
  },
};

export default objectProp;
