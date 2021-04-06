import KEYS from '../../../../constants/keys';

export default function createXAxisTitle({ layoutModel, dockModel, themeModel }) {
  const { xAxis: axis } = layoutModel.getLayout();

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
    key: 'x-axis-title',
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
}
