import isBinnedData from '../is-binned-data';

describe('isBinnedData', () => {
  let sandbox;
  let layoutService;
  let dataPages;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dataPages = [];
    layoutService = {
      getDataPages: sinon.stub(),
    };
    layoutService.getDataPages.returns(dataPages);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true if dataPages.length = 0', async () => {
    expect(isBinnedData(layoutService)).to.be.true;
  });

  it('should return true if dataPages.length = 1 but has no data', async () => {
    dataPages = [{ qMatrix: [], qArea: {} }];
    layoutService.getDataPages.returns(dataPages);
    expect(isBinnedData(layoutService)).to.be.true;
  });

  it('should return false if dataPages.length = 1 but qMatrix.length > 0', async () => {
    dataPages = [{ qMatrix: [{}], qArea: {} }];
    layoutService.getDataPages.returns(dataPages);
    expect(isBinnedData(layoutService)).to.be.false;
  });

  it('should return false if dataPages.length = 1 but qLeft > 0', async () => {
    dataPages = [{ qMatrix: [], qArea: { qLeft: 1 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isBinnedData(layoutService)).to.be.false;
  });

  it('should return false if dataPages.length = 1 but qTop > 0', async () => {
    dataPages = [{ qMatrix: [], qArea: { qTop: 2 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isBinnedData(layoutService)).to.be.false;
  });

  it('should return false if dataPages.length = 1 but qWidth > 0', async () => {
    dataPages = [{ qMatrix: [], qArea: { qWidth: 3 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isBinnedData(layoutService)).to.be.false;
  });

  it('should return false if dataPages.length = 1 but qHeight > 0', async () => {
    dataPages = [{ qMatrix: [], qArea: { qHeight: 10 } }];
    layoutService.getDataPages.returns(dataPages);
    expect(isBinnedData(layoutService)).to.be.false;
  });
});
