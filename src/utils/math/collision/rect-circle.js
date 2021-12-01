/* eslint-disable no-param-reassign */
import testRectRect from './rect-rect';
import testRectPoint from './rect-point';
import getPointRectXDistance from '../point-rect-x-distance';
import getPointRectYDistance from '../point-rect-y-distance';

export default function testRectCircle(rect, circle) {
  let { bounds } = circle;
  const { x, y, r } = circle;
  const r2 = r * r;
  if (!bounds) {
    bounds = { x1: x - r, x2: x + r, y1: y - r, y2: y + r };
    circle.bounds = bounds;
  }
  if (!testRectRect(rect, bounds)) {
    return false;
  }
  if (testRectPoint(rect, circle)) {
    return true;
  }
  if (getPointRectXDistance(circle, rect) < r2) {
    return true;
  }
  return getPointRectYDistance(circle, rect) < r2;
}
