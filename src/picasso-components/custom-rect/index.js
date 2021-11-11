export default {
  require: ['renderer'],
  defaultSettings: {},
  renderer: 'dom',
  render(h) {
    if (!this.settings.show()) {
      return false;
    }
    const { x, y, width, height } = this.settings.rect;
    const { borderColor, background, opacity } = this.settings.style;
    return [
      h('div', {
        style: {
          position: 'relative',
          left: `${x()}px`,
          top: `${y()}px`,
          width: `${width()}px`,
          height: `${height()}px`,
          background,
          opacity,
          'border-style': 'solid',
          'border-color': borderColor,
          'border-width': '1px',
        },
      }),
    ];
  },
};
