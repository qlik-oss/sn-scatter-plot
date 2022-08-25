export default function isLargeNumVisibleBubblesFromBigData(layoutService) {
  const dataPages = layoutService.getDataPages();
  if (dataPages.length) {
    const { qMatrix, qArea } = dataPages[0];
    const { qLeft, qTop, qWidth, qHeight } = qArea;
    const isBinnedData = dataPages.length === 1 && !qMatrix.length && !qLeft && !qTop && !qWidth && !qHeight;
    if (isBinnedData) {
      return false;
    }
    return qMatrix.length > layoutService.meta.largeNumDataPoints;
  }
  return false;
}
