import { useConstraints, useState } from '@nebula.js/stardust';
import useLasso from './use-lasso';
import useSelect from './use-select';

export default function useActions() {
  const [actions] = useState({});
  const constraints = useConstraints();
  const select = useSelect(actions);
  const lasso = useLasso();

  actions.zoom = {
    enabled: () => constraints && !constraints.active,
  };
  actions.scroll = {
    enabled: () => constraints && !constraints.active,
  };
  actions.interact = {
    enabled: () => constraints && !constraints.active,
  };
  actions.tooltip = {
    enabled: () => constraints && !constraints.passive,
  };
  actions.getProgressive = () => actions.progressive;
  actions.setProgressive = (b) => {
    actions.progressive = b;
  };
  actions.lasso = lasso;
  actions.select = select;
  return actions;
}
