const updateLazySelectionOnEnd = ({ layoutService, chart }) => {
  const meta = layoutService?.meta || {};
  if (meta.isBigData || meta.isLargeNumDataPoints) {
    // eslint-disable-next-line no-underscore-dangle
    chart.brush('lazySelection')._state(chart.brush('selection')._state());
  }
};

const updateLazySelectionOnMove = ({ layoutService, chartModel, chart }) => {
  const meta = layoutService?.meta || {};
  if (meta.isBigData) {
    const dataHandler = chartModel?.query.getDataHandler();
    const { isLargeNumVisibleBubblesFromBigData } = dataHandler?.getMeta() || {};
    if (!isLargeNumVisibleBubblesFromBigData) {
      // eslint-disable-next-line no-underscore-dangle
      chart.brush('lazySelection')._state(chart.brush('selection')._state());
    }
  } else if (meta.isLargeNumDataPoints) {
    const { isLargeNumVisibleBubbles } = chartModel?.query.getMeta() || {};
    if (!isLargeNumVisibleBubbles) {
      // eslint-disable-next-line no-underscore-dangle
      chart.brush('lazySelection')._state(chart.brush('selection')._state());
    }
  }
};

export { updateLazySelectionOnEnd, updateLazySelectionOnMove };
