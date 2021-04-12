// import { setDisplayOrder } from '@qlik/chart-commons';
import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createPointLabels from './point-labels';

export default function createComponents({ context, layoutModel, dockModel, chartModel, themeModel }) {
  const components = [
    createGridLines({ layoutModel, context }),
    createPoint({
      layoutModel,
      chartModel,
    }),
    ...createAxes({
      layoutModel,
      dockModel,
      themeModel,
    }),
    ...createAxisTitles({
      layoutModel,
      dockModel,
      themeModel,
    }),
    createPointLabels({
      layoutModel,
    }),
    // ...legend.components,
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
