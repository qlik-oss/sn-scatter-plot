import MODES from '../../../constants/modes';
import KEYS from '../../../constants/keys';
import createLines from './lines';
import createLabels from './labels';

export default function createReferenceLines({ models, context }) {
  const { layoutService, dockModel, themeService } = models;
  const { rtl, localeInfo } = context;
  const themeStyle = themeService.getStyles();

  return [
    createLines({
      layoutService,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINES_X,
      minimumLayoutMode: MODES.REFERENCE_LINE,
    }),
    createLines({
      layoutService,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINES_Y,
      minimumLayoutMode: MODES.REFERENCE_LINE,
    }),
    createLabels({
      layoutService,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_X,
      dock: dockModel.x.opposite,
      rtl,
      themeStyle,
      localeInfo,
    }),
    createLabels({
      layoutService,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_Y,
      dock: dockModel.y.opposite,
      rtl,
      themeStyle,
      localeInfo,
    }),
  ];
}
