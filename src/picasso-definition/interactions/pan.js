import KEYS from '../../constants/keys';
import NUMBERS from '../../constants/numbers';
import getTapPosition from './tap-mini-chart/tap-position';
import updateTapDataView from './tap-mini-chart/update-tap-data-view';
import clearMinor from '../../utils/clear-minor';
import isInBinValueSelection from '../../utils/is-in-bin-value-selection';

const threshold = 10;
const eventName = 'areaPan';
let lastRectSize;

const updateDataView = ({ event, props, viewHandler, rtl }) => {
  const { componentSize, xAxisMin, xAxisMax, yAxisMax, yAxisMin, miniChart } = props;

  let xDiff = (xAxisMax - xAxisMin) * (event.deltaX / componentSize.width);
  let yDiff = (yAxisMax - yAxisMin) * (event.deltaY / componentSize.height);
  let { deltaX, deltaY } = event;
  if (miniChart.panInMiniChart) {
    const { navWindowScale } = miniChart;
    xDiff /= -navWindowScale;
    yDiff /= -navWindowScale;
    deltaX /= -navWindowScale;
    deltaY /= -navWindowScale;
  }
  const dataView = {
    xAxisMin: rtl ? xAxisMin + xDiff : xAxisMin - xDiff,
    xAxisMax: rtl ? xAxisMax + xDiff : xAxisMax - xDiff,
    yAxisMin: yAxisMin + yDiff,
    yAxisMax: yAxisMax + yDiff,
    deltaX,
    deltaY,
  };

  viewHandler.setDataView(dataView);
};

const pan = ({ chart, actions, viewHandler, rtl }) => ({
  type: 'Pan',
  key: 'panorama',
  options: {
    event: eventName,
    pointers: 1,
    threshold,
    enable(r, e) {
      if (this.started === eventName || !e) {
        return true;
      }

      const isInLassoMode = actions.lasso.enabled() && actions.lasso.active();
      if (actions.getProgressive() && isInLassoMode) {
        return false;
      }

      if (!actions.zoom.enabled()) {
        return false;
      }

      if (isInBinValueSelection(chart)) {
        return false;
      }

      this.area = chart
        .componentsFromPoint({ x: e.center.x, y: e.center.y })
        .filter((c) => c.key === KEYS.COMPONENT.POINT || c.key === KEYS.COMPONENT.HEAT_MAP);

      if (!this.area.length) {
        return false;
      }

      const rectSize = this.area[0]?.rect?.computedPhysical;

      if (rectSize?.height && rectSize?.width) {
        lastRectSize = { ...rectSize };
      }
      this.componentSize = lastRectSize;

      return true;
    },
  },
  events: {
    areaPanstart(e) {
      clearMinor({ chart, actions });
      e.preventDefault();
      viewHandler.setInteractionInProgress(true);
      this.started = eventName;

      // Check if the pointer is inside the mini chart
      let panInMiniChart = false;
      if (getTapPosition({ e, chart, rtl }) !== null) {
        updateTapDataView({ e, chart, viewHandler, rtl });
        panInMiniChart = true;
      }

      const { scale } = viewHandler.getMeta();
      const navWindowScale = scale * NUMBERS.MINI_CHART.RATIO;
      const initialDataView = viewHandler.getDataView();
      this[eventName] = {
        componentSize: this.componentSize,
        ...initialDataView,
        miniChart: { panInMiniChart, navWindowScale },
      };
    },
    areaPanmove(e) {
      if (!this.started) return;
      e.preventDefault();
      updateDataView({ event: e, props: this[eventName], viewHandler, rtl });
    },
    areaPanend(e) {
      if (!this.started) return;
      e.preventDefault();
      viewHandler.setInteractionInProgress(false);
      updateDataView({ event: e, props: this[eventName], viewHandler, rtl });
      this.started = false;
    },
    areaPancancel(e) {
      e.preventDefault();
      this.started = false;
    },
  },
});

export default pan;
