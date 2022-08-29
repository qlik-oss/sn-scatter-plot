import * as KEYS from '../../../../constants/keys';
import createPointLabels from '..';

describe('point-labels', () => {
  let sandbox;
  let layoutValueStub;
  let hyperCubeValueStub;
  let layoutService;
  let themeService;
  let labels;
  let create;
  let component;
  let chartModel;
  let viewHandler;
  let models;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
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
    themeService = { getStyles: sandbox.stub() };
    viewHandler = {
      redererSettings: 'renderer-settings',
      transform: 'transform-function',
    };
    chartModel = { query: { getViewHandler: sandbox.stub().returns(viewHandler), animationEnabled: sandbox.stub() } };
    models = { layoutService, themeService, chartModel };
    create = () => createPointLabels({ models });
    labels = { mode: 1 };
    layoutService.getLayoutValue.withArgs('labels').returns(labels);
    themeService.getStyles.returns({ label: { value: { fontFamily: 'Sans serif', fontSize: '1px', color: 'red' } } });
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        POINT: 'point-component',
        POINT_LABELS: 'point-labels',
      },
    });
  });

  afterEach(() => {
    sandbox.restore();
  });
  // No labels
  it('should return false if is label mode is 0', () => {
    labels.mode = 0;
    expect(create()).to.be.false;
  });
  // Auto
  it('should return a component if label mode is 1', () => {
    labels.mode = 1;
    expect(create()).to.be.an('object');
  });
  // All
  it('should return a component if label mode is 2', () => {
    labels.mode = 2;
    expect(create()).to.be.an('object');
  });

  it('should return a component if style is empty', () => {
    labels.mode = 2;
    themeService.getStyles.returns({});
    expect(create()).to.be.an('object');
  });

  describe('component', () => {
    it('should have correct key', () => {
      expect(create().key).to.equal('point-labels');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('point-label');
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['label', 'maxVisibleBubblesForLabeling', 'mode']);
      });

      describe('label', () => {
        it('should return correct node data label', () => {
          component = create();
          expect(component.settings.label({ data: { label: 'correct label' } })).to.deep.equal('correct label');
        });
      });
    });

    describe('style', () => {
      it('should have correct properties', () => {
        expect(create().style).to.have.all.keys(['fontFamily', 'fontSize', 'fill', 'backgroundColor']);
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

      describe('trackBy', () => {
        it('should be return correct IDs', () => {
          let node = { type: 'text', pointValue: 1000 };
          expect(create().animations.trackBy(node)).to.equal('label: 1000');
          node = { type: 'line', pointValue: 2000 };
          expect(create().animations.trackBy(node)).to.equal('line: 2000');
          node = { type: 'rect', pointValue: 3000 };
          expect(create().animations.trackBy(node)).to.equal('rect: 3000');
        });
      });

      describe('compensateForLayoutChanges', () => {
        let currentNodes = [{ x1: 10, x2: 10, y1: 10, y2: 100 }];
        let currentRect = { x: 100 };
        let previousRect = { x: 100 };

        it('should not adjust node if the rect does not change', () => {
          create().animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
          expect(currentNodes).to.deep.equal([{ x1: 10, x2: 10, y1: 10, y2: 100 }]);
        });

        it('should adjust label correctly if the rect shifts 5px to right and increases 10px in width', () => {
          currentRect = { width: 210, x: 15 };
          previousRect = { width: 200, x: 10 };
          currentNodes = [
            { type: 'text', x: 50, y: 10 },
            { type: 'line', x1: 51, x2: 51, y1: 11, y2: 15 },
            { type: 'rect', x: 50, y: 10 },
          ];
          create().animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
          expect(currentNodes).to.deep.equal([
            { type: 'text', x: 45, y: 10 },
            { type: 'line', x1: 46, x2: 46, y1: 11, y2: 15 },
            { type: 'rect', x: 45, y: 10 },
          ]);
        });
      });
    });
  });
});
