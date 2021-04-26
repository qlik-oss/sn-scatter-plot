import KEYS from '../../../constants/keys';

const LABEL_MODE = {
  NONE: 0,
  AUTO: 1,
  ALL: 2,
  FALLBACK: 1,
};

export default function createPointLabels({ layoutModel }) {
  const labels = layoutModel.getLayoutValue('labels', {});
  if (labels.mode === LABEL_MODE.NONE) {
    return false;
  }

  const pointLabelsComponent = {
    type: 'point-label',
    key: KEYS.COMPONENT.POINT_LABELS,
    settings: {
      label: (data) => data.label,
    },
  };

  return pointLabelsComponent;
}
