import { range } from '../../../interactive';
import { updateLazySelectionOnEnd } from '../../../interactive/update-selection';
import KEYS from '../../../constants/keys';

export default function createXRange({
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
      eventName: 'xRange',
      key: KEYS.BRUSH.X_RANGE,
      targets: [KEYS.COMPONENT.X_AXIS, KEYS.COMPONENT.POINT],
      fillTargets: [KEYS.COMPONENT.X_AXIS],
      dock: dockService.meta.x.dock,
      scale: KEYS.SCALE.X,
      onEdited() {
        actions.select.emit('end', 'xRange');
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
