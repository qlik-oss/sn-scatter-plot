import pointHelper from '../index';

describe('Point helper', () => {
  const wsm = 1;
  let rValue;
  const minValue = 10;
  let maxValue;
  const minRadius = 2;
  const maxRadius = 8;

  beforeEach(() => {
    rValue = 10;
    maxValue = 20;
  });

  it('it should correctly calculate the radius', () => {
    expect(pointHelper.getDotRadius(rValue, minValue, maxValue, minRadius, maxRadius)).to.equal(2);
    rValue = 20;
    expect(pointHelper.getDotRadius(rValue, minValue, maxValue, minRadius, maxRadius)).to.equal(8);
    rValue = 9;
    expect(pointHelper.getDotRadius(rValue, minValue, maxValue, minRadius, maxRadius)).to.equal(2);
    rValue = 21;
    expect(pointHelper.getDotRadius(rValue, minValue, maxValue, minRadius, maxRadius)).to.equal(8);
    rValue = null;
    expect(pointHelper.getDotRadius(rValue, minValue, maxValue, minRadius, maxRadius)).to.deep.equal(NaN);
    rValue = 20;
    maxValue = minValue;
    expect(pointHelper.getDotRadius(rValue, minValue, maxValue, minRadius, maxRadius)).to.equal(5);
  });

  it('it should correctly calculate the point size', () => {
    let inputSize = 5;
    expect(pointHelper.getDotSize(inputSize, wsm)).to.equal('10px');
    inputSize = 10;
    expect(pointHelper.getDotSize(inputSize, wsm)).to.equal('20px');
  });

  it('it should correctly calculate the point measure size', () => {
    const props = {
      sizeDataMin: minValue,
      sizeDataMax: maxValue,
      minDotSize: minRadius,
      maxDotSize: maxRadius,
    };
    expect(pointHelper.getDotMeasureSize(rValue, props, wsm)).to.equal('4px');
    rValue = 20;
    expect(pointHelper.getDotMeasureSize(rValue, props, wsm)).to.equal('16px');
  });
});
