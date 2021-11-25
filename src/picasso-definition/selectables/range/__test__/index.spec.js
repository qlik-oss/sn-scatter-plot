import * as createLegend from '../legend';
import * as createXRange from '../x-range';
import * as createYRange from '../y-range';
import * as createBinXRange from '../bin-x-range';
import * as createBinYRange from '../bin-y-range';
import createRange from '../index';

describe('range', () => {
  let sandbox;
  let models;
  let actions;
  let scales;
  let chart;
  let selectionService;
  let dockService;
  let colorService;
  let layoutService;
  let chartModel;
  let dataHandler;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(createXRange, 'default').returns({
      components: [{ key: 'x-component-0' }, { key: 'x-component-1' }],
      interactions: [{ key: 'x-interaction-0' }, { key: 'x-interaction-1' }],
    });
    sandbox.stub(createYRange, 'default').returns({
      components: [{ key: 'y-component-0' }, { key: 'y-component-1' }],
      interactions: [{ key: 'y-interaction-0' }, { key: 'y-interaction-1' }],
    });
    sandbox.stub(createBinXRange, 'default').returns({
      components: [{ key: 'bin-x-component-0' }, { key: 'bin-x-component-1' }],
      interactions: [{ key: 'bin-x-interaction-0' }, { key: 'bin-x-interaction-1' }],
    });
    sandbox.stub(createBinYRange, 'default').returns({
      components: [{ key: 'bin-y-component-0' }, { key: 'bin-y-component-1' }],
      interactions: [{ key: 'bin-y-interaction-0' }, { key: 'bin-y-interaction-1' }],
    });
    sandbox.stub(createLegend, 'default').returns({
      components: [{ key: 'legend-component-0' }, { key: 'legend-component-1' }],
      interactions: [{ key: 'legend-interaction-0' }, { key: 'legend-interaction-1' }],
    });

    chart = { key: 'chart' };
    actions = { key: 'actions' };
    scales = { key: 'scales' };
    selectionService = { key: 'selection-service' };
    layoutService = { key: 'layout-service', getHyperCubeValue: sandbox.stub() };
    dockService = { key: 'dock-service' };
    colorService = {
      custom: {
        legendComponents: () => {
          'legend';
        },
      },
    };
    dataHandler = { getMeta: sandbox.stub().returns({ isBinnedData: false }) };
    chartModel = {
      query: {
        getDataHandler: () => dataHandler,
      },
    };
    models = { selectionService, dockService, colorService, layoutService, chartModel };

    create = () =>
      createRange({
        models,
        actions,
        scales,
        chart,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct range composition when ranges exist', () => {
    expect(create()).to.deep.equal({
      components: [
        { key: 'x-component-0' },
        { key: 'x-component-1' },
        { key: 'y-component-0' },
        { key: 'y-component-1' },
        { key: 'bin-x-component-0' },
        { key: 'bin-x-component-1' },
        { key: 'bin-y-component-0' },
        { key: 'bin-y-component-1' },
        { key: 'legend-component-0' },
        { key: 'legend-component-1' },
      ],
      interactions: [
        { key: 'x-interaction-0' },
        { key: 'x-interaction-1' },
        { key: 'y-interaction-0' },
        { key: 'y-interaction-1' },
        { key: 'bin-x-interaction-0' },
        { key: 'bin-x-interaction-1' },
        { key: 'bin-y-interaction-0' },
        { key: 'bin-y-interaction-1' },
        { key: 'legend-interaction-0' },
        { key: 'legend-interaction-1' },
      ],
    });
  });

  it('should return correct range composition when ranges do not exist', () => {
    createXRange.default.returns(false);
    createYRange.default.returns(false);
    createBinXRange.default.returns(false);
    createBinYRange.default.returns(false);
    createLegend.default.returns(false);
    expect(create()).to.deep.equal({
      components: [],
      interactions: [],
    });
  });
});
