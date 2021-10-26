import KEYS from '../../../constants/keys';

const heatMapLegend = ({ models, context }) => {
  const { themeService, layoutService, chartModel } = models;
  const viewHandler = chartModel.query.getViewHandler();
  const { translator, rtl, theme } = context;
  const { fontFamily } = themeService.getStyles().axis.label.name;
  const legendStyle = theme.getStyle('object', '', 'legend').title;

  return {
    key: KEYS.COMPONENT.LEGEND_HEAT_MAP,
    type: 'legend-seq',
    dock: rtl ? 'left' : 'right',
    settings: {
      fill: KEYS.SCALE.HEAT_MAP_COLOR,
      major: KEYS.SCALE.HEAT_MAP_COLOR,
      padding: {
        left: 10,
        right: 5,
        top: 0,
        bottom: 5,
      },
      title: {
        text: translator.get(`properties.compression.density`),
        fontFamily,
        fontSize: legendStyle.fontSize,
        fill: legendStyle.color,
        padding: 10,
      },
      tick: {
        label: (tickValue, index) => {
          const maxDensity = layoutService.getLayoutValue('dataPages')?.[0]?.[0]?.qNum || 0;
          const density = [0, maxDensity];
          return density[index % 2];
        },
        fontFamily,
        anchor: rtl ? 'left' : 'right',
      },
    },
    show: () => viewHandler.getMeta().heatMapView,
  };
};

export default heatMapLegend;
