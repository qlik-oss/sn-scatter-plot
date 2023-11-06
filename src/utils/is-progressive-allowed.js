import getNumPointsInBigData from './get-num-points-in-big-data';

const isProgressiveAllowed = (layoutService) => {
  const { isBigData, largeNumDataPoints, isLargeNumDataPoints } = layoutService.meta;
  if (isBigData) {
    return getNumPointsInBigData(layoutService) > largeNumDataPoints;
  }
  return isLargeNumDataPoints;
};

export default isProgressiveAllowed;
