import { useAction, useConstraints, useEffect, useLayout, useState } from '@nebula.js/stardust';
import lassoIcon from './lasso-icon';

export default function useLasso() {
  const constraints = useConstraints();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const layout = useLayout();
  const isInSelections = !!layout.qSelectionInfo.qInSelections;
  const isSingleSelection = !!layout.qHyperCube?.qDimensionInfo?.[0]?.qIsOneAndOnlyOne;

  useEffect(() => {
    if (!constraints) {
      return;
    }

    setEnabled(!constraints.select && !constraints.active);
  }, [constraints]);

  useAction(
    () => ({
      key: 'lasso',
      label: 'Lasso',
      icon: lassoIcon,
      hidden: !enabled || !isInSelections || isSingleSelection,
      active,
      action() {
        setActive((a) => !a);
      },
    }),
    [isInSelections, isSingleSelection, active, enabled]
  );

  return {
    action() {
      setActive((a) => !a);
    },
    enabled: () => enabled,
    active: () => active,
  };
}
