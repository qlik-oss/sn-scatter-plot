import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function isOob({ nodeData, chart, sizeScaleFn, viewHandler }) {
  const size = chart.component(KEYS.COMPONENT.POINT).rect;
  if (!size) return true;
  const { height, width } = size;
  const windowSizeMultiplier = Math.min(height, width) / NUMBERS.WINDOW_SIZE_BASE;
  const pointSize = parseInt(sizeScaleFn(nodeData, windowSizeMultiplier) || '8px', 10);
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  const xBuffer = (pointSize * (xAxisMax - xAxisMin)) / (width * 2);
  const yBuffer = (pointSize * (yAxisMax - yAxisMin)) / (height * 2);
  return (
    nodeData.x.value < xAxisMin - xBuffer ||
    nodeData.x.value > xAxisMax + xBuffer ||
    nodeData.y.value < yAxisMin - yBuffer ||
    nodeData.y.value > yAxisMax + yBuffer
  );
}
