import extend from 'extend';
import createBaseTooltip from './base-tooltip';
import KEYS from '../../../constants/keys';

/**
 * Generate the tooltip definition
 */
export default function createHeatMapTooltip({ context }) {
  const { translator, rtl } = context;
  const base = createBaseTooltip({ key: KEYS.COMPONENT.HEAT_MAP_TOOLTIP });

  return extend(true, base, {
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
        fontFamily: context.theme.getStyle('object', '', 'fontFamily'),
      },
    },
  });
}
