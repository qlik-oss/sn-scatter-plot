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

      // Navigation buttons are designed using icons
      return e.target.tagName === 'I';
    },
  },
  events: {
    [eventName]() {},
  },
});

export default tap;
