import { getValue } from 'qlik-chart-modules';
import NUMBERS from '../../constants/numbers';

export default function createLayoutServiceMetaFn(flags, qIsDirectQueryMode, qUnsupportedFeature) {
  return function layoutServiceMeta({ layout }) {
    const isSnapshot = !!layout.snapshotData;
    const hasSizeMeasure = !!getValue(layout.qHyperCube, 'qMeasureInfo.2');
    const qcy = getValue(layout.qHyperCube, 'qSize.qcy');
    const isBinningSupported = !qIsDirectQueryMode && !qUnsupportedFeature?.some((f) => f === 'binningData');
    const maxNumOfBubbles =
      !flags.isEnabled('NUM_BUBBLES') || layout.maxNumOfBubbles === undefined || layout.maxNumOfBubbles <= 0
        ? NUMBERS.MAX_NR_SCATTER
        : Math.ceil(layout.maxNumOfBubbles);
    const isBigData =
      isBinningSupported && qcy > maxNumOfBubbles && !(layout?.qIsBDILiveMode && flags.isEnabled('BDI_CLIENT_ADAPT'));
    const isRangeSelectionsSupported =
      !qIsDirectQueryMode && !qUnsupportedFeature?.some((f) => f === 'rangeSelections');

    return {
      isSnapshot,
      hasSizeMeasure,
      maxNumOfBubbles,
      isBigData,
      isContinuous: true,
      isRangeSelectionsSupported,
    };
  };
}
