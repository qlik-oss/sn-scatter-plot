import KEYS from '../../constants/keys';

const EVENT_NAME = 'zoom';

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
      console.log('start');
      e.preventDefault();
      this.started = EVENT_NAME;
      const initialDataView = viewHandler.getDataView();
      this[EVENT_NAME] = {
        componentSize: this.pointAreaPinched.rect,
        ...initialDataView,
      };
    },
    zoommove(e) {
      console.log('move');
      e.preventDefault();
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
