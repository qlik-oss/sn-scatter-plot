const getNumPointsInBigData = (layoutService) => {
  const dataPages = layoutService.getDataPages();
  if (dataPages.length) {
    const { qMatrix, qArea } = dataPages[0];
    const { qLeft, qTop, qWidth, qHeight } = qArea;
    const isBinnedData = dataPages.length === 1 && !qMatrix.length && !qLeft && !qTop && !qWidth && !qHeight;
    if (isBinnedData) {
      return 0;
    }
    return qMatrix.length;
  }
  return 0;
};

export default getNumPointsInBigData;
