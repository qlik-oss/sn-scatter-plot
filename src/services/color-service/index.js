import { colorService as createColorService } from 'qlik-chart-modules';
import KEYS from '../../constants/keys';
import createLegend from './legend';

export default function createService({
  actions,
  localeInfo,
  app,
  chart,
  theme,
  translator,
  options,
  model,
  layoutService,
  picasso,
  viewState,
  viewHandler,
}) {
  let colorService;
  const state = {
    wrappedScales: undefined,
    legendComponents: undefined,
    legendInteractions: undefined,
  };

  const hasBase = (i) => i.baseColor || (i.coloring && i.coloring.baseColor);
  const hc = layoutService.getHyperCube();
  const hasDimensionBase = hc.qDimensionInfo.some(hasBase);
  const dimension = hasDimensionBase ? 'dimension' : undefined;
  const showLegend = layoutService.getLayoutValue('legend.show', true);

  const updateLegend = () => {
    const { components, interactions, scales } = createLegend({
      viewState,
      chart,
      options,
      colorService,
      actions,
    });

    state.wrappedScales = scales;
    state.legendComponents = components;
    state.legendInteractions = interactions;
  };

  const updateBrushAliases = () => {
    const colorField = colorService.getSettings().field;
    const brush = chart.brush('selection');
    if (/qAttrDimInfo/.test(colorField)) {
      brush.removeKeyAlias(`${KEYS.DATA.LEGEND}/${colorField}`);
      brush.removeKeyAlias('attrDim/qDimensionInfo/0');
      brush.addKeyAlias('attrDim/qDimensionInfo/0', `qHyperCube/${colorField}`);
    }
  };

  const createConfig = () => {
    let measureOverrides;
    const settings = {
      theme,
      colorProps: {
        measureOverrides,
        useBaseColors:
          layoutService.getLayoutValue('color.useBaseColors') === 'dimension' && hasDimensionBase ? 'dimension' : 'off',
      },
      legendProps: {
        ...layoutService.getLayoutValue('legend'),
        show: () => showLegend && !viewHandler.getMeta().heatMapView,
      },
      hc,
      key: KEYS.SCALE.COLOR,
    };
    return settings;
  };

  colorService = createColorService({
    picasso,
    model,
    app,
    translator,
    layoutService,
    createConfig,
    config: {
      localeInfo,
      auto: () => ({
        mode: 'primary',
        useBaseColors: dimension ?? 'off',
        paletteColor: null,
      }),
    },
    custom: {
      wrappedScales: () => state.wrappedScales,
      legendComponents: () => state.legendComponents,
      legendInteractions: () => state.legendInteractions,
      updateBrushAliases,
      updateLegend,
    },
  });

  return colorService;
}
