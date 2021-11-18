/* eslint-disable no-param-reassign */
import testRectRect from '../../utils/math/collision/rect-rect';
import testRectCircle from '../../utils/math/collision/rect-circle';
import { ELLIPSIS_CHAR, ellipsText } from './text-ellipsis';

export const DISTANCE = 6;

function getAllTopLabels({ measureText, nodes, label, component }) {
  const { width: compWidth } = component.rect;

  return nodes.map((node) => {
    const text = label(node);
    const textWidth = measureText(text).width;
    const { localBounds } = node;
    const { x, y, width } = localBounds;
    const cx = x + width / 2;
    const maxWidth = Math.min(cx, compWidth - cx) * 2;
    const y2 = y - DISTANCE;
    const ellipsed = ellipsText({ text, textWidth, maxWidth, measureText });
    return {
      ellipsed,
      cx,
      topRect: { y2 },
      pointValue: node.data.value,
    };
  });
}

export function getLabels({ measureText, mode, nodes, label, labelHeight: textHeight, component }) {
  if (mode === 2) {
    return {
      topLabels: getAllTopLabels({ measureText, nodes, label, component }),
      bottomLabels: [],
    };
  }

  const topLabels = [];
  const bottomLabels = [];
  const nodesWithoutLabel = [];
  const { width: compWidth, height: compHeight } = component.rect;

  const geoNodes = nodes.map((node) => {
    const text = label(node);
    const textWidth = measureText(text).width;
    const { localBounds } = node;
    const { x, y, width, height } = localBounds;
    const cx = x + width / 2;
    const maxWidth = Math.min(cx, compWidth - cx) * 2;
    const rectWidth = Math.min(textWidth, maxWidth);
    const x1 = cx - rectWidth / 2;
    const x2 = cx + rectWidth / 2;
    const y1 = y - textHeight - DISTANCE;
    const y2 = y - DISTANCE;
    const ellipsed = ellipsText({ text, textWidth, maxWidth, measureText });
    const isEllipsisChar = ellipsed === ELLIPSIS_CHAR;

    return {
      text,
      cx,
      topRect: { x1, y1, x2, y2 },
      textWidth,
      maxWidth,
      ellipsed,
      isEllipsisChar,
      circle: { x: cx, y: y + height / 2, r: height / 2, height },
      pointValue: node.data.value,
    };
  });

  const isTopLabelOverlapping = (node) => {
    const { topRect } = node;
    return (
      topRect.y1 < 0 ||
      topLabels.some((node2) => testRectRect(topRect, node2.topRect)) ||
      geoNodes.some((node2) => testRectCircle(topRect, node2.circle))
    );
  };

  const isBottomLabelOverlapping = (node) => {
    const { bottomRect } = node;
    return (
      bottomRect.y2 > compHeight ||
      topLabels.some((node2) => testRectRect(bottomRect, node2.topRect)) ||
      bottomLabels.some((node2) => testRectRect(bottomRect, node2.bottomRect)) ||
      geoNodes.some((node2) => testRectCircle(bottomRect, node2.circle))
    );
  };

  geoNodes.forEach((node) => {
    if (!node.isEllipsisChar) {
      if (isTopLabelOverlapping(node)) {
        nodesWithoutLabel.push(node);
      } else {
        topLabels.push(node);
      }
    }
  });

  nodesWithoutLabel.forEach((node) => {
    const { x1, x2, y1, y2 } = node.topRect;
    const dy = node.circle.height + DISTANCE * 2 + textHeight;
    node.bottomRect = { x1, x2, y1: y1 + dy, y2: y2 + dy };
    const b = isBottomLabelOverlapping(node);
    if (!b) {
      bottomLabels.push(node);
    }
  });

  return { topLabels, bottomLabels };
}
