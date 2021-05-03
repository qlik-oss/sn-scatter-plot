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
    key: 'LimitedData',
    alignment: 'bottom',
    condition: ({ layoutService, flags }) => {
      if (layoutService.getLayout().showDisclaimer === false && flags.isEnabled('SHOW_DISCLAIMER')) {
        return false;
      }

      const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
      return qcy > 1000;
    },
  },
];
