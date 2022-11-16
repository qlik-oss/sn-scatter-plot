/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';
import NUMBERS from '../../../constants/numbers';

export default function createAxes({ models, animationsEnabled }) {
  const { layoutService, dockService, themeService, chartModel } = models;
  const { xAxis, yAxis } = layoutService.getLayout();

  const style = themeService.getStyles();
  const viewHandler = chartModel.query.getViewHandler();
  const trackBy = (node, i) => {
    if (i === 0) {
      return 'axis';
    }
    if (node.type === 'text') {
      return `label: ${node.tickValue}`;
    }
    return `mark: ${node.tickValue}`;
  };

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
          animations: {
            enabled: animationsEnabled,
            trackBy,
            compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
              if (currentRect.width !== previousRect.width) {
                const deltaX = currentRect.x - previousRect.x;
                const deltaWidth = currentRect.width - previousRect.width;
                // "Spread" x following the currentRect to avoid the gaps at two ends
                currentNodes[0].x1 += deltaX;
                currentNodes[0].x2 += deltaX + deltaWidth;
              }
            },
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
            paddingEnd: () =>
              yAxis.show === 'title' || viewHandler.getMeta().isHomeState === false ? 0 : NUMBERS.AXIS.Y.PADDING.END,
          },
          animations: {
            enabled: animationsEnabled,
            trackBy,
            compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
              if (dockService.meta.y.dock === 'right') {
                return;
              }
              const deltaWidth = currentRect.width - previousRect.width;
              // Move y axis to avoid it being outside of the currentRect
              currentNodes.forEach((node) => {
                if (node.type === 'line') {
                  node.x1 += deltaWidth;
                  node.x2 += deltaWidth;
                  if (node.x1 === node.x2) {
                    node.y1 = currentRect.y;
                    node.y2 = node.y1 + currentRect.height;
                  }
                } else if (node.type === 'text') {
                  node.x += deltaWidth;
                }
              });
            },
          },
        };

  return [xAxisDefinition, yAxisDefinition];
}
