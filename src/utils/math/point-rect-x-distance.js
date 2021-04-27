import getPointXLineDistance from './point-x-line-distance';

export default function getPointRectXDistance(p, rect) {
  const { x1, x2, y1, y2 } = rect;
  const closestX = Math.abs(x1 - p.x) < Math.abs(x2 - p.x) ? x1 : x2;

  return getPointXLineDistance(p, { x: closestX, y: y1 }, { x: closestX, y: y2 });
}
