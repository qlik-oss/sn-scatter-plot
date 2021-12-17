import { range } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createYRange({
  actions,
  selectionService,
  dockService,
  chart,
  enableInteraction,
  viewHandler,
}) {
  if (selectionService.getIsDimensionLocked()) {
    return false;
  }

  return range(
    {
      eventName: 'binYRange',
      key: 'bin-y-range-brush',
      targets: [KEYS.COMPONENT.Y_AXIS, KEYS.COMPONENT.HEAT_MAP],
      fillTargets: [KEYS.COMPONENT.Y_AXIS],
      dock: dockService.meta.y.dock,
      scale: KEYS.SCALE.BIN_Y,
      onEdited() {
        actions.select.emit('end', 'binYRange');
      },
      toLabel({ datum }) {
        const formatter = chart.formatter(KEYS.FORMATTER.Y);
        return formatter(datum);
      },
      enableInteraction,
      viewHandler,
    },
    {
      actions,
    }
  );
}
