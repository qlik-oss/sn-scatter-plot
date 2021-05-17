import testRectPoint from '../rect-point';

describe('testRectPoint', () => {
  it('should return true if the point is inside the rect', () => {
    expect(testRectPoint({ x1: 1, x2: 2, y1: 3, y2: 4 }, { x: 1.1, y: 3.9 })).to.equal(true);
  });
});
