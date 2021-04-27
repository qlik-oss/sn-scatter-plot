export default function testRectPoint(rect, p) {
  const { x1, x2, y1, y2 } = rect;
  const { x, y } = p;
  return x1 <= x && x2 >= x && y1 <= y && y2 >= y;
}
