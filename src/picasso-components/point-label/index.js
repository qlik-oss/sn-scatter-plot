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

    const { label } = settings;

    return nodes.map((node) => {
      const { localBounds, data } = node;
      return {
        type: 'text',
        x: localBounds.x + localBounds.width / 2,
        y: localBounds.y,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        fill: style.fill,
        text: label(data),
        baseline: 'text-after-edge',
        anchor: 'middle',
      };
    });
  },
};
