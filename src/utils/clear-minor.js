export default function clearMinor({ chart, actions }) {
  const brush = chart.brush('selection');
  const brushArray = brush.brushes();
  if (brushArray?.length && brushArray[0]?.type === 'range') {
    actions.select.emit('start');
  }
}
