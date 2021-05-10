// import { dockLayout as createDockLayout } from '@qlik/chart-commons';

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
  const { chart, actions } = core;
  const { chartModel, colorService } = models;
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

  const scales = createScales({ models, viewState });

  const collections = createCollections(models);

  const components = createComponents({ models, context });

  const selectables = createSelectables({ models, actions, scales, flags });

  return {
    interactions: createInteractions({
      chart,
      actions,
      viewHandler,
      gestures: [...selectables.gestures],
      colorService,
    }),
    scales,
    components: [...components, ...selectables.components],
    collections,
    palettes: colorService.getPalettes(),
    strategy: {
      // TODO: use a common module for this or a proper implementation
      layoutModes: {
        FULL: { width: 550, height: 450 },
        MEDIUM: { width: 400, height: 220 },
        SMALL: { width: 300, height: 150 },
        XSMALL: { width: 150, height: 75 },
        SPARK: { width: 0, height: 0 },
      },
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
