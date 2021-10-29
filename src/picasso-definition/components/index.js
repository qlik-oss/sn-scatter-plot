import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createHeatMap from './heat-map';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createTooltips from './tooltips';
import createDisclaimer from './disclaimer';
import createOutOfBounds from './out-of-bounds';
import createHeatMapLegend from './heat-map-legend';

export default function createComponents({ context, models, flags, picasso, chart }) {
  const { colorService, disclaimerModel, layoutService } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context, layoutService, picasso });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint({ layoutService, colorService }),
    createHeatMap({ models, flags }),
    ...createAxes({ models, flags }),
    ...createAxisTitles(models),
    createPointLabels(models),
    createOutOfBounds({ models, context }),
    ...colorService.custom.legendComponents(),
    createHeatMapLegend({ models, context, chart }),
    disclaimer,
    ...createTooltips({ models, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
