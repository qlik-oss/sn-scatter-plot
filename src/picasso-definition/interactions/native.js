import KEYS from '../../constants/keys';
import zoom from '../../view-handler/zoom';
import clearMinor from '../../utils/clear-minor';
import isInBinValueSelection from '../../utils/is-in-bin-value-selection';

export default function native({ chart, actions, viewHandler }) {
  function scrollLegend(e, comp) {
    // To make it the same as the old one, always scroll by item instead of pixel
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const dir = delta >= 0 ? 'next' : 'prev';
    comp.emit(dir);
  }
  let componentSize;
  let timer;

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  return {
    type: 'native',
    events: {
      wheel(e) {
        const point = { x: e.clientX, y: e.clientY };
        let target;

        if (isInBinValueSelection(chart)) {
          return;
        }

        if (actions.zoom.enabled()) {
          [target] = chart
            .componentsFromPoint(point)
            .filter((c) => c.key === KEYS.COMPONENT.POINT || c.key === KEYS.COMPONENT.HEAT_MAP);
          if (target) {
            clearMinor({ chart, actions });
            const rectSize = target.rect?.computedPhysical;
            if (rectSize?.height && rectSize?.width) {
              componentSize = { ...rectSize };
            }
            viewHandler.setInteractionInProgress(true);
            zoom({ e, chart, componentSize, viewHandler });
            e.preventDefault();
            if (timer) {
              clearTimer();
            }
            timer = setTimeout(() => {
              viewHandler.setInteractionInProgress(false);
              const dataView = viewHandler.getDataView();
              viewHandler.setDataView({
                xAxisMin: dataView.xAxisMin,
                xAxisMax: dataView.xAxisMax,
                yAxisMin: dataView.yAxisMin,
                yAxisMax: dataView.yAxisMax,
                deltaX: 0,
                deltaY: 0,
                scale: 1,
              });
              clearTimer();
            }, 100);
          }
        }
        if (actions.interact.enabled()) {
          [target] = chart.componentsFromPoint(point).filter((c) => c.key === KEYS.COMPONENT.LEGEND_CATEGORICAL);
          if (target) {
            scrollLegend(e, target);
            e.preventDefault();
          }
        }
      },
    },
  };
}
