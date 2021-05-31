import * as d3Scale from 'd3-scale';
import picasso from 'picasso.js';

import * as KEYS from '../../../constants/keys';
import * as getTicks from '../ticks';

import createTickModel from '..';
import tickHelper from '../ticks/tick-helper';

describe('createTickModel', () => {
  let sandbox;
  let layoutService;
  let extremumModel;
  let dockService;
  let create;
  let ticks;
  let themeService;
  let chart;
  let chartModel;
  let linearScale;
  let renderer;
  let measureText;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    chartModel = { query: { getFormatter: sandbox.stub() } };
    chartModel.query.getFormatter.withArgs('x').returns('formatter-x');
    chartModel.query.getFormatter.withArgs('y').returns('formatter-y');
    layoutService = { getLayoutValue: sandbox.stub() };
    layoutService.getLayoutValue.withArgs('xAxis.spacing', 1).returns(0.5);
    layoutService.getLayoutValue.withArgs('yAxis.spacing', 1).returns(2);
    sandbox.stub(tickHelper, 'getSize');
    sandbox.stub(tickHelper, 'getDistance');
    extremumModel = {
      query: { getXExtrema: sandbox.stub(), getYExtrema: sandbox.stub() },
    };
    sandbox.stub(KEYS, 'default').value({ SCALE: { X: 'x', Y: 'y' }, FIELDS: { X: 'x', Y: 'y' } });
    linearScale = { domain: sandbox.stub().returns('correct scale') };
    sandbox.stub(d3Scale, 'scaleLinear').returns(linearScale);
    sandbox.stub(getTicks, 'default');
    measureText = sandbox.stub().returns({ width: 10, height: 20 });
    renderer = sandbox.stub().returns(measureText);
    sandbox.stub(picasso, 'renderer').returns(renderer);
    themeService = { getStyles: sandbox.stub().returns('theme') };
    create = () => createTickModel({ layoutService, dockService, extremumModel, themeService, chartModel, chart });
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
      it('should return correct X ticks', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'minMax',
        });
        tickHelper.getSize.returns(200);
        tickHelper.getDistance.returns(100);
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'minMax',
            distance: 100,
            size: 200,
            measure: sinon.match.func,
            formatter: 'formatter-x',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });

    describe('getYTicks', () => {
      it('should return correct Y ticks', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: 0,
          yAxisMax: 300,
          yAxisExplicitType: 'minMax',
        });
        tickHelper.getSize.returns(400);
        tickHelper.getDistance.returns(100);
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'minMax',
            distance: 100,
            size: 400,
            measure: sinon.match.func,
            formatter: 'formatter-y',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        ticks = model.query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });

    describe('getXMinMax', () => {
      it('should return correct X min max', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'minMax',
        });
        tickHelper.getSize.returns(200);
        tickHelper.getDistance.returns(100);
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'minMax',
            distance: 100,
            size: 200,
            measure: sinon.match.func,
            formatter: 'formatter-x',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        const minMax = model.query.getXMinMax();
        expect(minMax).to.deep.equal('correct minMax');
      });
    });

    describe('getYMinMax', () => {
      it('should return correct Y min max', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: 0,
          yAxisMax: 300,
          yAxisExplicitType: 'minMax',
        });
        tickHelper.getSize.returns(400);
        tickHelper.getDistance.returns(100);
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            explicitType: 'minMax',
            distance: 100,
            size: 400,
            measure: sinon.match.func,
            formatter: 'formatter-y',
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        const minMax = model.query.getYMinMax();
        expect(minMax).to.deep.equal('correct minMax');
      });
    });
  });

  describe('command', () => {
    it('should update formatters correctly', () => {
      extremumModel.query.getXExtrema.returns({
        xAxisMin: 0,
        xAxisMax: 600,
        xAxisExplicitType: 'minMax',
      });
      extremumModel.query.getYExtrema.returns({
        yAxisMin: 0,
        yAxisMax: 300,
        yAxisExplicitType: 'minMax',
      });
      tickHelper.getSize.withArgs(sinon.match.any, sinon.match.any, sinon.match.any, 'width').returns(200);
      tickHelper.getSize.withArgs(sinon.match.any, sinon.match.any, sinon.match.any, 'height').returns(400);
      tickHelper.getDistance.returns(100);
      getTicks.default
        .withArgs({
          scale: 'correct scale',
          explicitType: 'minMax',
          distance: 100,
          size: 200,
          measure: sinon.match.func,
          formatter: 'new-formatter-x',
        })
        .returns({ ticks: 'correct ticks', minMax: 'correct X minMax' });
      getTicks.default
        .withArgs({
          scale: 'correct scale',
          explicitType: 'minMax',
          distance: 100,
          size: 400,
          measure: sinon.match.func,
          formatter: 'formatter-y',
        })
        .returns({ ticks: 'correct ticks', minMax: 'correct Y minMax' });
      const model = create();
      model.command.updateFormatters({ x: 'new-formatter-x' });
      expect(model.query.getXMinMax()).to.deep.equal('correct X minMax');
      expect(model.query.getYMinMax()).to.deep.equal('correct Y minMax');
      expect();
    });
  });
});
