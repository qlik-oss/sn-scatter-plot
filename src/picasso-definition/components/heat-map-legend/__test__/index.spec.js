import * as KEYS from '../../../../constants/keys';
import * as MODES from '../../../../constants/modes';
import createHeatMapLegend from '..';
import * as getDock from '../../../../utils/dock-helper';

describe('heat-map-legend', () => {
  let sandbox;
  let models;
  let themeService;
  let layoutService;
  let chartModel;
  let dataHandler;
  let chart;
  let context;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(getDock, 'default');
    getDock.default.returns('right');
    themeService = {
      getStyles: sandbox.stub().returns({
        axis: { label: { name: { fontFamily: 'Sans serif' } } },
      }),
    };
    layoutService = {
      getLayoutValue: sandbox.stub().returns({ show: true, dock: 'auto', showTitle: true }),
    };
    dataHandler = {
      maxBinDensity: 200,
      getMeta: sandbox.stub().returns({ isBinnedData: true }),
    };
    chartModel = {
      query: {
        getDataHandler: () => dataHandler,
      },
    };
    models = {
      themeService,
      layoutService,
      chartModel,
    };
    context = {
      theme: {
        getStyle: sandbox.stub().returns({
          title: { fontSize: '12px', color: '#000000' },
          label: { fontSize: '12px', color: '#000000' },
        }),
      },
      rtl: false,
      translator: {
        get: (text) => `translated-${text}`,
      },
    };
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        LEGEND_HEAT_MAP: 'legend-heat-map',
      },
      SCALE: {
        HEAT_MAP_COLOR: 'heat-map-color',
      },
    });
    sandbox.stub(MODES, 'default').value({
      HEAT_MAP_LEGEND: 'medium',
    });
    create = () => createHeatMapLegend({ models, context, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('component', () => {
    it('should have correct key', () => {
      expect(create().key).to.equal('legend-heat-map');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('legend-seq');
    });

    it('should have correct dock', () => {
      expect(create().dock).to.equal('right');
    });

    it('should have correct minimumLayoutMode', () => {
      expect(create().minimumLayoutMode).to.equal('medium');
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['length', 'fill', 'major', 'title', 'tick']);
      });

      it('should have correct fill', () => {
        expect(create().settings.length).to.equal(1);
      });

      it('should have correct fill', () => {
        expect(create().settings.major).to.equal('heat-map-color');
      });

      it('should have correct fill', () => {
        expect(create().settings.major).to.equal('heat-map-color');
      });

      describe('title', () => {
        it('should have correct properties', () => {
          expect(create().settings.title).to.have.all.keys([
            'text',
            'fontFamily',
            'fontSize',
            'fill',
            'padding',
            'anchor',
            'show',
          ]);
        });

        it('should have correct text', () => {
          expect(create().settings.title.text).to.equal('translated-properties.compression.density');
        });

        it('should have correct fontFamily', () => {
          expect(create().settings.title.fontFamily).to.equal('Sans serif');
        });

        it('should have correct fontSize', () => {
          expect(create().settings.title.fontSize).to.equal('12px');
        });

        it('should have correct fill', () => {
          expect(create().settings.title.fill).to.equal('#000000');
        });

        it('should have correct padding', () => {
          expect(create().settings.title.padding).to.equal(10);
        });

        describe('anchor', () => {
          it('should have correct anchor when dock is not top or bottom and not rtl', () => {
            expect(create().settings.title.anchor).to.equal('left');
          });

          it('should have correct anchor when dock is top and is rtl', () => {
            getDock.default.returns('top');
            context.rtl = true;
            expect(create().settings.title.anchor).to.equal('right');
          });

          it('should have correct anchor when dock is bottom and is rtl', () => {
            getDock.default.returns('bottom');
            context.rtl = true;
            expect(create().settings.title.anchor).to.equal('right');
          });
        });

        it('should have correct show', () => {
          expect(create().settings.title.show).to.be.true;
        });
      });

      describe('tick', () => {
        it('should have correct label', () => {
          expect(create().settings.tick.label(0, 2)).to.equal(0);
          expect(create().settings.tick.label(0, 3)).to.equal(200);
        });

        it('should have correct fontFamily', () => {
          expect(create().settings.tick.fontFamily).to.equal('Sans serif');
        });

        it('should have correct fontSize', () => {
          expect(create().settings.title.fontSize).to.equal('12px');
        });

        it('should have correct fill', () => {
          expect(create().settings.title.fill).to.equal('#000000');
        });
      });
    });

    describe('show', () => {
      it('should return true if showLegend and is binned data', () => {
        expect(create().show()).to.be.true;
      });

      it('should return false if showLegend is false and is binned data', () => {
        layoutService.getLayoutValue.returns({ show: false, dock: 'auto', showTitle: true });
        expect(create().show()).to.be.false;
      });

      it('should return false if showLegend and is not binned data', () => {
        dataHandler.getMeta.returns({ isBinnedData: false });
        expect(create().show()).to.be.false;
      });
    });
  });
});
