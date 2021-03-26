import * as getMajorTicks from '../major';
import * as getMinorTicks from '../minor';
import getTicks from '..';

describe('ticks', () => {
  let sandbox;
  let majorTicks;
  let minorTicks;
  let layoutModel;
  let dockModel;
  let size;
  let min;
  let max;
  let ticks;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    majorTicks = [0, 100, 200, 300, 400];
    minorTicks = [150, 250, 50, 350];
    sandbox.stub(getMajorTicks, 'default').returns(majorTicks);
    sandbox.stub(getMinorTicks, 'default').returns(minorTicks);
    layoutModel = { key: 'layout-model' };
    dockModel = { key: 'dock-model' };
    size = { key: 'size' };
    min = { key: 'min' };
    max = { key: 'max' };
    ticks = getTicks({
      layoutModel,
      dockModel,
      size,
      min,
      max,
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get major ticks', () => {
    expect(
      getMajorTicks.default.withArgs({
        layoutModel,
        dockModel,
        size,
        min,
        max,
      })
    ).to.have.been.calledOnce;
  });

  it('should get minor ticks', () => {
    expect(
      getMinorTicks.default.withArgs({
        majorTicks,
        count: 1,
      })
    ).to.have.been.calledOnce;
  });

  it('should return correct ticks', () => {
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
