const isZoomByImage = (models, threshold = 0) => {
  const { layoutService, chartModel } = models;
  const { meta } = layoutService;
  if (!meta.isMaxVisibleBubblesEnabled) return false;
  if (meta.isBigData) {
    const dataPages = layoutService.getDataPages();
    if (dataPages.length) {
      const { qMatrix, qArea } = dataPages[0];
      const { qLeft, qTop, qWidth, qHeight } = qArea;
      const isBinnedData = dataPages.length === 1 && !qMatrix.length && !qLeft && !qTop && !qWidth && !qHeight;
      if (isBinnedData) return true;
      return qMatrix.length > threshold;
    }
  }
  if (meta.numDataPoints <= threshold) return false;
  const { numVisiblePoints = 0 } = chartModel.query.getMeta() || {};
  return numVisiblePoints > threshold;
};

export default isZoomByImage;
