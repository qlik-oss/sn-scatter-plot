export default function isBinnedData(layoutService) {
  const dataPages = layoutService.getDataPages();
  if (dataPages.length) {
    const { qMatrix, qArea } = dataPages[0];
    const { qLeft, qTop, qWidth, qHeight } = qArea;
    return dataPages.length === 1 && !qMatrix.length && !qLeft && !qTop && !qWidth && !qHeight;
  }
  return true;
}
