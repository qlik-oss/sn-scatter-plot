import { useAction, useConstraints, useEffect, useLayout, useState, useTranslator } from '@nebula.js/stardust';
import lassoIcon from './lasso-icon';

export default function useLasso() {
  const constraints = useConstraints();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const layout = useLayout();
  const translator = useTranslator();
  const isInSelections = !!layout.qSelectionInfo.qInSelections;
  const isSingleSelection = !!layout.qHyperCube?.qDimensionInfo?.[0]?.qIsOneAndOnlyOne;

  useEffect(() => {
    if (!constraints) {
      return;
    }

    setEnabled(!constraints.select && !constraints.active);
  }, [constraints]);

  const action = (on) => {
    const newState = typeof on === 'boolean' ? on : !active;
    setActive(newState);
  };

  useAction(
    () => ({
      key: 'lasso',
      label: translator.get(active ? 'Tooltip.ToggleOffLassoSelection' : 'Tooltip.ToggleOnLassoSelection'),
      icon: lassoIcon,
      hidden: !enabled || !isInSelections || isSingleSelection,
      active,
      action,
    }),
    [isInSelections, isSingleSelection, active, enabled]
  );

  return {
    action,
    enabled: () => enabled,
    active: () => active,
  };
}
