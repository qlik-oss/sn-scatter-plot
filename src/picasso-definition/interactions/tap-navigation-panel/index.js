import KEYS from '../../../constants/keys';

const tap = ({ eventName = 'tap-navigation-panel' }) => ({
  key: 'event:tap-navigation-panel',
  type: 'Tap',
  options: {
    event: eventName,
    interval: 10,
    pointers: 1,
    enable(r, e) {
      if (!e) {
        return true;
      }

      // Coordinate of the clicked spot, relative to the point component
      const bounds = this.chart.element.getBoundingClientRect();
      const X0 = e.center.x - bounds.left;
      const Y0 = e.center.y - bounds.top;
      return !!this.chart.component(KEYS.COMPONENT.NAVIGATION_PANEL) && X0 > 200 && Y0 < 300;
    },
  },
  events: {
    [eventName](e) {
      e.preventDefault();
    },
  },
});

export default tap;
