import NUMBERS from '../../../../constants/numbers';
import KEYS from '../../../../constants/keys';
import tickHelper from '../tick-helper';

describe('getTicksAndMinMax', () => {
  let sandbox;
  let create;
  let scale;
  let nicing;
  let count;
  let originalMin;
  let originalMax;
  let nicedScale;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    nicedScale = { nice: sandbox.stub() };
    scale = { nice: sandbox.stub(), ticks: sandbox.stub(), domain: sandbox.stub() };
    scale.nice.returns(nicedScale);
    count = 3;
    originalMin = -10;
    originalMax = 190;
    create = () => tickHelper.getTicksAndMinMax(scale, nicing, count, originalMin, originalMax);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call nice if nicing is true', () => {
    nicing = true;
    scale.ticks.returns([0, 100, 200]);
    scale.domain.returns([0, 200]);
    create();
    expect(nicedScale.nice).to.have.been.called;
  });

  it('should not call nice if nicing is false', () => {
    nicing = false;
    scale.ticks.returns([0, 100, 200]);
    scale.domain.returns([0, 200]);
    create();
    expect(nicedScale.nice).to.not.have.been.called;
  });

  describe('corner case: only one tick generated', () => {
    beforeEach(() => {
      count = 1;
    });

    describe('nicing is true', () => {
      let domainedScale;
      beforeEach(() => {
        nicing = true;
        domainedScale = { nice: sandbox.stub() };
        domainedScale.nice.returns(nicedScale);
      });

      it('should return correct ticks and min max when min-max range does not include zero', () => {
        scale.ticks.returns([200]);
        scale.domain.withArgs().returns([100, 300]);
        scale.domain.withArgs([-10, 190]).returns(domainedScale);
        expect(create()).to.deep.equal({ ticks: [100, 300], min: 100, max: 300 });
      });

      it('should return correct ticks and min max when min-max range include zero and abs(max) >= abs(min)', () => {
        scale.ticks.returns([100]);
        scale.domain.withArgs().returns([-300, 300]);
        originalMin = -200;
        originalMax = 280;
        scale.domain.withArgs([-200, 280]).returns(domainedScale);
        expect(create()).to.deep.equal({ ticks: [0, 300], min: -200, max: 300 });
      });

      it('should return correct ticks and min max when min-max range include zero and abs(max) < abs(min)', () => {
        scale.ticks.returns([-100]);
        scale.domain.withArgs().returns([-200, 100]);
        originalMin = -180;
        originalMax = 80;
        scale.domain.withArgs([-180, 80]).returns(domainedScale);
        expect(create()).to.deep.equal({ ticks: [-200, 0], min: -200, max: 80 });
      });
    });

    describe('nicing is false', () => {
      beforeEach(() => {
        nicing = false;
      });

      it('should return corect ticks', () => {
        scale.ticks.withArgs(1).returns([-100]);
        scale.ticks.withArgs(2).returns([-200, 0]);
        scale.domain.withArgs().returns([-200, 100]);
        expect(create()).to.deep.equal({ ticks: [-200, 0], min: -200, max: 100 });
      });
    });
  });
});

describe('valid', () => {
  let sandbox;
  let create;
  let ticks;
  let scale;
  let distance;
  let size;
  let formatter;
  let measure;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    formatter = sandbox.stub().returns('formatted');
    measure = sandbox.stub();
    scale = sandbox.stub();

    create = () => tickHelper.valid({ ticks, scale, distance, size, formatter, measure });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true if the space between ticks is larger than or equal 50% of the distance and the labels do not overlap', () => {
    ticks = [0, 800, 1600];
    distance = 100;
    measure.withArgs('formatted').returns(50);
    size = 300;
    scale.withArgs(800).returns(0.2);
    scale.withArgs(0).returns(0);
    expect(create()).to.equal(true);
  });

  it('should return false if the space between ticks is smaller than 50% of the distance', () => {
    ticks = [0, 700, 1400];
    distance = 100;
    measure.withArgs('formatted').returns(50);
    size = 300;
    scale.withArgs(700).returns(0.1);
    scale.withArgs(0).returns(0);
    expect(create()).to.equal(false);
  });

  it('should return false if the space between ticks is smaller than 80% of the distance', () => {
    ticks = [0, 700, 1400, 2100, 2800];
    distance = 100;
    size = 799;
    scale.withArgs(700).returns(0.1);
    scale.withArgs(0).returns(0);
    expect(create()).to.equal(false);
  });

  it('should return false if the labels overlap', () => {
    ticks = [0, 800, 1600];
    distance = 100;
    measure.withArgs('formatted').returns(110);
    size = 300;
    scale.withArgs(800).returns(0.3);
    scale.withArgs(0).returns(0);
    expect(create()).to.equal(false);
  });
});

describe('getDistance', () => {
  let spacing;
  let sandbox;
  const get = () => tickHelper.getDistance(spacing);

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

describe('getSize', () => {
  let sandbox;
  let create;
  let dockService;
  let chartModel;
  let chart;
  let dimension;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dockService = { meta: { chart: { size: { width: 100, height: 50 } } } };
    sandbox.stub(KEYS, 'COMPONENT').value({ POINT: 'point-component', HEAT_MAP: 'heat-map' });
    chart = { component: sandbox.stub() };
    chartModel = { query: { isPrelayout: sandbox.stub() } };
    layoutService = { meta: { isSnapshot: undefined } };
    create = () => tickHelper.getSize(dockService, chartModel, chart, dimension, layoutService);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct size if it is snapshot', () => {
    layoutService.meta.isSnapshot = true;
    dimension = 'width';
    expect(create()).to.equal(100);
  });

  it('should return correct size if prelayout is true and dimension is width', () => {
    chartModel.query.isPrelayout.returns(true);
    dimension = 'width';
    expect(create()).to.equal(100);
  });

  it('should return correct size if prelayout is true and dimension is height', () => {
    chartModel.query.isPrelayout.returns(true);
    dimension = 'height';
    expect(create()).to.equal(50);
  });

  it('should return correct size if prelayout is false and dimension is width for nomal data', () => {
    chartModel.query.isPrelayout.returns(false);
    dimension = 'width';
    chart.component.withArgs('point-component').returns({ rect: { computedPhysical: { width: 80, height: 40 } } });
    expect(create()).to.equal(80);
  });

  it('should return correct size if prelayout is false and dimension is height for nomal data', () => {
    chartModel.query.isPrelayout.returns(false);
    dimension = 'height';
    chart.component.withArgs('point-component').returns({ rect: { computedPhysical: { width: 80, height: 40 } } });
    chart.component.withArgs('heat-map').returns({ rect: { computedPhysical: { width: 0, height: 0 } } });
    expect(create()).to.equal(40);
  });

  it('should return correct size if prelayout is false and dimension is width for bin data', () => {
    chartModel.query.isPrelayout.returns(false);
    dimension = 'width';
    chart.component.withArgs('heat-map').returns({ rect: { computedPhysical: { width: 100, height: 50 } } });
    expect(create()).to.equal(100);
  });

  it('should return correct size if prelayout is false and dimension is height for bin data', () => {
    chartModel.query.isPrelayout.returns(false);
    dimension = 'height';
    chart.component.withArgs('point-component').returns({ rect: { computedPhysical: { width: 0, height: 0 } } });
    chart.component.withArgs('heat-map').returns({ rect: { computedPhysical: { width: 100, height: 50 } } });
    expect(create()).to.equal(50);
  });
});
