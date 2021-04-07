import KEYS from '../../../../constants/keys';

export default function createYAxisTitle({ layoutModel, dockModel, themeModel }) {
  const { yAxis: axis } = layoutModel.getLayout();

  if (!axis) {
    return false;
  }

  const { show } = axis;

  if (show !== 'all' && show !== 'title') {
    return false;
  }

  const style = themeModel.query.getStyle();

  return {
    type: 'text',
    key: 'y-axis-title',
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
}
