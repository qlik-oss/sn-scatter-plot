import createDataHandler from '..';
import * as dataFetcher from '../data-fetcher';
import * as binnedDataFetcher from '../binned-data-fetcher';

describe('createDataHandler', () => {
  let sandbox;
  let create;
  let dataHandler;
  let layoutService;
  let model;
  let extremumModel;
  let flags;
  let dataFetcherMock;
  let binnedDataFetcherMock;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dataFetcherMock = {
      fetch: () => Promise.resolve({ normalData: 'normalData' }),
    };
    binnedDataFetcherMock = {
      binArray: [{ binArray: 'binned data' }],
      maxBinDensity: 100,
      fetch: () => Promise.resolve({ binnedData: 'binnedData' }),
    };
    sandbox.stub(dataFetcher, 'default').returns(dataFetcherMock);
    sandbox.stub(binnedDataFetcher, 'default').returns(binnedDataFetcherMock);
    layoutService = {
      meta: {
        isBigData: false,
      },
    };
    flags = { isEnabled: sandbox.stub().returns(false) };
    create = () => createDataHandler({ layoutService, model, extremumModel, flags });
    dataHandler = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct meta', () => {
    expect(dataHandler.getMeta()).to.eql({});
  });

  it('should return correct binArray', () => {
    expect(dataHandler.binArray).to.eql([{ binArray: 'binned data' }]);
  });

  it('should return correct maxBinDensity', () => {
    expect(dataHandler.maxBinDensity).to.equal(100);
  });

  it('should fetch normalData when is not big data', async () => {
    const data = await dataHandler.fetch();
    expect(data).to.eql({ normalData: 'normalData' });
  });

  it('should fetch binnedData when is big data', async () => {
    layoutService.meta.isBigData = true;
    flags.isEnabled.returns(true);
    const data = await dataHandler.fetch();

    expect(data).to.eql({ binnedData: 'binnedData' });
  });
});
