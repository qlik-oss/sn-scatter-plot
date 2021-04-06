export default function createBrush() {
  const data = (brusher) => {
    const res = brusher.brushes();
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
            stroke: '#fff',
            strokeWidth: 2,
          },
        },
      },
    ],
  };
}
