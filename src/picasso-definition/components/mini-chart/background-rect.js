import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChartBackgroundRect({ chartModel }) {
  const ratio = NUMBERS.MINI_CHART.RATIO;
  const padding = NUMBERS.MINI_CHART.PADDING; // Padding from the bottom right corner
  let width;
  let height;
  const viewHandler = chartModel.query.getViewHandler();
  const show = () => {
    const { isHomeState, scale } = viewHandler.getMeta();
    return !isHomeState && scale < 1;
  };
  return {
    key: KEYS.COMPONENT.MINI_CHART_BACKGROUND,
    type: 'custom-rect',
    style: { borderColor: 'black', background: 'rgba(255, 255, 255, 0.7)' },
    rect: {
      x: () => width * (1 - ratio) - padding,
      y: () => height * (1 - ratio) - padding,
      width: () => width * ratio,
      height: () => height * ratio,
    },
    show,
    beforeRender: ({ size }) => {
      ({ width, height } = size);
    },
  };
}
