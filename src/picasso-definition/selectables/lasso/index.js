import { lasso } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createLasso({ models, actions }) {
  const { selectionService, layoutService } = models;
  const isDimensionLocked = selectionService.getIsDimensionLocked();
  const isSingleSelection = layoutService.getHyperCubeValue('qDimensionInfo.0.qIsOneAndOnlyOne', false);

  if (isDimensionLocked || isSingleSelection) {
    return false;
  }

  const component = {
    key: KEYS.COMPONENT.POINT,
    action: 'add',
    contexts: ['selection'],
  };

  return lasso(
    {
      key: 'lasso',
      componentTargetKey: KEYS.COMPONENT.POINT,
      components: [component],
    },
    {
      actions,
    }
  );
}
