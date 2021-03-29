describe('scales', () => {
  let createScales;
  let tickModel;
  let viewState;

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
        getXTicks: sinon.stub(),
        getYTicks: sinon.stub(),
      },
    };
    viewState = {
      get: sinon.stub().withArgs('zoom').returns({
        xAxisMin: 0,
        xAxisMax: 10,
        yAxisMin: 0,
        yAxisMax: 12,
      }),
    };
  });

  it('should contain correct scales', () => {
    const scales = createScales({ tickModel, viewState });
    expect(Object.keys(scales)).to.deep.equal(['x', 'y']);
  });

  it('should create X and Y ticks', () => {
    createScales({ tickModel, viewState });
    expect(tickModel.query.getXTicks).to.have.been.calledOnce;
    expect(tickModel.query.getYTicks).to.have.been.calledOnce;
  });
});
