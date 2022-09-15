import getSelectionContext from './get-selection-context';
import isProgressiveAllowed from '../../utils/is-progressive-allowed';
import { computeWidth, computeColor } from './border-width-color';

const INACTIVE_OPACITY = 0.3;

export default function createBrush({ layoutService, chartModel }) {
  const data = ({ brush }) => {
    const res = brush.brushes();
    return res.length > 1 ? ['x', 'y'] : undefined;
  };

  // For zoom/pan:
  // (1) from bin data to point data, or
  // (2) from large number data points to its subset
  const strokeWidthFn = (node, activeNodes) => computeWidth(activeNodes.length);
  const strokeColorFn = (node, activeNodes) => computeColor(activeNodes.length);

  const getStrokeWidth = () =>
    layoutService.meta.isBigData || layoutService.meta.isLargeNumDataPoints ? strokeWidthFn : 2;

  const getStrokeColor = () =>
    layoutService.meta.isBigData || layoutService.meta.isLargeNumDataPoints ? strokeColorFn : '#000';

  return {
    consume: [
      {
        data,
        context: getSelectionContext(layoutService),
        mode: 'and',
        style: {
          inactive: {
            opacity: INACTIVE_OPACITY,
          },
          active: {
            stroke: getStrokeColor(),
            strokeWidth: getStrokeWidth(),
          },
        },
      },
    ],
    sortNodes: ({ nodes, config }) => {
      const activeOpacity = config.consume[0]?.style?.active?.opacity || 1;
      const activeNodes = nodes.filter((node) => node.opacity === activeOpacity);
      const inactiveNodes = nodes.filter((node) => node.opacity !== activeOpacity);
      if (layoutService.meta.hasSizeMeasure) {
        activeNodes.sort((node1, node2) => node2.r - node1.r);
        inactiveNodes.sort((node1, node2) => node2.r - node1.r);
      }
      return inactiveNodes.concat(activeNodes);
    },
    customRender: !layoutService.meta.isMaxVisibleBubblesEnabled
      ? undefined
      : ({ render, nodes }) => {
          if (isProgressiveAllowed(layoutService)) {
            chartModel.command.brush({ render, nodes });
          } else {
            render(nodes);
          }
        },
  };
}
