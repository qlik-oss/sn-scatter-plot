import MODES from '../../../constants/modes';
import KEYS from '../../../constants/keys';
import createLines from './lines';
import createLabels from './labels';

export default function createReferenceLines({ context, layoutModel, dockModel }) {
  const { rtl } = context;
  const fontFamily = context.theme.getStyle('object', 'referenceLine.label.name', 'fontFamily');
  const fontSize = context.theme.getStyle('object', 'referenceLine.label.name', 'fontSize');
  return [
    createLines({
      layoutModel,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINES_X,
      minimumLayoutMode: MODES.REFERENCE_LINE,
    }),
    createLines({
      layoutModel,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINES_Y,
      minimumLayoutMode: MODES.REFERENCE_LINE,
    }),
    ...createLabels({
      layoutModel,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_X,
      dock: dockModel.x.opposite,
      rtl,
      fontFamily,
      fontSize,
    }),
    ...createLabels({
      layoutModel,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_Y,
      dock: dockModel.y.opposite,
      rtl,
      fontFamily,
      fontSize,
    }),
  ];
}
