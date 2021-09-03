import { eventToComponentPoint } from '../event-utils';

const ZOOM_SCALE = 2 ** (1 / 2);

function transform(scale, start, end, factor) {
  const range = end - start;
  const value = start + range * scale;
  const newStart = value - range * scale * factor;
  const newEnd = newStart + range * factor;
  return [newStart, newEnd];
}

export function zoom(e, chart, pointComponent, viewHandler) {
  const zoomFactor = e.deltaY > 0 ? ZOOM_SCALE : 1 / ZOOM_SCALE;
  const { scale, maxScale, minScale } = viewHandler.getMeta();
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

export function pinchZoom({ center, chart, newScale, pointComponent, viewHandler }) {
  const { scale, maxScale, minScale } = viewHandler.getMeta();
  const zoomScale = scale * newScale;
  if (zoomScale > maxScale || zoomScale < minScale) {
    return;
  }
  const { width, height } = pointComponent.rect.computedPhysical;
  const offsetX = chart.element.getBoundingClientRect().width - width;
  const offsetY = chart.element.getBoundingClientRect().height - height;
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  const [xMin, xMax] = transform((center.x - offsetX) / width, xAxisMin, xAxisMax, 1 / newScale);
  const [yMax, yMin] = transform((center.y - offsetY) / height, yAxisMax, yAxisMin, 1 / newScale);
  viewHandler.setDataView({
    xAxisMin: xMin,
    xAxisMax: xMax,
    yAxisMin: yMin,
    yAxisMax: yMax,
  });
  viewHandler.setMeta({ scale: newScale });
}
