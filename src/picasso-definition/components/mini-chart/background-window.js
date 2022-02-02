import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartBackgroundWindow(chartModel, rtl) {
  const { RATIO, PADDING } = NUMBERS.MINI_CHART; // Padding from the bottom right corner
  let width;
  let height;
  return {
    key: KEYS.COMPONENT.MINI_CHART_BACKGROUND,
    type: 'mini-chart-window',
    show: () => chartModel.query.miniChartEnabled(),
    style: { borderColor: '#B3B3B3', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '4px' },
    settings: {
      rect: {
        x: () => (rtl ? PADDING : width * (1 - RATIO) - PADDING),
        y: () => height * (1 - RATIO) - PADDING,
        width: () => width * RATIO,
        height: () => height * RATIO,
      },
    },
    beforeRender: ({ size }) => {
      ({ width, height } = size);
    },
  };
}
