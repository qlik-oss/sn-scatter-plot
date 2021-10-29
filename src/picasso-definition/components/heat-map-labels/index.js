import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

export default function createHeatMapLabels({ themeService, picasso, context }) {
  const formatter = picasso.formatter('q-number');
  const style = themeService.getStyles();
  const { fontFamily, numFontSize } = style.label?.value || {};

  const heatMapLabelsComponent = {
    type: 'labels',
    key: KEYS.COMPONENT.HEAT_MAP_LABELS,
    layout: {
      minimumLayoutMode: MODES.HEAT_MAP_LABELS,
    },
    settings: {
      sources: [
        {
          component: KEYS.COMPONENT.HEAT_MAP,
          selector: 'rect',
          strategy: {
            type: 'bar',
            settings: {
              direction: 'up',
              orientation: 'horizontal',
              fontSize: numFontSize,
              fontFamily,
              labels: [
                {
                  label: ({ node }) => formatter('#.#A')(node.data.binDensity.value),
                  placements: [
                    {
                      position: 'inside',
                      fill: ({ node }) => context.theme.getContrastingColorTo(node.attrs.fill),
                      onBackground: false,
                      justify: 0.5,
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  };

  return heatMapLabelsComponent;
}
