import { useConstraints, useState, useEffect } from '@nebula.js/stardust';

export default function useSelect() {
  const constraints = useConstraints();
  const [enabled, setEnabled] = useState(false);
  const [listeners, setListeners] = useState({});

  useEffect(
    () => () => {
      setListeners({});
    },
    []
  );

  useEffect(() => {
    if (!constraints) {
      return;
    }

    setEnabled(!constraints.select && !constraints.active);
  }, [constraints]);

  return {
    enabled: () => enabled,
    emit: (event, ...args) => listeners[event].forEach((listener) => listener(...args)),
    removeListener: (event, listener) => {
      const idx = listeners[event]?.indexOf(listener);
      if (idx > -1) {
        listeners[event].splice(idx, 1);
      }
    },
    on: (event, listener) => {
      if (Array.isArray(listeners[event])) {
        listeners[event].push(listener);
      } else {
        listeners[event] = [listener];
      }
    },
    getBrushOptions: () => ({ orMode: false }),
  };
}
