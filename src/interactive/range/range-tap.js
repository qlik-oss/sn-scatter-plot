const tap = (
  {
    key,
    // targets,
    requireFailure,
    recognizeWith,
    // components,
    eventName = 'tap',
  },
  opts
) => ({
  prio: 1,
  key: `event:${key}-tap`,
  type: 'Tap',
  requireFailure,
  recognizeWith,
  options: {
    event: `${eventName}-${key}-tap`,
    interval: 10,
    pointers: 1,
    enable(r, e) {
      if (!e) {
        return false;
      }

      if (!opts.actions.select.enabled()) {
        return false;
      }

      if (e.target && e.target.nodeName === 'INPUT') {
        return true; // to block other tap handlers
      }

      if (e.target && e.target.hasAttribute('data-other-value')) {
        return (e.target.getAttribute('data-key') || '').split('-bubble')[0] === key;
      }

      return false;
    },
  },
  events: {
    [`${eventName}-${key}-tap`](e) {
      const k = (e.target.getAttribute('data-key') || '').split('-bubble')[0];
      if (k) {
        e.preventDefault();
        this.chart.component(key).emit('bubbleStart', e);
      }
    },
  },
});

export default tap;
