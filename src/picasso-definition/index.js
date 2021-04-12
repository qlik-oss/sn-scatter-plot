// import { dockLayout as createDockLayout } from '@qlik/chart-commons';

import createCollections from './collections';
import createComponents from './components';
import createScales from './scales';
import createInteractions from './interactions';
import createSelectables from './selectables';

export default function createPicassoDefinition({
  core,
  models,
  model,
  theme,
  options,
  constraints,
  translator,
  app,
  logicalSize,
  flags,
}) {
  const { chart, actions } = core;
  const { chartModel, tickModel, dockModel, layoutModel, selectionModel, themeModel } = models;
  const zoomHandler = chartModel.query.getZoomHandler();
  const viewState = chartModel.query.getViewState();
  const context = {
    rtl: options.direction === 'rtl',
    theme,
    translator,
    constraints,
    model,
  };

  const scales = createScales({
    layoutModel,
    tickModel,
    viewState,
  });

  const collections = createCollections({ layoutModel });

  const components = createComponents({
    context,
    layoutModel,
    translator,
    app,
    dockModel,
    chartModel,
    themeModel,
  });

  const selectables = createSelectables({
    actions,
    selectionModel,
    dockModel,
    scales,
    flags,
  });

  return {
    interactions: createInteractions({
      chart,
      actions,
      zoomHandler,
      gestures: [...selectables.gestures],
    }),
    scales,
    components: [...components, ...selectables.components],
    collections,
    // palettes: colorModel.main.model().palettes(),
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
    // strategy: createDockLayout(layout, {
    //   logicalSize,
    //   minCenterRatio: 0,
    // }),
  };
}
