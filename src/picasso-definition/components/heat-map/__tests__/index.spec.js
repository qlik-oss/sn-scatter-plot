import createHeatMap from '../index';
import * as KEYS from '../../../../constants/keys';

describe('heat-map', () => {
  let sandbox;
  let models;
  let flags;
  let create;

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
    const viewHandler = {
      getDataView: sandbox.stub().returns({ xAxisMin: 0, xAxisMax: 4000, yAxisMin: 0, yAxisMax: 10 }),
    };
    const binnedData = [
      [
        { qNum: 1164, qElemNumber: 0 },
        { qText: [2100, 5, 2200, 4], qNum: 1, qElemNumber: 7964 },
      ],
    ];
    models = {
      chartModel: {
        key: 'chart-model',
        query: {
          getViewHandler: () => viewHandler,
        },
      },
      layoutService: {
        getHyperCubeValue: (path, defaultValue) => defaultValue,
        getLayoutValue: sandbox.stub().withArgs('dataPages').returns(binnedData),
        meta: {
          isBigData: false,
        },
      },
    };
    flags = { isEnabled: sandbox.stub().returns(false) };

    create = () =>
      createHeatMap({
        models,
        flags,
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
      expect(create()).to.have.all.keys(['key', 'type', 'data', 'show', 'settings', 'beforeRender']);
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
          },
        });
      });
    });

    describe('show', () => {
      it('should return false when is not big data and flag DATA_BINNING is not enabled', () => {
        expect(create().show()).to.equal(false);
      });

      it('should return false when is big data and flag DATA_BINNING is not enabled', () => {
        models.layoutService.meta.isBigData = true;
        expect(create().show()).to.equal(false);
      });

      it('should return false when is not big data and flag DATA_BINNING is enabled', () => {
        flags.isEnabled.returns(true);
        expect(create().show()).to.equal(false);
      });

      it('should return true when is big data and flag DATA_BINNING is enabled', () => {
        models.layoutService.meta.isBigData = true;
        flags.isEnabled.returns(true);
        expect(create().show()).to.equal(true);
      });
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['x', 'y', 'fill', 'shape']);
      });

      describe('shape', () => {
        it('should be set with a function', () => {
          expect(create().settings.shape).to.be.a('function');
        });
        it('should be rect type', () => {
          expect(create().settings.shape().type).to.equal('rect');
        });
        it('should be have correct width and height', () => {
          const comp = create();
          const size = { width: 400, height: 200 };
          comp.beforeRender({ size });
          expect(comp.settings.shape().width).to.equal(10);
          expect(comp.settings.shape().height).to.equal(20);
        });
      });
    });

    describe('beforeRender', () => {
      it('should be set with a function', () => {
        expect(create().beforeRender).to.be.a('function');
      });
    });
  });
});
