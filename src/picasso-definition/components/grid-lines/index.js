import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

const SPACINGS = {
  NO_LINES: 0,
  WIDE: 1,
  MEDIUM: 2,
  NARROW: 3,
};

export default function createGridLines(models) {
  const { layoutService, themeService } = models;
  const { auto, spacing } = layoutService.getLayoutValue('gridLine', {});
  if (!auto && spacing === SPACINGS.NO_LINES) {
    return false;
  }

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
      show: !auto && spacing === SPACINGS.WIDE ? (d, i) => i % 2 === 0 : true,
      stroke: themeService.getStyles().grid.line.major.color,
      strokeWidth: 1,
    },
    minorTicks: {
      show: !auto && spacing === SPACINGS.NARROW,
      stroke: themeService.getStyles().grid.line.minor.color,
      strokeWidth: 1,
    },
  };

  return gridLinesDef;
}
