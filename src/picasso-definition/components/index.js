import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createTooltips from './tooltips';
import createDisclaimer from './disclaimer';
import createOutOfBounds from './out-of-bounds';

export default function createComponents({ context, models, flags }) {
  const { colorService, disclaimerModel } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint(models),
    ...createAxes({ models, flags }),
    ...createAxisTitles(models),
    createPointLabels(models),
    createOutOfBounds({ models, context }),
    ...colorService.custom.legendComponents(),
    disclaimer,
    ...createTooltips({ models, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
