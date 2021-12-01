// p2.x > p1.x
export default function getPointYLineDistance(p, p1, p2) {
  const dy2 = (p.y - p1.y) ** 2;
  if (p2.x < p.x) {
    return (p2.x - p.x) ** 2 + dy2;
  }
  if (p1.x > p.x) {
    return (p1.x - p.x) ** 2 + dy2;
  }
  return dy2;
}
