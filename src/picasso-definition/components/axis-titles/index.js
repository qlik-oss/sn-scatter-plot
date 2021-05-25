import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

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
          layout: {
            dock: dockService.meta.x.dock,
            minimumLayoutMode: MODES.AXIS_TITLE.X,
          },
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
          layout: {
            dock: dockService.meta.y.dock,
            minimumLayoutMode: MODES.AXIS_TITLE.Y,
          },
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
