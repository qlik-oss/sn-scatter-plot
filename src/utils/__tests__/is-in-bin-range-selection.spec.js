import isInBinRangeSelection from '../is-in-bin-range-selection';

describe('isInBinRangeSelection', () => {
  let sandbox;
  let chart;
  let brushFn;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    brushFn = {
      brushes: sandbox.stub().returns([{ id: 'binData/binX' }]),
    };
    chart = {
      brush: () => brushFn,
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true if is binx range selection', () => {
    expect(isInBinRangeSelection(chart)).to.equal(true);
  });

  it('should return true if is binY range selection', () => {
    brushFn.brushes = sandbox.stub().returns([{ id: 'binData/binY' }]);
    expect(isInBinRangeSelection(chart)).to.equal(true);
  });

  it('should return false if brushArray is empty array', () => {
    brushFn.brushes = sandbox.stub().returns([]);
    expect(isInBinRangeSelection(chart)).to.equal(false);
  });

  it('should return false if is not binx or binY range selection', () => {
    brushFn.brushes = sandbox.stub().returns([{ id: 'binData/bin' }]);
    expect(isInBinRangeSelection(chart)).to.equal(false);
  });
});
