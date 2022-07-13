import { getValue } from 'qlik-chart-modules';
import NUMBERS from '../../constants/numbers';

export default function createLayoutServiceMetaFn(flags, qIsDirectQueryMode, qUnsupportedFeature) {
  return function layoutServiceMeta({ layout }) {
    const isSnapshot = !!layout.snapshotData;
    const hasSizeMeasure = !!getValue(layout.qHyperCube, 'qMeasureInfo.2');
    const qcy = getValue(layout.qHyperCube, 'qSize.qcy');
    const isBinningSupported = !qIsDirectQueryMode && !qUnsupportedFeature?.some((f) => f === 'binningData');
    const isBigData =
      isBinningSupported &&
      qcy > NUMBERS.getMaxNrScatter(layout) &&
      !(layout?.qIsBDILiveMode && flags.isEnabled('BDI_CLIENT_ADAPT'));
    const isRangeSelectionsSupported =
      !qIsDirectQueryMode && !qUnsupportedFeature?.some((f) => f === 'rangeSelections');

    return {
      isSnapshot,
      hasSizeMeasure,
      isBigData,
      isContinuous: true,
      isRangeSelectionsSupported,
    };
  };
}
