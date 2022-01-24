import { tooltipService } from 'qlik-chart-modules';
import KEYS from '../../constants/keys';
import createSection from './section';

export default function createTooltipService({
  chart,
  actions,
  translator,
  rtl,
  layoutService,
  colorService,
  themeService,
  propertiesModel,
  custom,
}) {
  const { fontFamily } = themeService.getStyles();

  const measureProperties = ['x', 'y', layoutService.meta.hasSizeMeasure ? 'size' : false].filter(Boolean);

  return tooltipService({
    chart,
    translator,
    config: {
      rtl,
      enable: () => actions.tooltip.enabled(),
      getColorSettings: () => colorService.getSettings(),
      style: {
        fontFamily,
      },
      main: {
        key: KEYS.COMPONENT.TOOLTIP,
        getGroupByValue: ({ data }) => data.value,
        collectibles: [
          {
            key: KEYS.COMPONENT.POINT,
            type: 'point',
          },
          {
            key: KEYS.COMPONENT.HEAT_MAP,
            type: 'point',
          },
        ],
        triggers: [
          {
            keys: [KEYS.COMPONENT.POINT],
            collect: {
              from: 'position',
            },
            placement: 'collectible',
          },
          {
            keys: [KEYS.COMPONENT.HEAT_MAP],
            collect: {
              from: 'single',
            },
            placement: 'collectible',
          },
        ],
        section: ({ h, nodes, dataset, meta, create, util }) =>
          createSection({ translator, custom, measureProperties, h, nodes, dataset, meta, create, util }),
        layout: {
          grouping: true,
        },
        events: {
          tooltip: {
            beforeShow: ({ collectNodes }) => {
              if (!custom.isEnabled() || !custom.hasImages()) {
                return Promise.resolve();
              }

              return custom.addImages({ nodes: collectNodes() });
            },
            afterShow: ({ nodes }) => {
              if (custom.chart.isEnabled() && !custom.chart.hasLimitation()) {
                custom.chart.show({
                  nodes,
                  properties: propertiesModel.query.getProperties(),
                });
              }
            },
          },
          interaction: {
            mouseleave: () => {
              if (custom.chart.isEnabled() && custom.chart.hasAlternateState()) {
                custom.chart.hide();
              }
            },
          },
        },
      },
      legend: {
        keys: {
          tooltip: KEYS.COMPONENT.LEGEND_CAT_TOOLTIP,
          component: KEYS.COMPONENT.LEGEND_CATEGORICAL,
        },
      },
    },
  });
}
