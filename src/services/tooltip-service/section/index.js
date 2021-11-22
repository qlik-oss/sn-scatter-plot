import KEYS from '../../../constants/keys';
import createNormal from './normal';
import createHeatMap from './heat-map';

export default function createSection({ translator, measureProperties, nodes, dataset, meta, create, util }) {
  const { triggerer } = meta;

  switch (triggerer) {
    case KEYS.COMPONENT.POINT:
    default:
      return createNormal({ measureProperties, nodes, dataset, create, util });
    case KEYS.COMPONENT.HEAT_MAP:
      return createHeatMap({ translator, nodes, create });
  }
}
