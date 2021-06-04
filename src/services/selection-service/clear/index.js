import clearMinorRange from './minor';
import clearLegendRange from './legend';

export default function clearBrushes({ current, chart, document }) {
  clearMinorRange({
    current,
    chart,
    document,
  });
  clearLegendRange({
    current,
    chart,
    document,
  });
}
