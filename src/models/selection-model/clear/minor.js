const NAMES = ['xRange', 'yRange'];

export default function clearMinorRange({ current, chart, document }) {
  if (NAMES.indexOf(current) > -1) {
    return;
  }

  const clearRange = (axisRange) => {
    axisRange.emit('rangeClear');

    const { scale, brush } = axisRange.settings.settings;
    const fields = chart
      .scale(scale)
      .data()
      .fields.map((f) => f.id());
    const currentBrush = chart.brush(brush);
    const brushes = currentBrush.brushes().filter((t) => t.type === 'range' && fields.some((id) => id === t.id));

    if (currentBrush && brushes.length) {
      brushes.forEach((b) => {
        currentBrush.removeRanges(b.brush.ranges().map((range) => ({ key: b.id, range })));
      });
    }
  };

  const xRange = chart.component('x-range-brush');

  if (xRange && document.querySelector("[data-key='x-range-brush-edge-0']")) {
    clearRange(xRange);
  }

  const yRange = chart.component('y-range-brush');

  if (yRange && document.querySelector("[data-key='y-range-brush-edge-0']")) {
    clearRange(yRange);
  }
}
