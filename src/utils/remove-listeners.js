const removeListeners = (emitter, listeners) => {
  if (!emitter) {
    return;
  }
  Object.keys(listeners).forEach((type) => {
    emitter.removeListener(type, listeners[type]);
  });
};

export default removeListeners;
