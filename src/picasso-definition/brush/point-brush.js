export default function createBrush() {
  const data = ({ brush }) => {
    const res = brush.brushes();
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
            stroke: '#000',
            strokeWidth: 2,
          },
        },
      },
    ],
  };
}
