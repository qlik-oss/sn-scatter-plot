import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createHeatMap from './heat-map';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createTooltips from './tooltips';
import createDisclaimer from './disclaimer';

export default function createComponents({ context, models, flags, picasso, app }) {
  const { colorService, disclaimerModel, layoutService } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context, layoutService, picasso });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint({ models }),
    createHeatMap({ app, models, flags }),
    ...createAxes({ models, flags }),
    ...createAxisTitles(models),
    createPointLabels(models),
    ...colorService.custom.legendComponents(),
    disclaimer,
    ...createTooltips({ models, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
