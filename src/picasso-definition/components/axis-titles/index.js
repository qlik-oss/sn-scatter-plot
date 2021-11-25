import createXAxisTitle from './xAxis';
import createYAxisTitle from './yAxis';

export default function createAxisTitles({ models, context }) {
  const { layoutService, dockService, themeService, propertiesModel } = models;
  const { translator, constraints, rtl, model } = context;
  const args = {
    model,
    app: model.app,
    translator,
    constraints,
    rtl,
    layoutService,
    dockService,
    themeService,
    propertiesModel,
  };

  return [createXAxisTitle(args), createYAxisTitle(args)];
}
