import createPoint from '../index';
import * as KEYS from '../../../../constants/keys';
import pointHelper from '../pointHelper';

describe('grid chart point', () => {
  let sandbox;
  let layoutModel;
  let create;
  let props = {};
  let layoutValueStub;
  let sizeStub;
  let hyperCubeValueStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        POINT: 'pointComponentKey',
      },
      COLLECTION: {
        MAIN: 'mainCollectionKey',
      },
      SCALE: {
        X: 'x',
        Y: 'y',
      },
    }));
    layoutValueStub = sandbox.stub();
    layoutValueStub.withArgs('dataPoint.rangeBubbleSizes').returns([2, 8]);
    layoutValueStub.withArgs('dataPoint.bubbleSizes').returns(5);
    hyperCubeValueStub = sandbox.stub();
    hyperCubeValueStub.withArgs('qMeasureInfo.2', {}).returns({ qMin: 1, qMax: 10 });
    layoutModel = {
      key: 'layout-model',
      getLayoutValue: layoutValueStub,
      getHyperCubeValue: hyperCubeValueStub,
      meta: {
        hasSizeMeasure: true,
      },
    };

    sizeStub = sandbox.stub();
    const [minDotSize, maxDotSize] = layoutValueStub('dataPoint.rangeBubbleSizes');
    const { qMin, qMax } = hyperCubeValueStub('qMeasureInfo.2', {});
    props = {
      minDotSize,
      maxDotSize,
      sizeDataMin: qMin,
      sizeDataMax: qMax,
    };

    create = () =>
      createPoint({
        layoutModel,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe('object definition', () => {
    it('should return an object definition', () => {
      expect(create()).to.be.a('object');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('point');
    });

    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['key', 'type', 'data', 'rendererSettings', 'settings', 'beforeRender']);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('pointComponentKey');
    });

    describe('data', () => {
      it('should be correct', () => {
        expect(create().data).to.deep.equal({ collection: 'mainCollectionKey' });
      });
    });
  });

  describe('settings', () => {
    it('should have correct properties', () => {
      expect(create().settings).to.have.all.keys(['x', 'y', 'size', 'strokeWidth', 'stroke']);
    });

    describe('size', () => {
      it('should be set with a function', () => {
        expect(create().settings.size).to.be.a('function');
      });

      const d = {
        datum: {
          size: {
            value: 5,
          },
        },
      };
      const windowSizeMultiplier = 1;

      it('should return correctly calculated value of size when has measure size', () => {
        sizeStub.withArgs(d).returns(pointHelper.getDotMeasureSize(d.datum.size.value, props, windowSizeMultiplier));
        expect(sizeStub(d)).to.equal('12px');
      });

      it('should return correctly calculated value of size when has NOT measure size', () => {
        sizeStub.returns(pointHelper.getDotSize(layoutValueStub('dataPoint.bubbleSizes'), windowSizeMultiplier));
        expect(sizeStub()).to.equal('10px');
      });
    });
  });
});
