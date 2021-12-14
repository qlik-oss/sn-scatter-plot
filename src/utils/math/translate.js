export default function translate({ viewHandler, direction, percent, rtl }) {
  const { xAxisMax, xAxisMin, yAxisMax, yAxisMin } = viewHandler.getDataView();
  let xDiff = 0;
  let yDiff = 0;
  if (direction === 'x') {
    xDiff = ((xAxisMax - xAxisMin) * percent) / 100;
  } else {
    yDiff = ((yAxisMax - yAxisMin) * percent) / 100;
  }
  const dataView = {
    xAxisMin: rtl ? xAxisMin - xDiff : xAxisMin + xDiff,
    xAxisMax: rtl ? xAxisMax - xDiff : xAxisMax + xDiff,
    yAxisMax: yAxisMax + yDiff,
    yAxisMin: yAxisMin + yDiff,
  };
  viewHandler.setDataView(dataView);
}
