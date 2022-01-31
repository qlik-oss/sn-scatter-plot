import { range } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createXRange({ chart, actions, selectionService, dockService, enableInteraction }) {
  if (selectionService.getIsDimensionLocked()) {
    return false;
  }

  return range(
    {
      eventName: 'binXRange',
      key: KEYS.BRUSH.BIN_X_RANGE,
      targets: [KEYS.COMPONENT.X_AXIS, KEYS.COMPONENT.HEAT_MAP],
      fillTargets: [KEYS.COMPONENT.X_AXIS],
      dock: dockService.meta.x.dock,
      scale: KEYS.SCALE.BIN_X,
      onEdited() {
        actions.select.emit('end', 'binXRange');
      },
      toLabel({ datum }) {
        const formatter = chart.formatter(KEYS.FORMATTER.X);
        return formatter(datum);
      },
      enableInteraction,
    },
    {
      actions,
    }
  );
}
