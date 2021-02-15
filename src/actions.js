export default function useActions(constraints) {
  const actions = {
    zoom: {
      enabled: () => !constraints.active,
    },
    interact: {
      enabled: () => !constraints.active,
    },
    tooltip: {
      enabled: () => !constraints.passive,
    },
  };

  return actions;
}
