// eslint-disable-next-line no-unused-vars
import * as KEYS from '../../constants/keys';
import * as viewStateActions from '../view-state';

describe('view-state', () => {
  let sandbox;
  let viewState;
  let viewStateOptions;
  let models;
  let layoutService;
  let tickModel;
  let chartModel;
  let extremumModel;
  let viewHandler;
  let disclaimerModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewStateOptions = { legendScrollOffset: 10 };
    layoutService = { meta: { isSnapshot: true }, getLayoutValue: sandbox.stub().returns({ legendScrollOffset: 20 }) };
    viewHandler = { getMeta: sandbox.stub().returns({ isHomeState: true }), setMeta: sandbox.stub() };
    chartModel = { query: { getFormatter: sandbox.stub(), getViewHandler: sandbox.stub().returns(viewHandler) } };
    tickModel = {
      command: { updateFormatters: sandbox.stub() },
      query: { getXMinMax: sandbox.stub().returns([0, 1]), getYMinMax: sandbox.stub().returns([2, 3]) },
    };
    extremumModel = { command: { resetExtrema: sandbox.stub() } };
    disclaimerModel = { query: { getHasSuppressingDisclaimer: sandbox.stub().returns(false) } };
    models = { layoutService, tickModel, chartModel, extremumModel, disclaimerModel };
    viewState = {
      preventSet(key, value) {
        this[key] = value;
      },
      get: sandbox.stub(),
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('updateViewState', () => {
    it('should update viewState correctly, when source is snapshot', () => {
      viewStateActions.updateViewState({ viewState, viewStateOptions, models });
      expect(viewState.legendScrollOffset).to.equal(20);
      expect(viewState.dataView).to.deep.equal({ xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 });
    });

    it('should update viewState correctly, when source is not snapshot', () => {
      layoutService.meta.isSnapshot = false;
      viewStateActions.updateViewState({ viewState, viewStateOptions, models });
      expect(viewState.legendScrollOffset).to.equal(10);
      expect(viewState.dataView).to.deep.equal({ xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 });
    });

    it('should update viewState correctly, when source is not snapshot and viewStateOption is not provided', () => {
      layoutService.meta.isSnapshot = false;
      viewStateActions.updateViewState({ viewState, models });
      expect(viewState.legendScrollOffset).to.equal(0);
      expect(viewState.dataView).to.deep.equal({ xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 });
    });
  });

  describe('initializeViewState', () => {
    it('should setMeta and updateViewState', () => {
      viewStateActions.initializeViewState({ viewState, viewStateOptions, models });
      expect(viewHandler.setMeta).to.have.been.calledTwice;
      expect(viewState.legendScrollOffset).to.equal(20);
      expect(viewState.dataView).to.deep.equal({ xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 });
    });

    it('should not setMeta and updateViewState, if there is supressing disclaimer', () => {
      models.disclaimerModel.query.getHasSuppressingDisclaimer.returns(true);
      viewStateActions.initializeViewState({ viewState, viewStateOptions, models });
      expect(viewHandler.setMeta).to.not.have.been.called;
      expect(viewState.dataView).to.equal(undefined);
    });

    it('should setMeta and updateViewState, even when viewStateOptions is not provided', () => {
      layoutService.meta.isSnapshot = false;
      viewStateActions.initializeViewState({ viewState, models });
      expect(viewHandler.setMeta).to.have.been.calledTwice;
      expect(viewState.legendScrollOffset).to.equal(0);
      expect(viewState.dataView).to.deep.equal({ xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 });
    });
  });
});
