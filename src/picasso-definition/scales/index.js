import KEYS from '../../constants/keys';

export default function createScales({ models, viewState, options, theme }) {
  const { tickModel, colorService, disclaimerModel, layoutService } = models;

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return {};
  }

  // TODO get lightcolor and darkcolor based on primarycolor
  const color = theme.getStyle('object', '', 'dataColors').primaryColor;

  return {
    x: {
      data: {
        field: KEYS.FIELDS.X,
      },
      min: () => viewState.get('dataView').xAxisMin,
      max: () => viewState.get('dataView').xAxisMax,
      invert: options.direction === 'rtl',
      ticks: {
        values: () => tickModel.query.getXTicks(),
      },
    },
    y: {
      data: {
        extract: {
          field: KEYS.FIELDS.Y,
        },
      },
      min: () => viewState.get('dataView').yAxisMin,
      max: () => viewState.get('dataView').yAxisMax,
      invert: true,
      ticks: {
        values: () => tickModel.query.getYTicks(),
      },
    },
    ...colorService.getScales(),
    [KEYS.SCALE.HEAT_MAP_COLOR]: {
      type: 'sequential-color',
      min: 0,
      max: () => layoutService.getLayoutValue('dataPages')?.[0]?.[0]?.qNum || 0,
      invert: true,
      range: ['pink', color],
    },
  };
}
