import KEYS from '../../../constants/keys';
import isBigData from '../../../utils/is-big-data';

export default function createHeatMap({ app, models, flags }) {
  const bins = models.layoutService.getLayoutValue('qDataPages');
  console.log('bins: ', bins);

  return {
    key: KEYS.COMPONENT.HEAT_MAP,
    type: 'point',
    data: {
      type: 'matrix',
      data: bins,
    },
    show: () => {
      const qcy = models.layoutService.getHyperCubeValue('qSize.qcy', 0);
      return isBigData(qcy, app.layout, flags) && flags.isEnabled('binned_data');
    },
    // brush: { consume: [highlight, highlightIntersect, highlightColor] },
    settings: {
      x: {
        scale: 'x',
      },
      y: {
        scale: 'y',
      },
      width: 1,
      height: 2,
      size: 1,
      fill: '#E6E6E6',
      opacity: 1,
      shape: 'rect',
    },
  };
}
