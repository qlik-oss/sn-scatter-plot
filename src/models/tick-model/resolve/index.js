import CONSTANTS from '../../../constants/keys';
import getTicks from './ticks';

export default function createResolver({ layoutModel, chartModel, dockModel }) {
  return (scale) => {
    const { width, height } = dockModel.chartSize;
    const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = chartModel.query.getViewState().get('zoom');
    const [min, max, size] = scale === CONSTANTS.SCALE.X ? [xAxisMin, xAxisMax, width] : [yAxisMin, yAxisMax, height];

    const ticks = getTicks({
      layoutModel,
      size,
      min,
      max,
    });

    return ticks;
  };
}
