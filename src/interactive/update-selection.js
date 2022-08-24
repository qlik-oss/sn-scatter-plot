const updateLazySelectionOnEnd = ({ layoutService, chart }) => {
  const meta = layoutService?.meta || {};
  if (meta.isBigData || meta.isLargeNumBubbles) {
    // eslint-disable-next-line no-underscore-dangle
    chart.brush('lazySelection')._state(chart.brush('selection')._state());
  }
};

const updateLazySelectionOnMove = ({ layoutService, chartModel, chart }) => {
  const meta = layoutService?.meta || {};
  if (meta.isBigData && !meta.isLargeNumBubbles) {
    const dataHandler = chartModel?.query.getDataHandler();
    const { isLargeNumBubblesOnFly } = dataHandler.getMeta();
    if (!isLargeNumBubblesOnFly) {
      // eslint-disable-next-line no-underscore-dangle
      chart.brush('lazySelection')._state(chart.brush('selection')._state());
    }
  }
};

export { updateLazySelectionOnEnd, updateLazySelectionOnMove };
