export default {
  require: ['renderer'],
  defaultSettings: {},
  renderer: 'dom',
  render(h) {
    if (!this.settings.show()) {
      return false;
    }
    const { x, y, width, height } = this.settings.rect;
    const { borderColor } = this.settings.style;
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
          display: 'inline-block',
          'border-style': 'solid',
          'border-color': borderColor,
          'border-width': '1px',
        },
      }),
    ];
  },
};
