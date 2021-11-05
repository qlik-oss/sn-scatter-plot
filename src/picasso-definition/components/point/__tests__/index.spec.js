import createPoint from '../index';
import * as KEYS from '../../../../constants/keys';
import createSizeScale from '../../../scales/size';

describe('point', () => {
  let sandbox;
  let layoutService;
  let colorService;
  let chartModel;
  let create;
  let layoutValueStub;
  let hyperCubeValueStub;
  let canvasBufferSizeStub;
  let sizeScaleFn;
  let d;
  const wsm = 1;
  let rect;

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
    sizeScaleFn = createSizeScale(layoutService);
    chartModel = { query: { getViewHandler: sandbox.stub() } };
    chartModel.query.getViewHandler.returns({ redererSettings: 'renderer-settings' });
    canvasBufferSizeStub = sandbox.stub();
    rect = {
      computedPhysical: {
        width: 100,
        height: 100,
      },
    };
    canvasBufferSizeStub.withArgs(rect).returns({
      width: rect.computedPhysical.width + 100,
      height: rect.computedPhysical.height,
    });

    colorService = { getColor: sandbox.stub() };

    d = {
      datum: {
        size: {
          value: 5,
        },
      },
    };

    create = () =>
      createPoint({
        layoutService,
        colorService,
        chartModel,
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
      expect(create()).to.have.all.keys([
        'key',
        'type',
        'data',
        'brush',
        'settings',
        'beforeRender',
        'rendererSettings',
      ]);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('pointComponentKey');
    });

    describe('data', () => {
      it('should be correct', () => {
        expect(create().data.collection).to.equal('mainCollectionKey');
      });
    });
  });

  describe('settings', () => {
    it('should have correct properties', () => {
      expect(create().settings).to.have.all.keys(['x', 'y', 'size', 'strokeWidth', 'stroke', 'fill', 'shape']);
    });

    describe('size', () => {
      it('should be set with a function', () => {
        expect(create().settings.size).to.be.a('function');
      });

      it('should return correct dot size', () => {
        expect(create().settings.size(d)).to.equal(sizeScaleFn(d, wsm));
      });

      it('should return size 8px when null measure value', () => {
        d.datum.size.value = 'NaN';
        expect(create().settings.size(d)).to.equal('8px');
      });
    });

    describe('shape', () => {
      it('should be set with a function', () => {
        expect(create().settings.shape).to.be.a('function');
      });
      it('should be circle', () => {
        expect(create().settings.shape(d)).to.equal('circle');
      });
      it('should be saltire when null measure value', () => {
        d.datum.size.value = 'NaN';
        expect(create().settings.shape(d)).to.equal('saltire');
      });
    });
  });

  describe('beforeRender', () => {
    it('should be set with a function', () => {
      expect(create().beforeRender).to.be.a('function');
    });
  });
});
