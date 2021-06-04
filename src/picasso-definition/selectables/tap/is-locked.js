import KEYS from '../../../constants/keys';

export default function createIsLocked({ selectionService, colorService }) {
  return (components) => {
    selectionService.getIsSelectionLocked(components);

    const { key } = components[0];

    const isDimensionLocked = selectionService.getIsDimensionLocked();

    if (key === KEYS.COMPONENT.LEGEND_CATEGORICAL) {
      return colorService.isSelectionLocked({ isMeasureSelectionLocked: isDimensionLocked });
    }

    return isDimensionLocked;
  };
}
