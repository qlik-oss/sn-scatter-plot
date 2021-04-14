import KEYS from '../../../constants/keys';
import getTicks from './ticks';

export default function createResolver(chartModel) {
  return (scaleName) => {
    let scale;
    if (scaleName === KEYS.SCALE.X) {
      const { xAxisMin, xAxisMax } = chartModel.query.getViewState().get('zoom');
      ({ scaleX: scale } = chartModel.query.getViewState().get('scale'));
      scale.updateMinMax(xAxisMin, xAxisMax);
    } else {
      const { yAxisMin, yAxisMax } = chartModel.query.getViewState().get('zoom');
      ({ scaleY: scale } = chartModel.query.getViewState().get('scale'));
      scale.updateMinMax(yAxisMin, yAxisMax);
    }
    const ticks = getTicks(scale);
    return ticks;
  };
}
