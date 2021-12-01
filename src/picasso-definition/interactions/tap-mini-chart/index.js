import getTapPosition from './get-tap-position';
import updateTapDataView from './update-tap-data-view';

const tap = ({ eventName = 'tap-mini-chart', viewHandler }) => ({
  key: 'event:tap-mini-chart',
  type: 'Tap',
  options: {
    event: eventName,
    interval: 10,
    pointers: 1,
    enable(r, e) {
      if (!e) {
        return true;
      }

      return getTapPosition({ e, chart: this.chart }) !== null;
    },
  },
  events: {
    [eventName](e) {
      e.preventDefault();
      updateTapDataView({ e, viewHandler, chart: this.chart });
    },
  },
});

export default tap;
