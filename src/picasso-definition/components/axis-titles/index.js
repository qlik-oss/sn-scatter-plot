import KEYS from '../../../constants/keys';

export default function createAxisTitles({ layoutService, dockService, themeService }) {
  const { xAxis, yAxis } = layoutService.getLayout();

  const style = themeService.getStyles();

  const xAxisTitleDef =
    !xAxis || (xAxis.show !== 'all' && xAxis.show !== 'title')
      ? false
      : {
          type: 'text',
          key: KEYS.COMPONENT.X_AXIS_TITLE,
          text: layoutService.getHyperCubeValue(`${KEYS.FIELDS.X.replace(/\//g, '.')}.qFallbackTitle`),
          dock: dockService.meta.x.dock,
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
          dock: dockService.meta.y.dock,
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
