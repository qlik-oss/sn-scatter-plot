import isBigData from '../../../utils/is-big-data';
import NUMBERS from '../../../constants/numbers';

export default [
  {
    key: 'NoDataExist',
    alignment: 'center',
    condition: ({ layoutService }) => {
      const { qcx, qcy } = layoutService.getHyperCubeValue('qSize', {});
      return qcx * qcy === 0;
    },
  },
  {
    key: 'OnlyNanData',
    alignment: 'center',
    condition: ({ layoutService }) => {
      const measures = layoutService.getHyperCubeValue('qMeasureInfo');
      return measures.slice(0, 2).some((measure) => measure.qMax < measure.qMin || measure.qMax === 'NaN');
    },
  },
  {
    key: 'LimitedData',
    alignment: 'bottom',
    condition: ({ app, layoutService, flags }) => {
      if (layoutService.getLayout().showDisclaimer === false && flags.isEnabled('SHOW_DISCLAIMER')) {
        return false;
      }

      const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
      return qcy > NUMBERS.MAX_NR_SCATTER && (!isBigData(qcy, app.layout, flags) || !flags.isEnabled('binned_data'));
    },
  },
  {
    key: 'OverviewData',
    alignment: 'bottom',
    condition: ({ app, layoutService, flags }) => {
      if (
        layoutService.getLayout().showDisclaimer === false &&
        flags.isEnabled('SHOW_DISCLAIMER') &&
        !flags.isEnabled('binned_data')
      ) {
        return false;
      }
      const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);

      return qcy > NUMBERS.MAX_NR_SCATTER && isBigData(qcy, app.layout, flags);
    },
  },
];
