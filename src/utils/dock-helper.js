const getDock = ({ dock, chart, rtl }) => {
  if (dock !== 'auto') {
    return dock || 'right';
  }

  if (chart) {
    const chartBounds = chart.element.getBoundingClientRect();
    if (chartBounds.height > chartBounds.width) {
      return 'bottom';
    }
  }

  return rtl ? 'left' : 'right';
};

export default getDock;
