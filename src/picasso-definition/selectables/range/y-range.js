import { range } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createYRange({ actions, selectionModel, dockModel }) {
  if (selectionModel.query.getIsDimensionLocked()) {
    return false;
  }

  return range(
    {
      eventName: 'yRange',
      key: 'y-range-brush',
      targets: [KEYS.COMPONENT.Y_AXIS, KEYS.COMPONENT.POINT],
      fillTargets: [KEYS.COMPONENT.Y_AXIS],
      dock: dockModel.y.dock,
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
