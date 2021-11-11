export default {
  require: ['renderer'],
  defaultSettings: {},
  renderer: 'dom',
  render(h) {
    if (!this.settings.show()) {
      return false;
    }
    const { x, y, width, height } = this.settings.rect;
    const { borderColor, boxSizing } = this.settings.style;
    return [
      h('div', {
        style: {
          position: 'relative',
          left: `${x()}px`,
          top: `${y()}px`,
          width: `${width()}px`,
          height: `${height()}px`,
          background: 'silver',
          opacity: '0.5',
          'border-style': 'solid',
          'border-color': borderColor,
          'border-width': '1px',
          'box-sizing': boxSizing, // To put the border inside
          '-moz-box-sizing': boxSizing,
          '-webkit-box-sizing': boxSizing,
        },
      }),
    ];
  },
};
