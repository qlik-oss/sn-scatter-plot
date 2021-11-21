/* eslint-disable no-param-reassign */
import NUMBERS from '../constants/numbers';
import createCollections from './collections';
import createComponents from './components';
import createScales from './scales';
import createInteractions from './interactions';
import createSelectables from './selectables';
import createFormatters from './formatters';

export default function createPicassoDefinition({
  core,
  models,
  model,
  theme,
  options,
  constraints,
  translator,
  logicalSize,
  flags,
}) {
  const { chart, actions, picasso } = core;
  const { chartModel, colorService, pluginService, tooltipService } = models;
  const viewHandler = chartModel.query.getViewHandler();
  const viewState = chartModel.query.getViewState();
  const localeInfo = chartModel.query.getLocaleInfo();
  const context = {
    rtl: options.direction === 'rtl',
    theme,
    translator,
    constraints,
    model,
    localeInfo,
  };

  const scales = createScales({ models, viewState, options, theme, rtl: context.rtl, chart });

  const collections = createCollections(models);

  const components = createComponents({ models, context, flags, picasso, model, chart });

  const selectables = createSelectables({ models, actions, scales, flags });

  const componentDefinitions = [...components, ...selectables.components];

  return {
    interactions: createInteractions({
      chart,
      actions,
      viewHandler,
      gestures: [...selectables.gestures],
      colorService,
      tooltipService,
      rtl: context.rtl,
    }),
    scales,
    components: pluginService.extendComponents(componentDefinitions),
    collections,
    palettes: colorService.getPalettes(),
    strategy: {
      layoutModes: NUMBERS.LAYOUT_MODES,
      center: {
        minWidthRatio: 0,
        minHeightRatio: 0,
      },
      logicalSize,
    },
    formatters: createFormatters(),
    // strategy: createDockLayout(layout, {
    //   logicalSize,
    //   minCenterRatio: 0,
    // }),
  };
}
