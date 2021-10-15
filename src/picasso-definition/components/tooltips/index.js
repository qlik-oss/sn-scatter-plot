import createPointTooltip from './point';
import createHeatMapTooltip from './heat-map-tooltip';

export default function createTooltips({ models, context }) {
  return [createPointTooltip({ models, context }), createHeatMapTooltip({ context })];
}
