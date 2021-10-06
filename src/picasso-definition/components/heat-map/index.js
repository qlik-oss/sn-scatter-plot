import KEYS from '../../../constants/keys';
import isBigData from '../../../utils/is-big-data';

export default function createHeatMap({ app, models, flags }) {
  let scaleWidth;
  let scaleHeight;

  return {
    key: KEYS.COMPONENT.HEAT_MAP,
    type: 'point',
    data: {
      extract: {
        source: 'binData',
        field: 'bin',
        props: {
          x: { field: 'binX' },
          y: { field: 'binY' },
          binWidth: { field: 'binWidth' },
          binHeight: { field: 'binHeight' },
        },
      },
    },
    show: () => {
      const qcy = models.layoutService.getHyperCubeValue('qSize.qcy', 0);
      const s = isBigData(qcy, app.layout, flags);

      return s;
    },
    // brush: { consume: [highlight, highlightIntersect, highlightColor] },
    settings: {
      x: {
        scale: KEYS.SCALE.X,
      },
      y: {
        scale: KEYS.SCALE.Y,
      },
      fill: '#000099',
      opacity: 0.5,
      shape: (d) => {
        const width = d.datum.binWidth.value * scaleWidth;
        const height = d.datum.binHeight.value * scaleHeight;

        return {
          type: 'rect',
          width,
          height,
        };
      },
    },
    beforeRender: ({ size }) => {
      const viewHandler = models.chartModel.query.getViewHandler();
      const dataView = viewHandler.getDataView();
      scaleWidth = size.width / (dataView.xAxisMax - dataView.xAxisMin);
      scaleHeight = size.height / (dataView.yAxisMax - dataView.yAxisMin);
    },
  };
}
