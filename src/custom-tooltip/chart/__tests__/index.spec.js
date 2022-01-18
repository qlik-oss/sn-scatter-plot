import chart from '..';
import CONST from '../../constants';

describe('Custom Tooltip Chart', () => {
  let layout;
  let ctx;
  let properties;
  let app;
  let customTooltipModel;
  let selectedNodes;
  let htmlElement;
  const sandbox = sinon.createSandbox();
  const destroyVisStub = sandbox.stub();

  beforeEach(() => {
    htmlElement = { textContent: undefined };
    global.document = {
      getElementById: () => htmlElement,
    };
    layout = {
      tooltip: {},
    };
    ctx = { h: (param1, param2) => param2 };
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
    app = {
      addSessionAlternateState: () => true,
      destroySessionObject: async () => true,
      createSessionObject: () => ({
        selectHyperCubeValues: () => true,
        createChild: () => ({ id: 'objChildId', genericType: 'objChildType' }),
        id: CONST.CHART.CHART_OBJECT_ID,
      }),
      removeSessionAlternateState: () => true,
    };
    customTooltipModel = {
      miniChartToken: {},
      embed: {
        render: sandbox.stub().callsFake(() => ({ destroy: destroyVisStub })),
      },
    };
    selectedNodes = [{ data: { value: 0 } }];
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('create the container', () => {
    it('should create the container of the chart', () => {
      layout.tooltip = { chart: { object: { refId: 'myChartId' }, style: { size: 'small' } } };
      const chartContainer = chart.createContainer({ ctx, layout });
      expect(chartContainer[0].content[0].id).to.be.equal(CONST.CHART.CONTAINER_ID);
    });
  });
  describe('show/hide chart', () => {
    it('should show the chart', async () => {
      await chart.show({ app, properties, selectedNodes, dimIndex: 0, customTooltipModel });
      expect(customTooltipModel.embed.render).to.have.been.calledWithExactly({
        element: htmlElement,
        model: customTooltipModel.miniChartToken.model,
        id: 'objChildId',
        type: 'objChildType',
        options: {
          direction: 'ltr',
          isPopover: true,
          isReadonly: true,
          navigation: false,
          selections: false,
        },
      });
      expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(CONST.CHART.STATE);
    });

    it('should hide the chart', async () => {
      await chart.show({ app, properties, selectedNodes, dimIndex: 0, customTooltipModel });
      expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(CONST.CHART.STATE);
      await chart.hide({ app, customTooltipModel });
      expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(undefined);
      expect(customTooltipModel.miniChartToken.sessionObj).to.be.equal(undefined);
      expect(destroyVisStub).to.have.been.calledOnce;
    });
  });
});
