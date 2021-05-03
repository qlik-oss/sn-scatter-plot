import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

export default function createAxes({ layoutService, dockModel, themeModel }) {
  const { xAxis, yAxis } = layoutService.getLayout();

  const style = themeModel.query.getStyle();

  const xAxisDefinition =
    !xAxis || xAxis.show === 'none'
      ? false
      : {
          type: 'axis',
          key: KEYS.COMPONENT.X_AXIS,
          scale: KEYS.SCALE.X,
          layout: {
            dock: dockModel.x.dock,
            minimumLayoutMode: MODES.AXIS.X,
          },
          settings: {
            labels: {
              show: xAxis.show !== 'title',
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

  const yAxisDefinition =
    !yAxis || yAxis.show === 'none'
      ? false
      : {
          type: 'axis',
          key: KEYS.COMPONENT.Y_AXIS,
          scale: KEYS.SCALE.Y,
          layout: {
            dock: dockModel.y.dock,
            minimumLayoutMode: MODES.AXIS.Y,
          },
          settings: {
            labels: {
              show: yAxis.show !== 'title',
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
          },
        };

  return [xAxisDefinition, yAxisDefinition];
}
