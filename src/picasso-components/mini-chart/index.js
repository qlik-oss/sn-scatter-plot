export default {
  require: ['renderer'],
  defaultSettings: {},
  renderer: 'dom',
  render(h) {
    return [
      h('div', {
        style: {
          position: 'relative',
          left: '0px',
          top: '0px',
          width: '200px',
          height: '100px',
          background: 'silver',
          opacity: '0.5',
          display: 'inline-block',
        },
      }),
    ];
  },
};
