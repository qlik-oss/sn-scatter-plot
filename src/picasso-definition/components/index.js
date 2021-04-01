// import { setDisplayOrder } from '@qlik/chart-commons';
import createGridLines from './grid-lines';
import createAxes from './axes';
import createPoint from './point';
import createReferenceLines from './reference-lines';

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
    ...createReferenceLines({
      layoutModel,
    }),
    // ...legend.components,
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
