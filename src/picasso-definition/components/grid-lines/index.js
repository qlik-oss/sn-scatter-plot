import KEYS from '../../../constants/keys';

const SPACINGS = {
  NO_LINES: 0,
  WIDE: 1,
  MEDIUM: 2,
  NARROW: 3,
};

export default function createGridLines({ layoutModel, context }) {
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
      show:
        layoutModel.getLayoutValue('gridLine.auto') ||
        layoutModel.getLayoutValue('gridLine.spacing') !== SPACINGS.NO_LINES,
      // TODO: show every second tick if spacing === WIDE
      stroke: context.theme.getStyle('object', 'grid.line.major', 'color') || '#cccccc',
      strokeWidth: 1,
    },
    minorTicks: {
      show:
        !layoutModel.getLayoutValue('gridLine.auto') &&
        layoutModel.getLayoutValue('gridLine.spacing') === SPACINGS.NARROW,
      stroke: context.theme.getStyle('object', 'grid.line.minor', 'color') || '#cccccc',
      strokeWidth: 1,
    },
  };

  return gridLinesDef;
}
