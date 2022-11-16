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
        const deltaX = currentRect.x - previousRect.x;
        const deltaY = currentRect.y - previousRect.y;
        currentNodes.forEach((node) => {
          // Horizontal line
          if (node.y1 === node.y2) {
            node.x2 = node.x1 + currentRect.width;
            node.y1 -= deltaY;
            node.y2 -= deltaY;
          }
          // Vertical line
          else if (node.x1 === node.x2) {
            node.y2 = node.y1 + currentRect.height;
            node.x1 -= deltaX;
            node.x2 -= deltaX;
          }
        });
      },
    },
  };

  return gridLinesDef;
}
