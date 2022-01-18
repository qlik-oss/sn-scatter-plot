import getNumMeasures from '../get-num-measures';

describe('getNumMeasures', () => {
  it('should return 0 if obj is falsy', () => {
    expect(getNumMeasures()).to.equal(0);
  });

  it('should return 0 if obj.qHyperCubeDef is falsy', () => {
    expect(getNumMeasures({})).to.equal(0);
  });

  it('should return 0 if obj.qHyperCubeDef.qMeasures is falsy', () => {
    expect(getNumMeasures({ qHyperCubeDef: {} })).to.equal(0);
  });

  it('should return 0 if obj.qHyperCubeDef.qMeasures.length is 0', () => {
    expect(getNumMeasures({ qHyperCubeDef: { qMeasures: [] } })).to.equal(0);
  });

  it('should return obj.qHyperCubeDef.qMeasures.length', () => {
    const obj = { qHyperCubeDef: { qMeasures: [] } };
    obj.qHyperCubeDef.qMeasures.length = 5;
    expect(getNumMeasures(obj)).to.equal(5);
  });
});
