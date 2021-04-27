import getPointYLineDistance from './point-y-line-distance';

export default function getPointRectXDistance(p, rect) {
  const { x1, x2, y1, y2 } = rect;
  const closestY = Math.abs(y1 - p.y) < Math.abs(y2 - p.y) ? y1 : y2;

  return getPointYLineDistance(p, { x: x1, y: closestY }, { x: x2, y: closestY });
}
