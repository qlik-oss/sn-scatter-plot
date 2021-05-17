import * as testRectRect from '../rect-rect';
import * as testRectPoint from '../rect-point';
import * as getPointRectXDistance from '../../point-rect-x-distance';
import * as getPointRectYDistance from '../../point-rect-y-distance';
import testRectCircle from '../rect-circle';

describe('testRectCircle', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(testRectRect, 'default');
    testRectRect.default.withArgs({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x1: 5, x2: 7, y1: 1, y2: 3 }).returns(false);
    testRectRect.default.withArgs({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x1: 3, x2: 5, y1: 1, y2: 3 }).returns(true);
    sandbox.stub(testRectPoint, 'default');
    testRectPoint.default
      .withArgs({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x: 3, y: 1, r: 1, bounds: { x1: 2, x2: 4, y1: 0, y2: 2 } })
      .returns(true);
    sandbox.stub(getPointRectXDistance, 'default');
    getPointRectXDistance.default
      .withArgs({ x: 4.5, y: 2, r: 1, bounds: { x1: 3.5, x2: 5.5, y1: 1, y2: 3 } }, { x1: 0, x2: 4, y1: 0, y2: 2 })
      .returns(0.25);
    sandbox.stub(getPointRectYDistance, 'default');
    getPointRectYDistance.default
      .withArgs({ x: 2, y: 2.5, r: 1, bounds: { x1: 1, x2: 3, y1: 1.5, y2: 3.5 } }, { x1: 0, x2: 4, y1: 0, y2: 2 })
      .returns(0.25);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if the bounded rect of the circle and the rect does not intersect, case 1: circle has explicit bounds property', () => {
    expect(testRectCircle({ x1: 0, x2: 4, y1: 0, y2: 2 }, { bounds: { x1: 5, x2: 7, y1: 1, y2: 3 } })).to.equal(false);
  });

  it('should return false if the bounded rect of the circle and the rect does not intersect, case 2: circle has no explicit bounds property', () => {
    expect(testRectCircle({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x: 6, y: 2, r: 1 })).to.equal(false);
  });

  it('should return true if the circle center is inside the rect ', () => {
    testRectRect.default.returns(true);
    expect(testRectCircle({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x: 3, y: 1, r: 1 })).to.equal(true);
  });

  it('should return true if the circle center is outside the rect, but its distance to the closest vertical segment is smaller than the circle radius', () => {
    testRectRect.default.returns(true);
    testRectPoint.default.returns(false);
    expect(testRectCircle({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x: 4.5, y: 2, r: 1 })).to.equal(true);
  });

  it('should return true if the circle center is outside the rect, but its distance to the closest horizontal segment is smaller than the circle radius', () => {
    testRectRect.default.returns(true);
    testRectPoint.default.returns(false);
    getPointRectXDistance.default.returns(100);
    expect(testRectCircle({ x1: 0, x2: 4, y1: 0, y2: 2 }, { x: 2, y: 2.5, r: 1 })).to.equal(true);
  });
});
