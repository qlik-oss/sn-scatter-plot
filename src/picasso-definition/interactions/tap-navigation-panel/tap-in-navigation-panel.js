import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function tapInNavigationPanel({ e, viewHandler, chart }) {
  // Handle tap/click in mini chart
  const { x, y, width: W, height: H } = chart.component(KEYS.COMPONENT.POINT).rect.computedPhysical;

  // Coordinate of the clicked spot, relative to the point component
  const X0 = e.pointers[0].offsetX - x - e.deltaX; // deltaX, deltaY !== 0 in case of panning
  const Y0 = e.pointers[0].offsetY - y - e.deltaY; // detalX, deltaY === 0 in case of tapping

  const ratio = NUMBERS.MINI_CHART.RATIO;
  const padding = NUMBERS.MINI_CHART.PADDING;

  // Top left corner of the mini chart, relative to the point component
  const Xmin = W * (1 - ratio) - padding;
  const Ymin = H * (1 - ratio) - padding;

  // Coordinate of the clicked spot, relative to the mini chart
  const u = X0 - Xmin;
  const v = Y0 - Ymin;
  const { scale, homeStateDataView } = viewHandler.getMeta();
  const miniChartShown = chart.component(KEYS.COMPONENT.MINI_CHART_POINT)?.show();
  const tappedPointInsideMiniChart = u >= 0 && u <= W * ratio && v >= 0 && v <= H * ratio;
  if (miniChartShown && tappedPointInsideMiniChart) {
    const { xAxisMin: xMin0, xAxisMax: xMax0, yAxisMin: yMin0, yAxisMax: yMax0 } = homeStateDataView;
    const xCenter = xMin0 + (u * (xMax0 - xMin0)) / (W * ratio);
    const yCenter = yMax0 - (v * (yMax0 - yMin0)) / (H * ratio);
    const xWidth = (xMax0 - xMin0) * scale;
    const yWidth = (yMax0 - yMin0) * scale;
    const xMin = xCenter - 0.5 * xWidth;
    const xMax = xCenter + 0.5 * xWidth;
    const yMin = yCenter - 0.5 * yWidth;
    const yMax = yCenter + 0.5 * yWidth;

    const dataView = {
      xAxisMin: xMin,
      xAxisMax: xMax,
      yAxisMin: yMin,
      yAxisMax: yMax,
      deltaX: 0,
      deltaY: 0,
    };

    viewHandler.setDataView(dataView);
    return true;
  }
  return false;
}
