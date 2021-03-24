import KEYS from '../../../constants/keys';

const SPACINGS = {
  NO_LINES: 0,
  WIDE: 1,
  MEDIUM: 2,
  NARROW: 3,
};

export default function createGridLines({ layoutModel, context }) {
  const { auto, spacing } = layoutModel.getLayoutValue('gridLine', {});

  if (!auto && spacing === SPACINGS.NONE) {
    return false;
  }

  const gridLinesDef = {
    type: 'grid-line',
    key: KEYS.COMPONENT.GRID_LINES,
    x: {
      scale: KEYS.SCALE.X,
    },
    y: {
      scale: KEYS.SCALE.Y,
    },
    ticks: {
      // internal trick with Picasso: passing "(d, i) => i % 2 === 0" to display every second major tick
      show: !auto && spacing === SPACINGS.WIDE ? (d, i) => i % 2 === 0 : true,
      stroke: context.theme.getStyle('object', 'grid.line.major', 'color') || '#cccccc',
      strokeWidth: 1,
    },
    minorTicks: {
      show: !auto && spacing === SPACINGS.NARROW,
      stroke: '#d1d1d1',
      strokeWidth: 1,
    },
  };

  return gridLinesDef;
}
