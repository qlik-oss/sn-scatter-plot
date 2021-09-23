import KEYS from '../../constants/keys';
import zoom from '../../utils/math/zoom';

const EVENT_NAME = 'zoom';

let lastScale = 0;

function isWithinThreshold(diff) {
  return Math.abs(diff) > 0.01;
}

const pinch = ({ chart, actions, viewHandler }) => ({
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
        .filter((c) => c.key === KEYS.COMPONENT.POINT);

      return this.pointArea;
    },
  },
  events: {
    zoomstart(e) {
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
      if (e.scale > 1.2 || e.scale < 0.8) {
        const diff = e.scale - lastScale;

        if (isWithinThreshold(diff)) {
          zoom(e, chart, this.pointArea, viewHandler, lastScale / e.scale);
          lastScale = e.scale;
        }
      }
      // Pan
      else {
        const { componentSize, xAxisMin, xAxisMax, yAxisMax, yAxisMin } = this[EVENT_NAME];

        const xDiff = (xAxisMax - xAxisMin) * (e.deltaX / componentSize.width);
        const yDiff = (yAxisMax - yAxisMin) * (e.deltaY / componentSize.height);

        const dataView = {
          xAxisMin: xAxisMin - xDiff,
          xAxisMax: xAxisMax - xDiff,
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
