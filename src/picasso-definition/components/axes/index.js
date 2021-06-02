import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';
import NUMBERS from '../../../constants/numbers';

export default function createAxes({ models, flags }) {
  const { layoutService, dockService, themeService, chartModel } = models;
  const { xAxis, yAxis } = layoutService.getLayout();
  const enabledPanZoom = flags.isEnabled('panZoom');

  const style = themeService.getStyles();
  const viewHandler = chartModel.query.getViewHandler();

  const xAxisDefinition =
    !xAxis || xAxis.show === 'none'
      ? false
      : {
          type: 'axis',
          key: KEYS.COMPONENT.X_AXIS,
          scale: KEYS.SCALE.X,
          layout: {
            dock: dockService.meta.x.dock,
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
            paddingEnd: NUMBERS.AXIS.X.PADDING.END,
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
            dock: dockService.meta.y.dock,
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
              show: yAxis.show !== 'title',
            },
            minorTicks: {
              stroke: style.axis.line.minor.color,
            },
            paddingEnd: !enabledPanZoom
              ? undefined
              : () =>
                  yAxis.show === 'title' || viewHandler.getMeta().isHomeState === false
                    ? 0
                    : NUMBERS.AXIS.Y.PADDING.END,
          },
        };

  return [xAxisDefinition, yAxisDefinition];
}
