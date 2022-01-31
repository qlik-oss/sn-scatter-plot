export default function isInBinRangeSelection(chart) {
  const brush = chart.brush('selection');
  const brushArray = brush.brushes();
  if (brushArray?.length && (brushArray[0]?.id === 'binData/binX' || brushArray[0]?.id === 'binData/binY')) {
    return true;
  }
  return false;
}
