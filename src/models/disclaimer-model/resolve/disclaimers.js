export default [
  {
    key: 'NoDataExist',
    alignment: 'center',
    condition: ({ layoutModel }) => {
      const { qcx, qcy } = layoutModel.getHyperCubeValue('qSize', {});
      return qcx * qcy === 0;
    },
  },
  {
    key: 'LimitedData',
    alignment: 'bottom',
    condition: ({ layoutModel, flags }) => {
      if (layoutModel.getLayout().showDisclaimer === false && flags.isEnabled('SHOW_DISCLAIMER')) {
        return false;
      }

      const qcy = layoutModel.getHyperCubeValue('qSize.qcy', 0);
      return qcy > 1000;
    },
  },
];
