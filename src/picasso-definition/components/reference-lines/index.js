import MODES from '../../../constants/modes';
import KEYS from '../../../constants/keys';
import createLines from './lines';
import createLabels from './labels';

export default function createReferenceLines({ models, context }) {
  const { layoutService, dockService, chartModel } = models;

  return [
    createLines({
      layoutService,
      chartModel,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINES_X,
      minimumLayoutMode: MODES.REFERENCE_LINES,
    }),
    createLines({
      layoutService,
      chartModel,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINES_Y,
      minimumLayoutMode: MODES.REFERENCE_LINES,
    }),
    createLabels({
      models,
      context,
      scale: KEYS.SCALE.X,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_X,
      dock: dockService.meta.x.opposite,
      minimumLayoutMode: MODES.REFERENCE_LINE_LABELS,
    }),
    createLabels({
      models,
      context,
      scale: KEYS.SCALE.Y,
      key: KEYS.COMPONENT.REFERENCE_LINE_LABELS_Y,
      dock: dockService.meta.y.opposite,
      minimumLayoutMode: MODES.REFERENCE_LINE_LABELS,
    }),
  ];
}
