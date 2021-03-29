import getCount from '../count';

describe('count', () => {
  let sandbox;
  let layoutModel;
  let size;
  let get;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutModel = {
      getLayoutValue: sandbox.stub(),
    };
    size = 748;
    get = () =>
      getCount({
        layoutModel,
        size,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct count with spacing = 0.5', () => {
    layoutModel.getLayoutValue.returns(0.5);
    // round(748/50) == 15
    expect(get()).to.equal(15);
  });

  it('should return correct count with spacing = 1', () => {
    layoutModel.getLayoutValue.returns(1);
    // round(748/100) == 7
    expect(get()).to.equal(7);
  });

  it('should return correct count with spacing = 2', () => {
    layoutModel.getLayoutValue.returns(2);
    // round(748/200) == 4
    expect(get()).to.equal(4);
  });

  it('should return correct count with spacing = 3', () => {
    layoutModel.getLayoutValue.returns(3);
    // round(748/(3*125)) == 2
    expect(get()).to.equal(2);
  });

  it('should fall back to 1 when count would be below 1', () => {
    layoutModel.getLayoutValue.returns(20);
    // max(1, round(748/(20*125))) == 1
    expect(get()).to.equal(1);
  });
});
