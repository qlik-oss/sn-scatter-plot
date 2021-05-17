import * as getPointXLineDistance from '../point-x-line-distance';
import getPointRectXDistance from '../point-rect-x-distance';

describe('getPointRectXDistance', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox
      .stub(getPointXLineDistance, 'default')
      .withArgs({ x: 5, y: 1 }, { x: 4, y: 0 }, { x: 4, y: 2 })
      .returns(100);
    getPointXLineDistance.default.withArgs({ x: 1, y: 5 }, { x: 0, y: 0 }, { x: 0, y: 2 }).returns(200);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct square of distance from a point to the closest vertical segment of a rect, case 1', () => {
    expect(getPointRectXDistance({ x: 5, y: 1 }, { x1: 0, x2: 4, y1: 0, y2: 2 })).to.equal(100);
  });

  it('should return correct square of distance from a point to the closest vertical segment of a rect, case 2', () => {
    expect(getPointRectXDistance({ x: 1, y: 5 }, { x1: 0, x2: 4, y1: 0, y2: 2 })).to.equal(200);
  });
});
