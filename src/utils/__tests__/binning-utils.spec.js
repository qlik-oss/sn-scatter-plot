import updateBinnedData from '../binning-utils';
import * as isBigData from '../is-big-data';

describe('binning', () => {
  let sandbox;
  let app;
  let layoutService;
  let flags;
  let extremumModel;
  let model;
  let layout;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(isBigData, 'default').returns(true);
    app = { layout: false };
    layout = {
      compressionResolution: 5,
      qHyperCube: {
        qSize: {
          qcx: 3,
          qcy: 10000,
        },
      },
    };
    layoutService = {
      meta: { isSnapshot: false },
      getHyperCubeValue: (path, defaultValue) => defaultValue,
      getLayoutValue: sandbox.stub().withArgs('dataPages').returns([]),
      getLayout: () => layout,
    };
    extremumModel = {
      query: {
        getXExtrema: sandbox.stub().returns({ xAxisMin: 0, xAxisMax: 1000 }),
        getYExtrema: sandbox.stub().returns({ yAxisMin: 0, yAxisMax: 100 }),
      },
    };
    model = {
      getHyperCubeBinnedData: sandbox.stub().returns(
        Promise.resolve([
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
        ])
      ),
    };
    flags = { isEnabled: sandbox.stub().returns(false) };
    create = () =>
      updateBinnedData({
        app,
        flags,
        layoutService,
        extremumModel,
        model,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct binned data when requestNewDataOnInteraction is true', async () => {
    const binnedData = await create();
    expect(binnedData[0][0]).eql({ qNum: 996, qElemNumber: 0, qState: 'L' });
    expect(binnedData[0][1]).eql({
      qElemNumber: 7954,
      qNum: 1,
      qState: 'L',
      qText: [1732.25, 6.09375, 1765.5625, 5.6875],
    });
    expect(binnedData[0][2]).eql({
      qElemNumber: 7946,
      qNum: 1,
      qState: 'L',
      qText: [1599.0, 5.28125, 1632.3125, 4.875],
    });
  });

  describe('when requestNewDataOnInteraction is false', () => {
    it('should return stored data when is not big data', async () => {
      isBigData.default.returns(false);
      layoutService.meta.isSnapshot = false;
      expect(await create()).eql([]);
    });

    it('should return stored data when is snapshot', async () => {
      isBigData.default.returns(true);
      layoutService.meta.isSnapshot = true;
      expect(await create()).eql([]);
    });
  });
});
