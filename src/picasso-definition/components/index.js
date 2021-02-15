// import { setDisplayOrder } from '@qlik/chart-commons';
import createGridLines from './grid-lines';
import createAxes from './axes';
import createPoint from './point';

export default function createComponents({ context, layoutModel, dockModel, chartModel }) {
  const components = [
    createGridLines({ layoutModel, context }),
    createPoint({
      layoutModel,
      chartModel,
    }),
    ...createAxes({
      context,
      layoutModel,
      dockModel,
    }),
    // ...legend.components,
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
