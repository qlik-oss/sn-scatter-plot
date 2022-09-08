export default function getNumVisiblePoints({ layoutService, viewHandler }) {
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  const dataPages = layoutService.getDataPages();
  const { qMatrix } = dataPages[0] || {};
  if (!qMatrix) return 0;
  const visiblePoints = qMatrix.filter((row) => {
    const x = row[1].qNum;
    const y = row[2].qNum;
    return x >= xAxisMin && x <= xAxisMax && y >= yAxisMin && y <= yAxisMax;
  });
  return visiblePoints.length;
}
