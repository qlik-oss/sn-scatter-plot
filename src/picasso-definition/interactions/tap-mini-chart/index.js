import KEYS from '../../../constants/keys';
import tapInMiniChart from './tap-in-mini-chart';

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
        tapInMiniChart({ e, viewHandler, chart: this.chart });
      },
    },
  };
};

export default tap;
