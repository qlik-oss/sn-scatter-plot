import { range } from '../../../interactive';
import { updateLazySelectionOnEnd } from '../../../interactive/update-selection';

import KEYS from '../../../constants/keys';

export default function createYRange({
  actions,
  selectionService,
  dockService,
  enableInteraction,
  isRangeSelectionsSupported,
  layoutService,
  chartModel,
}) {
  if (selectionService.getIsDimensionLocked() || !isRangeSelectionsSupported) {
    return false;
  }

  return range(
    {
      eventName: 'yRange',
      key: KEYS.BRUSH.Y_RANGE,
      targets: [KEYS.COMPONENT.Y_AXIS, KEYS.COMPONENT.POINT],
      fillTargets: [KEYS.COMPONENT.Y_AXIS],
      dock: dockService.meta.y.dock,
      scale: KEYS.SCALE.Y,
      onEdited() {
        actions.select.emit('end', 'yRange');
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
