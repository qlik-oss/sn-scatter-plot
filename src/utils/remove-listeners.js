const removeListeners = (emitter, listeners) => {
  Object.keys(listeners).forEach((type) => {
    emitter.removeListener(type, listeners[type]);
  });
};

export default removeListeners;
