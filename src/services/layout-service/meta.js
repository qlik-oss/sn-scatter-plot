import { getValue } from 'qlik-chart-modules';
import NUMBERS from '../../constants/numbers';

export default function createLayoutServiceMetaFn(flags, qUnsupportedFeatures) {
  return function layoutServiceMeta({ layout }) {
    const isSnapshot = !!layout.snapshotData;
    const hasSizeMeasure = !!getValue(layout.qHyperCube, 'qMeasureInfo.2');
    const qcy = getValue(layout.qHyperCube, 'qSize.qcy');
    const isBinningSupported = !qUnsupportedFeatures?.some((f) => f === 'binningData');
    const isMaxVisibleBubblesEnabled = flags.isEnabled('NUM_BUBBLES');
    const isProgressiveEnabled = flags.isEnabled('PROGRESSIVE_RENDERING');
    const maxVisibleBubbles =
      !isMaxVisibleBubblesEnabled || layout.maxVisibleBubbles === undefined || layout.maxVisibleBubbles <= 0
        ? NUMBERS.MAX_NR_SCATTER
        : Math.min(NUMBERS.MAX_VISIBLE_BUBBLES, Math.max(NUMBERS.MAX_NR_SCATTER, Math.ceil(layout.maxVisibleBubbles)));
    const isBigData = isBinningSupported && qcy > maxVisibleBubbles;
    const isRangeSelectionsSupported = !qUnsupportedFeatures?.some((f) => f === 'rangeSelections');
    const largeNumDataPoints = Math.min(NUMBERS.LARGE_NUM_DATA_POINTS, maxVisibleBubbles);
    const isLargeNumDataPoints = !isBigData && isMaxVisibleBubblesEnabled && qcy > largeNumDataPoints;

    return {
      isSnapshot,
      hasSizeMeasure,
      isBigData,
      isContinuous: true,
      isRangeSelectionsSupported,
      isMaxVisibleBubblesEnabled,
      isProgressiveEnabled,
      isLargeNumDataPoints,
      maxVisibleBubbles,
      largeNumDataPoints,
      numDataPoints: qcy,
    };
  };
}
