import { eventToComponentPoint } from '../utils/event-utils';

const ZOOM_SCALE = 2 ** (1 / 2);

function transform(scale, start, end, factor) {
  const range = end - start;
  const value = start + range * scale;
  const newStart = value - range * scale * factor;
  const newEnd = newStart + range * factor;
  return [newStart, newEnd];
}

export default function zoom({ e, chart, componentSize, viewHandler, pinchZoomFactor, buttonZoomDirection }) {
  const { scale, maxScale, minScale } = viewHandler.getMeta();
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  let zoomFactor;
  let fixedPoint;
  let p;
  if (buttonZoomDirection) {
    zoomFactor = buttonZoomDirection === 'out' ? ZOOM_SCALE : 1 / ZOOM_SCALE;
    fixedPoint = { normX: 0.5, normY: 0.5 };
  } else {
    zoomFactor = pinchZoomFactor || (e.deltaY > 0 ? ZOOM_SCALE : 1 / ZOOM_SCALE);
    p = eventToComponentPoint(e, chart, componentSize);
    const { width, height } = componentSize;
    fixedPoint = { normX: p.x / width, normY: p.y / height };
  }
  const newScale = zoomFactor * scale;

  if (newScale > maxScale || newScale < minScale) {
    return;
  }
  const [xMin, xMax] = transform(fixedPoint.normX, xAxisMin, xAxisMax, zoomFactor);
  const [yMax, yMin] = transform(fixedPoint.normY, yAxisMax, yAxisMin, zoomFactor);
  const viewScale = Math.abs(xAxisMax - xAxisMin) / Math.abs(xMax - xMin);
  viewHandler.setDataView({
    xAxisMin: xMin,
    xAxisMax: xMax,
    yAxisMin: yMin,
    yAxisMax: yMax,
    deltaX: p ? (1 - viewScale) * p.x : 0,
    deltaY: p ? (1 - viewScale) * p.y : 0,
    scale: viewScale || 1,
  });
}
