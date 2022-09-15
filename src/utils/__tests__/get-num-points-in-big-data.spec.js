import getNumPointsInBigData from '../get-num-points-in-big-data';

describe('getNumPointsInBigData', () => {
  let sandbox;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getDataPages: sandbox.stub() };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return 0 if layoutService.getDataPages = []', () => {
    layoutService.getDataPages.returns([]);
    expect(getNumPointsInBigData(layoutService)).to.equal(0);
  });

  it('should return qMatrix.length if layoutService.getDataPages.length = 2', () => {
    layoutService.getDataPages.returns([{ qMatrix: [1, 2, 3], qArea: {} }, {}]);
    expect(getNumPointsInBigData(layoutService)).to.equal(3);
  });

  it('should return 0 if binned data', () => {
    layoutService.getDataPages.returns([{ qMatrix: [], qArea: {} }]);
    expect(getNumPointsInBigData(layoutService)).to.equal(0);
  });
});
