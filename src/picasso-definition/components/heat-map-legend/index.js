import KEYS from '../../../constants/keys';
import getDock from '../../../utils/dock-helper';

const heatMapLegend = ({ models, context, chart }) => {
  const { themeService, layoutService, chartModel } = models;
  const dataHandler = chartModel.query.getDataHandler();
  const { translator, rtl, theme } = context;
  const { fontFamily } = themeService.getStyles().axis.label.name;
  const legendStyle = theme.getStyle('object', '', 'legend').title;
  const { show: showLegend, dock: d, showTitle } = layoutService.getLayoutValue('legend', {
    show: true,
    dock: 'auto',
    showTitle: true,
  });
  const dock = getDock({ dock: d, chart, rtl });

  return {
    key: KEYS.COMPONENT.LEGEND_HEAT_MAP,
    type: 'legend-seq',
    dock,
    settings: {
      fill: KEYS.SCALE.HEAT_MAP_COLOR,
      major: KEYS.SCALE.HEAT_MAP_COLOR,
      title: {
        text: translator.get(`properties.compression.density`),
        fontFamily,
        fontSize: legendStyle.fontSize,
        fill: legendStyle.color,
        padding: 10,
        anchor: (dock === 'top' || dock === 'bottom') && rtl ? 'right' : 'left',
        show: showTitle,
      },
      tick: {
        label: (tickValue, index) => {
          const maxDensity = dataHandler.maxBinDensity;
          const density = [0, maxDensity];
          return density[index % 2];
        },
        fontFamily,
      },
    },
    show: () => showLegend && dataHandler.getMeta().isBinnedData,
  };
};

export default heatMapLegend;
