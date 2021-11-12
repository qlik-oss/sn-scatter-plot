import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createHeatMap from './heat-map';
import createHeatMapLabels from './heat-map-labels';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createTooltips from './tooltips';
import createDisclaimer from './disclaimer';
import createOutOfBounds from './out-of-bounds';
import createHeatMapLegend from './heat-map-legend';
import createMiniChart from './mini-chart';

export default function createComponents({ context, models, flags, picasso, chart }) {
  const { colorService, disclaimerModel, layoutService, themeService } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context, layoutService, picasso });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint(models),
    createHeatMap({ models, flags }),
    ...createAxes({ models, flags }),
    ...createAxisTitles(models),
    createPointLabels(models),
    createHeatMapLabels({ themeService, picasso, context }),
    createOutOfBounds({ models, context }),
    ...colorService.custom.legendComponents(),
    createHeatMapLegend({ models, context, chart }),
    disclaimer,
    ...createMiniChart(models),
    ...createTooltips({ models, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
