import createViewHandler from '..';

describe('createViewHandler', () => {
  let sandbox;
  let create;
  let viewState;
  let viewHandler;
  let myDataView;
  let extremumModel;

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
    create = () => createViewHandler({ viewState, extremumModel });
    viewHandler = create();
  });

  afterEach(() => {
    sandbox.restore();
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
});
