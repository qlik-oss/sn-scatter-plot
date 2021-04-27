export default function testRectRect(rect1, rect2) {
  return rect1.x1 <= rect2.x2 && rect2.x1 <= rect1.x2 && rect1.y1 <= rect2.y2 && rect2.y1 <= rect1.y2;
}
