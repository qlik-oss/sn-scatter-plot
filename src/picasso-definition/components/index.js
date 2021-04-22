// import { setDisplayOrder } from '@qlik/chart-commons';
import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createTooltips from './tooltips';
import createDisclaimer from './disclaimer';

export default function createComponents({ context, models }) {
  const { colorService, disclaimerModel } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    createPoint(models),
    ...createAxes(models),
    ...createAxisTitles(models),
    ...createReferenceLines({ models, context }),
    createPointLabels(models),
    ...colorService.custom.legendComponents(),
    disclaimer,
    ...createTooltips({ models, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
