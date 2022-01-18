import showBubbleSizes from '../show-bubble-sizes';
import * as getNumMeasures from '../get-num-measures';

describe('showBubbleSizes', () => {
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
    showBubbleSizes(data);
    expect(getNumMeasures.default.callCount).to.equal(1);
    expect(getNumMeasures.default).to.have.been.calledWith(data);
  });

  it('should return true if getNumMeasures < 3', () => {
    getNumMeasures.default.returns(2);
    expect(showBubbleSizes(data)).to.equal(true);
  });

  it('should return false if getNumMeasures = 3', () => {
    getNumMeasures.default.returns(3);
    expect(showBubbleSizes(data)).to.equal(false);
  });

  it('should return true if getNumMeasures > 3', () => {
    getNumMeasures.default.returns(4);
    expect(showBubbleSizes(data)).to.equal(false);
  });
});
