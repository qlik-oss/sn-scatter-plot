import { getValue } from 'qlik-chart-modules';
import NUMBERS from '../../constants/numbers';

export default function createLayoutServiceMetaFn(flags) {
  return function layoutServiceMeta({ layout }) {
    const isSnapshot = !!layout.snapshotData;
    const hasSizeMeasure = !!getValue(layout.qHyperCube, 'qMeasureInfo.2');
    const qcy = getValue(layout.qHyperCube, 'qSize.qcy');
    const isBigData = qcy > NUMBERS.MAX_NR_SCATTER && !(layout?.qIsBDILiveMode && flags.isEnabled('BDI_CLIENT_ADAPT'));

    return {
      isSnapshot,
      hasSizeMeasure,
      isBigData,
    };
  };
}
