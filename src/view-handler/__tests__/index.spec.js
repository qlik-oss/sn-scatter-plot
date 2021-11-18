import * as NUMBERS from '../../constants/numbers';
import createViewHandler from '..';

describe('createViewHandler', () => {
  let sandbox;
  let create;
  let viewState;
  let viewHandler;
  let myDataView;
  let extremumModel;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewState = { get: sandbox.stub(), set: sandbox.stub() };
    viewState.get.withArgs('dataView').returns('correct data view');
    myDataView = { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 };
    extremumModel = {
      command: {
        updateExtrema: sandbox.stub(),
      },
    };
    sandbox.stub(NUMBERS, 'default').value({ MAX_NR_ANIMATION: 10 });
    layoutService = { getHyperCubeValue: sandbox.stub() };
    create = () => createViewHandler({ viewState, extremumModel, layoutService });
    viewHandler = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a view handler with all keys', () => {
    expect(viewHandler).to.have.all.keys([
      'setDataView',
      'getDataView',
      'setMeta',
      'getMeta',
      'setInteractionInProgress',
      'getInteractionInProgress',
      'animationEnabled',
      'transform',
    ]);
  });

  it('should return a view handler with proper getDataView method', () => {
    expect(viewHandler.getDataView()).to.equal('correct data view');
  });

  it('should return a view handler with proper setDataView method, case 1: not home state', () => {
    viewHandler.setMeta({
      homeStateDataView: { xAxisMin: -100, xAxisMax: 200, yAxisMin: 0, yAxisMax: 100 },
      scale: 2,
    });
    viewHandler.setDataView(myDataView);
    expect(viewState.set.withArgs('dataView', { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 })).to.have
      .been.calledOnce;
    expect(extremumModel.command.updateExtrema).to.have.been.calledOnce;
    expect(viewHandler.getMeta().isHomeState).to.equal(false);
  });

  it('should return a view handler with proper setDataView method, case 2: home state', () => {
    viewHandler.setMeta({
      homeStateDataView: { xAxisMin: 0.0099, xAxisMax: 100.0099, yAxisMin: -100, yAxisMax: 200.029 },
      scale: 2,
    });
    viewHandler.setDataView(myDataView);
    expect(viewState.set.withArgs('dataView', { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 })).to.have
      .been.calledOnce;
    expect(extremumModel.command.updateExtrema).to.have.been.calledOnce;
    expect(viewHandler.getMeta().isHomeState).to.equal(true);
  });

  it('should return a view handler with proper getMeta method', () => {
    expect(viewHandler.getMeta()).to.deep.equal({
      homeStateDataView: {},
      scale: 1,
      maxScale: 2 ** 4.1,
      minScale: 2 ** -9.1,
    });
  });

  it('should return a view handler with proper setMeta method', () => {
    viewHandler.setMeta({
      homeStateDataView: myDataView,
      scale: 2,
      maxScale: 3,
      minScale: 4,
    });
    expect(viewHandler.getMeta()).to.deep.equal({
      homeStateDataView: { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 },
      scale: 2,
      maxScale: 3,
      minScale: 4,
    });
  });

  it('should return a view handler with proper set and getInteractionInProgress method', () => {
    expect(viewHandler.getInteractionInProgress()).to.equal(false);
    viewHandler.setInteractionInProgress(true);
    expect(viewHandler.getInteractionInProgress()).to.equal(true);
  });

  it('should return a view handler with proper get animationEnabled', () => {
    layoutService.getHyperCubeValue.returns(5);
    viewHandler.setInteractionInProgress(true);
    expect(viewHandler.animationEnabled).to.equal(false);
    layoutService.getHyperCubeValue.returns(11);
    viewHandler.setInteractionInProgress(false);
    expect(viewHandler.animationEnabled).to.equal(false);
    layoutService.getHyperCubeValue.returns(10);
    viewHandler.setInteractionInProgress(false);
    expect(viewHandler.animationEnabled).to.equal(true);
  });
});
