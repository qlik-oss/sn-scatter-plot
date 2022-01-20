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
import createHeatMapHighLight from './heat-map-highlight';

export default function createComponents({ context, models, picasso, chart, actions }) {
  const { colorService, disclaimerModel, layoutService, themeService, chartModel, tooltipService } = models;
  const disclaimer = createDisclaimer({ disclaimerModel, context, layoutService, picasso });
  const { rtl } = context;

  if (disclaimerModel.query.getHasSuppressingDisclaimer()) {
    return [disclaimer];
  }

  const components = [
    createGridLines(models),
    ...createReferenceLines({ models, context }),
    createPoint(models),
    createHeatMap(chartModel),
    ...createAxes({ models }),
    ...createAxisTitles({ models, context }),
    createPointLabels({ models, chart }),
    createOutOfBounds({ models, context, chart }),
    ...colorService.custom.legendComponents(),
    createHeatMapLegend({ models, context, chart }),
    disclaimer,
    createNavigationPanel({ layoutService, chartModel, rtl, chart, actions }),
    ...createMiniChart({ models }),
    ...tooltipService.getComponents(),
    createHeatMapHighLight({ chartModel, layoutService, actions }),
    createHeatMapLabels({ themeService, chartModel, picasso, context }),
  ].filter(Boolean);
  // setDisplayOrder(components);

  return components;
}
