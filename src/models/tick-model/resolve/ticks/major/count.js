const AXIS_SPACING = {
  NARROW: 50,
  MEDIUM: 100,
  WIDE: 200,
  FALLBACK: 125,
};

const getDistance = (spacing) => {
  switch (spacing) {
    case 0.5:
      return AXIS_SPACING.NARROW;
    case 1:
      return AXIS_SPACING.MEDIUM;
    case 2:
      return AXIS_SPACING.WIDE;
    default:
      return spacing * AXIS_SPACING.FALLBACK;
  }
};

export default function getCount({ layoutModel, size }) {
  const spacing = layoutModel.getLayoutValue('measureAxis.spacing', 1);
  const distance = getDistance(spacing);

  return Math.max(1, Math.round(size / distance));
}
