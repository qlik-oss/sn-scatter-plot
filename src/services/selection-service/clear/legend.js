const NAME = 'legendRange';

export default function clearLegendRange({ current, chart, document }) {
  if (current === NAME || !document.querySelector("[data-key='legend-range-brush-edge-0']")) {
    return;
  }

  const legendRange = chart.component('legend-range-brush');

  if (!legendRange) {
    return;
  }

  legendRange.emit('rangeClear');

  chart.brush('selection').clear();
}
