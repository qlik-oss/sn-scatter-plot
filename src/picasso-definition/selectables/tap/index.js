import { debouncer } from 'qlik-chart-modules';
import { tap } from '../../../interactive';
import KEYS from '../../../constants/keys';
import createIsLocked from './is-locked';

export default function createTap({ models, actions, flags }) {
  const { selectionService, colorService, customTooltipModel, layoutService } = models;
  const targets = [KEYS.COMPONENT.POINT, KEYS.COMPONENT.LEGEND_CATEGORICAL, KEYS.COMPONENT.HEAT_MAP];
  const isSingleSelection = layoutService.getHyperCubeValue('qDimensionInfo.0.qIsOneAndOnlyOne', false);

  const brushFromShapesConfig = (e, shapes) => {
    const [shape] = shapes;
    const { key } = shape;

    const component = {
      key,
      action: e.srcEvent.ctrlKey || isSingleSelection ? 'set' : 'toggle',
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

  const isLocked = createIsLocked({ selectionService, colorService });

  const getHitRadius = (components) => {
    if (components.some((component) => component.key === KEYS.COMPONENT.POINT)) {
      return 3;
    }
    if (components.some((component) => component.key === KEYS.COMPONENT.HEAT_MAP)) {
      return 1;
    }
    return 0;
  };

  const options = {
    debouncer,
    flags,
    customTooltipModel,
    actions,
    isLocked,
    hitRadius: (components) => getHitRadius(components),
  };

  return tap(config, options);
}
