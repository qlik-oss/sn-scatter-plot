import KEYS from '../../constants/keys';
import createResolver from './resolve';

export default function createTickModel(charModel) {
  const resolve = createResolver(charModel);
  return {
    query: {
      // These methods generate ticks for picasso-definition/scales
      getXTicks: () => resolve(KEYS.SCALE.X),
      getYTicks: () => resolve(KEYS.SCALE.Y),
    },
  };
}
