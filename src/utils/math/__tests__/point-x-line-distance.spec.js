import getPointXLineDistance from '../point-x-line-distance';

describe('getPointXLineDistance', () => {
  it('should return correct square of distance from a point to a verticle line segment', () => {
    expect(getPointXLineDistance({ x: -1, y: 3 }, { x: 0, y: 1 }, { x: 0, y: 2 })).to.equal(2);
    expect(getPointXLineDistance({ x: -1, y: -1 }, { x: 0, y: 1 }, { x: 0, y: 2 })).to.equal(5);
    expect(getPointXLineDistance({ x: 2, y: 1.5 }, { x: 0, y: 1 }, { x: 0, y: 2 })).to.equal(4);
  });
});
