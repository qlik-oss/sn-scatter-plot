import createHeatMap from '../index';
import * as KEYS from '../../../../constants/keys';

describe('heat-map', () => {
  let sandbox;
  let chartModel;
  let dataHandler;
  let create;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        HEAT_MAP: 'heatMapComponentKey',
      },
      DATA: {
        BIN: 'binData',
      },
      SCALE: {
        X: 'x',
        Y: 'y',
      },
      FIELDS: {
        BIN: 'bin',
        BIN_X: 'binX',
        BIN_Y: 'binY',
        BIN_DENSITY: 'binDensity',
      },
    }));
    viewHandler = {
      getDataView: sandbox.stub().returns({ xAxisMin: 0, xAxisMax: 4000, yAxisMin: 0, yAxisMax: 10 }),
      transform: 'transform-function',
      animationEnabled: undefined,
    };
    dataHandler = {
      binArray: [{ qText: [2100, 5, 2200, 4], qNum: 10, qElemNumber: 7964 }],
      getMeta: sandbox.stub().returns({ isBinnedData: true }),
    };
    chartModel = {
      key: 'chart-model',
      query: {
        getViewHandler: () => viewHandler,
        getDataHandler: () => dataHandler,
      },
    };

    create = () => createHeatMap(chartModel);
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
        'show',
        'settings',
        'beforeRender',
        'animations',
        'rendererSettings',
        'brush',
      ]);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('heatMapComponentKey');
    });

    describe('data', () => {
      it('should be correct', () => {
        expect(create().data.extract).to.deep.equal({
          source: 'binData',
          field: 'bin',
          props: {
            x: { field: 'binX' },
            y: { field: 'binY' },
            binDensity: { field: 'binDensity' },
            selectionDimension: {
              field: 'bin',
            },
          },
        });
      });
    });

    describe('show', () => {
      it('should return false when is not binned data', () => {
        dataHandler.getMeta.returns({ isBinnedData: false });
        expect(create().show()).to.equal(false);
      });

      it('should return true when is binned data', () => {
        dataHandler.getMeta.returns({ isBinnedData: true });
        expect(create().show()).to.equal(true);
      });
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['x', 'y', 'fill', 'shape', 'strokeWidth']);
      });

      it('should have correct strokeWidth', () => {
        expect(create().settings.strokeWidth).to.equal(0);
      });

      describe('shape', () => {
        it('should be set with a function', () => {
          expect(create().settings.shape).to.be.a('function');
        });
        it('should be rect type', () => {
          expect(create().settings.shape().type).to.equal('rect');
        });
        it('should have correct width and height', () => {
          const comp = create();
          const size = { width: 400, height: 200 };
          comp.beforeRender({ size });
          expect(comp.settings.shape().width).to.equal(10.5);
          expect(comp.settings.shape().height).to.equal(20.5);
        });
      });
    });

    describe('beforeRender', () => {
      it('should be set with a function', () => {
        expect(create().beforeRender).to.be.a('function');
      });
    });

    describe('animations', () => {
      describe('enabled', () => {
        it('should be true if animation is enabled in viewHandler', () => {
          viewHandler.animationEnabled = true;
          expect(create().animations.enabled()).to.equal(true);
        });

        it('should be false if animation is not enabled in viewHandler', () => {
          viewHandler.animationEnabled = false;
          expect(create().animations.enabled()).to.equal(false);
        });
      });

      describe('trackBy', () => {
        it('should return correct node ID', () => {
          expect(create().animations.trackBy({ data: { value: 7964, binDensity: { value: 10 } } }, 0)).to.equal(7964);
          expect(create().animations.trackBy({ data: { value: 7965, binDensity: { value: 11 } } }, 1)).to.equal(7965.5);
        });
      });
    });

    describe('rendererSettings', () => {
      it('should have correct transform function', () => {
        expect(create().rendererSettings.transform).to.equal('transform-function');
      });
      it('should have correct buffer size', () => {
        const rect = { computedPhysical: { width: 200, height: 150 } };
        expect(create().rendererSettings.canvasBufferSize(rect)).to.deep.equal({ width: 300, height: 250 });
      });
    });
  });
});
