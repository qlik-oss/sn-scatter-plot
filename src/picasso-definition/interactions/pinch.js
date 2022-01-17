import KEYS from '../../constants/keys';
import zoom from '../../view-handler/zoom';
import clearMinor from './clear-minor';

const EVENT_NAME = 'zoom';

let lastScale = 0;

function isWithinThreshold(diff) {
  return Math.abs(diff) > 0.01;
}

const pinch = ({ chart, actions, viewHandler, rtl }) => ({
  type: 'Pinch',
  key: 'pinchZoom',
  options: {
    event: EVENT_NAME,
    pointers: 2,
    threshold: 0,
    enable(r, e) {
      if (this.started === EVENT_NAME || !e) {
        return true;
      }
      if (!actions.zoom.enabled()) {
        return false;
      }

      [this.pointArea] = chart
        .componentsFromPoint({ x: e.center.x, y: e.center.y })
        .filter((c) => c.key === KEYS.COMPONENT.POINT || c.key === KEYS.COMPONENT.HEAT_MAP);

      return this.pointArea;
    },
  },
  events: {
    zoomstart(e) {
      clearMinor({ chart, actions });
      e.preventDefault();
      lastScale = e.scale;
      this.started = EVENT_NAME;
      const initialDataView = viewHandler.getDataView();
      this[EVENT_NAME] = {
        componentSize: this.pointArea.rect,
        ...initialDataView,
      };
    },
    zoommove(e) {
      e.preventDefault();
      // Pinch zoom
      if (e.scale > 1.1 || e.scale < 0.9) {
        const diff = e.scale - lastScale;

        if (isWithinThreshold(diff)) {
          zoom({
            e,
            chart,
            pointComponent: this.pointArea,
            viewHandler,
            pinchZoomFactor: lastScale / e.scale,
          });
          lastScale = e.scale;
        }
      }
      // Pan
      else {
        const { componentSize, xAxisMin, xAxisMax, yAxisMax, yAxisMin } = this[EVENT_NAME];

        const xDiff = (xAxisMax - xAxisMin) * (e.deltaX / componentSize.width);
        const yDiff = (yAxisMax - yAxisMin) * (e.deltaY / componentSize.height);

        const dataView = {
          xAxisMin: rtl ? xAxisMin + xDiff : xAxisMin - xDiff,
          xAxisMax: rtl ? xAxisMax + xDiff : xAxisMax - xDiff,
          yAxisMin: yAxisMin + yDiff,
          yAxisMax: yAxisMax + yDiff,
        };

        viewHandler.setDataView(dataView);
      }
    },
    zoomend(e) {
      e.preventDefault();
      this.started = false;
    },
    zoomcancel(e) {
      e.preventDefault();
      this.started = false;
    },
  },
});

export default pinch;
