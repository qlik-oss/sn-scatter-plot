import { lasso } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createLasso({ models, actions }) {
  const { selectionService, layoutService } = models;
  const isDimensionLocked = selectionService.getIsDimensionLocked();
  const isSingleSelection = layoutService.getHyperCubeValue('qDimensionInfo.0.qIsOneAndOnlyOne', false);
  const componentKeys = [KEYS.COMPONENT.POINT, KEYS.COMPONENT.HEAT_MAP];

  if (isDimensionLocked || isSingleSelection) {
    return false;
  }

  const config = {
    key: 'lasso',
    componentTargetKeys: componentKeys,
    components: componentKeys.map((key) => ({
      key,
      action: 'add',
      contexts: ['selection'],
    })),
  };

  const options = {
    actions,
  };

  return lasso(config, options);
}
