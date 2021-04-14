import { range } from '../../../interactive';

export default function createLegendRange({ actions, selectionModel, scales, legend }) {
  const [legendComponent] = legend || [];

  if (!legendComponent) {
    return false;
  }

  const { type, key } = legendComponent;
  const { colorRange } = scales;

  if (
    selectionModel.query.getIsDimensionLocked() ||
    type !== 'legend-seq' ||
    !colorRange ||
    colorRange.min >= colorRange.max
  ) {
    return false;
  }

  return range(
    {
      eventName: 'legendRange',
      key: 'legend-range-brush',
      targets: [key],
      fillTargets: [key],
      targetSelector: '[id="legend-seq-target"]',
      targetFillSelector: '[id="legend-seq-ticks"]',
      dock: legendComponent.layout.dock,
      scale: 'colorRange',
      bubblesPlacement: 'outside',
      onEdited: () => {
        actions.select.emit('end', 'legendRange');
      },
    },
    {
      actions,
    }
  );
}
