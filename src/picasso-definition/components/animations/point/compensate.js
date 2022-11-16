/* eslint-disable no-param-reassign */
import movePath from '../../../../utils/move-path';

export default function compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
  const deltaX = currentRect.x - previousRect.x;
  const deltaY = currentRect.y - previousRect.y;
  if (deltaX !== 0 || deltaY !== 0) {
    currentNodes.forEach((node) => {
      switch (node.type) {
        case 'circle':
          node.cx -= deltaX;
          node.cy -= deltaY;
          break;
        case 'path': {
          node.d = movePath(node.d, -deltaX, -deltaY);
          break;
        }
        case 'rect':
          node.x -= deltaX;
          node.y -= deltaY;
          break;
        default:
          break;
      }
    });
  }
}
