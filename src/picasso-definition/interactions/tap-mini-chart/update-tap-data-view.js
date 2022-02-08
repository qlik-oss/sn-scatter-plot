import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import getTapPosition from './tap-position';

const { RATIO } = NUMBERS.MINI_CHART;

export default function updateTapDataView({ viewHandler, e, chart, rtl }) {
  const { scale, homeStateDataView } = viewHandler.getMeta();

  const tapPoint = getTapPosition({ e, chart, rtl });
  const miniChart = {
    width: chart.component(KEYS.COMPONENT.MINI_CHART_POINT).rect.computedPhysical.width * RATIO,
    height: chart.component(KEYS.COMPONENT.MINI_CHART_POINT).rect.computedPhysical.height * RATIO,
  };
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = homeStateDataView;
  const xCenter = rtl
    ? xAxisMax - (tapPoint.x * (xAxisMax - xAxisMin)) / miniChart.width
    : xAxisMin + (tapPoint.x * (xAxisMax - xAxisMin)) / miniChart.width;
  const yCenter = yAxisMax - (tapPoint.y * (yAxisMax - yAxisMin)) / miniChart.height;
  const xWidth = (xAxisMax - xAxisMin) * scale;
  const yWidth = (yAxisMax - yAxisMin) * scale;

  const dataView = {
    xAxisMin: xCenter - 0.5 * xWidth,
    xAxisMax: xCenter + 0.5 * xWidth,
    yAxisMin: yCenter - 0.5 * yWidth,
    yAxisMax: yCenter + 0.5 * yWidth,
    deltaX: 0,
    deltaY: 0,
  };

  viewHandler.setDataView(dataView);
}
