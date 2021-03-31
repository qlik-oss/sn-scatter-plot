import picassoQ from 'picasso-plugin-q';
import createPicassoSelections from './pic-selections';
import SELECTION from '../../constants/selection';
import clearBrushes from './clear';

export default function createSelectionModel({ chart, actions, selections, document }) {
  const state = {
    keyDown: false,
    canSelect: false,
    dimensionLocked: false,
    isInnerDimensionLocked: false,
    selectionInfo: {
      event: undefined,
      components: [],
    },
    onStartListeners: [],
  };

  const selectionBrush = chart.brush('selection');

  const picassoSelections = createPicassoSelections({
    brush: selectionBrush,
    actions,
    selections,
    picassoQ,
  });

  picassoSelections.allowSimultaneous([...Array(15)].map((d, i) => `qHyperCube/qMeasureInfo/${i}`));

  const onKeyDown = (e) => {
    if (!state.keyDown && e.key === SELECTION.SHIFT) {
      actions.lasso.action();
      state.keyDown = true;
    }
  };

  const onKeyUp = (e) => {
    if (e.key === SELECTION.SHIFT) {
      actions.lasso.action();
      state.keyDown = false;
    }
  };

  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  const onStart = (name, components) => {
    state.selectionInfo.event = name;
    state.selectionInfo.components =
      components && components.length ? components.map((c) => c.key).filter(Boolean) : [];

    clearBrushes({
      current: name,
      chart,
      document,
    });
  };

  actions.select.on('start', onStart);

  const resetActions = () => {
    if (actions.lasso.active()) {
      actions.lasso.action();
    }
  };

  const clear = () =>
    clearBrushes({
      chart,
      document,
    });

  if (selections) {
    selections.on('deactivated', resetActions);
    selections.on('canceled', resetActions);
    selections.on('canceled', clear);
    selections.on('cleared', clear);
  }

  return {
    query: {
      getCanSelect: () => state.canSelect,
      getIsDimensionLocked: () => state.dimensionLocked,
      getIsLockedSelection: selections && selections.isLocked ? selections.isLocked : () => false,
      getSelectionInfo: () => state.selectionInfo,
    },
    command: {
      setLayout: ({ layout }) => {
        picassoSelections.layout(layout);

        const { qDimensionInfo } = layout.qHyperCube;

        state.canSelect = qDimensionInfo.length === 0 || qDimensionInfo.some((d) => !d.qLocked);
        state.dimensionLocked = !!(qDimensionInfo.length && qDimensionInfo[0].qLocked);
      },
      onSelectStart: ({ listener }) => {
        actions.select.on('start', listener);
        state.onStartListeners.push(listener);
        return () => {
          actions.select.removeListener('start', listener);
          const index = state.onStartListeners.indexOf(listener);
          if (index !== -1) {
            state.onStartListeners.splice(index, 1);
          }
        };
      },
      destroy: () => {
        picassoSelections.release();

        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);

        actions.select.removeListener('start', onStart);

        if (selections) {
          selections.removeListener('deactivated', resetActions);
          selections.removeListener('canceled', resetActions);
          selections.removeListener('canceled', clear);
          selections.removeListener('cleared', clear);
        }

        state.onStartListeners.forEach((listener) => actions.select.removeListener('start', listener));
        state.onStartListeners.length = 0;
      },
    },
  };
}
