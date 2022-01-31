const eventName = 'lasso';

const lasso = ({ key, componentTargetKeys, requireFailure, recognizeWith }, opts) => ({
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

      if (!opts.actions.select.enabled() || !opts.actions.lasso.enabled() || !opts.actions.lasso.active()) {
        return false;
      }

      const components = this.chart.componentsFromPoint({ x: e.center.x, y: e.center.y });
      return components.filter((c) => componentTargetKeys.indexOf(c.key) !== -1);
    },
  },
  events: {
    lassostart(e) {
      e.preventDefault();
      if (this.started !== eventName) {
        opts.actions.select.emit('start', eventName);
        opts.actions.select.emit('selectionStart');
        opts.actions.select.emit('binsRangeSelectionClear');
        this.chart.component(key).emit('lassoStart', e);
        this.started = eventName;
      }
    },
    lassomove(e) {
      e.preventDefault();
      this.chart.component(key).emit('lassoMove', e);
    },
    lassoend(e) {
      e.preventDefault();
      this.started = false;
      this.chart.component(key).emit('lassoEnd', e);
      opts.actions.select.emit('end', eventName);
    },
  },
});

export default lasso;
