import showRangeBubbleSizes from '../show-range-bubble-sizes';
import * as getNumMeasures from '../get-num-measures';

describe('showRangeBubbleSizes', () => {
  let sandbox;
  let data;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(getNumMeasures, 'default');
    data = {};
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should run correct function', () => {
    showRangeBubbleSizes(data);
    expect(getNumMeasures.default.callCount).to.equal(1);
    expect(getNumMeasures.default).to.have.been.calledWith(data);
  });

  it('should return true if getNumMeasures > 2', () => {
    getNumMeasures.default.returns(3);
    expect(showRangeBubbleSizes(data)).to.equal(true);
  });

  it('should return false if getNumMeasures = 2', () => {
    getNumMeasures.default.returns(2);
    expect(showRangeBubbleSizes(data)).to.equal(false);
  });

  it('should return false if getNumMeasures < 2', () => {
    getNumMeasures.default.returns(1);
    expect(showRangeBubbleSizes(data)).to.equal(false);
  });
});
