export default function isInBinValueSelection(chart) {
  const brush = chart.brush('selection');
  const brushArray = brush.brushes();
  if (brushArray?.length && brushArray[0]?.type === 'value' && brushArray[0]?.id === 'binData/bin') {
    return true;
  }
  return false;
}
