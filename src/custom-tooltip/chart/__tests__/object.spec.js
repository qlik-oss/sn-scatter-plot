import chartObj from '../object';
import CONST from '../../constants';

describe('Custom Tooltip Chart object', () => {
  let properties;
  let app;
  let customTooltipModel;

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
            name: 'chartName',
          },
          style: { size: 'small' },
        },
      },
    };
    app = {
      addSessionAlternateState: () => true,
      destroyObject: () => true,
      createSessionObject: () => ({
        selectHyperCubeValues: () => true,
        createChild: () => ({ id: 'objChildId', genericType: 'objChildType' }),
        id: CONST.CHART.CHART_OBJECT_ID,
      }),
      removeSessionAlternateState: () => true,
    };
    customTooltipModel = {
      miniChartToken: {},
    };
  });

  describe('add object info to miniChartToken', () => {
    it('should show the chart', async () => {
      await chartObj({ app, properties, customTooltipModel });
      expect(customTooltipModel.miniChartToken.model.id).to.be.equal('objChildId');
      expect(customTooltipModel.miniChartToken.model.genericType).to.be.equal('objChildType');
    });
  });
});
