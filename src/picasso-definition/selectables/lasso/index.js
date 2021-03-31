import { lasso } from '../../../interactive';
import KEYS from '../../../constants/keys';

export default function createLasso({ actions, selectionModel }) {
  const isDimensionLocked = selectionModel.query.getIsDimensionLocked();

  if (isDimensionLocked) {
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
