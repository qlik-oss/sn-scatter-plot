/* eslint-disable no-param-reassign */
export default function compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
  const deltaX = currentRect.x - previousRect.x;
  const deltaY = currentRect.y - previousRect.y;
  if (deltaX !== 0 || deltaY !== 0) {
    currentNodes.forEach((node) => {
      switch (node.type) {
        case 'text':
        case 'rect':
          node.x -= deltaX;
          node.y -= deltaY;
          break;
        case 'line':
          node.x1 -= deltaX;
          node.x2 -= deltaX;
          node.y1 -= deltaY;
          node.y2 -= deltaY;
          break;
        default:
          break;
      }
    });
  }
}
