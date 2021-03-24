import CONSTANTS from '../../constants/keys';
import createResolver from './resolve';

export default function createTickModel({ layoutModel, chartModel, dockModel }) {
  const resolve = createResolver({
    layoutModel,
    chartModel,
    dockModel,
  });

  return {
    query: {
      // These methods generate ticks for picasso-definition/scales
      getXTicks: () => resolve(CONSTANTS.SCALE.X),
      getYTicks: () => resolve(CONSTANTS.SCALE.Y),
    },
  };
}
