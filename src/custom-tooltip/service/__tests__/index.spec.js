import utils from '../../utils';
import promises from '../../promises';
import * as getCustomTooltipAttributes from '../../picasso-definitions/attribute';
import * as createCustomTooltipModel from '../../model';
import customTooltipChart from '../../chart';
import createCustomTooltipService from '..';

describe('custom-tooltip-service', () => {
  let sandbox;
  let customTooltipModel;
  let attributes;
  let flags;
  let layout;
  let app;
  let model;
  let picasso;
  let chart;
  let translator;
  let localeInfo;
  let embed;
  let options;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(utils, 'checkIfPromisesExist');
    sandbox.stub(utils, 'getImageRow');
    sandbox.stub(utils, 'getDataNodes');
    sandbox.stub(utils, 'getAttrExprData');
    sandbox.stub(utils, 'getFooterRow');
    sandbox.stub(promises, 'handlePromises');
    sandbox.stub(getCustomTooltipAttributes, 'default');
    sandbox.stub(createCustomTooltipModel, 'default');
    sandbox.stub(customTooltipChart, 'createContainer');
    sandbox.stub(customTooltipChart, 'show');
    sandbox.stub(customTooltipChart, 'hide');
    sandbox.stub(customTooltipChart, 'destroyVisualization');
  });

  beforeEach(() => {
    sandbox.reset();
    utils.checkIfPromisesExist.returns({ key: 'promises-exists' });
    utils.getImageRow.returns({ key: 'image-row' });
    utils.getDataNodes.returns({ key: 'data-nodes' });
    utils.getAttrExprData.returns({ attrExps: { key: 'attr-exps' } });
    utils.getFooterRow.returns({ key: 'footer-row' });
    promises.handlePromises.returns({ key: 'handled-promises' });
    customTooltipChart.createContainer.returns({ key: 'container' });
    customTooltipModel = {
      miniChartToken: {
        alternateState: {},
      },
    };
    createCustomTooltipModel.default.returns(customTooltipModel);
    attributes = {
      customTooltipInfoAttrExpsArr: [
        {
          id: 'customTooltipTitle',
          title: 'custom-title',
        },
        {
          id: 'customTooltipDescription',
          value: 'custom-description',
        },
      ],
      customTooltipAttrExpsArr: { key: 'measures' },
    };
    getCustomTooltipAttributes.default.returns(attributes);
    flags = {
      isEnabled: sandbox.stub(),
    };
    layout = {
      tooltip: {
        auto: false,
        hideBasic: false,
        chart: {
          object: {
            refId: 1,
          },
        },
      },
    };
    app = {
      isInModalSelection: sandbox.stub(),
    };
    model = {
      getEffectiveProperties: () => ({}),
    };
    picasso = { key: 'picasso' };
    chart = { key: 'chart' };
    translator = {
      get: sandbox.stub(),
    };
    translator.get.withArgs('properties.tooltip.notselectedmessage').returns('translated');
    localeInfo = { key: 'locale-info' };
    embed = { key: 'embed' };
    options = {
      direction: 'ltr',
    };
    create = () =>
      createCustomTooltipService({
        flags,
        layout,
        app,
        model,
        picasso,
        chart,
        translator,
        localeInfo,
        embed,
        options,
      });
  });

  after(() => {
    sandbox.restore();
  });

  it('should create custom tooltip model', () => {
    create();
    expect(
      createCustomTooltipModel.default.withArgs({
        layout,
        app,
        model,
        picasso,
        chart,
        translator,
        localeInfo,
        embed,
      })
    ).to.have.been.calledOnce;
  });

  it('should expose correct api', () => {
    expect(create()).to.have.all.keys([
      'isEnabled',
      'hideBasic',
      'getAttributes',
      'hasImages',
      'createImageRow',
      'addImages',
      'chart',
    ]);
  });

  describe('isEnabled', () => {
    it('should return false if layout does not have tooltip', () => {
      delete layout.tooltip;
      create();
      expect(create().isEnabled()).to.be.false;
    });

    it('should return false if layout has tooltip and toolip is auto', () => {
      layout.tooltip.auto = true;
      create();
      expect(create().isEnabled()).to.be.false;
    });

    it('should return true if layout has tooltip and toolip is not auto', () => {
      layout.tooltip.auto = false;
      create();
      expect(create().isEnabled()).to.be.true;
    });
  });

  describe('hideBasic', () => {
    it('should return false if tooltip is auto and hideBasic is true', () => {
      layout.tooltip.auto = true;
      layout.tooltip.hideBasic = true;
      create();
      expect(create().hideBasic()).to.be.false;
    });

    it('should return false if tooltip is not auto and hideBasic is false', () => {
      layout.tooltip.auto = false;
      layout.tooltip.hideBasic = false;
      create();
      expect(create().hideBasic()).to.be.false;
    });

    it('should return true if tooltip is not auto and hideBasic is true', () => {
      layout.tooltip.auto = false;
      layout.tooltip.hideBasic = true;
      create();
      expect(create().hideBasic()).to.be.true;
    });
  });

  describe('getAttributes', () => {
    it('should get custom tooltip attributes', () => {
      create().getAttributes({ dataset: { key: 'dataset' }, nodes: { key: 'nodes' } });
      expect(
        getCustomTooltipAttributes.default.withArgs({
          dataset: { key: 'dataset' },
          nodes: { key: 'nodes' },
          layout,
        })
      ).to.have.been.calledOnce;
    });

    it('should return correct expressions', () => {
      expect(create().getAttributes({ dataset: { key: 'dataset' }, nodes: { key: 'nodes' } })).to.deep.equal({
        title: 'custom-title',
        description: 'custom-description',
        measures: { key: 'measures' },
      });
    });
  });

  describe('hasImages', () => {
    it('should check if images exists', () => {
      create().hasImages();
      expect(
        utils.checkIfPromisesExist.withArgs({
          customTooltipModel,
        })
      ).to.have.been.calledOnce;
    });

    it('should return correct value', () => {
      expect(create().hasImages()).to.deep.equal({ key: 'promises-exists' });
    });
  });

  describe('createImageRow', () => {
    it('should create image row', () => {
      create().createImageRow({ value: 'value', h: 'h' });
      expect(utils.getImageRow.withArgs('value', { h: 'h', rtl: false })).to.have.been.calledOnce;
    });

    it('should return image row', () => {
      expect(create().createImageRow({ value: 'value', h: 'h' })).to.deep.equal({
        key: 'image-row',
      });
    });
  });

  describe('addImages', () => {
    it('should get data nodes', () => {
      create().addImages({ nodes: 'nodes' });
      expect(utils.getDataNodes.withArgs(chart, 'nodes')).to.have.been.calledOnce;
    });

    it('should get attribute expression data', () => {
      create().addImages({ nodes: 'nodes' });
      expect(utils.getAttrExprData.withArgs(layout)).to.have.been.calledOnce;
    });

    it('should call handlePromises', () => {
      create().addImages({ nodes: 'nodes' });
      expect(
        promises.handlePromises.withArgs({
          customTooltipModel,
          nodes: { key: 'data-nodes' },
          attrExps: { key: 'attr-exps' },
          opts: {
            flags,
            app,
          },
        })
      ).to.have.been.calledOnce;
    });

    it('should return correctly', () => {
      expect(create().addImages({ nodes: 'nodes' })).to.deep.equal({ key: 'handled-promises' });
    });
  });

  describe('chart', () => {
    it('should contain correct properties', () => {
      expect(create().chart).to.have.all.keys([
        'isEnabled',
        'hasLimitation',
        'createContainer',
        'createLimitationRow',
        'show',
        'hasAlternateState',
        'hide',
        'destroy',
      ]);
    });

    describe('isEnabled', () => {
      it('should return false if tooltip is auto', () => {
        layout.tooltip.auto = true;
        expect(create().chart.isEnabled()).to.be.false;
      });

      it('should return false if layout does not have chart object refId', () => {
        layout.tooltip.chart.object.refId = undefined;
        expect(create().chart.isEnabled()).to.be.false;
      });

      it('should return false if does not have embed', () => {
        embed = undefined;
        expect(create().chart.isEnabled()).to.be.false;
      });

      it('should return false if model does not have getEffectiveProperties function', () => {
        model.getEffectiveProperties = undefined;
        expect(create().chart.isEnabled()).to.be.false;
      });

      it('should return true if tooltip is not auto, flag is enabled, layout has refId, has embed and model has getEffectiveProperties function', () => {
        expect(create().chart.isEnabled()).to.be.true;
      });
    });

    describe('hasLimitation', () => {
      it('should return false if does not have app', () => {
        app = undefined;
        expect(create().chart.hasLimitation()).to.be.false;
      });

      it('should return false if app does not have isInModalSelection function', () => {
        app.isInModalSelection = undefined;
        expect(create().chart.hasLimitation()).to.be.false;
      });

      it('should return false if isInModalSelection returns false', () => {
        app.isInModalSelection.returns(false);
        expect(create().chart.hasLimitation()).to.be.false;
      });

      it('should return true if isInModalSelection returns true', () => {
        app.isInModalSelection.returns(true);
        expect(create().chart.hasLimitation()).to.be.true;
      });
    });

    describe('createContainer', () => {
      it('should create container', () => {
        create().chart.createContainer({ h: 'h' });
        expect(
          customTooltipChart.createContainer.withArgs({
            layout,
            ctx: {
              h: 'h',
              rtl: false,
            },
          })
        ).to.have.been.calledOnce;
      });

      it('should return container', () => {
        expect(create().chart.createContainer({ h: 'h' })).to.deep.equal({ key: 'container' });
      });
    });

    describe('createLimitationRow', () => {
      it('should create footer row', () => {
        create().chart.createLimitationRow();
        expect(utils.getFooterRow.withArgs('translated', false)).to.have.been.calledOnce;
      });

      it('should return container', () => {
        expect(create().chart.createLimitationRow()).to.deep.equal({ key: 'footer-row' });
      });
    });

    describe('show', () => {
      it('should show custom tooltip chart', () => {
        create().chart.show({ nodes: 'nodes', properties: 'properties' });
        expect(
          customTooltipChart.show.withArgs({
            app,
            properties: 'properties',
            selectedNodes: 'nodes',
            customTooltipChart,
            rtl: false,
          })
        );
      });
    });

    describe('hasAlternateState', () => {
      it('should return false if customTooltipModel does not have miniChartToken', () => {
        customTooltipModel.miniChartToken = undefined;
        expect(create().chart.hasAlternateState()).to.be.false;
      });

      it('should return false if miniChartToken does not have alternateState', () => {
        customTooltipModel.miniChartToken.alternateState = undefined;
        expect(create().chart.hasAlternateState()).to.be.false;
      });

      it('should return true if miniChartToken has alternateState', () => {
        expect(create().chart.hasAlternateState()).to.be.true;
      });
    });

    describe('hide', () => {
      it('should hide custom tooltip chart', () => {
        create().chart.hide();
        expect(
          customTooltipChart.hide.withArgs({
            app,
            customTooltipChart,
          })
        );
      });
    });

    describe('destroy', () => {
      it('should destroy custom tooltip chart', () => {
        create().chart.destroy();
        expect(
          customTooltipChart.destroyVisualization.withArgs({
            customTooltipChart,
          })
        );
      });
    });
  });
});
