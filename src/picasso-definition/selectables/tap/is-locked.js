import KEYS from '../../../constants/keys';

export default function createIsLocked({ selectionModel, colorService }) {
  return (components) => {
    selectionModel.query.getIsLockedSelection(components);

    const { key } = components[0];

    const isDimensionLocked = selectionModel.query.getIsDimensionLocked();

    if (key === KEYS.COMPONENT.LEGEND_CATEGORICAL) {
      return colorService.isSelectionLocked({ isMeasureSelectionLocked: isDimensionLocked });
    }

    return isDimensionLocked;
  };
}
