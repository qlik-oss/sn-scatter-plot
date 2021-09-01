/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Return the size in logarithm scale
 * @param {object} d Data properties
 * @param {object} layout Layout the plugin received from plugin service
 */
function getSizeInLogarithmScale(d, layout) {
  const isNotNumber = (x) => typeof x !== 'number' || Number.isNaN(x);
  const { value } = d.datum.size;
  const { qMin, qMax } = layout.qHyperCube.qMeasureInfo[2];
  if (isNotNumber(value) || isNotNumber(qMin) || isNotNumber(qMax)) return '8px';
  const absMax = Math.max(Math.abs(qMin), Math.abs(qMax));
  const absSize = Math.abs(value);

  // The maximum size is 20px
  let logSize = 20 / Math.log10((absMax / absSize) * 10);
  logSize = logSize.toFixed(1);
  return `${logSize}px`;
}

/**
 * Return 'red' if the datum value is larger than the median, blue if smaller,
 * and grey is undefined.
 * @param {object} d Data properties
 */
function getColorBasedOnMedian(d) {
  const isNumber = (x) => typeof x === 'number' && !Number.isNaN(x);

  function getMedian(data) {
    const sortedData = data.filter((x) => isNumber(x)).sort((a, b) => a - b);
    let median;
    if (sortedData.length % 2 === 0) {
      const upperIndex = sortedData.length / 2;
      median = (sortedData[upperIndex] + sortedData[upperIndex - 1]) / 2;
    } else {
      const middleIndex = (sortedData.length - 1) / 2;
      median = sortedData[middleIndex];
    }
    return median;
  }
  const data = d.data.items.map((item) => item.size.value);
  const median = getMedian(data);
  const { value } = d.datum.size;
  if (!isNumber(value)) return 'grey';
  if (value >= median) return 'coral';
  return 'skyBlue';
}
