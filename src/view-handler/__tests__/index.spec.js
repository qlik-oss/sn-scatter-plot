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
  let flags;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewState = { get: sandbox.stub(), set: sandbox.stub() };
    viewState.get.withArgs('dataView').returns({ deltaX: 1, deltaY: 2 });
    myDataView = { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 };
    extremumModel = {
      command: {
        updateExtrema: sandbox.stub(),
      },
    };
    sandbox.stub(NUMBERS, 'default').value({ MAX_NR_ANIMATION: 10 });
    layoutService = { getHyperCubeValue: sandbox.stub(), meta: { isBigData: true } };
    flags = { isEnabled: sandbox.stub() };
    create = () => createViewHandler({ viewState, extremumModel, layoutService, flags });
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
      'transform',
    ]);
  });

  it('should return a view handler with proper getDataView method', () => {
    expect(viewHandler.getDataView()).to.deep.equal({ deltaX: 1, deltaY: 2 });
  });

  it('should return a view handler with proper setDataView method, case 1: not home state', () => {
    viewHandler.setMeta({
      homeStateDataView: { xAxisMin: -200, xAxisMax: 200, yAxisMin: 0, yAxisMax: 100 },
      scale: 2,
    });
    viewHandler.setDataView(myDataView);
    expect(viewState.set.withArgs('dataView', { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 })).to.have
      .been.calledOnce;
    expect(extremumModel.command.updateExtrema).to.have.been.calledOnce;
    expect(viewHandler.getMeta().isHomeState).to.equal(false);
    expect(viewHandler.getMeta().scale).to.equal(0.25);
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
    expect(viewHandler.getMeta().scale).to.equal(1);
  });

  it('should return a view handler with proper getMeta method', () => {
    expect(viewHandler.getMeta()).to.deep.equal({
      homeStateDataView: {},
      scale: 1,
      maxScale: 2 ** 4.1,
      minScale: 2 ** -9.1,
      isHomeState: true,
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
      isHomeState: true,
    });
  });

  it('should return a view handler with proper transform method', () => {
    expect(viewHandler.transform()).to.equal(false);
    viewHandler.setInteractionInProgress(true);
    expect(viewHandler.transform()).to.deep.equal({
      horizontalScaling: 1,
      horizontalSkewing: 0,
      verticalSkewing: 0,
      verticalScaling: 1,
      horizontalMoving: 1,
      verticalMoving: 2,
    });
  });

  it('should return a view handler with proper set and getInteractionInProgress method', () => {
    expect(viewHandler.getInteractionInProgress()).to.equal(false);
    viewHandler.setInteractionInProgress(true);
    expect(viewHandler.getInteractionInProgress()).to.equal(true);
  });
});
