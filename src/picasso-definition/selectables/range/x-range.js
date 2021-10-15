import { range } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createXRange({ actions, selectionService, dockService }) {
  if (selectionService.getIsDimensionLocked()) {
    return false;
  }

  return range(
    {
      eventName: 'xRange',
      key: 'x-range-brush',
      targets: [KEYS.COMPONENT.X_AXIS, KEYS.COMPONENT.POINT, KEYS.COMPONENT.HEAT_MAP],
      fillTargets: [KEYS.COMPONENT.X_AXIS],
      dock: dockService.meta.x.dock,
      scale: KEYS.SCALE.X,
      onEdited() {
        actions.select.emit('end', 'xRange');
      },
    },
    {
      actions,
    }
  );
}
