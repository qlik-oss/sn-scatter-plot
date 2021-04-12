import KEYS from '../../../constants/keys';

export default function createAxisTitles({ layoutModel, dockModel, themeModel }) {
  const { xAxis, yAxis } = layoutModel.getLayout();

  const style = themeModel.query.getStyle();

  const xAxisTitleDef =
    !xAxis || (xAxis.show !== 'all' && xAxis.show !== 'title')
      ? false
      : {
          type: 'text',
          key: 'x-axis-title',
          show: xAxis && (xAxis.show === 'all' || xAxis.show === 'title'),
          text: layoutModel.getHyperCubeValue(`${KEYS.FIELDS.X.replace(/\//g, '.')}.qFallbackTitle`),
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
          key: 'y-axis-title',
          show: yAxis && (yAxis.show === 'all' || yAxis.show === 'title'),
          text: layoutModel.getHyperCubeValue(`${KEYS.FIELDS.Y.replace(/\//g, '.')}.qFallbackTitle`),
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
