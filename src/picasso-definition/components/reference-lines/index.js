import createLines from './lines/lines';
import MODES from '../../../constants/modes';
import KEYS from '../../../constants/keys';

export default function createReferenceLines({ layoutModel }) {
  //   const mainColorModel = colorModel.main.model();
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
    // ...createLabels({
    //   isDimension: true,
    //   refLineModel,
    //   layoutModel,
    //   colorModel: mainColorModel,
    //   dock: dockModel.major.opposite,
    //   scale: KEYS.SCALE.MAIN.MAJOR,
    //   style,
    //   theme,
    //   localeInfo,
    //   rtl,
    //   key: KEYS.COMPONENT.DIMENSION_REF_LINE_LABEL,
    // }),
  ];
}
