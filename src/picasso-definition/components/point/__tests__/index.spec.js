import createPoint from '../index';
import * as KEYS from '../../../../constants/keys';
import createSizeScale from '../../../scales/size';
import * as movePath from '../../../../utils/move-path';
import * as getNumPointsInBigData from '../../../../utils/get-num-points-in-big-data';

describe('point', () => {
  let sandbox;
  let layoutService;
  let colorService;
  let chartModel;
  let create;
  let layoutValueStub;
  let hyperCubeValueStub;
  let canvasBufferSizeStub;
  let dataHandler;
  let sizeScaleFn;
  let d;
  const wsm = 1;
  let rect;
  let viewHandler;

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
    chartModel = {
      query: {
        getViewHandler: sandbox.stub(),
        getDataHandler: sandbox.stub(),
        animationEnabled: sandbox.stub(),
        getMeta: sandbox.stub(),
      },
    };
    dataHandler = {
      getMeta: sandbox.stub().returns({ isBinnedData: false }),
    };
    chartModel.query.getDataHandler.returns(dataHandler);
    viewHandler = { redererSettings: 'renderer-settings', transform: 'transform-function' };
    chartModel.query.getViewHandler.returns(viewHandler);
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

    sandbox.stub(movePath, 'default').returns('new-path');
    sandbox.stub(getNumPointsInBigData, 'default').returns(1000);

    create = () =>
      createPoint({
        models: {
          layoutService,
          colorService,
          chartModel,
        },
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
        'show',
        'animations',
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

    describe('show', () => {
      it('should return false when is binned data', () => {
        dataHandler.getMeta.returns({ isBinnedData: true });
        expect(create().show()).to.equal(false);
      });

      it('should return true when is not binned data', () => {
        dataHandler.getMeta.returns({ isBinnedData: false });
        expect(create().show()).to.equal(true);
      });
    });
  });

  describe('settings', () => {
    it('should have correct properties', () => {
      expect(create().settings).to.have.all.keys(['x', 'y', 'size', 'strokeWidth', 'stroke', 'fill', 'shape', 'show']);
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

  describe('rendererSettings', () => {
    it('should have correct transform function', () => {
      expect(create().rendererSettings.transform).to.equal('transform-function');
    });
    it('should have correct buffer size', () => {
      const compRect = { computedPhysical: { width: 200, height: 150 } };
      expect(create().rendererSettings.canvasBufferSize(compRect)).to.deep.equal({ width: 300, height: 250 });
    });

    it('should not have progressive if layoutService.meta.isProgressiveEnabled = false', () => {
      layoutService.meta.isProgressiveEnabled = false;
      expect(create().rendererSettings.progressive).to.equal(undefined);
    });

    it('should have progressive if layoutService.meta.isProgressiveEnabled = true', () => {
      layoutService.meta.isProgressiveEnabled = true;
      chartModel.query.getMeta.returns({ progressive: 123 });
      const progressive = create().rendererSettings.progressive();
      expect(progressive).to.equal(123);
    });
  });

  describe('animation', () => {
    describe('enabled', () => {
      it('should be true if animation is enabled in chartModel', () => {
        chartModel.query.animationEnabled.returns(true);
        expect(create().animations.enabled()).to.equal(true);
      });

      it('should be false if animation is not enabled in chartModel', () => {
        chartModel.query.animationEnabled.returns(false);
        expect(create().animations.enabled()).to.equal(false);
      });
    });

    describe('compensateForLayoutChanges', () => {
      let currentNodes = [
        { type: 'circle', cx: 50, cy: 100 },
        { type: 'path', d: 'old-path' },
      ];
      let currentRect = { x: 100 };
      let previousRect = { x: 100 };

      it('should not adjust node if the rect does not change', () => {
        create().animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([
          { type: 'circle', cx: 50, cy: 100 },
          { type: 'path', d: 'old-path' },
        ]);
      });

      it('should adjust label correctly if the rect shifts 5px to right', () => {
        currentRect = { width: 200, x: 15 };
        previousRect = { width: 200, x: 10 };
        currentNodes = [
          { type: 'circle', cx: 50, cy: 100 },
          { type: 'path', d: 'old-path' },
        ];
        create().animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([
          { type: 'circle', cx: 45, cy: 100 },
          { type: 'path', d: 'new-path' },
        ]);
      });
    });
  });
});
