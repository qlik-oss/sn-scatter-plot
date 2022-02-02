import getTapPosition from './tap-position';
import updateTapDataView from './update-tap-data-view';

const tap = ({ eventName = 'tap-mini-chart', viewHandler, rtl }) => ({
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

      return getTapPosition({ e, chart: this.chart, rtl }) !== null;
    },
  },
  events: {
    [eventName](e) {
      e.preventDefault();
      updateTapDataView({ e, viewHandler, chart: this.chart, rtl });
    },
  },
});

export default tap;
