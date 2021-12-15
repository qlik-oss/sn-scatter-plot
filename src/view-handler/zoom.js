import { eventToComponentPoint } from '../utils/event-utils';

const ZOOM_SCALE = 2 ** (1 / 2);

function transform(scale, start, end, factor) {
  const range = end - start;
  const value = start + range * scale;
  const newStart = value - range * scale * factor;
  const newEnd = newStart + range * factor;
  return [newStart, newEnd];
}

export default function zoom({ e, chart, pointComponent, viewHandler, pinchZoomFactor, buttonZoomDirection }) {
  const { scale, maxScale, minScale } = viewHandler.getMeta();
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  let zoomFactor;
  let fixedPoint;
  if (buttonZoomDirection) {
    zoomFactor = buttonZoomDirection === 'out' ? ZOOM_SCALE : 1 / ZOOM_SCALE;
    fixedPoint = { normX: 0.5, normY: 0.5 };
  } else {
    zoomFactor = pinchZoomFactor || (e.deltaY > 0 ? ZOOM_SCALE : 1 / ZOOM_SCALE);
    const p = eventToComponentPoint(e, chart, pointComponent);
    const { width, height } = pointComponent.rect.computedPhysical;
    fixedPoint = { normX: p.x / width, normY: p.y / height };
  }
  const newScale = zoomFactor * scale;
  if (newScale > maxScale || newScale < minScale) {
    return;
  }
  const [xMin, xMax] = transform(fixedPoint.normX, xAxisMin, xAxisMax, zoomFactor);
  const [yMax, yMin] = transform(fixedPoint.normY, yAxisMax, yAxisMin, zoomFactor);
  viewHandler.setDataView({
    xAxisMin: xMin,
    xAxisMax: xMax,
    yAxisMin: yMin,
    yAxisMax: yMax,
  });
  viewHandler.setMeta({ scale: newScale });
}
