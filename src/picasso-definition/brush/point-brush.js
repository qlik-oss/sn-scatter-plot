export default function createBrush({
  layoutService,
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
        context:
          layoutService.meta.isBigData || layoutService.meta.isLargeNumDataPoints ? 'lazySelection' : 'selection',
        mode: 'and',
        style: {
          inactive: {
            opacity: () => 0.3,
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
      activeNodes.sort((node1, node2) => node2.r - node1.r); // TODO: skip sorting if there is no measure for bubble size
      inactiveNodes.sort((node1, node2) => node2.r - node1.r);
      return inactiveNodes.concat(activeNodes);
    },
  };
}
