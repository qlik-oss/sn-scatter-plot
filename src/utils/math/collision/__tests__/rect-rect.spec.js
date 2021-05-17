import testRectRect from '../rect-rect';

describe('testRectRect', () => {
  it('should return true if the two rects intersect', () => {
    expect(testRectRect({ x1: 1, x2: 2, y1: 3, y2: 4 }, { x1: 1.5, x2: 2.5, y1: 2.5, y2: 3.5 })).to.be.true;
  });
});
