import KEYS from '../../../constants/keys';

export default function createHeatMapTooltip({ context }) {
  const { translator, rtl, theme } = context;

  const heatMapTooltipsComponent = {
    show: true,
    key: KEYS.COMPONENT.HEAT_MAP_TOOLTIP,
    type: 'tooltip',
    layout: {
      displayOrder: 3,
    },
    settings: {
      filter: (nodes) => nodes.filter((node) => node.data && node.key === KEYS.COMPONENT.HEAT_MAP),
      extract: (nodeContext) => nodeContext,
      content: ({ data }) =>
        rtl
          ? `${data[0].node.data.binDensity.label} :${translator.get(`properties.compression.density`)}`
          : `${translator.get(`properties.compression.density`)}: ${data[0].node.data.binDensity.label}`,
      placement: 'bounds',
    },
    style: {
      content: {
        fontFamily: theme.getStyle('object', '', 'fontFamily'),
        fontSize: theme.getStyle('object', '', 'fontSize'),
      },
    },
  };

  return heatMapTooltipsComponent;
}
