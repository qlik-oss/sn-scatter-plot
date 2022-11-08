/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

const SPACINGS = {
  NO_LINES: 0,
  WIDE: 1,
  MEDIUM: 2,
  NARROW: 3,
};

export default function createGridLines(models, animationsEnabled) {
  const { layoutService, themeService } = models;
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
      enabled: animationsEnabled,
      trackBy: (node) => `${node.dir}: ${node.value}`,
      compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
        const deltaWidth = currentRect.width - previousRect.width;
        const deltaX = currentRect.x - previousRect.x;
        currentNodes.forEach((node) => {
          if (node.dir === 'x') {
            // Move x grid lines towards the opposite direction to make them stay at the same absolute positions
            node.x1 -= deltaX;
            node.x2 -= deltaX;
          } else {
            // Only expand y grid lines at right ends, the left ends go with the currentRect to avoid the gap
            node.x2 += deltaWidth;
          }
        });
      },
    },
  };

  return gridLinesDef;
}
