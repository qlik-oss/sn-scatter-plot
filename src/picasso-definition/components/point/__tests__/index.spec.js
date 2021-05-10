import createPoint from '../index';
import * as KEYS from '../../../../constants/keys';
import createSizeScale from '../../../scales/size';

describe('point', () => {
  let sandbox;
  let layoutService;
  let colorService;
  let create;
  let layoutValueStub;
  let hyperCubeValueStub;
  let chartModel;
  let interactionInProgress;
  let viewStateStub;
  let getDataViewStub;
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
    interactionInProgress = true;
    getDataViewStub = sandbox.stub();
    getDataViewStub.withArgs('dataView').returns({ x: 10, y: 10 });
    viewStateStub = {
      get: getDataViewStub,
    };
    chartModel = {
      key: 'chart-model',
      query: {
        getViewState: () => viewStateStub,
        isInteractionInProgess: () => interactionInProgress,
      },
    };
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
        chartModel,
        layoutService,
        colorService,
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
        'rendererSettings',
        'settings',
        'beforeRender',
      ]);
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

  describe('rendererSettings', () => {
    it('should have correct properties', () => {
      expect(create().rendererSettings).to.have.all.keys(['transform', 'canvasBufferSize']);
    });

    describe('transform', () => {
      it('should be set with a function', () => {
        expect(create().rendererSettings.transform).to.be.a('function');
      });
      it('should return correct transform when interaction in progress', () => {
        const { x, y } = chartModel.query.getViewState().get('dataView');
        expect(create().rendererSettings.transform()).to.deep.equal({ a: 1, b: 0, c: 0, d: 1, e: x, f: y });
      });
      it('should return false when interaction NOT in progress', () => {
        interactionInProgress = false;
        expect(create().rendererSettings.transform()).to.equal(false);
      });
    });

    describe('canvasBufferSize', () => {
      it('should be set with a function', () => {
        expect(create().rendererSettings.canvasBufferSize).to.be.a('function');
      });
      it('should return correct size value', () => {
        create().rendererSettings.canvasBufferSize = canvasBufferSizeStub(rect);
        expect(create().rendererSettings.canvasBufferSize(rect)).to.deep.equal({
          width: 100 + 100,
          height: 100,
        });
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
