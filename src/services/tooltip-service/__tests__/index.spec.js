import * as chartModules from 'qlik-chart-modules';
import * as KEYS from '../../../constants/keys';
import * as createSection from '../section';
import createTooltipService from '..';

describe('tooltip-service', () => {
  let sandbox;
  let chart;
  let actions;
  let translator;
  let rtl;
  let layoutService;
  let colorService;
  let themeService;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(chartModules, 'tooltipService');
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        POINT: 'point',
        TOOLTIP: 'tooltip',
        HEAT_MAP: 'heat-map',
        LEGEND_CAT_TOOLTIP: 'legend-tooltip',
        LEGEND_CATEGORICAL: 'legend',
      },
    }));
    sandbox.stub(createSection, 'default');
  });

  beforeEach(() => {
    sandbox.reset();
    chartModules.tooltipService.returns({ key: 'tooltip-service' });
    createSection.default.returns({ key: 'section' });
    chart = { key: 'chart' };
    actions = {
      tooltip: {
        enabled: () => 'tooltip-enabled',
      },
    };
    translator = {
      get: sandbox.stub(),
    };
    translator.get.callsFake((value) => `${value}-translated`);
    rtl = true;
    layoutService = {
      meta: {
        hasSizeMeasure: false,
      },
    };
    colorService = {
      getSettings: () => 'color-service-settings',
    };
    themeService = {
      getStyles: sandbox.stub().returns({ fontFamily: 'font-family' }),
    };
    create = () => createTooltipService({ chart, actions, translator, rtl, layoutService, colorService, themeService });
  });

  after(() => {
    sandbox.restore();
  });

  it('should get styles from theme-service', () => {
    create();
    expect(themeService.getStyles).to.have.been.calledOnce;
  });

  it('should create tooltip-service', () => {
    create();
    expect(
      chartModules.tooltipService.withArgs({
        chart,
        translator,
        config: sinon.match.object,
      })
    ).to.have.been.calledOnce;
  });

  it('should return tooltip-service', () => {
    expect(create()).to.deep.equal({ key: 'tooltip-service' });
  });

  describe('config', () => {
    let getConfig;

    beforeEach(() => {
      getConfig = () => {
        create();
        const { config } = chartModules.tooltipService.getCall(0).args[0];
        return config;
      };
    });

    it('should have correct properties', () => {
      expect(getConfig()).to.have.all.keys(['rtl', 'enable', 'getColorSettings', 'style', 'main', 'legend']);
    });

    it('should have correct rtl', () => {
      expect(getConfig().rtl).to.be.true;
    });

    it('should have correct enable', () => {
      expect(getConfig().enable()).to.equal('tooltip-enabled');
    });

    it('should have correct getColorSettings', () => {
      expect(getConfig().getColorSettings()).to.equal('color-service-settings');
    });

    describe('style', () => {
      it('should have correct properties', () => {
        expect(getConfig().style).to.have.all.keys(['fontFamily']);
      });

      it('should have correct font family', () => {
        expect(getConfig().style.fontFamily).to.equal('font-family');
      });
    });

    describe('main', () => {
      it('should have correct properties', () => {
        expect(getConfig().main).to.have.all.keys([
          'key',
          'getGroupByValue',
          'collectibles',
          'triggers',
          'section',
          'layout',
        ]);
      });

      it('should have correct key', () => {
        expect(getConfig().main.key).to.equal('tooltip');
      });

      it('should have correct getGroupByValue', () => {
        expect(getConfig().main.getGroupByValue({ data: { value: 1 } })).to.equal(1);
      });

      it('should have correct collectibles', () => {
        expect(getConfig().main.collectibles).to.deep.equal([
          {
            key: 'point',
            type: 'point',
          },
          {
            key: 'heat-map',
            type: 'point',
          },
        ]);
      });

      it('should have correct triggers', () => {
        expect(getConfig().main.triggers).to.deep.equal([
          {
            keys: ['point'],
            collect: {
              from: 'position',
            },
            placement: 'collectible',
          },
          {
            keys: ['heat-map'],
            collect: {
              from: 'single',
            },
            placement: 'collectible',
          },
        ]);
      });

      describe('section', () => {
        it('should create section correctly when does not have size measure', () => {
          layoutService.meta.hasSizeMeasure = false;
          const nodes = { key: 'nodes' };
          const dataset = { key: 'dataset' };
          const meta = { key: 'meta' };
          const createApi = { key: 'create' };
          const util = { key: 'util' };
          getConfig().main.section({ nodes, dataset, meta, create: createApi, util });
          expect(
            createSection.default.withArgs({
              translator,
              measureProperties: ['x', 'y'],
              nodes,
              dataset,
              meta,
              create: createApi,
              util,
            })
          ).to.have.been.calledOnce;
        });

        it('should create section correctly when has size measure', () => {
          layoutService.meta.hasSizeMeasure = true;
          const nodes = { key: 'nodes' };
          const dataset = { key: 'dataset' };
          const meta = { key: 'meta' };
          const createApi = { key: 'create' };
          const util = { key: 'util' };
          getConfig().main.section({ nodes, dataset, meta, create: createApi, util });
          expect(
            createSection.default.withArgs({
              translator,
              measureProperties: ['x', 'y', 'size'],
              nodes,
              dataset,
              meta,
              create: createApi,
              util,
            })
          ).to.have.been.calledOnce;
        });

        it('should return correct section', () => {
          expect(getConfig().main.section({})).to.deep.equal({ key: 'section' });
        });
      });

      describe('layout', () => {
        it('should have correct properties', () => {
          expect(getConfig().main.layout).to.have.all.keys(['grouping']);
        });

        it('should have correct grouping', () => {
          expect(getConfig().main.layout.grouping).to.be.true;
        });
      });
    });

    describe('legend', () => {
      it('should have correct properties', () => {
        expect(getConfig().legend).to.have.all.keys(['keys']);
      });

      describe('keys', () => {
        it('should have correct properties', () => {
          expect(getConfig().legend.keys).to.have.all.keys(['tooltip', 'component']);
        });

        it('should have correct tooltip', () => {
          expect(getConfig().legend.keys.tooltip).to.equal('legend-tooltip');
        });

        it('should have correct component', () => {
          expect(getConfig().legend.keys.component).to.equal('legend');
        });
      });
    });
  });
});
