import getNumMeasures from './get-num-measures';

export default function showRangeBubbleSizes(data) {
  return getNumMeasures(data) > 2;
}
