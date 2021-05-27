import * as getMinorTicks from '../minor';
import getTicks from '..';

describe.skip('ticks', () => {
  let sandbox;
  let majorTicks;
  let nicedMajorTicks;
  let minorTicks;
  let result;
  let scale;
  let explicitType;
  let distance;
  let create;
  let nicedScale;
  let size;
  let measure;
  let formatter;
  let originalMinMax;
  let modifiedMinMax;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    nicedMajorTicks = [0, 100, 200, 300, 400];
    majorTicks = [100, 200, 300];
    minorTicks = [150, 250, 50, 350];
    originalMinMax = [0, 1];
    modifiedMinMax = [0, 1];
    nicedScale = { ticks: sandbox.stub().returns(nicedMajorTicks), domain: sandbox.stub().returns(modifiedMinMax) };
    scale = sandbox.stub();
    scale.withArgs(0).returns(0);
    scale.withArgs(100).returns(0.2);
    scale.withArgs(150).returns(0.3);
    scale.nice = sandbox.stub().returns(nicedScale);
    scale.ticks = sandbox.stub().returns(majorTicks);
    scale.domain = sandbox.stub().returns(originalMinMax);
    sandbox.stub(getMinorTicks, 'default').returns(minorTicks);
    distance = 100;
    explicitType = 'minMax';
    size = 500;
    measure = sandbox.stub().returns(1);
    formatter = sandbox.stub().returns('formatted');
    create = () => getTicks({ scale, explicitType, distance, size, measure, formatter });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get niced major ticks when explicitType is none', () => {
    distance = 100;
    explicitType = 'none';
    create();
    expect(nicedScale.ticks.withArgs(5)).to.have.been.calledOnce;
  });

  it('should get niced major ticks when explicitType is none, and the space between major ticks is less than distance', () => {
    distance = 101;
    explicitType = 'none';
    nicedScale.ticks.withArgs(5).returns([0, 100, 200, 300, 400]);
    nicedScale.ticks.withArgs(4).returns([0, 150, 300, 450]);
    create();
    expect(nicedScale.ticks.withArgs(5)).to.have.been.calledOnce;
    expect(nicedScale.ticks.withArgs(4)).to.have.been.calledOnce;
    expect(nicedScale.ticks.withArgs(3)).to.have.been.callCount(0);
  });

  it('should get normal major ticks when explicitType is minMax', () => {
    create();
    expect(scale.ticks.withArgs(5)).to.have.been.calledOnce;
  });

  it('should get minor ticks', () => {
    explicitType = 'none';
    create();
    expect(getMinorTicks.default.withArgs({ majorTicks: nicedMajorTicks, count: 1 })).to.have.been.calledOnce;
  });

  it('should return correct combined and sorted ticks', () => {
    explicitType = 'none';
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
