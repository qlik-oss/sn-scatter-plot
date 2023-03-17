import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

export default function createXAxisTitle({
  model,
  app,
  translator,
  constraints,
  rtl,
  layoutService,
  dockService,
  styleModel,
  propertiesModel,
}) {
  const { xAxis } = layoutService.getLayout();

  if (!xAxis) {
    return false;
  }

  const { show } = xAxis;

  if (show !== 'all' && show !== 'title') {
    return false;
  }

  const titleStyle = styleModel.query.axis.title.getStyle();
  const properties = propertiesModel.query.getProperties();
  const xAxisInfo = layoutService.getHyperCubeValue('qMeasureInfo.0');

  const definition = {
    type: 'data-title',
    key: KEYS.COMPONENT.X_AXIS_TITLE,
    layout: {
      dock: dockService.meta.x.dock,
      minimumLayoutMode: MODES.AXIS_TITLE.X,
    },
    settings: {
      hyperCube: layoutService.getHyperCube(),
      hyperCubeDef: properties && properties.qHyperCubeDef,
      isDimension: false,
      explicitItemInfos: [{ ...xAxisInfo, explicitColumn: 0 }],
      disabled: () => constraints.active || !model,
      model,
      app,
      translator,
      rtl,
      selections: undefined,
    },
    style: {
      fontFamily: titleStyle.fontFamily,
      fontSize: titleStyle.fontSize,
      color: titleStyle.color,
    },
  };

  return definition;
}
