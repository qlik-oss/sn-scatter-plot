import KEYS from '../../../constants/keys';

export default function createAxisTitles({ layoutService, dockModel, themeModel }) {
  const { xAxis, yAxis } = layoutService.getLayout();

  const style = themeModel.query.getStyle();

  const xAxisTitleDef =
    !xAxis || (xAxis.show !== 'all' && xAxis.show !== 'title')
      ? false
      : {
          type: 'text',
          key: KEYS.COMPONENT.X_AXIS_TITLE,
          text: layoutService.getHyperCubeValue(`${KEYS.FIELDS.X.replace(/\//g, '.')}.qFallbackTitle`),
          dock: dockModel.x.dock,
          style: {
            text: {
              fontFamily: style.axis.title.fontFamily,
              fontSize: style.axis.title.fontSize,
              fill: style.axis.title.color,
            },
          },
        };

  const yAxisTitleDef =
    !yAxis || (yAxis.show !== 'all' && yAxis.show !== 'title')
      ? false
      : {
          type: 'text',
          key: KEYS.COMPONENT.Y_AXIS_TITLE,
          text: layoutService.getHyperCubeValue(`${KEYS.FIELDS.Y.replace(/\//g, '.')}.qFallbackTitle`),
          dock: dockModel.y.dock,
          style: {
            text: {
              fontFamily: style.axis.title.fontFamily,
              fontSize: style.axis.title.fontSize,
              fill: style.axis.title.color,
            },
          },
        };

  return [xAxisTitleDef, yAxisTitleDef];
}
