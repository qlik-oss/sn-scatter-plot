import { throttler as createThrottler } from 'qlik-chart-modules';
import KEYS from '../../constants/keys';
import zoom from '../../utils/math/zoom';

const threshold = 5;
const eventName = 'areaPan';
let lastScale = 0;

function isWithinThreshold(diff) {
  return Math.abs(diff) > 0.01;
}

const pan = ({ chart, actions, viewHandler }) => {
  const throttlerPanPintch = createThrottler((e, pointAreaPanned, event) => {
    // pinch zoom
    if (e.scale > 1.2 || e.scale < 0.8) {
      const diff = e.scale - lastScale;

      if (isWithinThreshold(diff)) {
        zoom(e, chart, pointAreaPanned, viewHandler, lastScale / e.scale);
        lastScale = e.scale;
      }
    }
    // Pan
    else {
      const { componentSize, xAxisMin, xAxisMax, yAxisMax, yAxisMin } = event;

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
  }, 250);

  return {
    type: 'Pan',
    key: 'panorama',
    options: {
      event: eventName,
      pointers: 0,
      threshold,
      enable(r, e) {
        if (this.started === eventName || !e) {
          return true;
        }

        if (!actions.zoom.enabled()) {
          return false;
        }

        [this.pointAreaPanned] = chart
          .componentsFromPoint({ x: e.center.x, y: e.center.y })
          .filter((c) => c.key === KEYS.COMPONENT.POINT);

        return this.pointAreaPanned;
      },
    },
    events: {
      areaPanstart(e) {
        e.preventDefault();
        lastScale = e.scale;
        this.started = eventName;
        const initialDataView = viewHandler.getDataView();
        this[eventName] = {
          componentSize: this.pointAreaPanned.rect,
          ...initialDataView,
        };
      },
      areaPanmove(e) {
        e.preventDefault();
        throttlerPanPintch(e, this.pointAreaPanned, this[eventName]);
      },
      areaPanend(e) {
        e.preventDefault();
        this.started = false;
      },
      areaPancancel(e) {
        e.preventDefault();
        this.started = false;
      },
    },
  };
};

export default pan;
