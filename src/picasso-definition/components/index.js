import createGridLines from './grid-lines';
import createAxes from './axes';
import createAxisTitles from './axis-titles';
import createPoint from './point';
import createHeatMap from './heat-map';
import createHeatMapLabels from './heat-map-labels';
import createReferenceLines from './reference-lines';
import createPointLabels from './point-labels';
import createDisclaimer from './disclaimer';
import createOutOfBounds from './out-of-bounds';
import createHeatMapLegend from './heat-map-legend';
import createNavigationPanel from './navigation-panel';
import createMiniChart from './mini-chart';

export default function createComponents({ context, models, flags, picasso, chart }) {
  const { colorService, disclaimerModel, layoutService, themeService, chartModel, tooltipService } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context, layoutService, picasso });

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint(models),
    createHeatMap(chartModel),
    ...createAxes({ models, flags }),
    ...createAxisTitles({ models, context }),
    createPointLabels(models),
    createHeatMapLabels({ themeService, chartModel, picasso, context }),
    createOutOfBounds({ models, context }),
    ...colorService.custom.legendComponents(),
    createHeatMapLegend({ models, context, chart }),
    disclaimer,
    createNavigationPanel({ layoutService, chartModel, context }),
    ...createMiniChart({ models, flags }),
    ...tooltipService.getComponents(),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
