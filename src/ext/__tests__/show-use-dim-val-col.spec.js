import showUseDimValCol from '../show-use-dim-val-col';

describe('showUseDimValCol', () => {
  let data;

  beforeEach(() => {
    data = {
      color: {
        useDimColVal: true,
        auto: false,
        mode: 'byDimension',
        byDimDef: { type: 'libraryItem' },
      },
    };
  });

  it('should set useDimColVal to false if useDimColVal = undefined', () => {
    data.color.useDimColVal = undefined;
    showUseDimValCol(data);
    expect(data.color.useDimColVal).to.equal(false);
  });

  it('should return false if data.color.auto = true', () => {
    data.color.auto = true;
    expect(showUseDimValCol(data)).to.equal(false);
  });

  it('should return false if data.color.mode != byDimension', () => {
    data.color.mode = 'byMeasure';
    expect(showUseDimValCol(data)).to.equal(false);
  });

  it('should return false if data.color.byDimDef.type != libraryItem', () => {
    data.color.byDimDef.type = 'none';
    expect(showUseDimValCol(data)).to.equal(false);
  });

  it('should return true if none of above happen', () => {
    expect(showUseDimValCol(data)).to.equal(true);
  });
});
