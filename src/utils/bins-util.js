const populateBins = (dataPages, bins) => {
  // eslint-disable-next-line no-param-reassign
  bins.length = 0;
  const matrix = dataPages[0].qMatrix;
  let i;

  if (dataPages[0].reformatted) {
    for (i = 1; i < matrix.length; i++) {
      try {
        bins.push(matrix[i][0]);
        // eslint-disable-next-line no-empty
      } catch (err) {}
    }
  } else {
    for (i = 1; i < matrix.length; i++) {
      try {
        matrix[i][0].qText = JSON.parse(matrix[i][0].qText);
        bins.push(matrix[i][0]);
        // eslint-disable-next-line no-empty
      } catch (err) {}
    }
    // eslint-disable-next-line no-param-reassign
    dataPages[0].reformatted = true;
  }
  return bins;
};

export default populateBins;
