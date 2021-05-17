import getPointYLineDistance from '../point-y-line-distance';

describe('getPointYLineDistance', () => {
  it('should return correct square of distance from a point to a horizontal line segment', () => {
    expect(getPointYLineDistance({ x: 3, y: 1 }, { x: 2, y: 0 }, { x: 4, y: 0 })).to.equal(1);
    expect(getPointYLineDistance({ x: 5, y: 1 }, { x: 2, y: 0 }, { x: 4, y: 0 })).to.equal(2);
    expect(getPointYLineDistance({ x: 0, y: 1 }, { x: 2, y: 0 }, { x: 4, y: 0 })).to.equal(5);
  });
});
