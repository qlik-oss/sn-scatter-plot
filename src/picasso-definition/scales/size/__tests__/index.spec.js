import createSizeScale from '../index';

describe('size scale', () => {
  let layoutService;
  let layoutValueStub;
  let hyperCubeValueStub;
  let d;
  let windowSizeMultiplier;
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
    d = {
      datum: {
        size: {
          value: 5,
        },
      },
    };
    windowSizeMultiplier = 1;
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a function', () => {
    expect(createSizeScale(layoutService)).to.be.a('Function');
  });

  describe('getDotMeasureSize when has measure size', () => {
    it('should return correctly calculated value of size when has d.datum.size', () => {
      expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('12px');
      windowSizeMultiplier = 2;
      expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('24px');
    });

    it('should return correctly calculated value of size when has d.size', () => {
      d = {
        size: {
          value: 5,
        },
      };
      expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('12px');
      windowSizeMultiplier = 2;
      expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('24px');
    });
  });

  describe('getDotSize when has NOT measure size', () => {
    it('should return correctly calculated value of size', () => {
      layoutService.meta.hasSizeMeasure = false;
      windowSizeMultiplier = 1;
      expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('10px');
      windowSizeMultiplier = 2;
      expect(createSizeScale(layoutService)(d, windowSizeMultiplier)).to.equal('20px');
    });
  });
});
