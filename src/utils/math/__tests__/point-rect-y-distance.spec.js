import * as getPointYLineDistance from '../point-y-line-distance';
import getPointRectYDistance from '../point-rect-y-distance';

describe('getPointRectYDistance', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox
      .stub(getPointYLineDistance, 'default')
      .withArgs({ x: 5, y: 1 }, { x: 0, y: 2 }, { x: 4, y: 2 })
      .returns(100);
    getPointYLineDistance.default.withArgs({ x: -1, y: -5 }, { x: 0, y: 0 }, { x: 4, y: 0 }).returns(200);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct square of distance from a point to the closest horizontal segment of a rect, case 1', () => {
    expect(getPointRectYDistance({ x: 5, y: 1 }, { x1: 0, x2: 4, y1: 0, y2: 2 })).to.equal(100);
  });

  it('should return correct square of distance from a point to the closest horizontal segment of a rect, case 2', () => {
    expect(getPointRectYDistance({ x: -1, y: -5 }, { x1: 0, x2: 4, y1: 0, y2: 2 })).to.equal(200);
  });
});
