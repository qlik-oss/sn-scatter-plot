import KEYS from '../../constants/keys';
import { pinchZoom } from '../../utils/math/zoom';

const EVENT_NAME = 'zoom';

const state = {
  last: 0,
  diff: 0,
};

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

      [this.pointAreaPinched] = chart
        .componentsFromPoint({ x: e.center.x, y: e.center.y })
        .filter((c) => c.key === KEYS.COMPONENT.POINT);

      return this.pointAreaPinched;
    },
  },
  events: {
    zoomstart(e) {
      state.last = 1;
      e.preventDefault();
    },
    zoommove(e) {
      const diff = e.scale - state.last;

      if (isWithinThreshold(diff)) {
        pinchZoom({
          center: e.center,
          chart,
          newScale: e.scale / state.last,
          pointComponent: this.pointAreaPinched,
          viewHandler,
        });
        state.last = e.scale;
      }
      e.preventDefault();
    },
  },
});

export default pinch;
