import * as d3Scale from 'd3-scale';
import picasso from 'picasso.js';

import * as KEYS from '../../../constants/keys';
import * as getTicks from '../ticks';
import * as tickModel from '..';

import createTickModel from '..';

describe('getCount', () => {
  let size;
  let spacing;
  const get = () => tickModel.getCount(size, spacing);
  beforeEach(() => {
    size = 748;
  });

  it('should return correct count with spacing = 0.5', () => {
    spacing = 0.5;

    // round(748/50) == 15
    expect(get()).to.equal(15);
  });

  it('should return correct count with spacing = 1', () => {
    spacing = 1;

    // round(748/100) == 7
    expect(get()).to.equal(7);
  });

  it('should return correct count with spacing = 2', () => {
    spacing = 2;

    // round(748/200) == 4
    expect(get()).to.equal(4);
  });

  it('should return correct count with spacing = 3', () => {
    spacing = 3;

    // round(748/100) == 7
    expect(get()).to.equal(7);
  });

  it('should fall back to 1 when size/distance is below 1', () => {
    size = 100;
    spacing = 2;

    // max(1, round(100/200)) == 1
    expect(get()).to.equal(1);
  });
});

describe('createTickModel', () => {
  let sandbox;
  let resolveTicks;
  let layoutModel;
  let extremumModel;
  let dockModel;
  let create;
  let ticks;
  let themeModel;
  let chart;
  let linearScale;
  let renderer;
  let measureText;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    resolveTicks = sandbox.stub();
    resolveTicks.returns('called');
    layoutModel = { getLayoutValue: sandbox.stub() };
    layoutModel.getLayoutValue.withArgs('xAxis.spacing', 1).returns(0.5);
    layoutModel.getLayoutValue.withArgs('yAxis.spacing', 1).returns(2);
    dockModel = { chartSize: { width: 500, height: 1000 } };
    extremumModel = {
      query: { getXExtrema: sandbox.stub(), getYExtrema: sandbox.stub(), getIsHomeState: sandbox.stub().returns(true) },
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
    chart = { formatter: sandbox.stub(), component: sandbox.stub() };
    chart.formatter.withArgs('x').returns('x-formatter');
    chart.formatter.withArgs('y').returns('y-formatter');
    themeModel = { query: { getStyle: sandbox.stub().returns('theme') } };
    create = () => createTickModel({ layoutModel, dockModel, extremumModel, themeModel, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query']);
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
            nicing: true,
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks when only min is explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            nicing: true,
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks when only max is explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            nicing: true,
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getXTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct X ticks when both min and max are not explicit', () => {
        extremumModel.query.getXExtrema.returns({
          xAxisMin: 0,
          xAxisMax: 600,
          xAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            nicing: true,
            count: 10,
            size: 500,
            measure: sinon.match.func,
            formatter: 'x-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getXTicks();
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
            nicing: true,
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct Y ticks when only min is explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            nicing: true,
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct Y ticks when only max is explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            nicing: true,
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });

      it('should return correct Y ticks when both min and max are not explicit', () => {
        extremumModel.query.getYExtrema.returns({
          yAxisMin: -100,
          yAxisMax: 500,
          yAxisExplicitType: 'minMax',
        });
        getTicks.default
          .withArgs({
            scale: 'correct scale',
            nicing: true,
            count: 5,
            size: 1000,
            measure: sinon.match.func,
            formatter: 'y-formatter',
          })
          .returns('correct ticks');
        ticks = create().query.getYTicks();
        expect(ticks).to.deep.equal('correct ticks');
      });
    });
  });
});
