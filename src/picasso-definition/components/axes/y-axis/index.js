import KEYS from '../../../../constants/keys';
import MODES from '../../../../constants/modes';

export default function createYaxis({ layoutModel, dockModel, themeModel }) {
  const { yAxis: axis } = layoutModel.getLayout();

  if (!axis || axis.show === 'none') {
    return false;
  }

  const style = themeModel.query.getStyle();

  return {
    type: 'axis',
    key: KEYS.COMPONENT.Y_AXIS,
    scale: KEYS.SCALE.Y,
    layout: {
      dock: dockModel.y.dock,
      minimumLayoutMode: MODES.AXIS.Y,
    },
    settings: {
      labels: {
        show: axis.show !== 'title',
        fontFamily: style.axis.label.name.fontFamily,
        fontSize: style.axis.label.name.fontSize,
        fill: style.axis.label.name.color,
      },
      line: {
        stroke: style.axis.line.major.color,
      },
      ticks: {
        stroke: style.axis.line.major.color,
      },
      minorTicks: {
        stroke: style.axis.line.minor.color,
      },
      paddingEnd: 4,
    },
  };
}
