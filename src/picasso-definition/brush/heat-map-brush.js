export default function createBrush() {
  let isRangeSelection;
  const data = ({ brush }) => {
    const res = brush.brushes();
    isRangeSelection = res[0]?.type === 'range';
    return res.length > 1 ? ['x', 'y'] : undefined;
  };
  return {
    consume: [
      {
        data,
        context: 'selection',
        mode: 'and',
        style: {
          inactive: {
            opacity: 0.3,
          },
          active: {
            strokeWidth: () => (isRangeSelection ? 0 : 2),
            stroke: () => (isRangeSelection ? undefined : '#000'),
            opacity: () => (isRangeSelection ? 0.3 : 1),
          },
        },
      },
    ],
  };
}
