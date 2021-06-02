import { useConstraints, useState, useEffect } from '@nebula.js/stardust';
import useLasso from './use-lasso';
import useSelect from './use-select';

export default function useActions({ flags }) {
  const constraints = useConstraints();
  const [zoom, setZoom] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [interact, setInteract] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const select = useSelect();
  const lasso = useLasso();
  const enabledPanZoom = flags.isEnabled('panZoom');

  useEffect(() => {
    if (!constraints) {
      return;
    }
    setZoom(enabledPanZoom && !constraints.active);
    setScroll(!constraints.active);
    setInteract(!constraints.active);
    setTooltip(!constraints.passive);
  }, [constraints]);

  const [actions] = useState({});
  actions.zoom = {
    enabled: () => zoom,
  };
  actions.scroll = {
    enabled: () => scroll,
  };
  actions.interact = {
    enabled: () => interact,
  };
  actions.tooltip = {
    enabled: () => tooltip,
  };
  actions.lasso = lasso;
  actions.select = select;
  return actions;
}
