const getPointNodes = (chart) => [...chart.findShapes('circle'), ...chart.findShapes('path')];

const getPointNodesWithKey = (chart, key) => {
  const nodeFilter = (node) => node.key === key;
  const nodes = [...chart.findShapes('circle'), ...chart.findShapes('path')].filter(nodeFilter);
  return nodes;
};

export { getPointNodes, getPointNodesWithKey };
