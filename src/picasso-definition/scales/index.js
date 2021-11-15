import KEYS from '../../constants/keys';
import { makeBrighter, makeDarker } from '../../utils/color/adjust-color';
import getDock from '../../utils/dock-helper';

export default function createScales({ models, viewState, options, theme, rtl, chart }) {
  const { tickModel, colorService, disclaimerModel, layoutService, chartModel } = models;
  const dataHandler = chartModel.query.getDataHandler();
  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return {};
  }

  const d = layoutService.getLayoutValue('legend.dock', 'auto');
  const color = theme.getStyle('object', '', 'dataColors').primaryColor;
  const brightColor = makeBrighter(color);
  const darkColor = makeDarker(color);

  const dock = getDock({ dock: d, chart, rtl });

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
      max: () => dataHandler.maxBinDensity,
      invert: rtl || !(dock === 'top' || dock === 'bottom'),
      range: !rtl && (dock === 'top' || dock === 'bottom') ? [brightColor, darkColor] : [darkColor, brightColor],
    },
  };
}
