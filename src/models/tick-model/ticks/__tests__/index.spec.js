import * as getMinorTicks from '../minor';
import getTicks from '..';

describe('ticks', () => {
  let sandbox;
  let majorTicks;
  let minorTicks;
  let result;
  let scale;
  let explicitType;
  let count;
  let create;
  let nicedScale;
  let size;
  let measure;
  let formatter;
  let originalMinMax;
  let modifiedMinMax;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    majorTicks = [0, 100, 200, 300, 400];
    minorTicks = [150, 250, 50, 350];
    originalMinMax = [0, 1];
    modifiedMinMax = [0, 1];
    nicedScale = { ticks: sandbox.stub().returns(majorTicks), domain: sandbox.stub().returns(modifiedMinMax) };
    scale = {
      nice: sandbox.stub().returns(nicedScale),
      ticks: sandbox.stub().returns(majorTicks),
      domain: sandbox.stub().returns(originalMinMax),
    };
    sandbox.stub(getMinorTicks, 'default').returns(minorTicks);
    count = 4;
    explicitType = 'minMax';
    size = 500;
    measure = sandbox.stub().returns(1);
    formatter = sandbox.stub().returns('formatted');
    create = () => getTicks({ scale, explicitType, count, size, measure, formatter });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get nice major ticks when explicitType is none', () => {
    count = 5;
    explicitType = 'none';
    create();
    expect(nicedScale.ticks.withArgs(5)).to.have.been.calledOnce;
  });

  it('should get normal major ticks when explicitType is minMax', () => {
    create();
    expect(scale.ticks.withArgs(4)).to.have.been.calledOnce;
  });

  it('should get minor ticks', () => {
    create();
    expect(getMinorTicks.default.withArgs({ majorTicks, count: 1 })).to.have.been.calledOnce;
  });

  it('should return correct combined and sorted ticks', () => {
    result = create();
    expect(result.ticks).to.deep.equal([
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
