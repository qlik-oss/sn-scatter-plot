import isLargeNumBubblesFromBigData from '../is-large-num-bubbles-from-big-data';

describe('isLargeNumBubblesFromBigData', () => {
  let sandbox;
  let layoutService;
  let dataPages;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dataPages = [];
    layoutService = {
      getDataPages: sinon.stub(),
      meta: { largeNumDataPoints: 2 },
    };
    layoutService.getDataPages.returns(dataPages);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if dataPages.length = 0', async () => {
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });

  it('should return false if dataPages.length = 1 but has no data', async () => {
    dataPages = [{ qMatrix: [], qArea: {} }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });

  it('should return true if dataPages.length = 1 but qMatrix.length > 0 and qMatrix.length > layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2, 3], qArea: {} }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.true;
  });

  it('should return false if dataPages.length = 1 but qMatrix.length > 0 and qMatrix.length <= layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1], qArea: {} }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });

  it('should return true if dataPages.length = 1 but qLeft > 0 and qMatrix.length > layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2, 3], qArea: { qLeft: 1 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.true;
  });

  it('should return false if dataPages.length = 1 but qLeft > 0 and qMatrix.length <= layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2], qArea: { qLeft: 1 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });

  it('should return true if dataPages.length = 1 but qTop > 0 and qMatrix.length > layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2, 3], qArea: { qTop: 2 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.true;
  });

  it('should return false if dataPages.length = 1 but qTop > 0 and qMatrix.length <= layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1], qArea: { qTop: 2 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });

  it('should return true if dataPages.length = 1 but qWidth > 0 and qMatrix.length > layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2, 3], qArea: { qWidth: 3 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.true;
  });

  it('should return false if dataPages.length = 1 but qWidth > 0 and qMatrix.length <= layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2], qArea: { qWidth: 3 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });

  it('should return true if dataPages.length = 1 but qHeight > 0 and qMatrix.length > layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1, 2, 3], qArea: { qHeight: 10 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.true;
  });

  it('should return true if dataPages.length = 1 but qHeight > 0 and qMatrix.length <= layoutService.meta.largeNumDataPoints', async () => {
    dataPages = [{ qMatrix: [1], qArea: { qHeight: 10 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isLargeNumBubblesFromBigData(layoutService)).to.be.false;
  });
});
