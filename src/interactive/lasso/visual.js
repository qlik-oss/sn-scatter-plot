const lasso = ({ key, components }) => ({
  key,
  type: 'brush-lasso',
  layout: {
    displayOrder: 99,
  },
  settings: {
    brush: {
      components,
    },
    lasso: {
      fill: 'rgba(0, 0, 0, 0)',
      stroke: 'black',
      strokeWidth: 2,
      opacity: 0.7,
      strokeDasharray: [],
    },
    snapIndicator: {
      threshold: 75,
      strokeDasharray: '5, 5',
      stroke: 'black',
      strokeWidth: 2,
      opacity: 0.7,
    },
    startPoint: {
      r: 10,
      stroke: 'rgba(77, 192, 78, 1)',
      strokeWidth: 0,
      opacity: 1,
    },
  },
});

export default lasso;
