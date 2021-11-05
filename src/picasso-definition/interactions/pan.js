import KEYS from '../../constants/keys';

const threshold = 10;
const eventName = 'areaPan';
const updateDataView = ({ event, rect, viewHandler }) => {
  const { componentSize, xAxisMin, xAxisMax, yAxisMax, yAxisMin } = rect;

  const xDiff = (xAxisMax - xAxisMin) * (event.deltaX / componentSize.width);
  const yDiff = (yAxisMax - yAxisMin) * (event.deltaY / componentSize.height);

  const dataView = {
    xAxisMin: xAxisMin - xDiff,
    xAxisMax: xAxisMax - xDiff,
    yAxisMin: yAxisMin + yDiff,
    yAxisMax: yAxisMax + yDiff,
    deltaX: event.deltaX,
    deltaY: event.deltaY,
  };

  viewHandler.setDataView(dataView);
};

const pan = ({ chart, actions, viewHandler }) => ({
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

      if (!actions.zoom.enabled()) {
        return false;
      }

      [this.pointAreaPanned] = chart
        .componentsFromPoint({ x: e.center.x, y: e.center.y })
        .filter((c) => c.key === KEYS.COMPONENT.POINT || c.key === KEYS.COMPONENT.HEAT_MAP);

      return this.pointAreaPanned;
    },
  },
  events: {
    areaPanstart(e) {
      e.preventDefault();
      viewHandler.setInteractionInProgress(true);
      this.started = eventName;
      const initialDataView = viewHandler.getDataView();
      this[eventName] = {
        componentSize: this.pointAreaPanned.rect,
        ...initialDataView,
      };
    },
    areaPanmove(e) {
      e.preventDefault();
      updateDataView({ event: e, rect: this[eventName], viewHandler });
    },
    areaPanend(e) {
      e.preventDefault();
      viewHandler.setInteractionInProgress(false);
      updateDataView({ event: e, rect: this[eventName], viewHandler });
      this.started = false;
    },
    areaPancancel(e) {
      e.preventDefault();
      this.started = false;
    },
  },
});

export default pan;
