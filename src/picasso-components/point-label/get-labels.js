/* eslint-disable no-param-reassign */
import testRectRect from '../../utils/math/collision/rect-rect';
import testRectCircle from '../../utils/math/collision/rect-circle';

export const DISTANCE = 6;

function getAllTopLabels({ nodes, label }) {
  return nodes.map((node) => {
    const text = label(node);
    const { localBounds } = node;
    const { x, y, width } = localBounds;
    const cx = x + width / 2;
    const y2 = y - DISTANCE;
    return {
      text,
      cx,
      topRect: { y2 },
    };
  });
}

export function getLabels({ measureText, mode, nodes, label, labelHeight }) {
  if (mode === 2) {
    return {
      topLabels: getAllTopLabels({ nodes, label }),
      bottomLabels: [],
    };
  }

  const topLabels = [];
  const bottomLabels = [];
  const nodesWithoutLabel = [];

  const geoNodes = nodes.map((node) => {
    const text = label(node);
    const labelWidth = measureText(text).width;
    const { localBounds } = node;
    const { x, y, width, height } = localBounds;
    const cx = x + width / 2;
    const x1 = cx - labelWidth / 2;
    const x2 = cx + labelWidth / 2;
    const y1 = y - labelHeight - DISTANCE;
    const y2 = y - DISTANCE;
    return {
      text,
      cx,
      topRect: { x1, y1, x2, y2 },
      labelWidth,
      circle: { x: cx, y: y + height / 2, r: height / 2, height },
    };
  });

  const isTopLabelOverlapping = (node) =>
    topLabels.some((node2) => testRectRect(node.topRect, node2.topRect)) ||
    geoNodes.some((node2) => testRectCircle(node.topRect, node2.circle));

  const isBottomLabelOverlapping = (node) =>
    topLabels.some((node2) => testRectRect(node.bottomRect, node2.topRect)) ||
    bottomLabels.some((node2) => testRectRect(node.bottomRect, node2.bottomRect)) ||
    geoNodes.some((node2) => testRectCircle(node.bottomRect, node2.circle));

  geoNodes.forEach((node) => {
    if (isTopLabelOverlapping(node)) {
      nodesWithoutLabel.push(node);
    } else {
      topLabels.push(node);
    }
  });

  nodesWithoutLabel.forEach((node) => {
    const { x1, x2, y1, y2 } = node.topRect;
    const dy = node.circle.height + DISTANCE * 2 + labelHeight;
    node.bottomRect = { x1, x2, y1: y1 + dy, y2: y2 + dy };
    const b = isBottomLabelOverlapping(node);
    if (!b) {
      bottomLabels.push(node);
    }
  });

  return { topLabels, bottomLabels };
}
