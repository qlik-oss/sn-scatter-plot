import { useAction, useConstraints, useEffect, useLayout, useState } from '@nebula.js/stardust';
import lassoIcon from './lasso-icon';

export default function useLasso() {
  const constraints = useConstraints();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const isInSelections = !!useLayout().qSelectionInfo.qInSelections;

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
      hidden: !enabled || !isInSelections,
      active,
      action() {
        setActive((a) => !a);
      },
    }),
    [isInSelections, active, enabled]
  );

  return {
    action() {
      setActive((a) => !a);
    },
    enabled: () => enabled,
    active: () => active,
  };
}
