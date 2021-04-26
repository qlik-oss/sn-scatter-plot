const testRectRect = (rect1, rect2) =>
  rect1.x1 <= rect2.x2 && rect2.x1 <= rect1.x2 && rect1.y1 <= rect2.y2 && rect2.y1 <= rect1.y2;

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

    const { height } = measureText('M');

    const nodeRects = filteredNodes.map((node) => {
      const { localBounds } = node;
      const text = label(node);
      const { width } = measureText(text);
      const x = localBounds.x + localBounds.width / 2;
      const { y } = localBounds;
      const x1 = x - width / 2;
      const x2 = x + width;
      const y1 = y - height;
      const y2 = y;
      return { text, x, y, x1, y1, x2, y2, width, height };
    });

    const visibleRects = [];

    const isOverlapping = (node) => visibleRects.some((node2) => testRectRect(node, node2));

    const filteredNodeRects = nodeRects.filter((node) => {
      if (isOverlapping(node)) {
        return false;
      }
      visibleRects.push(node);
      return true;
    });
    return filteredNodeRects.map((node) => ({
      type: 'text',
      text: node.text,
      x: node.x,
      y: node.y,
      fontSize: style.fontSize,
      fontFamily: style.fontFamily,
      fill: style.fill,
      baseline: 'text-after-edge',
      anchor: 'middle',
    }));
  },
};
