import { range } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createYRange({ actions, selectionService, dockService }) {
  if (selectionService.getIsDimensionLocked()) {
    return false;
  }

  return range(
    {
      eventName: 'yRange',
      key: 'y-range-brush',
      targets: [KEYS.COMPONENT.Y_AXIS, KEYS.COMPONENT.POINT, KEYS.COMPONENT.HEAT_MAP],
      fillTargets: [KEYS.COMPONENT.Y_AXIS],
      dock: dockService.meta.y.dock,
      scale: KEYS.SCALE.Y,
      onEdited() {
        actions.select.emit('end', 'yRange');
      },
    },
    {
      actions,
    }
  );
}
