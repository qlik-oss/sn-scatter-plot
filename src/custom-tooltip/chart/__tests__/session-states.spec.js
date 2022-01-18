import { createSessionAlternateState, destroySessionAlternateState } from '../session-states';
import CONST from '../../constants';

describe('Custom Tooltip Chart session states', () => {
  let properties;
  let app;
  let customTooltipModel;
  const sandbox = sinon.createSandbox();

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
      addSessionAlternateState: sandbox.stub(),
      removeSessionAlternateState: sandbox.stub(),
    };
    customTooltipModel = {
      miniChartToken: {},
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should add a session alternate state to the miniChartToken when createSessionAlternateState is called', async () => {
    await createSessionAlternateState({ app, properties, customTooltipModel });
    expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(CONST.CHART.STATE);
    expect(app.addSessionAlternateState).to.have.been.calledOnce;
  });

  it('should add a session alternate state to the miniChartToken when createSessionAlternateState is called multiple times', async () => {
    await createSessionAlternateState({ app, properties, customTooltipModel });
    await createSessionAlternateState({ app, properties, customTooltipModel });
    await createSessionAlternateState({ app, properties, customTooltipModel });
    expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(CONST.CHART.STATE);
    expect(app.addSessionAlternateState).to.have.been.calledOnce;
  });

  it('should remove a session alternate state from the miniChartToken when destroySessionAlternateState is called', async () => {
    await destroySessionAlternateState({ app, customTooltipModel });
    expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(undefined);
    expect(app.removeSessionAlternateState).to.have.been.calledOnce;
  });

  it('should add a session alternate state to the miniChartToken whenever the state doesnt exist', async () => {
    await createSessionAlternateState({ app, properties, customTooltipModel });
    expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(CONST.CHART.STATE);
    expect(app.addSessionAlternateState).to.have.been.calledOnce;
    await destroySessionAlternateState({ app, customTooltipModel });
    expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(undefined);
    await createSessionAlternateState({ app, properties, customTooltipModel });
    expect(customTooltipModel.miniChartToken.alternateState).to.be.equal(CONST.CHART.STATE);
    expect(app.addSessionAlternateState).to.have.been.calledTwice;
  });
});
