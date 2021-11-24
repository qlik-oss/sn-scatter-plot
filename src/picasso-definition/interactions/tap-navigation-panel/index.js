import KEYS from '../../../constants/keys';

const tap = ({ eventName = 'tap-navigation-panel', viewHandler }) => ({
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

      const { x, y } = this.chart.component(KEYS.COMPONENT.POINT).rect.computedPhysical;

      // Coordinate of the clicked spot, relative to the point component
      const X0 = e.pointers[0].offsetX - x - e.deltaX; // deltaX, deltaY !== 0 in case of panning
      const Y0 = e.pointers[0].offsetY - y - e.deltaY; // detalX, deltaY === 0 in case of tapping
      return !!this.chart.component(KEYS.COMPONENT.NAVIGATION_PANEL) && X0 > 200 && Y0 < 300;
    },
  },
  events: {
    [eventName](e) {
      e.preventDefault();
      // tapInNavigationPanel({ e, viewHandler, chart: this.chart });
      viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
    },
  },
});

export default tap;
