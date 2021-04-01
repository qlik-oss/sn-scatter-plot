export default function rangeBrush(config) {
  const {
    key,
    targets,
    fillTargets,
    targetSelector,
    targetFillSelector,
    dock,
    scale,
    bubblesPlacement = 'inside',
    observeBrush = false,
    multiple = false,
    toLabel,
    onEdited,
  } = config;

  return {
    key,
    type: 'brush-range',
    layout: {
      dock: targets.map((t) => `@${t}`).join(','),
    },
    on: onEdited
      ? {
          bubbleEnd() {
            onEdited();
          },
        }
      : {},
    settings: {
      brush: observeBrush
        ? {
            context: 'selection',
            observe: true,
          }
        : 'selection',
      scale,
      multiple,
      direction: dock === 'left' || dock === 'right' ? 'vertical' : 'horizontal',
      bubbles: {
        align: dock === 'left' || dock === 'top' ? 'end' : 'start',
        placement: bubblesPlacement,
        label: toLabel,
      },
      target: {
        components: fillTargets,
        selector: targetSelector,
        fillSelector: targetFillSelector,
        fill: 'rgba(82,204,82,0.2)',
      },
    },
  };
}
