import getNumMeasures from './get-num-measures';

export default function showBubbleSizes(data) {
  return getNumMeasures(data) < 3;
}
