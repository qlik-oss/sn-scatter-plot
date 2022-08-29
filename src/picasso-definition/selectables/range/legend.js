import { range } from '../../../interactive';
import { updateLazySelectionOnEnd } from '../../../interactive/update-selection';

export default function createLegendRange({
  actions,
  selectionService,
  scales,
  legend,
  enableInteraction,
  layoutService,
  chartModel,
}) {
  const [legendComponent] = legend || [];

  if (!legendComponent) {
    return false;
  }

  const { type, key } = legendComponent;
  const { colorRange } = scales;

  if (
    selectionService.getIsDimensionLocked() ||
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
        updateLazySelectionOnEnd({ layoutService, chart: chartModel.query.getChart() });
      },
      enableInteraction,
    },
    {
      actions,
      layoutService,
      chartModel,
    }
  );
}
