export default function createBrush() {
  return {
    consume: [
      {
        context: 'selection',
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
