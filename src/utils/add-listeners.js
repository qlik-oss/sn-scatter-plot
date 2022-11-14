const addListeners = (emitter, listeners) => {
  if (!emitter) {
    return;
  }
  Object.keys(listeners).forEach((type) => {
    emitter.on(type, listeners[type]);
  });
};

export default addListeners;
