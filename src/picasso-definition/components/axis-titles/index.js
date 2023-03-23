import createXAxisTitle from './xAxis';
import createYAxisTitle from './yAxis';

export default function createAxisTitles({ models, context }) {
  const { layoutService, dockService, styleModel, propertiesModel, app } = models;
  const { translator, constraints, rtl, model } = context;
  const args = {
    model,
    app,
    translator,
    constraints,
    rtl,
    layoutService,
    dockService,
    styleModel,
    propertiesModel,
  };

  return [createXAxisTitle(args), createYAxisTitle(args)];
}
