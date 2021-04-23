function onBubble(e, key) {
  const { target } = e.srcEvent;
  if (target && (target.getAttribute('data-key') || '').indexOf(`${key}-`) === 0) {
    return true;
  }
  return false;
}

const range = ({ eventName, key, fillTargets = [], requireFailure, recognizeWith }, opts) => ({
  key: `event:${key}`,
  type: 'Pan',
  requireFailure,
  recognizeWith,
  options: {
    event: eventName,
    enable(r, e) {
      if (this.started === eventName || !e) {
        return true;
      }

      if (!opts.actions.select.enabled()) {
        return false;
      }

      const components = this.chart
        .componentsFromPoint({ x: e.center.x, y: e.center.y })
        .filter((c) => fillTargets.indexOf(c.key) !== -1);

      const bubble = components.length === 0 ? onBubble(e, key) : false;
      if (bubble) {
        this.started = eventName;
        return true;
      }
      // console.log(`${e.center.x}, ${e.center.y}`);

      return components.length > 0;
    },
  },
  events: {
    [`${eventName}start`](e) {
      if (this.chart.brushSelectionIncludeMax === undefined) {
        this.chart.brushSelectionIncludeMax = true;
        opts.actions.select.brushSelectionIncludeMax = true; // eslint-disable-line no-param-reassign
      }
      e.preventDefault();
      opts.actions.select.emit('start', eventName);
      this.chart.component(key).emit('rangeStart', e);
      this.started = eventName;
    },
    [`${eventName}move`](e) {
      e.preventDefault();
      this.chart.component(key).emit('rangeMove', e);
      // console.log('1: key');
    },
    [`${eventName}end`](e) {
      if (this.chart.brushSelectionIncludeMax === undefined) {
        this.chart.brushSelectionIncludeMax = true;
        opts.actions.select.brushSelectionIncludeMax = true; // eslint-disable-line no-param-reassign
      }
      e.preventDefault();
      this.chart.component(key).emit('rangeEnd', e);
      opts.actions.select.emit('end', eventName);
      this.started = false;
    },
  },
});

export default range;
