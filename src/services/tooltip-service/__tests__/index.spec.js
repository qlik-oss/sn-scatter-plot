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
  let trendLinesService;
  let propertiesModel;
  let custom;
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
        TRENDLINES_TOOLTIP_OVERLAY: 'trendlines-tooltip',
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
    trendLinesService = {};
    propertiesModel = {
      query: {
        getProperties: sandbox.stub().returns({ key: 'properties' }),
      },
    };
    custom = {
      isEnabled: sandbox.stub(),
      hideBasic: sandbox.stub(),
      getAttributes: sandbox.stub(),
      hasImages: sandbox.stub(),
      addImages: sandbox.stub(),
      createImageRow: sandbox.stub(),
      chart: {
        isEnabled: sandbox.stub(),
        hasLimitation: sandbox.stub(),
        show: sandbox.stub(),
        hasAlternateState: sandbox.stub(),
        createLimitationRow: sandbox.stub(),
        createContainer: sandbox.stub(),
        hide: sandbox.stub(),
        destroy: sandbox.stub(),
      },
    };
    create = () =>
      createTooltipService({
        chart,
        actions,
        translator,
        rtl,
        layoutService,
        colorService,
        themeService,
        trendLinesService,
        propertiesModel,
        custom,
      });
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
          'events',
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
          {
            keys: ['trendlines-tooltip'],
            collect: {
              from: 'single',
            },
            placement: 'collectible',
          },
        ]);
      });

      describe('section', () => {
        it('should create section', () => {
          const h = { key: 'h' };
          const nodes = { key: 'nodes' };
          const dataset = { key: 'dataset' };
          const meta = { key: 'meta' };
          const createApi = { key: 'create' };
          const util = { key: 'util' };
          getConfig().main.section({ h, nodes, dataset, meta, create: createApi, util });
          expect(
            createSection.default.withArgs({
              translator,
              custom,
              measureProperties: ['x', 'y'],
              h,
              nodes,
              dataset,
              meta,
              create: createApi,
              util,
              trendLinesService,
            })
          ).to.have.been.calledOnce;
        });

        it('should return correct section', () => {
          expect(getConfig().main.section({})).to.deep.equal({ key: 'section' });
        });
      });

      describe('layout', () => {
        it('should have correct properties', () => {
          expect(getConfig().main.layout).to.have.all.keys(['grouping', 'single']);
        });

        it('should have correct grouping', () => {
          expect(getConfig().main.layout.grouping).to.be.true;
        });

        describe('single', () => {
          it('should return false if triggerer is not point', () => {
            const meta = { triggerer: 'heat-map' };
            expect(getConfig().main.layout.single({ meta })).to.be.false;
          });

          it('should return false if triggerer is point and custom is not enabled', () => {
            const meta = { triggerer: 'point' };
            custom.isEnabled.returns(false);
            expect(getConfig().main.layout.single({ meta })).to.be.false;
          });

          it('should return false if triggerer is point, custom is enabled and does not have custom images', () => {
            const meta = { triggerer: 'point' };
            custom.isEnabled.returns(true);
            custom.hasImages.returns(false);
            expect(getConfig().main.layout.single({ meta })).to.be.false;
          });

          it('should return true if triggerer is point, custom is enabled and has custom images', () => {
            const meta = { triggerer: 'point' };
            custom.isEnabled.returns(true);
            custom.hasImages.returns(true);
            expect(getConfig().main.layout.single({ meta })).to.be.true;
          });

          it('should return true if triggerer is point and custom chart is enabled', () => {
            const meta = { triggerer: 'point' };
            custom.chart.isEnabled.returns(true);
            expect(getConfig().main.layout.single({ meta })).to.be.true;
          });
        });
      });

      describe('events', () => {
        it('should have correct properties', () => {
          expect(getConfig().main.events).to.have.all.keys(['tooltip', 'interaction']);
        });

        describe('tooltip', () => {
          it('should have correct properties', () => {
            expect(getConfig().main.events.tooltip).to.have.all.keys(['beforeShow', 'afterShow']);
          });

          describe('beforeShow', () => {
            it('should resolve undefined if custom is enabled, custom has images and triggerer is not point', (done) => {
              custom.isEnabled.returns(true);
              custom.hasImages.returns(true);
              getConfig()
                .main.events.tooltip.beforeShow({ collectNodes: () => {}, meta: { triggerer: 'heat-map' } })
                .then((result) => {
                  expect(result).to.be.undefined;
                  done();
                });
            });

            it('should resolve undefined if custom is not enabled and custom does not have images', (done) => {
              custom.isEnabled.returns(false);
              custom.hasImages.returns(false);
              getConfig()
                .main.events.tooltip.beforeShow({ collectNodes: () => {}, meta: { triggerer: 'point' } })
                .then((result) => {
                  expect(result).to.be.undefined;
                  done();
                });
            });

            it('should resolve undefined if custom is not enabled and custom has images ', (done) => {
              custom.isEnabled.returns(false);
              custom.hasImages.returns(true);
              getConfig()
                .main.events.tooltip.beforeShow({ collectNodes: () => {}, meta: { triggerer: 'point' } })
                .then((result) => {
                  expect(result).to.be.undefined;
                  done();
                });
            });

            it('should resolve undefined if custom is enabled and custom does not have images ', (done) => {
              custom.isEnabled.returns(true);
              custom.hasImages.returns(false);
              getConfig()
                .main.events.tooltip.beforeShow({ collectNodes: () => {}, meta: { triggerer: 'point' } })
                .then((result) => {
                  expect(result).to.be.undefined;
                  done();
                });
            });

            it('should add images if custom is enabled and custom has images', () => {
              custom.isEnabled.returns(true);
              custom.hasImages.returns(true);
              getConfig().main.events.tooltip.beforeShow({
                collectNodes: () => ({ key: 'collected' }),
                meta: { triggerer: 'point' },
              });
              expect(
                custom.addImages.withArgs({
                  nodes: { key: 'collected' },
                })
              ).to.have.been.calledOnce;
            });

            it('should return correctly if custom is enabled and custom has images', () => {
              custom.isEnabled.returns(true);
              custom.hasImages.returns(true);
              custom.addImages.returns({ key: 'images' });
              expect(
                getConfig().main.events.tooltip.beforeShow({ collectNodes: () => {}, meta: { triggerer: 'point' } })
              ).to.deep.equal({
                key: 'images',
              });
            });
          });

          describe('afterShow', () => {
            it('should not show custom chart if triggerer is heat-map, custom chart is enabled and does not have limitation', () => {
              custom.chart.isEnabled.returns(true);
              custom.chart.hasLimitation.returns(false);
              getConfig().main.events.tooltip.afterShow({ nodes: undefined, meta: { triggerer: 'heat-map' } });
              expect(custom.chart.show).not.to.have.been.called;
            });

            it('should not show custom chart if triggerer is trendlines overlay, custom chart is enabled and does not have limitation', () => {
              custom.chart.isEnabled.returns(true);
              custom.chart.hasLimitation.returns(false);
              getConfig().main.events.tooltip.afterShow({
                nodes: undefined,
                meta: { triggerer: 'trendlines-tooltip' },
              });
              expect(custom.chart.show).not.to.have.been.called;
            });

            it('should not show custom chart if custom chart is not enabled and custom chart has limitation', () => {
              custom.chart.isEnabled.returns(false);
              custom.chart.hasLimitation.returns(true);
              getConfig().main.events.tooltip.afterShow({ nodes: undefined, meta: { triggerer: 'point' } });
              expect(custom.chart.show).not.to.have.been.called;
            });

            it('should not show custom chart if custom chart is not enabled and custom chart does not have limitation', () => {
              custom.chart.isEnabled.returns(false);
              custom.chart.hasLimitation.returns(false);
              getConfig().main.events.tooltip.afterShow({ nodes: undefined, meta: { triggerer: 'point' } });
              expect(custom.chart.show).not.to.have.been.called;
            });

            it('should not show custom chart if custom chart is enabled and custom chart has limitation', () => {
              custom.chart.isEnabled.returns(true);
              custom.chart.hasLimitation.returns(true);
              getConfig().main.events.tooltip.afterShow({ nodes: undefined, meta: { triggerer: 'point' } });
              expect(custom.chart.show).not.to.have.been.called;
            });

            it('should show custom chart if custom chart is enabled and custom chart does not have limitation', () => {
              custom.chart.isEnabled.returns(true);
              custom.chart.hasLimitation.returns(false);
              getConfig().main.events.tooltip.afterShow({ nodes: { key: 'nodes' }, meta: { triggerer: 'point' } });
              expect(
                custom.chart.show.withArgs({
                  nodes: { key: 'nodes' },
                  properties: { key: 'properties' },
                })
              ).to.have.been.calledOnce;
            });
          });
        });

        describe('interaction', () => {
          it('should have correct properties', () => {
            expect(getConfig().main.events.interaction).to.have.all.keys(['mouseleave']);
          });

          describe('mouseleave', () => {
            it('should not hide custom chart if custom chart is not enabled and custom chart does not have alternate state', () => {
              custom.chart.isEnabled.returns(false);
              custom.chart.hasAlternateState.returns(false);
              getConfig().main.events.interaction.mouseleave();
              expect(custom.chart.hide).not.to.have.been.called;
            });

            it('should not hide custom chart if custom chart is not enabled and custom chart has alternate state', () => {
              custom.chart.isEnabled.returns(false);
              custom.chart.hasAlternateState.returns(true);
              getConfig().main.events.interaction.mouseleave();
              expect(custom.chart.hide).not.to.have.been.called;
            });

            it('should not hide custom chart if custom chart is enabled and custom chart does not have alternate state', () => {
              custom.chart.isEnabled.returns(true);
              custom.chart.hasAlternateState.returns(false);
              getConfig().main.events.interaction.mouseleave();
              expect(custom.chart.hide).not.to.have.been.called;
            });

            it('should hide custom chart if custom chart is enabled and custom chart has alternate state', () => {
              custom.chart.isEnabled.returns(true);
              custom.chart.hasAlternateState.returns(true);
              getConfig().main.events.interaction.mouseleave();
              expect(custom.chart.hide).to.have.been.calledOnce;
            });
          });
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
