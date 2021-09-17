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
      if (!e) {
        return true;
      }
      if (!actions.zoom.enabled()) {
        return false;
      }

      [this.pointAreaPinched] = chart
        .componentsFromPoint({ x: e.center.x, y: e.center.y })
        .filter((c) => c.key === KEYS.COMPONENT.POINT);

      return this.pointAreaPinched;
    },
  },
  events: {
    zoomstart(e) {
      lastScale = e.scale;
      e.preventDefault();
    },
    zoommove(e) {
      const diff = e.scale - lastScale;

      if (isWithinThreshold(diff)) {
        zoom(e, chart, this.pointAreaPinched, viewHandler, lastScale / e.scale);
        lastScale = e.scale;
      }

      e.preventDefault();
    },
  },
});

export default pinch;
