export default function createBrush() {
  const data = ({ brush }) => {
    const res = brush.brushes();
    return res.length > 1 ? ['x', 'y'] : undefined;
  };
  return {
    consume: [
      {
        data,
        context: 'selection',
        mode: 'and',
        style: {
          inactive: {
            opacity: 0.3,
          },
          active: {
            stroke: '#000',
            strokeWidth: 2,
          },
        },
      },
    ],
    sortNodes: ({ nodes, config }) => {
      const activeOpacity = config.consume[0]?.style?.active?.opacity || 1;
      const activeNodes = nodes.filter((node) => node.opacity === activeOpacity);
      const inactiveNodes = nodes.filter((node) => node.opacity !== activeOpacity);
      activeNodes.sort((node1, node2) => node2.r - node1.r);
      inactiveNodes.sort((node1, node2) => node2.r - node1.r);
      return inactiveNodes.concat(activeNodes);
    },
  };
}
