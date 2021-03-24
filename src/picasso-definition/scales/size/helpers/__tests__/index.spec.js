import pointHelper from '../index';

describe('Point helper', () => {
  const windowSizeMultiplier = 1;
  let value;
  let sizeDataMin;
  let sizeDataMax;
  let minDotSize;
  let maxDotSize;

  beforeEach(() => {
    value = 10;
    sizeDataMin = 10;
    sizeDataMax = 20;
    minDotSize = 2;
    maxDotSize = 8;
  });

  it('should correctly calculate the radius', () => {
    expect(pointHelper.getDotRadius({ value, sizeDataMax, sizeDataMin, minDotSize, maxDotSize })).to.equal(2);
    value = 20;
    expect(pointHelper.getDotRadius({ value, sizeDataMax, sizeDataMin, minDotSize, maxDotSize })).to.equal(8);
    value = 9;
    expect(pointHelper.getDotRadius({ value, sizeDataMax, sizeDataMin, minDotSize, maxDotSize })).to.equal(2);
    value = 21;
    expect(pointHelper.getDotRadius({ value, sizeDataMax, sizeDataMin, minDotSize, maxDotSize })).to.equal(8);
    value = null;
    expect(pointHelper.getDotRadius({ value, sizeDataMax, sizeDataMin, minDotSize, maxDotSize })).to.deep.equal(NaN);
    value = 20;
    sizeDataMax = sizeDataMin;
    expect(pointHelper.getDotRadius({ value, sizeDataMax, sizeDataMin, minDotSize, maxDotSize })).to.equal(5);
  });

  it('should correctly calculate the point size', () => {
    let dotSize = 5;
    expect(pointHelper.getDotSize({ dotSize, windowSizeMultiplier })).to.equal('10px');
    dotSize = 10;
    expect(pointHelper.getDotSize({ dotSize, windowSizeMultiplier })).to.equal('20px');
  });

  it('should correctly calculate the point measure size', () => {
    expect(
      pointHelper.getDotMeasureSize({
        value,
        sizeDataMax,
        sizeDataMin,
        minDotSize,
        maxDotSize,
        windowSizeMultiplier,
      })
    ).to.equal('4px');
    value = 20;
    expect(
      pointHelper.getDotMeasureSize({
        value,
        sizeDataMax,
        sizeDataMin,
        minDotSize,
        maxDotSize,
        windowSizeMultiplier,
      })
    ).to.equal('16px');
  });
});
