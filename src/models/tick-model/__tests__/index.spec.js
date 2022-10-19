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
  let formatters;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    chartModel = { query: { getAutoFormatPattern: sandbox.stub() } };
    layoutService = { getLayoutValue: sandbox.stub(), getHyperCubeValue: sandbox.stub() };
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
    formatters = { x: { pattern: sandbox.stub() }, y: { pattern: sandbox.stub() } };
    chart = { formatters: sandbox.stub().returns(formatters) };
    create = () => createTickModel({ layoutService, dockService, extremumModel, themeService, chartModel, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query']);
  });

  describe('query', () => {
    it('should expose correct methods', () => {
      expect(create().query).to.have.all.keys([
        'getXTicks',
        'getYTicks',
        'getXMinMax',
        'getYMinMax',
        'getCurrentYTicks',
      ]);
    });

    describe('getXTicks', () => {
      it('should return correct X ticks, when it is not autoFormat', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qIsAutoFormat', false).returns(false);
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
            formatter: sinon.match.object,
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks, when it is autoFormat', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qIsAutoFormat', false).returns(true);
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
            formatter: sinon.match.object,
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        chartModel.query.getAutoFormatPattern.withArgs('x').returns('#.###');
        const model = create();
        ticks = model.query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });

    describe('getYTicks', () => {
      it('should return correct Y ticks, when it is not autoFormat', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qIsAutoFormat', false).returns(false);
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
            formatter: sinon.match.object,
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        ticks = model.query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });

    describe('getXMinMax', () => {
      it('should return correct X min max, when it is not autoFormat', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qIsAutoFormat', false).returns(false);
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
            formatter: sinon.match.object,
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        const minMax = model.query.getXMinMax();
        expect(minMax).to.deep.equal('correct minMax');
      });
    });

    describe('getYMinMax', () => {
      it('should return correct Y min max, when it is not autoFormat', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qIsAutoFormat', false).returns(false);
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
            formatter: sinon.match.object,
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        const minMax = model.query.getYMinMax();
        expect(minMax).to.deep.equal('correct minMax');
      });
    });

    describe('getCurrentYTicks', () => {
      it('should return correct Y ticks', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qIsAutoFormat', false).returns(false);
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
            formatter: sinon.match.object,
          })
          .returns({ ticks: 'correct ticks', minMax: 'correct minMax' });
        const model = create();
        model.query.getYTicks();
        ticks = model.query.getCurrentYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });
  });
});
