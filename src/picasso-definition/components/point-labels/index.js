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
    type: 'labels',
    key: KEYS.COMPONENT.POINT_LABELS,
    settings: {
      sources: [
        {
          component: KEYS.COMPONENT.POINT,
          selector: 'circle',
          strategy: {
            type: 'bar',
            settings: {
              direction: 'up',
              labels: [
                {
                  placements: [
                    {
                      position: 'outside',
                      justify: 0,
                      align: 0.5,
                      fill: 'black',
                      overflow: true,
                    },
                  ],
                  label: ({ data }) => data.label,
                },
              ],
            },
          },
        },
      ],
    },
  };

  return pointLabelsComponent;
}
