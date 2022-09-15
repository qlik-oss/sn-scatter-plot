import getSelectionContext from './get-selection-context';
import isProgressiveAllowed from '../../utils/is-progressive-allowed';

const INACTIVE_OPACITY = 0.3;

export default function createBrush({
  layoutService,
  chartModel,
  strokeWidthInBigData,
  strokeColorInBigData,
  strokeWidthInLargeData,
  strokeColorInLargeData,
}) {
  const data = ({ brush }) => {
    const res = brush.brushes();
    return res.length > 1 ? ['x', 'y'] : undefined;
  };

  const getStrokeWidth = () => {
    if (layoutService.meta.isBigData) {
      return strokeWidthInBigData;
    }
    if (layoutService.meta.isLargeNumDataPoints) {
      return strokeWidthInLargeData;
    }
    return 2;
  };

  const getStrokeColor = () => {
    if (layoutService.meta.isBigData) {
      return strokeColorInBigData;
    }
    if (layoutService.meta.isLargeNumDataPoints) {
      return strokeColorInLargeData;
    }
    return '#000';
  };

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
    customRender: ({ render, nodes }) => {
      const activeNodes = nodes.filter((node) => node.opacity !== INACTIVE_OPACITY);
      if (!activeNodes.length) return;
      if (isProgressiveAllowed(layoutService)) {
        chartModel.command.brush({ render, nodes });
      } else {
        render(nodes);
      }
    },
  };
}
