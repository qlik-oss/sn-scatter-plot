import * as KEYS from '../../../../constants/keys';
import * as getMeasureValue from '../measure-value';
import createSection from '..';

describe('section', () => {
  let sandbox;
  let translator;
  let custom;
  let attributes;
  let measureProperties;
  let h;
  let nodes;
  let dataset;
  let meta;
  let createAPI;
  let util;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(getMeasureValue, 'default');
  });

  beforeEach(() => {
    sandbox.reset();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        HEAT_MAP: 'heat-map',
        TRENDLINES_TOOLTIP_OVERLAY: 'trendlines',
      },
    }));
    getMeasureValue.default.callsFake((args) => `measure-value-${args.data.value}`);
    translator = {
      get: sandbox.stub(),
    };
    translator.get.callsFake((v) => `${v}-translated`);
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
    measureProperties = ['x', 'y'];
    h = { key: 'h' };
    nodes = [
      {
        data: {
          label: '1',
          value: 1,
          x: {
            value: '1-x',
            source: {
              key: '1-x-source-key',
              field: '1-x-source-field',
            },
          },
          y: {
            value: '1-y',
            source: {
              key: '1-y-source-key',
              field: '1-y-source-field',
            },
          },
          customTooltipImages: ['image-1', 'image-2'],
          binDensity: {
            label: 'bin-density-label',
          },
        },
      },
      {
        data: {
          label: '2',
          value: 2,
          x: {
            value: '2-x',
            source: {
              key: '2-x-source-key',
              field: '2-x-source-field',
            },
          },
          y: {
            value: '2-y',
            source: {
              key: '2-y-source-key',
              field: '2-y-source-field',
            },
          },
        },
      },
    ];
    attributes = {
      title: 'custom-title',
      description: 'custom-description',
      measures: [
        {
          label: 'custom-measure-1-label',
          value: 'custom-measure-1-value',
        },
        {
          label: 'custom-measure-2-label',
          value: 'custom-measure-2-value',
        },
      ],
    };
    custom.isEnabled.returns(true);
    custom.getAttributes.returns(attributes);
    custom.createImageRow.callsFake((args) => `${args.value}-image-row`);
    custom.chart.isEnabled.returns(true);
    custom.chart.hasLimitation.returns(false);
    custom.chart.createLimitationRow.returns({ key: 'limitation-row' });
    custom.chart.createContainer.withArgs({ h: { key: 'h' } }).returns({ key: 'container' });
    dataset = { key: 'dataset' };
    meta = {
      triggerer: 'point',
    };
    createAPI = {
      text: sandbox.stub(),
      color: sandbox.stub(),
      measure: sandbox.stub(),
      raw: sandbox.stub(),
    };
    createAPI.text.callsFake((args) => ({
      type: 'text',
      value: args.value,
      style: args.style,
    }));
    createAPI.text.callsFake((args) => ({
      type: 'text',
      ...args,
    }));
    createAPI.color.callsFake((args) => ({
      type: 'color',
      ...args,
    }));
    createAPI.measure.callsFake((args) => ({
      type: 'measure',
      ...args,
    }));
    createAPI.raw.callsFake((args) => ({
      type: 'raw',
      ...args,
    }));
    util = {
      dataset: {
        title: sandbox.stub(),
      },
    };
    util.dataset.title.callsFake((key, field) => `${key}-${field}-title`);
    create = () =>
      createSection({ translator, custom, measureProperties, h, nodes, dataset, meta, create: createAPI, util });
  });

  after(() => {
    sandbox.restore();
  });

  it('should get custom attributes', () => {
    create();
    expect(
      custom.getAttributes.withArgs({
        dataset,
        nodes,
      })
    ).to.have.been.calledOnce;
  });

  describe('custom title', () => {
    it('should not create custom title text if custom is not enabled and has custom title', () => {
      custom.isEnabled.returns(false);
      create();
      expect(
        createAPI.text.withArgs({
          value: 'custom-title',
          style: {
            bold: true,
          },
        })
      ).not.to.have.been.called;
    });

    it('should create custom title text if custom is enabled and has custom title', () => {
      create();
      expect(
        createAPI.text.withArgs({
          value: 'custom-title',
          style: {
            bold: true,
          },
        })
      ).to.have.been.calledOnce;
    });

    it('should not create custom title text if custom is enabled and does not have custom title', () => {
      attributes.title = undefined;
      create();
      expect(
        createAPI.text.withArgs({
          value: 'custom-title',
          style: {
            bold: true,
          },
        })
      ).not.to.have.been.called;
    });
  });

  describe('custom description', () => {
    it('should not create custom description text if custom is not enabled and if has custom description', () => {
      custom.isEnabled.returns(false);
      create();
      expect(
        createAPI.text.withArgs({
          value: 'custom-description',
        })
      ).not.to.have.been.called;
    });

    it('should create custom description text if custom is enabled and if has custom description', () => {
      create();
      expect(
        createAPI.text.withArgs({
          value: 'custom-description',
        })
      ).to.have.been.calledOnce;
    });

    it('should not create custom description text if does not have custom description', () => {
      attributes.description = undefined;
      create();
      expect(
        createAPI.text.withArgs({
          value: 'custom-description',
        })
      ).not.to.have.been.called;
    });
  });

  describe('title', () => {
    it('should create title if is not heat-map and should not hide basic', () => {
      custom.hideBasic.returns(false);
      create();
      expect(
        createAPI.text.withArgs({
          value: '1',
          style: {
            bold: true,
          },
        })
      ).to.have.been.calledOnce;
    });

    it('should not create title if is nheat-map and should not hide basic', () => {
      meta.triggerer = 'heat-map';
      custom.hideBasic.returns(false);
      create();
      expect(
        createAPI.text.withArgs({
          value: '1',
          style: {
            bold: true,
          },
        })
      ).not.to.have.been.called;
    });

    it('should create title if should hide basic, does not have custom title, does not have custom description and has custom measure', () => {
      custom.hideBasic.returns(true);
      attributes.title = undefined;
      attributes.description = undefined;
      create();
      expect(
        createAPI.text.withArgs({
          value: '1',
          style: {
            bold: true,
          },
        })
      ).to.have.been.calledOnce;
    });

    it('should not create title if should hide basic, has custom title, does not have custom description and does not have custom measure', () => {
      custom.hideBasic.returns(true);
      attributes.description = undefined;
      attributes.measures = [];
      create();
      expect(
        createAPI.text.withArgs({
          value: '1',
          style: {
            bold: true,
          },
        })
      ).not.to.have.been.called;
    });

    it('should not create title if should hide basic, does not have custom title, has custom description and does not have custom measure', () => {
      custom.hideBasic.returns(true);
      attributes.title = undefined;
      attributes.measures = [];
      create();
      expect(
        createAPI.text.withArgs({
          value: '1',
          style: {
            bold: true,
          },
        })
      ).not.to.have.been.called;
    });

    it('should create title if should hide basic, does not have custom title, does not have custom description and does not have custom measure', () => {
      custom.hideBasic.returns(true);
      attributes.title = undefined;
      attributes.description = undefined;
      attributes.measures = [];
      create();
      expect(
        createAPI.text.withArgs({
          value: '1',
          style: {
            bold: true,
          },
        })
      ).to.have.been.calledOnce;
    });

    describe('when heat-map', () => {});
  });

  describe('color', () => {
    it('should create color if should not hide basic and is not heat-map', () => {
      custom.hideBasic.returns(false);
      create();
      expect(
        createAPI.color.withArgs({
          nodes,
          property: 'color',
        })
      ).to.have.been.calledOnce;
    });

    it('should not create color if should hide basic', () => {
      custom.hideBasic.returns(true);
      create();
      expect(createAPI.color).not.to.have.been.called;
    });

    it('should not create color if should not hide basic and is heat-map', () => {
      meta.triggerer = 'heat-map';
      custom.hideBasic.returns(false);
      create();
      expect(createAPI.color).not.to.have.been.called;
    });
  });

  describe('measures', () => {
    describe('when is not heat-map', () => {
      it('should get dataset field title for each measure property for each node', () => {
        create();
        expect(util.dataset.title.callCount).to.equal(4);
        expect(util.dataset.title.withArgs('1-x-source-key', '1-x-source-field')).to.have.been.calledOnce;
        expect(util.dataset.title.withArgs('1-y-source-key', '1-y-source-field')).to.have.been.calledOnce;
        expect(util.dataset.title.withArgs('2-x-source-key', '2-x-source-field')).to.have.been.calledOnce;
        expect(util.dataset.title.withArgs('2-y-source-key', '2-y-source-field')).to.have.been.calledOnce;
      });

      it('should get measure value for each measure property for each node', () => {
        create();
        expect(getMeasureValue.default.callCount).to.equal(4);
        expect(getMeasureValue.default.withArgs({ dataset, data: nodes[0].data.x })).to.have.been.calledOnce;
        expect(getMeasureValue.default.withArgs({ dataset, data: nodes[0].data.y })).to.have.been.calledOnce;
        expect(getMeasureValue.default.withArgs({ dataset, data: nodes[1].data.x })).to.have.been.calledOnce;
        expect(getMeasureValue.default.withArgs({ dataset, data: nodes[1].data.y })).to.have.been.calledOnce;
      });

      it('should create measures correctly', () => {
        attributes.measures = [];
        create();
        expect(createAPI.measure.callCount).to.equal(4);
        expect(
          createAPI.measure.withArgs({ label: '1-x-source-key-1-x-source-field-title', value: 'measure-value-1-x' })
        ).to.have.been.calledOnce;
        expect(
          createAPI.measure.withArgs({ label: '1-y-source-key-1-y-source-field-title', value: 'measure-value-1-y' })
        ).to.have.been.calledOnce;
        expect(
          createAPI.measure.withArgs({ label: '2-x-source-key-2-x-source-field-title', value: 'measure-value-2-x' })
        ).to.have.been.calledOnce;
        expect(
          createAPI.measure.withArgs({ label: '2-y-source-key-2-y-source-field-title', value: 'measure-value-2-y' })
        ).to.have.been.calledOnce;
      });
    });

    describe('when it heat-map', () => {
      it('should create measures correctly', () => {
        meta.triggerer = 'heat-map';
        create();
        expect(
          createAPI.measure.withArgs({
            label: 'properties.compression.density-translated',
            value: 'bin-density-label',
            style: {
              label: {
                bold: true,
              },
              value: {
                bold: true,
              },
            },
          })
        ).to.have.been.calledOnce;
      });
    });
  });

  describe('custom measures', () => {
    it('should not create custom measures if custom is not enabled and has custom measure attributes', () => {
      custom.isEnabled.returns(false);
      create();
      expect(
        createAPI.measure.withArgs({
          label: 'custom-measure-1-label',
          value: 'custom-measure-1-value',
          survive: {
            color: true,
            duplicate: true,
          },
        })
      ).not.to.have.been.called;
      expect(
        createAPI.measure.withArgs({
          label: 'custom-measure-2-label',
          value: 'custom-measure-2-value',
          survive: {
            color: true,
            duplicate: true,
          },
        })
      ).not.to.have.been.called;
    });

    it('should create custom measures if custom is enabled and has custom measure attributes', () => {
      create();
      expect(
        createAPI.measure.withArgs({
          label: 'custom-measure-1-label',
          value: 'custom-measure-1-value',
          survive: {
            color: true,
            duplicate: true,
          },
        })
      ).to.have.been.calledOnce;
      expect(
        createAPI.measure.withArgs({
          label: 'custom-measure-2-label',
          value: 'custom-measure-2-value',
          survive: {
            color: true,
            duplicate: true,
          },
        })
      ).to.have.been.calledOnce;
    });

    it('should not create custom measures if custom is enabled and does not have custom measure attributes ', () => {
      attributes.measures = [];
      create();
      expect(
        createAPI.measure.withArgs({
          label: 'custom-measure-1-label',
          value: 'custom-measure-1-value',
          survive: {
            color: true,
            duplicate: true,
          },
        })
      ).not.to.have.been.called;
      expect(
        createAPI.measure.withArgs({
          label: 'custom-measure-2-label',
          value: 'custom-measure-2-value',
          survive: {
            color: true,
            duplicate: true,
          },
        })
      ).not.to.have.been.called;
    });
  });

  describe('custom chart', () => {
    it('should not check if has limitation if custom chart is not enabled', () => {
      custom.chart.isEnabled.returns(false);
      create();
      expect(custom.chart.hasLimitation).not.to.have.been.called;
    });

    it('should destroy chart if custom chart has limitation', () => {
      custom.chart.hasLimitation.returns(true);
      create();
      expect(custom.chart.destroy).to.have.been.calledOnce;
    });

    it('should create limitation row if custom chart has limitation', () => {
      custom.chart.hasLimitation.returns(true);
      create();
      expect(
        createAPI.raw.withArgs({
          value: { key: 'limitation-row' },
        })
      ).to.have.been.calledOnce;
    });

    it('should not create container if custom chart has limitation', () => {
      custom.chart.hasLimitation.returns(true);
      create();
      expect(
        createAPI.raw.withArgs({
          value: { key: 'container' },
        })
      ).not.to.have.been.called;
    });

    it('should not destroy chart if custom chart does not have limitation', () => {
      custom.chart.hasLimitation.returns(false);
      create();
      expect(custom.chart.destroy).not.to.have.been.called;
    });

    it('should create container if custom chart does not have limitation', () => {
      custom.chart.hasLimitation.returns(false);
      create();
      expect(
        createAPI.raw.withArgs({
          value: { key: 'container' },
        })
      ).to.have.been.calledOnce;
    });

    it('should not create limitation row if custom chart does not have limitation', () => {
      custom.chart.hasLimitation.returns(false);
      create();
      expect(
        createAPI.raw.withArgs({
          value: { key: 'limitation-row' },
        })
      ).not.to.have.been.called;
    });
  });

  describe('custom images', () => {
    it('should create image rows if node has custom images', () => {
      create();
      expect(custom.createImageRow.callCount).to.equal(2);
      expect(
        custom.createImageRow.withArgs({
          value: 'image-1',
          h: { key: 'h' },
        })
      ).to.have.been.calledOnce;
      expect(
        custom.createImageRow.withArgs({
          value: 'image-2',
          h: { key: 'h' },
        })
      ).to.have.been.calledOnce;
    });

    it('should create custom images if node has custom images', () => {
      create();
      expect(
        createAPI.raw.withArgs({
          value: 'image-1-image-row',
        })
      ).to.have.been.calledOnce;
      expect(
        createAPI.raw.withArgs({
          value: 'image-2-image-row',
        })
      ).to.have.been.calledOnce;
    });

    it('should not create image rows if node does not have custom images', () => {
      nodes[0].data.customTooltipImages = [];
      create();
      expect(custom.createImageRow).not.to.have.been.called;
    });

    it('should return correct section when does not have custom tooltip', () => {
      attributes.title = undefined;
      attributes.description = undefined;
      attributes.measures = [];
      custom.hideBasic.returns(false);
      nodes[0].data.customTooltipImages = [];
      custom.chart.isEnabled.returns(false);

      expect(create()).to.deep.equal([
        {
          type: 'text',
          value: '1',
          style: {
            bold: true,
          },
        },
        {
          type: 'color',
          nodes,
          property: 'color',
        },
        {
          type: 'measure',
          label: '1-x-source-key-1-x-source-field-title',
          value: 'measure-value-1-x',
        },
        {
          type: 'measure',
          label: '1-y-source-key-1-y-source-field-title',
          value: 'measure-value-1-y',
        },
        {
          type: 'measure',
          label: '2-x-source-key-2-x-source-field-title',
          value: 'measure-value-2-x',
        },
        {
          type: 'measure',
          label: '2-y-source-key-2-y-source-field-title',
          value: 'measure-value-2-y',
        },
      ]);
    });

    it('should return correct section when has custom tooltip', () => {
      expect(create()).to.deep.equal([
        {
          type: 'text',
          value: 'custom-title',
          style: {
            bold: true,
          },
        },
        {
          type: 'text',
          value: 'custom-description',
        },
        { type: 'text', value: '1', style: { bold: true } },
        { type: 'color', nodes, property: 'color' },
        {
          type: 'measure',
          label: '1-x-source-key-1-x-source-field-title',
          value: 'measure-value-1-x',
        },
        {
          type: 'measure',
          label: '1-y-source-key-1-y-source-field-title',
          value: 'measure-value-1-y',
        },
        {
          type: 'measure',
          label: '2-x-source-key-2-x-source-field-title',
          value: 'measure-value-2-x',
        },
        {
          type: 'measure',
          label: '2-y-source-key-2-y-source-field-title',
          value: 'measure-value-2-y',
        },
        {
          type: 'measure',
          label: 'custom-measure-1-label',
          value: 'custom-measure-1-value',
          survive: { color: true, duplicate: true },
        },
        {
          type: 'measure',
          label: 'custom-measure-2-label',
          value: 'custom-measure-2-value',
          survive: { color: true, duplicate: true },
        },
        { type: 'raw', value: { key: 'container' } },
        { type: 'raw', value: 'image-1-image-row' },
        { type: 'raw', value: 'image-2-image-row' },
      ]);
    });
  });
});
