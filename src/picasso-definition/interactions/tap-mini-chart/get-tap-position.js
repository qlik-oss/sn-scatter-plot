import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function getTapPosition({ e, chart }) {
  if (!chart.component(KEYS.COMPONENT.MINI_CHART_POINT)) {
    return null;
  }

  const { x, y, width: W, height: H } = chart.component(KEYS.COMPONENT.MINI_CHART_POINT).rect.computedPhysical;

  const bounds = chart.element.getBoundingClientRect();
  const X0 = e.center.x - bounds.left - x - e.deltaX;
  const Y0 = e.center.y - bounds.top - y - e.deltaY;

  const { RATIO, PADDING } = NUMBERS.MINI_CHART;

  // Top left corner of the mini chart, relative to the point component
  const Xmin = W * (1 - RATIO) - PADDING;
  const Ymin = H * (1 - RATIO) - PADDING;

  // Coordinate of the clicked spot, relative to the mini chart
  const u = X0 - Xmin;
  const v = Y0 - Ymin;

  const miniChartShown = chart.component(KEYS.COMPONENT.MINI_CHART_POINT).show();
  const tappedPointInsideMiniChart = u >= 0 && u <= W * RATIO && v >= 0 && v <= H * RATIO;
  if (miniChartShown && tappedPointInsideMiniChart) {
    return { x: u, y: v };
  }
  return null;
}
