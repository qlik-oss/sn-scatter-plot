export default {
  require: ['renderer'],
  defaultSettings: {
    settings: {
      style: { borderColor: 'black', background: 'red' },
      rect: {
        x: () => 100,
        y: () => 100,
        width: () => 100,
        height: () => 100,
      },
    },
  },
  renderer: 'dom',
  render(h) {
    const { x, y, width, height } = this.settings.settings.rect;
    const { borderColor, background } = this.settings.settings.style;
    return [
      h('div', {
        style: {
          position: 'relative',
          left: `${x()}px`,
          top: `${y()}px`,
          width: `${width()}px`,
          height: `${height()}px`,
          background,
          'border-style': 'solid',
          'border-color': borderColor,
          'border-width': '1px',
        },
      }),
    ];
  },
};
