import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import getTapPosition from './tap-position';

const { RATIO } = NUMBERS.MINI_CHART;

export default function updateTapDataView({ viewHandler, e, chart }) {
  const { scale, homeStateDataView } = viewHandler.getMeta();

  const tapPoint = getTapPosition({ e, chart });
  const miniChart = {
    width: chart.component(KEYS.COMPONENT.MINI_CHART_POINT).rect.computedPhysical.width * RATIO,
    height: chart.component(KEYS.COMPONENT.MINI_CHART_POINT).rect.computedPhysical.height * RATIO,
  };
  const xCenter =
    homeStateDataView.xAxisMin +
    (tapPoint.x * (homeStateDataView.xAxisMax - homeStateDataView.xAxisMin)) / miniChart.width;
  const yCenter =
    homeStateDataView.yAxisMax -
    (tapPoint.y * (homeStateDataView.yAxisMax - homeStateDataView.yAxisMin)) / miniChart.height;
  const xWidth = (homeStateDataView.xAxisMax - homeStateDataView.xAxisMin) * scale;
  const yWidth = (homeStateDataView.yAxisMax - homeStateDataView.yAxisMin) * scale;

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
