import * as d3Scale from 'd3-scale';
import picasso from 'picasso.js';

import * as KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import * as getTicks from '../ticks';
import * as tickModel from '..';

import createTickModel from '..';

describe('getDistance', () => {
  let spacing;
  let sandbox;
  const get = () => tickModel.getDistance(spacing);

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(NUMBERS, 'GRID_DISTANCE').value({
      NARROW: 50,
      MEDIUM: 100,
      WIDE: 200,
      FALLBACK: 100,
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct distance with spacing = 0.5', () => {
    spacing = 0.5;
    expect(get()).to.equal(50);
  });

  it('should return correct distance with spacing = 1', () => {
    spacing = 1;
    expect(get()).to.equal(100);
  });

  it('should return correct distance with spacing = 2', () => {
    spacing = 2;
    expect(get()).to.equal(200);
  });

  it('should return correct distance with spacing = 3', () => {
    spacing = 3;
    expect(get()).to.equal(100);
  });
});

describe.skip('createTickModel', () => {
  let sandbox;
  let resolve;
  let layoutService;
  let extremumModel;
  let dockService;
  let create;
  let ticks;
  let themeService;
  // let chart;
  let linearScale;
  let renderer;
  let measureText;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    resolve = sandbox.stub();
    resolve.returns('called');
    layoutService = { getLayoutValue: sandbox.stub() };
    layoutService.getLayoutValue.withArgs('xAxis.spacing', 1).returns(0.5);
    layoutService.getLayoutValue.withArgs('yAxis.spacing', 1).returns(2);
    dockService = { meta: { chart: { size: { width: 500, height: 1000 } } } };
    extremumModel = {
      query: { getXExtrema: sandbox.stub(), getYExtrema: sandbox.stub() },
    };
    sandbox
      .stub(KEYS, 'default')
      .value({ SCALE: { X: 'x', Y: 'y' }, COMPONENT: { POINT: 'point' }, FORMATTER: { X: 'x', Y: 'y' } });
    linearScale = { domain: sandbox.stub().returns('correct scale') };
    sandbox.stub(d3Scale, 'scaleLinear').returns(linearScale);
    sandbox.stub(getTicks, 'default');
    measureText = sandbox.stub().returns({ width: 10, height: 20 });
    renderer = sandbox.stub().returns(measureText);
    sandbox.stub(picasso, 'renderer').returns(renderer);
    themeService = { getStyles: sandbox.stub().returns('theme') };
    create = () => createTickModel({ layoutService, dockService, extremumModel, themeService });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query', 'command']);
  });

  describe('query', () => {
    it('should expose correct methods', () => {
      expect(create().query).to.have.all.keys(['getXTicks', 'getYTicks', 'getXMinMax', 'getYMinMax']);
    });

    describe('getXTicks', () => {
      it('should return correct X ticks when both min and max are explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'minMax',
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ x: 'x-formatter' });
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks when only min is explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'min',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'min',
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ x: 'x-formatter' });
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks when only max is explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'max',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'max',
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ x: 'x-formatter' });
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks when both min and max are not explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'none',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'none',
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ x: 'x-formatter' });
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });

    describe('getYTicks', () => {
      it('should return correct Y ticks when both min and max are explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'minMax',
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ y: 'y-formatter' });
        ticks = model.query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct Y ticks when only min is explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'min',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'min',
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ y: 'y-formatter' });
        ticks = model.query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct Y ticks when only max is explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'max',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'max',
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ y: 'y-formatter' });
        ticks = model.query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct Y ticks when both min and max are not explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'none',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'none',
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.command.updateFormatters({ y: 'y-formatter' });
        ticks = model.query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });
  });
});
