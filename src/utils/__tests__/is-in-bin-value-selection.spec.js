import isInBinValueSelection from '../is-in-bin-value-selection';

describe('isInBinValueSelection', () => {
  let sandbox;
  let chart;
  let brushFn;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    brushFn = {
      brushes: sandbox.stub().returns([{ type: 'value', id: 'binData/bin' }]),
    };
    chart = {
      brush: () => brushFn,
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true if is bin value selection', () => {
    expect(isInBinValueSelection(chart)).to.equal(true);
  });

  it('should return false if brushArray is empty array', () => {
    brushFn.brushes = sandbox.stub().returns([]);
    expect(isInBinValueSelection(chart)).to.equal(false);
  });

  it('should return false if is not bin value selection', () => {
    brushFn.brushes = sandbox.stub().returns([{ type: 'range', id: 'binData/bin' }]);
    expect(isInBinValueSelection(chart)).to.equal(false);
  });

  it('should return false if is bin value selection with wrong id', () => {
    brushFn.brushes = sandbox.stub().returns([{ type: 'value', id: 'binData/binX' }]);
    expect(isInBinValueSelection(chart)).to.equal(false);
  });
});
