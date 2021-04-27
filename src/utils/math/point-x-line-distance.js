// p2.y > p1.y
export default function getPointXLineDistance(p, p1, p2) {
  const dx2 = (p.x - p1.x) ** 2;
  if (p2.y < p.y) return (p2.y - p.y) ** 2 + dx2;
  if (p1.y > p.y) return (p1.y - p.y) ** 2 + dx2;
  return dx2;
}
