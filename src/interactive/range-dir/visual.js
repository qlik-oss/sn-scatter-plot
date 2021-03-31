export default function rangeDirBrush(config) {
  const { key, targets, components, fillTargets, dock } = config;

  return {
    key,
    type: 'brush-area-dir',
    layout: {
      dock: targets.map((t) => `@${t}`).join(','),
    },
    settings: {
      multiple: true,
      brush: {
        components,
      },
      direction: dock === 'left' || dock === 'right' ? 'vertical' : 'horizontal',
      bubbles: {
        align: dock === 'left' || dock === 'top' ? 'end' : 'start',
        placement: 'inside',
      },
      target: {
        components: fillTargets,
        fill: 'rgba(82,204,82,0.2)',
      },
    },
  };
}
