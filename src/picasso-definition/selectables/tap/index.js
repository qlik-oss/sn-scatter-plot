import { tap } from '../../../interactive';
import debouncer from '../../../utils/debouncer';
import KEYS from '../../../constants/keys';
import createIsLocked from './is-locked';

export default function createTap({ actions, selectionModel, colorService, customTooltipModel, flags }) {
  const targets = [KEYS.COMPONENT.POINT, KEYS.COMPONENT.LEGEND_CATEGORICAL];

  const brushFromShapesConfig = (e, shapes) => {
    const [shape] = shapes;
    const { key } = shape;

    const component = {
      key,
      action: e.srcEvent.ctrlKey ? 'set' : 'toggle',
      contexts: ['selection'],
    };

    const isLegend = key === KEYS.COMPONENT.LEGEND_CATEGORICAL;

    if (isLegend) {
      return [component];
    }

    const isPoint = key === KEYS.COMPONENT.POINT;

    if (isPoint && shape.data.null?.value) {
      return false;
    }

    component.data = ['selectionDimension'];

    return [component];
  };

  const config = {
    targets,
    components: brushFromShapesConfig,
  };

  const options = {
    debouncer,
    flags,
    customTooltipModel,
    actions,
    isLocked: createIsLocked({
      selectionModel,
      colorService,
    }),
    hitRadius: (components) => (components.some((component) => component.key === KEYS.COMPONENT.POINT) ? 3 : 0),
  };

  return tap(config, options);
}
