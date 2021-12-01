export default function translate({ viewHandler, direction, percent }) {
  const { xAxisMax, xAxisMin, yAxisMax, yAxisMin } = viewHandler.getDataView();
  let deltaX = 0;
  let deltaY = 0;
  if (direction === 'x') {
    deltaX = ((xAxisMax - xAxisMin) * percent) / 100;
  } else {
    deltaY = ((yAxisMax - yAxisMin) * percent) / 100;
  }
  const dataView = {
    xAxisMin: xAxisMin + deltaX,
    xAxisMax: xAxisMax + deltaX,
    yAxisMax: yAxisMax + deltaY,
    yAxisMin: yAxisMin + deltaY,
  };
  viewHandler.setDataView(dataView);
}
