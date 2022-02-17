import shouldUpdateTicks from '../should-update-ticks';

describe('shouldUpdateTicks', () => {
  let sandbox;
  let formatters;
  let chart;
  let getCurrentYTicks;
  let getYTicks;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    formatters = { y: (t) => t };
    chart = { formatters: sandbox.stub().returns(formatters) };
    getCurrentYTicks = sandbox.stub().returns([
      { value: 0, isMinor: false },
      { value: 2.5, isMinor: true },
      { value: 5, isMinor: false },
      { value: 7.5, isMinor: true },
      { value: 10, isMinor: false },
      { value: 15, isMinor: false },
    ]);
    getYTicks = sandbox.stub().returns([
      { value: 0, isMinor: false },
      { value: 2.5, isMinor: true },
      { value: 5, isMinor: false },
      { value: 7.5, isMinor: true },
      { value: 10, isMinor: false },
      { value: 15, isMinor: false },
    ]);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if getCurrentYTicks is not defined', () => {
    getCurrentYTicks = undefined;
    expect(shouldUpdateTicks(chart, getCurrentYTicks, getYTicks)).to.equal(false);
  });

  it('should return false if getYTicks is not defined', () => {
    getYTicks = undefined;
    expect(shouldUpdateTicks(chart, getCurrentYTicks, getYTicks)).to.equal(false);
  });

  it('should return false if current and pre calculated ticks have same length', () => {
    expect(shouldUpdateTicks(chart, getCurrentYTicks, getYTicks)).to.equal(false);
  });

  it('should return true if pre calculated ticks has longer length than current ticks', () => {
    getYTicks = sandbox.stub().returns([
      { value: 1.25, isMinor: false },
      { value: 2.5, isMinor: true },
      { value: 5, isMinor: false },
      { value: 7.5, isMinor: true },
      { value: 10, isMinor: false },
      { value: 15, isMinor: false },
    ]);
    expect(shouldUpdateTicks(chart, getCurrentYTicks, getYTicks)).to.equal(true);
  });
});
