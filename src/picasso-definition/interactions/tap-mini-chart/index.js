import KEYS from '../../../constants/keys';
import updateDataView from './update-data-view';

const tap = ({ eventName = 'tap-mini-chart', viewHandler }) => {
  let targetComponents;
  return {
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

        targetComponents = this.chart.component(KEYS.COMPONENT.MINI_CHART_POINT);
        return !!targetComponents;
      },
    },
    events: {
      [eventName](e) {
        e.preventDefault();
        updateDataView({ e, viewHandler, chart: this.chart });
      },
    },
  };
};

export default tap;
