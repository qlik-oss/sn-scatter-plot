import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

const SPACINGS = {
  NO_LINES: 0,
  WIDE: 1,
  MEDIUM: 2,
  NARROW: 3,
};

export default function createGridLines(models) {
  const { layoutService, themeService, tickModel } = models;
  const { auto, spacing } = layoutService.getLayoutValue('gridLine', {});
  if (!auto && spacing === SPACINGS.NO_LINES) {
    return false;
  }

  const { line } = themeService.getStyles().grid;

  const gridLinesDef = {
    key: KEYS.COMPONENT.GRID_LINES,
    type: 'grid-line',
    x: {
      scale: KEYS.SCALE.X,
    },
    y: {
      scale: KEYS.SCALE.Y,
    },
    layout: {
      minimumLayoutMode: MODES.GRID_LINES,
    },
    preferredSize() {
      return {
        edgeBleed: {
          left: 1,
          right: 1,
          top: 1,
          bottom: 1,
        },
      };
    },
    ticks: {
      // internal trick with Picasso: passing "(d, i) => i % 2 === 0" to display every second major tick
      show: !auto && spacing === SPACINGS.WIDE ? (d, i) => d?.datum?.value === 0 || i % 2 === 0 : true,
      stroke: (d) => (d?.datum?.value === 0 ? line.highContrast.color : line.major.color),
      strokeWidth: 1,
    },
    minorTicks: {
      show: !auto && spacing === SPACINGS.NARROW,
      stroke: line.minor.color,
      strokeWidth: 1,
    },
    animations: {
      enabled: true,
      trackBy: (node, i, nodeState) => {
        const xAxisNodes = tickModel.query.getChart().getToBeRenderedNodes('text', 'x-axis');
        const xAxisPreNodes = tickModel.query.getChart().getRenderedNodes('text', 'x-axis');
        const yAxisNodes = tickModel.query.getChart().getToBeRenderedNodes('text', 'y-axis');
        const yAxisPreNodes = tickModel.query.getChart().getRenderedNodes('text', 'y-axis');
        const nodeLabels = [...xAxisNodes.map((n) => `x: ${n.text}`), ...yAxisNodes.map((n) => `y: ${n.text}`)];
        const preNodeLabels = [
          ...xAxisPreNodes.map((n) => `x: ${n.text}`),
          ...yAxisPreNodes.map((n) => `y: ${n.text}`),
        ];
        let id;
        console.log(tickModel);
        if (nodeState === 'old') id = preNodeLabels[i];
        else id = nodeLabels[i];
        return id;
      },
    },
  };

  return gridLinesDef;
}
