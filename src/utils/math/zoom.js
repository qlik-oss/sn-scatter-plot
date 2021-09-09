import { eventToComponentPoint } from '../event-utils';

const ZOOM_SCALE = 2 ** (1 / 2);

function transform(scale, start, end, factor) {
  const range = end - start;
  const value = start + range * scale;
  const newStart = value - range * scale * factor;
  const newEnd = newStart + range * factor;
  return [newStart, newEnd];
}

export default function zoom(e, chart, pointComponent, viewHandler, pinchZoomFactor) {
  const { scale, maxScale, minScale } = viewHandler.getMeta();
  const zoomFactor = pinchZoomFactor || (e.deltaY > 0 ? ZOOM_SCALE : 1 / ZOOM_SCALE);
  const newScale = zoomFactor * scale;

  if (newScale > maxScale || newScale < minScale) {
    return;
  }
  const p = eventToComponentPoint(e, chart, pointComponent);
  const { width, height } = pointComponent.rect.computedPhysical;
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  const [xMin, xMax] = transform(p.x / width, xAxisMin, xAxisMax, zoomFactor);
  const [yMax, yMin] = transform(p.y / height, yAxisMax, yAxisMin, zoomFactor);
  viewHandler.setDataView({
    xAxisMin: xMin,
    xAxisMax: xMax,
    yAxisMin: yMin,
    yAxisMax: yMax,
  });
  viewHandler.setMeta({ scale: newScale });
}
