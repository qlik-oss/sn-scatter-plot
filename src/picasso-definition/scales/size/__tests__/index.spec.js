import createSizeScale from '../index';

describe('size scale', () => {
  let layoutService;
  let layoutValueStub;
  let hyperCubeValueStub;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutValueStub = sandbox.stub();
    layoutValueStub.withArgs('dataPoint.rangeBubbleSizes').returns([2, 8]);
    layoutValueStub.withArgs('dataPoint.bubbleSizes').returns(5);
    hyperCubeValueStub = sandbox.stub();
    hyperCubeValueStub.withArgs('qMeasureInfo.2', {}).returns({ qMin: 1, qMax: 10 });
    layoutService = {
      key: 'layout-model',
      getLayoutValue: layoutValueStub,
      getHyperCubeValue: hyperCubeValueStub,
      meta: {
        hasSizeMeasure: true,
      },
    };
  });

  const d = {
    datum: {
      size: {
        value: 5,
      },
    },
  };
  let windowSizeMultiplier = 1;

  it('should return a function', () => {
    expect(createSizeScale(layoutService)).to.be.a('Function');
  });

  it('should return correctly calculated value of size when has measure size', () => {
    expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('12px');
    windowSizeMultiplier = 2;
    expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('24px');
  });

  it('should return correctly calculated value of size when has NOT measure size', () => {
    layoutService.meta.hasSizeMeasure = false;
    windowSizeMultiplier = 1;
    expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('10px');
    windowSizeMultiplier = 2;
    expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('20px');
  });
});
