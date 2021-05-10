describe('scales', () => {
  let createScales;
  let tickModel;
  let viewState;
  let colorService;
  let models;

  beforeEach(() => {
    createScales = aw.mock(
      [
        [
          '**/src/constants/keys.js',
          () => ({ FIELDS: { X: 'qDimensionInfo/0', Y: 'qDimensionInfo/1', SIZE: 'qMeasureInfo/0' } }),
        ],
      ],
      ['../index']
    )[0].default;
    tickModel = {
      query: {
        getXTicks: sinon.stub().returns(['x1', 'x2']),
        getYTicks: sinon.stub().returns(['y1', 'y2', 'y3']),
      },
    };
    viewState = {
      get: sinon.stub().withArgs('dataView').returns({
        xAxisMin: 0,
        xAxisMax: 10,
        yAxisMin: 20,
        yAxisMax: 30,
      }),
    };
    colorService = {
      getScales: sinon.stub().returns({ s1: 's1', s2: 's2' }),
    };
    models = { tickModel, colorService };
  });

  it('should contain correct scales', () => {
    const scales = createScales({ models, viewState });
    expect(Object.keys(scales)).to.deep.equal(['x', 'y', 's1', 's2']);
  });

  it('scales should have proper properties', () => {
    const { x, y } = createScales({ models, viewState });
    expect(typeof x.ticks.values === 'function').to.equal(true);
    expect(typeof x.min === 'function').to.equal(true);
    expect(typeof x.max === 'function').to.equal(true);
    expect(typeof y.ticks.values === 'function').to.equal(true);
    expect(typeof y.min === 'function').to.equal(true);
    expect(typeof y.max === 'function').to.equal(true);
  });

  it('x.min should return correct ticks', () => {
    const { x } = createScales({ models, viewState });
    const res = x.min();
    expect(res).to.equal(0);
  });

  it('x.max should return correct ticks', () => {
    const { x } = createScales({ models, viewState });
    const res = x.max();
    expect(res).to.equal(10);
  });

  it('x.ticks.values should return correct ticks', () => {
    const { x } = createScales({ models, viewState });
    const ticks = x.ticks.values();
    expect(ticks).to.deep.equal(['x1', 'x2']);
  });

  it('y.ticks.values should return correct ticks', () => {
    const { y } = createScales({ models, viewState });
    const ticks = y.ticks.values();
    expect(ticks).to.deep.equal(['y1', 'y2', 'y3']);
  });

  it('y.min should return correct ticks', () => {
    const { y } = createScales({ models, viewState });
    const res = y.min();
    expect(res).to.equal(20);
  });

  it('y.max should return correct ticks', () => {
    const { y } = createScales({ models, viewState });
    const res = y.max();
    expect(res).to.equal(30);
  });
});
