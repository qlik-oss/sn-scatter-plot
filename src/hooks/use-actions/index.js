import { useConstraints, useState } from '@nebula.js/stardust';
import useLasso from './use-lasso';
import useSelect from './use-select';

export default function useActions({ flags }) {
  const constraints = useConstraints();
  const select = useSelect();
  const lasso = useLasso();
  const enabledPanZoom = flags.isEnabled('panZoom');

  const [actions] = useState({});
  actions.zoom = {
    enabled: () => enabledPanZoom && constraints && !constraints.active,
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
  actions.lasso = lasso;
  actions.select = select;
  return actions;
}
