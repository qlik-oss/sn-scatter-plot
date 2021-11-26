import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

export default function createYAxisTitle({
  model,
  app,
  translator,
  constraints,
  rtl,
  layoutService,
  dockService,
  themeService,
  propertiesModel,
}) {
  const { yAxis } = layoutService.getLayout();

  if (!yAxis) {
    return false;
  }

  const { show } = yAxis;

  if (show !== 'all' && show !== 'title') {
    return false;
  }

  const styles = themeService.getStyles();
  const properties = propertiesModel.query.getProperties();
  const yAxisInfo = layoutService.getHyperCubeValue('qMeasureInfo.1');

  const definition = {
    type: 'data-title',
    key: KEYS.COMPONENT.Y_AXIS_TITLE,
    layout: {
      dock: dockService.meta.y.dock,
      minimumLayoutMode: MODES.AXIS_TITLE.Y,
    },
    settings: {
      hyperCube: layoutService.getHyperCube(),
      hyperCubeDef: properties && properties.qHyperCubeDef,
      isDimension: false,
      explicitItemInfos: [{ ...yAxisInfo, explicitColumn: 1 }],
      disabled: () => constraints.active || !model,
      model,
      app,
      translator,
      rtl,
      selections: undefined,
    },
    style: {
      fontFamily: styles.axis.title.fontFamily,
      fontSize: styles.axis.title.fontSize,
      color: styles.axis.title.color,
    },
  };

  return definition;
}
