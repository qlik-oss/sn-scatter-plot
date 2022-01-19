import KEYS from '../../../constants/keys';
import getDock from '../../../utils/dock-helper';
import MODES from '../../../constants/modes';

const heatMapLegend = ({ models, context, chart }) => {
  const { themeService, layoutService, chartModel } = models;
  const dataHandler = chartModel.query.getDataHandler();
  const { translator, rtl, theme } = context;
  const { fontFamily } = themeService.getStyles().axis.label.name;
  const titleStyle = theme.getStyle('object', '', 'legend')?.title || {
    fontSize: '15px',
    color: '#333333',
  };
  const labelStyle = theme.getStyle('object', '', 'legend')?.label || {
    fontSize: '13px',
    color: '#595959',
  };
  const {
    show: showLegend,
    dock: d,
    showTitle,
  } = layoutService.getLayoutValue('legend', {
    show: true,
    dock: 'auto',
    showTitle: true,
  });
  const dock = getDock({ dock: d, chart, rtl });

  return {
    key: KEYS.COMPONENT.LEGEND_HEAT_MAP,
    type: 'legend-seq',
    dock,
    minimumLayoutMode: MODES.HEAT_MAP_LEGEND,
    settings: {
      length: 1,
      fill: KEYS.SCALE.HEAT_MAP_COLOR,
      major: KEYS.SCALE.HEAT_MAP_COLOR,
      title: {
        text: translator.get(`properties.compression.density`),
        fontFamily,
        fontSize: titleStyle.fontSize,
        fill: titleStyle.color,
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
        fontSize: labelStyle.fontSize,
        fill: labelStyle.color,
      },
    },
    show: () => showLegend && dataHandler.getMeta().isBinnedData,
  };
};

export default heatMapLegend;
