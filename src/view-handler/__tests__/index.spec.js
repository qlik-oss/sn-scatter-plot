import * as createDataFetcher from '../data-fetcher';
import * as fetchBinnedData from '../binned-data-fetcher';
import createViewHandler from '..';

describe('createViewHandler', () => {
  let sandbox;
  let create;
  let layoutService;
  let model;
  let viewState;
  let viewHandler;
  let myDataView;
  let normalData;
  let binnedData;
  let flags;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewState = { get: sandbox.stub(), set: sandbox.stub() };
    viewState.get.withArgs('dataView').returns('correct data view');
    sandbox.stub(createDataFetcher, 'default');
    createDataFetcher.default.returns({ fetchData: sandbox.stub() });
    normalData = [
      {
        qMatrix: [
          [{ qNum: 996, qElemNumber: 0, qState: 'L' }],
          [{ qElemNumber: 7954, qNum: 1, qState: 'L', qText: '[1732.25, 6.09375, 1765.5625, 5.6875]' }],
          [{ qElemNumber: 7946, qNum: 1, qState: 'L', qText: '[1599.0, 5.28125, 1632.3125, 4.875]' }],
        ],
        qTails: [],
        qArea: { qLeft: 0, qTop: 0, qWidth: 3, qHeight: 565 },
      },
      { qMatrix: [], qTails: [], qArea: [] },
    ];
    binnedData = [
      [
        { qNum: 1164, qElemNumber: 0 },
        { qText: [2000, 5, 2200, 4], qNum: 1, qElemNumber: 7964 },
      ],
    ];
    sandbox.stub(fetchBinnedData, 'default').returns(Promise.resolve(normalData));
    myDataView = { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 };
    layoutService = {
      getHyperCubeValue: (path, defaultValue) => defaultValue,
      meta: {
        isBigData: false,
      },
      setDataPages: sandbox.stub(),
      setLayoutValue: sandbox.stub(),
    };
    flags = { isEnabled: sandbox.stub().returns(false) };
    create = () => createViewHandler({ layoutService, model, viewState, flags });
    viewHandler = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a view handler with proper getDataView method', () => {
    expect(viewHandler.getDataView()).to.equal('correct data view');
  });

  it('should return a view handler with proper fetchData method', () => {
    viewHandler.fetchData();
    expect(createDataFetcher.default().fetchData).to.have.been.calledOnce;
  });

  it('should get binned data when data is big data and flag DATA_BINNING is enabled', () => {
    layoutService.meta.isBigData = true;
    flags.isEnabled.returns(true);
    viewHandler.fetchData();
    expect(fetchBinnedData.default).to.have.been.calledOnce;
  });

  describe('throttledFetchData', () => {
    it('should set correct data and update chart when return nomal data', async () => {
      const chartModel = {
        command: {
          update: sandbox.stub(),
        },
        query: {
          getSettings: sandbox.stub().returns('settings'),
        },
      };
      layoutService.meta.isBigData = true;
      flags.isEnabled.returns(true);
      await viewHandler.throttledFetchData(chartModel)();
      expect(layoutService.setDataPages.withArgs(normalData)).to.have.been.calledOnce;
      expect(layoutService.setLayoutValue.withArgs('dataPages', [[]])).to.have.been.calledOnce;
      expect(chartModel.command.update.withArgs({ settings: 'settings' })).to.have.been.calledOnce;
    });

    it('should set correct data and update chart when return binned data', async () => {
      const chartModel = {
        command: {
          update: sandbox.stub(),
        },
        query: {
          getSettings: sandbox.stub().returns('settings'),
        },
      };
      layoutService.meta.isBigData = true;
      flags.isEnabled.returns(true);
      fetchBinnedData.default.returns(Promise.resolve(binnedData));
      await viewHandler.throttledFetchData(chartModel)();
      expect(layoutService.setDataPages.withArgs([])).to.have.been.calledOnce;
      expect(layoutService.setLayoutValue.withArgs('dataPages', binnedData)).to.have.been.calledOnce;
      expect(chartModel.command.update.withArgs({ settings: 'settings' })).to.have.been.calledOnce;
    });
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

  it('should return a view handler with proper setDataView method, case 1: not home state', () => {
    viewHandler.setMeta({
      homeStateDataView: { xAxisMin: -100, xAxisMax: 200, yAxisMin: 0, yAxisMax: 100 },
      scale: 2,
    });
    viewHandler.setDataView(myDataView);
    expect(viewState.set.withArgs('dataView', { xAxisMin: 0, xAxisMax: 100, yAxisMin: -100, yAxisMax: 200 })).to.have
      .been.calledOnce;
    expect(viewHandler.getMeta().isHomeState).to.equal(false);
  });

  it('should return a view handler with proper setDataView method, case 2: home state', () => {
    viewHandler.setMeta({
      homeStateDataView: { xAxisMin: 0.0099, xAxisMax: 100.0099, yAxisMin: -100, yAxisMax: 200.029 },
      scale: 2,
    });
    viewHandler.setDataView(myDataView);
    expect(viewHandler.getMeta().isHomeState).to.equal(true);
  });
});
