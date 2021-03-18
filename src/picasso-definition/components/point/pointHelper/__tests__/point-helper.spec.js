import pointHelper from '../index';

describe('Point helper', () => {
  let props = {};
  const windowSizeMultiplier = 1;
  let dotDataValue;

  beforeEach(() => {
    dotDataValue = 10;
    props = {
      sizeDataMin: 10,
      sizeDataMax: 20,
      minDotSize: 2,
      maxDotSize: 8,
    };
  });

  it('it should correctly calculate the radius', () => {
    expect(pointHelper.getDotRadius(dotDataValue, props)).to.equal(2);
    dotDataValue = 20;
    expect(pointHelper.getDotRadius(dotDataValue, props)).to.equal(8);
    dotDataValue = 9;
    expect(pointHelper.getDotRadius(dotDataValue, props)).to.equal(2);
    dotDataValue = 21;
    expect(pointHelper.getDotRadius(dotDataValue, props)).to.equal(8);
    dotDataValue = null;
    expect(pointHelper.getDotRadius(dotDataValue, props)).to.deep.equal(NaN);
    dotDataValue = 20;
    props.sizeDataMax = props.sizeDataMin;
    expect(pointHelper.getDotRadius(dotDataValue, props)).to.equal(5);
  });

  it('it should correctly calculate the point size', () => {
    let inputSize = 5;
    expect(pointHelper.getDotSize(inputSize, windowSizeMultiplier)).to.equal('10px');
    inputSize = 10;
    expect(pointHelper.getDotSize(inputSize, windowSizeMultiplier)).to.equal('20px');
  });

  it('it should correctly calculate the point measure size', () => {
    expect(pointHelper.getDotMeasureSize(dotDataValue, props, windowSizeMultiplier)).to.equal('4px');
    dotDataValue = 20;
    expect(pointHelper.getDotMeasureSize(dotDataValue, props, windowSizeMultiplier)).to.equal('16px');
  });
});
