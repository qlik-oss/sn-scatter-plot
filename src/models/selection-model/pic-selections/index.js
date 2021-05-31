/* eslint-disable func-names */
/* eslint no-param-reassign: 0 */
import KEYS from '../../../constants/selection';

const instances = [];
let expando = 0;
const confirmOrCancelSelection = (e) => {
  const active = instances.filter((a) => a.selections && a.selections.isActive());
  if (!active.length) {
    return;
  }
  if (e.key === KEYS.ENTER) {
    active.forEach((a) => a.selections.confirm());
  } else if (e.key === KEYS.ESCAPE || e.key === KEYS.IE11_ESC) {
    active.forEach((a) => a.selections.cancel());
  }
};

const setup = () => {
  document.addEventListener('keyup', confirmOrCancelSelection);
};

const teardown = () => {
  document.removeEventListener('keyup', confirmOrCancelSelection);
};

const addListeners = (emitter, listeners) => {
  Object.keys(listeners).forEach((type) => {
    emitter.on(type, listeners[type]);
  });
};

const removeListeners = (emitter, listeners) => {
  Object.keys(listeners).forEach((type) => {
    emitter.removeListener(type, listeners[type]);
  });
};

function setMaxIncluded(s, brushSelectionIncludeMax, max) {
  if (!brushSelectionIncludeMax || max === undefined || s.method !== 'selectHyperCubeContinuousRange') {
    return;
  }
  const { params } = s;
  if (!params || !params[1] || !params[1][0]) {
    return;
  }
  const { qDimIx, qRange } = params[1][0];
  if (qDimIx === 'undefined' || !qRange || qRange.qMaxInclEq !== false) {
    return;
  }
  if (qRange.qMax >= max) {
    qRange.qMaxInclEq = true;
  }
}

export default function ({ selections, brush, majorScale, actions, picassoQ } = {}, { path = '/qHyperCubeDef' } = {}) {
  if (!selections) {
    return {
      layout: () => {},
      allowSimultaneous: () => {},
      release: () => {},
    };
  }
  const key = ++expando;

  let layout = null;
  let allowSimultaneous = [];
  let qBrushOptions = {};

  // bind some methods to protect them form the deep cloning done
  // when passed to picasso components
  selections.on = selections.on.bind(selections);
  selections.isActive = selections.isActive.bind(selections);
  selections.addListener = selections.addListener.bind(selections);
  selections.removeListener = selections.removeListener.bind(selections);

  const interceptor = (added) => {
    const brushes = brush.brushes();
    brushes.forEach((b) => {
      if (b.type === 'range') {
        // has range selections
        brush.clear([]);
      } else if (added[0] && added[0].key !== b.id && allowSimultaneous.indexOf(added[0].key) !== 0) {
        // has selections in another dimension
        brush.clear([]);
      }
    });

    const res = added.filter((t) => t.value !== -2);
    if (res.length) {
      const isSingleSelection = layout?.qHyperCube?.qDimensionInfo?.[0]?.qIsOneAndOnlyOne;
      if (isSingleSelection) return [res[res.length - 1]];
    }
    return res;
  };

  const rangeInterceptor = (a) => {
    const v = brush.brushes().filter((b) => b.type === 'value');
    if (v.length) {
      // has dimension values selected
      brush.clear([]);
      return a;
    }
    brush.brushes().forEach((b) => {
      const canCoexist =
        b.id === a[0].key || (allowSimultaneous.indexOf(b.id) !== -1 && allowSimultaneous.indexOf(a[0].key) !== -1);
      if (b.type === 'range' && !canCoexist) {
        brush.clear([]);
      }
    });
    return a;
  };

  brush.intercept('set-ranges', rangeInterceptor);
  brush.intercept('toggle-ranges', rangeInterceptor);

  brush.intercept('toggle-values', interceptor);
  brush.intercept('set-values', interceptor);
  brush.intercept('add-values', interceptor);

  brush.on('start', () => selections.begin(path));

  const selectionListeners = {
    activate: () => {
      // TODO - check if we can select in the current chart,
      // if not, call e.preventAction() to prevent qix selections
      // e.preventAction();
    },
    deactivated: () => brush.end(),
    cleared: () => brush.clear(),
    canceled: () => brush.end(),
  };
  addListeners(selections, selectionListeners);

  const max = majorScale?.max?.();

  if (actions && actions.select) {
    actions.select.on('start', (...args) => {
      brush.start();
      if (typeof actions.select.getBrushOptions === 'function') {
        qBrushOptions = actions.select.getBrushOptions(...args);
      }
    });
    actions.select.on('end', () => {
      const generated = picassoQ.selections(brush, qBrushOptions, layout);
      generated.forEach((s) => {
        setMaxIncluded(s, actions.select.brushSelectionIncludeMax, max);
        selections.select(s);
      });
    });
  } else {
    brush.on('update', () => {
      const generated = picassoQ.selections(brush, qBrushOptions, layout);
      generated.forEach((s) => selections.select(s));
    });
  }

  if (instances.length === 0) {
    setup();
  }

  instances.push({
    key,
    selections,
  });

  return {
    layout: (lt) => {
      layout = lt;
    },
    allowSimultaneous: (s) => {
      allowSimultaneous = s;
    },
    release: () => {
      layout = null;
      const idx = instances.indexOf(instances.filter((i) => i.key === key)[0]);
      if (idx !== -1) {
        instances.splice(idx, 1);
      }
      if (!instances.length) {
        teardown();
      }
      removeListeners(selections, selectionListeners);
    },
  };
}
