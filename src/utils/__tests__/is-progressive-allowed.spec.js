import * as getNumPointsInBigData from '../get-num-points-in-big-data';
import isProgressiveEnabled from '../is-progressive-allowed';

describe('isProgressiveAllowed', () => {
  let sandbox;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(getNumPointsInBigData, 'default').returns(10);
    layoutService = { meta: { largeNumDataPoints: 100 } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if isBigData = true && getNumPointsInBigData(layoutService) < largeNumDataPoints', () => {
    layoutService.meta.isBigData = true;
    expect(isProgressiveEnabled(layoutService)).to.equal(false);
  });

  it('should return false if isBigData = true && getNumPointsInBigData(layoutService) = largeNumDataPoints', () => {
    layoutService.meta.isBigData = true;
    layoutService.meta.largeNumDataPoints = 10;
    expect(isProgressiveEnabled(layoutService)).to.equal(false);
  });

  it('should return true if isBigData = true && getNumPointsInBigData(layoutService) > largeNumDataPoints', () => {
    layoutService.meta.isBigData = true;
    layoutService.meta.largeNumDataPoints = 5;
    expect(isProgressiveEnabled(layoutService)).to.equal(true);
  });

  it('should return true if isBigData = false && isLargeNumDataPoints = true', () => {
    layoutService.meta.isBigData = false;
    layoutService.meta.isLargeNumDataPoints = true;
    expect(isProgressiveEnabled(layoutService)).to.equal(true);
  });

  it('should return false if isBigData = false && isLargeNumDataPoints = false', () => {
    layoutService.meta.isBigData = false;
    layoutService.meta.isLargeNumDataPoints = false;
    expect(isProgressiveEnabled(layoutService)).to.equal(false);
  });
});
