import getNumPointsInBigData from './get-num-points-in-big-data';

const isProgressiveAllowed = (layoutService) => {
  const { isProgressiveEnabled, isBigData, largeNumDataPoints, isLargeNumDataPoints } = layoutService.meta;
  if (!isProgressiveEnabled) return false;
  if (isBigData) {
    return getNumPointsInBigData(layoutService) > largeNumDataPoints;
  }
  return isLargeNumDataPoints;
};

export default isProgressiveAllowed;
