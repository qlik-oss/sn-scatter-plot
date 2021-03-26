import * as d3Scale from 'd3-scale';
import * as getCount from '../count';
import getTicks from '../index';

describe('normal', () => {
  let sandbox;
  let scale;
  let layoutModel;
  let size;
  let min;
  let max;
  let get;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    scale = {
      ticks: sandbox.stub().returns([1, 2, 3, 4, 5]),
    };

    sandbox.stub(d3Scale, 'scaleLinear').returns({
      domain: sandbox.stub().returnsThis(),
      nice: sandbox.stub().returns(scale),
    });

    sandbox.stub(getCount, 'default').returns(5);
    layoutModel = { key: 'layout-model' };
    size = 500;
    min = 0.5;
    max = 100.5;
    get = () => getTicks({ layoutModel, size, min, max });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get count', () => {
    get();
    expect(getCount.default.withArgs({ layoutModel, size })).to.have.been.calledOnce;
  });

  it('should retrieve scale ticks', () => {
    get();
    expect(scale.ticks.args[0]).to.deep.equal([5]);
  });

  it('should return correct ticks', () => {
    expect(get()).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
