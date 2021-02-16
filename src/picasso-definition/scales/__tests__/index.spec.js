describe('scales', () => {
  let createScales;
  let layoutModel;
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
    layoutModel = {
      getHyperCubeValue: sinon.stub().withArgs('qMeasureInfo.2').returns({}),
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
    const scales = createScales({ layoutModel, viewState });
    expect(Object.keys(scales)).to.deep.equal(['x', 'y', 'size']);
  });
});
