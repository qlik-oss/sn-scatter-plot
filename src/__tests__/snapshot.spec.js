// eslint-disable-next-line no-unused-vars
import stardust from '@nebula.js/stardust';
import * as KEYS from '../constants/keys';
import snapshot from '../snapshot';

describe('snapshot', () => {
  let sandbox;
  let create;
  let core;
  let models;
  let viewState;
  let responseDataPromise;
  let layout;
  let colorService;
  let layoutService;
  let dockService;
  let chartModel;
  let dataHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(stardust, 'onTakeSnapshot');
    sandbox.stub(stardust, 'useImperativeHandle');
    layout = {};
    stardust.onTakeSnapshot = (func) => {
      responseDataPromise = func(layout);
    };
    viewState = {
      get: sandbox.stub().returns({
        xAxisMin: 0,
        xAxisMax: 1,
        yAxisMin: 2,
        yAxisMax: 3,
      }),
    };
    dataHandler = { getMeta: sandbox.stub().returns({ isBinnedData: true }) };
    chartModel = {
      query: { getViewState: sandbox.stub().returns(viewState), getDataHandler: sandbox.stub().returns(dataHandler) },
    };
    const snapshotData = { fromGetSnapshotData: true };
    colorService = { getSnapshotData: sandbox.stub().resolves(snapshotData) };
    layoutService = {
      getLayoutValue: sandbox.stub(),
      meta: { isSnapshot: false },
      getDataPages: sandbox.stub().returns({ number2: 300 }),
    };
    layoutService.getLayoutValue.withArgs('dataPages').returns({ number: 100 });
    dockService = { meta: { chart: { size: { width: 200, height: 300 } } } };
    models = { layoutService, dockService, colorService, chartModel };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { LEGEND_CATEGORICAL: 'lc' } });
    core = { chart: { component: sandbox.stub() } };
    core.chart.component.withArgs('lc').returns({ _DO_NOT_USE_getInfo: sandbox.stub().returns({ offset: 100 }) });
    create = () => snapshot({ core, models });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('onTakeSnapshot', () => {
    it('should return expected data when isBinnedData true', async () => {
      expect(layout).to.deep.equal({});
      create();
      await responseDataPromise;
      expect(layout).to.deep.equal({
        snapshotData: {
          content: {
            chartData: {
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
              legendScrollOffset: 100,
              fromGetSnapshotData: true,
            },
            size: { h: 300, w: 200 },
          },
        },
        dataPages: { number: 100 },
      });
      expect(colorService.getSnapshotData).calledOnce;
    });

    it('should return expected data when isBinnedData false', async () => {
      dataHandler.getMeta.returns({ isBinnedData: false });
      layout = { qHyperCube: { qDataPages: { number1: 200 } } };
      create();
      await responseDataPromise;
      expect(layout).to.deep.equal({
        snapshotData: {
          content: {
            chartData: {
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
              legendScrollOffset: 100,
              fromGetSnapshotData: true,
            },
            size: { h: 300, w: 200 },
          },
        },
        dataPages: { number2: 300 },
        qHyperCube: { qDataPages: { number1: 200, number2: 300 } },
      });
      expect(colorService.getSnapshotData).calledOnce;
    });

    it('should return promise without setting snapshot data when the layout is already a snapshot', async () => {
      layoutService.meta.isSnapshot = true;
      create();
      await responseDataPromise;
      expect(colorService.getSnapshotData).not.called;
    });

    it('should call catch if getSnapshotData is rejected', async () => {
      colorService.getSnapshotData.rejects();
      create();
      await responseDataPromise;
      expect(layout).to.deep.equal({
        snapshotData: {
          content: {
            chartData: {
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
              legendScrollOffset: 100,
            },
            size: { h: 300, w: 200 },
          },
        },
        dataPages: { number: 100 },
      });
    });
  });

  describe('useImperativeHandle', () => {
    describe('argument function', () => {
      let fn;
      describe('return object', () => {
        describe('getViewState', () => {
          it('should return undefined if models is undefine', () => {
            models = undefined;
            create();
            fn = stardust.useImperativeHandle.getCall(0).args[0];
            expect(fn().getViewState()).to.equal(undefined);
          });

          it('should return correct view state, when legend _DO_NOT_USE_getInfo returns an offset', () => {
            create();
            fn = stardust.useImperativeHandle.getCall(0).args[0];
            expect(fn().getViewState()).to.deep.equal({
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
              legendScrollOffset: 100,
            });
          });
        });
      });
    });
  });
});
