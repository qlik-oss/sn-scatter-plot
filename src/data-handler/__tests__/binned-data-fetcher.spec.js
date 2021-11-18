import createBinnedDataFetcher from '../binned-data-fetcher';

describe('createBinnedDataFetcher', () => {
  let sandbox;
  let layoutService;
  let extremumModel;
  let model;
  let layout;
  let normalDataPages;
  let binnedDataPages;
  let create;
  let binnedDataFetcher;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layout = {
      compressionResolution: 5,
      qHyperCube: {
        qSize: {
          qcx: 3,
          qcy: 10000,
        },
      },
    };
    binnedDataPages = [
      {
        qMatrix: [
          [{ qNum: 996, qElemNumber: 0, qState: 'L' }],
          [{ qElemNumber: 7954, qNum: 1, qState: 'L', qText: '[1732, 6, 1765, 5]' }],
          [{ qElemNumber: 7946, qNum: 1, qState: 'L', qText: '[1599, 5, 1632, 4]' }],
        ],
      },
      { qMatrix: [], qTails: [], qArea: [] },
    ];
    layoutService = {
      meta: { isSnapshot: false, isBigData: false },
      getHyperCubeValue: (path, defaultValue) => defaultValue,
      getLayoutValue: sandbox.stub().withArgs('dataPages').returns(binnedDataPages),
      getLayout: () => layout,
      setLayoutValue: sandbox.stub(),
      setDataPages: sandbox.stub(),
    };
    extremumModel = {
      query: {
        getXExtrema: sandbox.stub().returns({ xAxisMin: 0, xAxisMax: 1000 }),
        getYExtrema: sandbox.stub().returns({ yAxisMin: 0, yAxisMax: 100 }),
      },
    };
    normalDataPages = [
      { qMatrix: [], qTails: [], qArea: [] },
      {
        qMatrix: [
          [{ qElemNumber: 7954, qNum: 1, qState: 'L', qText: '[1732, 6, 1765, 5]' }],
          [{ qElemNumber: 7946, qNum: 1, qState: 'L', qText: '[1599, 5, 1632, 4]' }],
        ],
      },
    ];
    model = {
      getHyperCubeBinnedData: sandbox.stub().returns(Promise.resolve(normalDataPages)),
    };
    create = () =>
      createBinnedDataFetcher({
        layoutService,
        extremumModel,
        model,
      });

    binnedDataFetcher = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('is big data and is snapshot', () => {
    it('should return binned dataPages and set correct binArray and maxBinDensity when is binned data snapshot', async () => {
      layoutService.meta.isSnapshot = true;
      const binnedData = await binnedDataFetcher.fetch();

      expect(binnedData).eql(binnedDataPages);
      expect(binnedDataFetcher.maxBinDensity).to.equal(996);
      expect(binnedDataFetcher.binArray).to.eql([
        { qElemNumber: 7954, qNum: 1, qState: 'L', qText: [1732, 6, 1765, 5] },
        { qElemNumber: 7946, qNum: 1, qState: 'L', qText: [1599, 5, 1632, 4] },
      ]);
    });

    it('should return normal dataPages when is normal data snapshot', async () => {
      layoutService.meta.isSnapshot = true;
      normalDataPages = [
        {
          qMatrix: [
            [{ qElemNumber: 7954, qNum: 1, qState: 'L', qText: '[1732, 6, 1765, 5]' }],
            [{ qElemNumber: 7946, qNum: 1, qState: 'L', qText: '[1599, 5, 1632, 4]' }],
          ],
        },
      ];
      layoutService.getLayoutValue.withArgs('dataPages').returns(normalDataPages);
      const binnedData = await binnedDataFetcher.fetch();

      expect(binnedData).eql(normalDataPages);
      expect(binnedDataFetcher.maxBinDensity).to.equal(0);
      expect(binnedDataFetcher.binArray).to.eql([]);
    });
  });

  describe('should fetch data when is big data and is not snapshot', () => {
    beforeEach(() => {
      layoutService.meta.isBigData = true;
      layoutService.meta.isSnapshot = false;
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call getHyperCubeBinnedData with correct parameters wheh layout is defined', async () => {
      await binnedDataFetcher.fetch();

      expect(
        model.getHyperCubeBinnedData.withArgs(
          '/qHyperCubeDef',
          [
            {
              qTop: 0,
              qLeft: 0,
              qWidth: layout.qHyperCube.qSize.qcx,
              qHeight: layout.qHyperCube.qSize.qcy,
            },
          ],
          { width: 0, height: 0 },
          [
            {
              qLeft: 0,
              qTop: 100,
              qWidth: 1000,
              qHeight: 100,
            },
          ],
          1000,
          5,
          0
        )
      ).to.have.been.calledOnce;
    });

    it('should call getHyperCubeBinnedData with correct parameters wheh layout is undefined', async () => {
      layout = undefined;
      await binnedDataFetcher.fetch();

      expect(
        model.getHyperCubeBinnedData.withArgs(
          '/qHyperCubeDef',
          undefined,
          { width: 0, height: 0 },
          [
            {
              qLeft: 0,
              qTop: 100,
              qWidth: 1000,
              qHeight: 100,
            },
          ],
          1000,
          6,
          0
        )
      ).to.have.been.calledOnce;
    });

    it('should return correct normal data when fetched data is normal data', async () => {
      await binnedDataFetcher.fetch();

      expect(layoutService.setLayoutValue.withArgs('dataPages', undefined)).to.have.been.calledOnce;
      expect(layoutService.setDataPages.withArgs([normalDataPages[1]])).to.have.been.calledOnce;
    });

    it('should return correct binned data when fetched data is binned data', async () => {
      model.getHyperCubeBinnedData.returns(Promise.resolve(binnedDataPages));
      await binnedDataFetcher.fetch();

      expect(layoutService.setLayoutValue.withArgs('dataPages', binnedDataPages)).to.have.been.calledOnce;
      expect(layoutService.setDataPages.withArgs([])).to.have.been.calledOnce;
      expect(binnedDataFetcher.maxBinDensity).to.equal(996);
      expect(binnedDataFetcher.binArray).to.eql([
        { qElemNumber: 7954, qNum: 1, qState: 'L', qText: [1732, 6, 1765, 5] },
        { qElemNumber: 7946, qNum: 1, qState: 'L', qText: [1599, 5, 1632, 4] },
      ]);
    });
  });
});
