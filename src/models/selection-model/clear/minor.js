const NAME = 'xRange';

export default function clearMinorRange({ current, chart, document }) {
  if (current === NAME || !document.querySelector("[data-key='x-range-brush-edge-0']")) {
    return;
  }

  const xRange = chart.component('x-range-brush');

  if (!xRange) {
    return;
  }

  xRange.emit('rangeClear');

  const { scale, brush } = xRange.settings.settings;
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
}
