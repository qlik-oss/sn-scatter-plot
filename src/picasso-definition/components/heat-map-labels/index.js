import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

export default function createHeatMapLabels({ themeService, chartModel, picasso, context }) {
  const formatter = picasso.formatter('q-number');
  const style = themeService.getStyles();
  const { fontFamily, numFontSize } = style.label?.value || {};
  const viewHandler = chartModel.query.getViewHandler();
  const { transform } = viewHandler;

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
                  label: ({ node }) => formatter('#.#', undefined, undefined, 'U')(node.data.binDensity.value),
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
    animations: {
      enabled: () => chartModel.query.animationEnabled(),
      trackBy: () => Math.random(),
    },
    rendererSettings: {
      transform,
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 100,
      }),
    },
  };

  return heatMapLabelsComponent;
}
