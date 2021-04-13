import { colorService as createColorService } from '@qlik/chart-modules';
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
  layoutModel,
  picasso,
  viewState,
}) {
  let colorService;
  const state = {
    wrappedScales: undefined,
    legendComponents: undefined,
    legendInteractions: undefined,
  };

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
      },
      legendProps: layoutModel.getLayoutValue('legend'),
      hc: layoutModel.getHyperCube(),
      key: KEYS.SCALE.COLOR,
    };
    return settings;
  };

  colorService = createColorService({
    picasso,
    model,
    app,
    translator,
    layoutModel,
    createConfig,
    onInitialized() {
      updateBrushAliases();
      updateLegend();
    },
    config: {
      localeInfo,
    },
  });

  return colorService;
}
