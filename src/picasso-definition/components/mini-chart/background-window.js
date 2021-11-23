import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartBackgroundWindow(chartModel) {
  const ratio = NUMBERS.MINI_CHART.RATIO;
  const padding = NUMBERS.MINI_CHART.PADDING; // Padding from the bottom right corner
  let width;
  let height;
  return {
    key: KEYS.COMPONENT.MINI_CHART_BACKGROUND,
    type: 'mini-chart-window',
    show: () => chartModel.query.miniChartEnabled(),
    settings: {
      style: { borderColor: 'black', background: 'rgba(255, 255, 255, 0.7)' },
      rect: {
        x: () => width * (1 - ratio) - padding,
        y: () => height * (1 - ratio) - padding,
        width: () => width * ratio,
        height: () => height * ratio,
      },
    },
    beforeRender: ({ size }) => {
      ({ width, height } = size);
    },
  };
}
