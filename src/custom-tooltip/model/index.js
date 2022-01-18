import customTooltipUtils from '../utils';

export default function customTooltipModel({ layout, app, picasso, model, chart, translator, localeInfo, embed }) {
  const useCustomTooltip = layout.tooltip && !layout.tooltip.auto;
  return {
    layout,
    app,
    picasso,
    model,
    chart,
    translator,
    localeInfo,
    useCustomTooltip,
    utils: customTooltipUtils,
    miniChartToken: {},
    embed,
  };
}
