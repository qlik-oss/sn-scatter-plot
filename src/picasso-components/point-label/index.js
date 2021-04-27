import testRectRect from '../../utils/math/collision/rect-rect';
import testRectCircle from '../../utils/math/collision/rect-circle';

const DISTANCE = 6;

export default {
  require: ['chart', 'renderer'],
  defaultSettings: {
    settings: {
      rtl: false,
      label: () => {},
      showLabel: () => true,
      target: {
        point: 'point-component',
      },
      mode: 1,
    },
    style: {
      fontFamily: 'QlikView Sans, sans-serif',
      fontSize: '12px',
      fill: '#333',
    },
  },
  preferredSize() {
    return {
      edgeBleed: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
    };
  },
  render() {
    const { settings } = this.settings;

    const component = this.chart.component(settings.target.point);

    if (!component) {
      return [];
    }

    const nodeFilter = (node) => node.key === settings.target.point;

    const nodes = this.chart.findShapes('circle').filter(nodeFilter);

    if (!nodes.length) {
      return [];
    }

    const { style } = this;

    const { label, showLabel, mode } = settings;

    const filteredNodes = nodes.filter((node) => showLabel(node));

    if (mode === 2) {
      return filteredNodes.map((node) => {
        const { localBounds } = node;
        return {
          type: 'text',
          x: localBounds.x + localBounds.width / 2,
          y: localBounds.y,
          fontSize: style.fontSize,
          fontFamily: style.fontFamily,
          fill: style.fill,
          text: label(node),
          baseline: 'text-after-edge',
          anchor: 'middle',
        };
      });
    }

    const measureText = (text) =>
      this.renderer.measureText({
        text,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
      });

    const th = measureText('M').height - 2;

    const nodeRects = filteredNodes.map((node) => {
      const { localBounds } = node;
      const text = label(node);
      const tw = measureText(text).width;
      const { x, y, width, height } = localBounds;
      const cx = x + width / 2;
      const x1 = cx - tw / 2;
      const x2 = cx + tw / 2;
      const y1 = y - th - DISTANCE;
      const y2 = y - DISTANCE;
      return {
        label: { text, cx, x1, y1, x2, y2, width: tw, height: th },
        circle: { x: cx, y: y + height / 2, r: height / 2 },
      };
    });

    const visibleLabels = [];

    const isOverlapping = (node) => {
      const overlappingLabels = visibleLabels.some((node2) => testRectRect(node.label, node2.label));
      if (overlappingLabels) {
        return true;
      }
      return nodeRects.some((node2) => testRectCircle(node.label, node2.circle));
    };

    const filteredNodeRects = nodeRects.filter((node) => {
      if (isOverlapping(node)) {
        return false;
      }
      visibleLabels.push(node);
      return true;
    });
    const labels = filteredNodeRects.map((node) => ({
      type: 'text',
      text: node.label.text,
      x: node.label.cx,
      y: node.label.y2,
      fontSize: style.fontSize,
      fontFamily: style.fontFamily,
      fill: style.fill,
      baseline: 'text-after-edge',
      anchor: 'middle',
    }));
    const rects = filteredNodeRects.map((node) => ({
      type: 'rect',
      x: node.label.x1,
      y: node.label.y1,
      width: node.label.width,
      height: node.label.height,
      fill: 'yellow',
    }));
    const lines = filteredNodeRects.map((node) => ({
      type: 'line',
      x1: node.label.cx,
      x2: node.label.cx,
      y1: node.label.y2,
      y2: node.label.y2 + DISTANCE - 1,
      stroke: 'black',
      strokeWidth: 1,
    }));
    return [...rects, ...labels, ...lines];
  },
};
