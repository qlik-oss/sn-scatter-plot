import * as getMinorTicks from '../minor';
import getTicks from '..';

describe('ticks', () => {
  let sandbox;
  let majorTicks;
  let minorTicks;
  let ticks;
  let scale;
  let nicing;
  let count;
  let create;
  let nicedScale;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    majorTicks = [0, 100, 200, 300, 400];
    minorTicks = [150, 250, 50, 350];
    scale = { nice: sandbox.stub().returns(nicedScale), ticks: sandbox.stub().returns(majorTicks) };
    nicedScale = { ticks: sandbox.stub().returns(majorTicks) };
    sandbox.stub(getMinorTicks, 'default').returns(minorTicks);
    count = 4;
    nicing = false;
    create = () => getTicks(scale, nicing, count);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get nice major ticks when nicing is true', () => {
    count = 5;
    nicing = true;
    create();
    expect(nicedScale.ticks.withArgs(5)).to.have.been.calledOnce;
  });

  it('should get normal major ticks when nicing is false', () => {
    create();
    expect(scale.ticks.withArgs(4)).to.have.been.calledOnce;
  });

  it('should get minor ticks', () => {
    create();
    expect(getMinorTicks.default.withArgs({ majorTicks, count: 1 })).to.have.been.calledOnce;
  });

  it('should return correct combined and sorted ticks', () => {
    ticks = create();
    expect(ticks).to.deep.equal([
      { value: 0, isMinor: false },
      { value: 50, isMinor: true },
      { value: 100, isMinor: false },
      { value: 150, isMinor: true },
      { value: 200, isMinor: false },
      { value: 250, isMinor: true },
      { value: 300, isMinor: false },
      { value: 350, isMinor: true },
      { value: 400, isMinor: false },
    ]);
  });
});
