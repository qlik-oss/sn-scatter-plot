// eslint-disable-next-line no-unused-vars
import * as chartModules from 'qlik-chart-modules';
import createColorService from '..';
import * as createLegend from '../legend';

describe('color-service', () => {
  let sandbox;
  let create;
  let actions;
  let localeInfo;
  let app;
  let chart;
  let theme;
  let translator;
  let options;
  let model;
  let layoutService;
  let picasso;
  let viewState;
  let dataHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      getHyperCube: sandbox.stub().returns({ qDimensionInfo: [{ baseColor: 'red' }] }),
      getLayoutValue: sandbox.stub(),
    };
    sandbox.stub(createLegend, 'default');
    dataHandler = { getMeta: sandbox.stub() };
    sandbox.stub(chartModules, 'colorService');
    chart = { brush: sandbox.stub() };
    create = () =>
      createColorService({
        actions,
        localeInfo,
        app,
        chart,
        theme,
        translator,
        options,
        model,
        layoutService,
        picasso,
        viewState,
        dataHandler,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('createConfig', () => {
    let getCreateConfig;

    beforeEach(() => {
      getCreateConfig = () => {
        create();
        const { createConfig } = chartModules.colorService.getCall(0).args[0];
        return createConfig();
      };
    });

    it('should have all keys', () => {
      expect(getCreateConfig()).to.have.all.keys(['theme', 'colorProps', 'legendProps', 'hc', 'key']);
    });

    describe('colorProps', () => {
      it('should have all keys', () => {
        expect(getCreateConfig().colorProps).to.have.all.keys(['measureOverrides', 'useBaseColors']);
      });

      describe('useBaseColors', () => {
        it('should have "dimension" value if using base colors and dimension base exists', () => {
          layoutService.getLayoutValue.withArgs('color.useBaseColors').returns('dimension');
          expect(getCreateConfig().colorProps.useBaseColors).to.equal('dimension');
        });
      });
    });

    describe('legendProps', () => {
      describe('show', () => {
        it('should return true only if showLegend is true and the data is not binned', () => {
          layoutService.getLayoutValue.withArgs('legend.show').returns(true);
          dataHandler.getMeta.returns({ isBinnedData: false });
          expect(getCreateConfig().legendProps.show()).to.equal(true);
        });
      });
    });
  });

  describe('config', () => {
    let getConfig;

    beforeEach(() => {
      getConfig = () => {
        create();
        const { config } = chartModules.colorService.getCall(0).args[0];
        return config;
      };
    });

    it('should have all keys', () => {
      expect(getConfig()).to.have.all.keys(['localeInfo', 'auto']);
    });

    describe('auto', () => {
      it('should return correct object, when there is base color', () => {
        expect(getConfig().auto()).to.deep.equal({
          mode: 'primary',
          useBaseColors: 'dimension',
          paletteColor: null,
        });
      });

      it('should return correct object, when there is no base color', () => {
        layoutService.getHyperCube.returns({ qDimensionInfo: [] });
        expect(getConfig().auto()).to.deep.equal({
          mode: 'primary',
          useBaseColors: 'off',
          paletteColor: null,
        });
      });

      it('should return correct object, when there is base color in coloring', () => {
        layoutService.getHyperCube.returns({ qDimensionInfo: [{ coloring: { baseColor: 'blue' } }] });
        expect(getConfig().auto()).to.deep.equal({
          mode: 'primary',
          useBaseColors: 'dimension',
          paletteColor: null,
        });
      });
    });

    describe('custom', () => {
      let getCustom;

      beforeEach(() => {
        getCustom = () => {
          create();
          const { custom } = chartModules.colorService.getCall(0).args[0];
          return custom;
        };
      });

      it('should have all keys', () => {
        expect(getCustom()).to.have.all.keys([
          'wrappedScales',
          'legendComponents',
          'legendInteractions',
          'updateBrushAliases',
          'updateLegend',
        ]);
      });

      describe('wrappedScales', () => {
        it('should return correct wrappedScales from state', () => {
          expect(getCustom().wrappedScales()).to.equal(undefined);
        });
      });

      describe('legendComponents', () => {
        it('should return correct legendComponents from state', () => {
          expect(getCustom().legendComponents()).to.equal(undefined);
        });
      });

      describe('legendInteractions', () => {
        it('should return correct legendInteractions from state', () => {
          expect(getCustom().legendInteractions()).to.equal(undefined);
        });
      });

      describe('updateLegend', () => {
        it('should update wrappedScales, legendComponents, and legendInteractions correctly', () => {
          createLegend.default.returns({ components: 'comps', interactions: 'interactions', scales: 'scales' });
          getCustom().updateLegend();
          expect(getCustom().wrappedScales()).to.equal('scales');
          expect(getCustom().legendComponents()).to.equal('comps');
          expect(getCustom().legendInteractions()).to.equal('interactions');
        });
      });

      describe('updateBrushAliases', () => {
        it('should not update brush, when colorField is not "qAttrDimInfo"', () => {
          chartModules.colorService.returns({ getSettings: sandbox.stub().returns({ field: '' }) });
          const brush = { removeKeyAlias: sandbox.stub(), addKeyAlias: sandbox.stub() };
          chart.brush.withArgs('selection').returns(brush);
          getCustom().updateBrushAliases();
          expect(brush.removeKeyAlias).to.not.have.been.called;
          expect(brush.addKeyAlias).to.not.have.been.called;
        });

        it('should update brush correctly, when colorField is "qAttrDimInfo"', () => {
          chartModules.colorService.returns({ getSettings: sandbox.stub().returns({ field: 'qAttrDimInfo' }) });
          const brush = { removeKeyAlias: sandbox.stub(), addKeyAlias: sandbox.stub() };
          chart.brush.withArgs('selection').returns(brush);
          getCustom().updateBrushAliases();
          expect(brush.removeKeyAlias).to.have.been.calledTwice;
          expect(brush.addKeyAlias).to.have.been.calledOnce;
        });
      });
    });
  });
});
