import chartProperties from '../properties';
import CONST from '../../constants';

describe('Custom Tooltip Chart properties', () => {
  let properties;

  beforeEach(() => {
    properties = {
      qHyperCubeDef: {
        qDimensions: [
          {
            qAttributeExpressions: [],
          },
          {
            qAttributeExpressions: [],
          },
        ],
        qMeasures: [
          {
            qLibraryId: 'measureId',
          },
        ],
        qInterColumnSortOrder: [3, 2, 1, 0],
      },
      tooltip: {
        chart: {
          object: {
            refId: 'chartId',
          },
          style: { size: 'small' },
        },
      },
    };
  });

  it('should create the properties of the parent object', () => {
    const parentObjProp = chartProperties.createParentProp(properties, undefined);
    expect(parentObjProp.qInfo.qType).to.be.equal(CONST.CHART.CHART_PARENT_TYPE);
    expect(parentObjProp.qHyperCubeDef.qDimensions.length).to.be.equal(2);
  });

  it('should create the properties of the child object', () => {
    const childObjProp = chartProperties.createChildProp(properties, undefined);
    expect(childObjProp.qInfo.qType).to.be.equal(CONST.CHART.CHART_CHILD_TYPE);
    expect(childObjProp.qExtendsId).to.be.equal('chartId');
  });
});
