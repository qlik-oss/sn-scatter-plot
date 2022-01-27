const tap = ({ eventName = 'tap-button' }) => ({
  key: 'event:tap-button',
  type: 'Tap',
  options: {
    event: eventName,
    interval: 10,
    pointers: 1,
    enable(r, e) {
      if (!e) {
        return true;
      }

      // Buttons are designed using icons
      return e.target.tagName === 'I';
    },
  },
  events: {
    [eventName]() {},
  },
});

export default tap;
