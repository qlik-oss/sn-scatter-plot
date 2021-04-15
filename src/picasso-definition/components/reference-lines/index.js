import MODES from '../../../constants/modes';
import KEYS from '../../../constants/keys';
import createLines from './lines';
import createLabels from './labels';

export default function createReferenceLines({ models, context }) {
  const { layoutModel, dockModel } = models;
  const { theme, rtl, localeInfo } = context;
  const fontFamily = theme.getStyle('object', 'referenceLine.label.name', 'fontFamily');
  const fontSize = theme.getStyle('object', 'referenceLine.label.name', 'fontSize');
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
    createLabels({
      layoutModel,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_X,
      dock: dockModel.x.opposite,
      rtl,
      fontFamily,
      fontSize,
      localeInfo,
    }),
    createLabels({
      layoutModel,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_Y,
      dock: dockModel.y.opposite,
      rtl,
      fontFamily,
      fontSize,
      localeInfo,
    }),
  ];
}
