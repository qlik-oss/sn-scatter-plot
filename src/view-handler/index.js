import extend from 'extend';

function areIntervalsEqual(min1, max1, min2, max2, e) {
  // e is the relative tolerance; d is the absolute tolerence
  let d;
  if (e === undefined) {
    d = 0;
  } else {
    d = Math.abs(max1 - min1) * e;
  }
  return Math.abs(min2 - min1) <= d && Math.abs(max2 - max1) <= d;
}

export default function createViewHandler({ viewState, extremumModel }) {
  const meta = {
    homeStateDataView: {},
    scale: 1,
    maxScale: 2 ** 4.1,
    minScale: 2 ** -20.1,
    isHomeState: true,
  };
  let interactionInProgress = false;

  const viewHandler = {
    getDataView: () => viewState.get('dataView'),
    setDataView(dataView) {
      // Update isHomeState
      const { xAxisMin: xMin1, xAxisMax: xMax1, yAxisMin: yMin1, yAxisMax: yMax1 } = dataView;
      const { xAxisMin: xMin2, xAxisMax: xMax2, yAxisMin: yMin2, yAxisMax: yMax2 } = meta.homeStateDataView;
      const e = 1e-4;
      if (areIntervalsEqual(xMin1, xMax1, xMin2, xMax2, e) && areIntervalsEqual(yMin1, yMax1, yMin2, yMax2, e)) {
        meta.isHomeState = true;
      } else {
        meta.isHomeState = false;
      }
      extremumModel.command.updateExtrema(dataView, meta.isHomeState);
      meta.scale = (xMax1 - xMin1) / (xMax2 - xMin2);
      viewState.set('dataView', dataView);
    },

    getMeta: () => meta,

    setMeta(newMeta) {
      extend(true, meta, newMeta);
    },

    setInteractionInProgress: (newState) => {
      interactionInProgress = newState;
    },

    getInteractionInProgress: () => interactionInProgress,

    transform: () => {
      if (interactionInProgress) {
        const { deltaX, deltaY, scale } = viewHandler.getDataView();
        return {
          horizontalScaling: scale || 1,
          verticalScaling: scale || 1,
          horizontalSkewing: 0,
          verticalSkewing: 0,
          horizontalMoving: deltaX,
          verticalMoving: deltaY,
        };
      }
      return false;
    },
  };

  return viewHandler;
}
