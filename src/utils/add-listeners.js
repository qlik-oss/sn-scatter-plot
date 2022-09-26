const addListeners = (emitter, listeners) => {
  Object.keys(listeners).forEach((type) => {
    emitter.on(type, listeners[type]);
  });
};

export default addListeners;
