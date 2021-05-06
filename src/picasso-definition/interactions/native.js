import KEYS from '../../constants/keys';
import { eventToComponentPoint } from '../../utils/event-utils';

const ZOOM_SCALE = 2 ** (1 / 2);

function transform(scale, start, end, factor) {
  const range = end - start;
  const value = start + range * scale;
  const newStart = value - range * scale * factor;
  const newEnd = newStart + range * factor;
  return [newStart, newEnd];
}

function zoom(e, chart, pointComponent, zoomHandler) {
  const p = eventToComponentPoint(e, chart, pointComponent);
  const { width, height } = pointComponent.rect.computedPhysical;

  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = zoomHandler.getZoom();
  const zoomFactor = e.deltaY > 0 ? ZOOM_SCALE : 1 / ZOOM_SCALE;
  const [xMin, xMax] = transform(p.x / width, xAxisMin, xAxisMax, zoomFactor);
  const [yMax, yMin] = transform(p.y / height, yAxisMax, yAxisMin, zoomFactor);
  const newZoom = { xAxisMin: xMin, xAxisMax: xMax, yAxisMin: yMin, yAxisMax: yMax };
  const zoomChange = zoomFactor > 1 ? 1 : -1;

  zoomHandler.setZoom(newZoom, zoomChange);
}

export default function native({ chart, actions, zoomHandler }) {
  const getPointTooltip = () => chart.component(KEYS.COMPONENT.POINT_TOOLTIP);
  const getLegendTooltip = () => chart.component(KEYS.COMPONENT.LEGEND_CAT_TOOLTIP);

  const hideTooltips = () => {
    const pointTooltip = getPointTooltip();
    if (pointTooltip?.show) {
      pointTooltip.emit('hide');
    }

    const legendTooltip = getLegendTooltip();
    if (legendTooltip?.show) {
      legendTooltip.emit('hide');
    }
  };

  function scrollLegend(e, comp) {
    // To make it the same as the old one, always scroll by item instead of pixel
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const dir = delta >= 0 ? 'next' : 'prev';
    comp.emit(dir);
  }
  return {
    type: 'native',
    events: {
      wheel(e) {
        const point = { x: e.clientX, y: e.clientY };
        let target;

        if (actions.zoom.enabled()) {
          [target] = chart.componentsFromPoint(point).filter((c) => c.key === KEYS.COMPONENT.POINT);
          if (target) {
            zoom(e, chart, target, zoomHandler);
            e.preventDefault();
          }
        }
        if (actions.interact.enabled()) {
          [target] = chart.componentsFromPoint(point).filter((c) => c.key === KEYS.COMPONENT.LEGEND_CATEGORICAL);
          if (target) {
            scrollLegend(e, target);
            e.preventDefault();
          }
        }
        hideTooltips({ chart });
      },
      mousemove(e) {
        if (actions.tooltip.enabled()) {
          const target = chart.componentsFromPoint({ x: e.clientX, y: e.clientY });
          const pointTooltip = getPointTooltip();
          if (pointTooltip?.show) {
            if (target.some((c) => c.key === KEYS.COMPONENT.POINT)) {
              pointTooltip.emit('show', e);
            } else {
              pointTooltip.emit('hide');
            }
          }
          const legendTooltip = getLegendTooltip();
          if (legendTooltip?.show) {
            if (target.some((c) => c.key === KEYS.COMPONENT.LEGEND_CATEGORICAL)) {
              legendTooltip.emit('show', e);
            } else {
              legendTooltip.emit('hide');
            }
          }
        }
      },
      mouseup(e) {
        if (e.button === 2) {
          hideTooltips({ chart });
        }
      },
      mouseleave() {
        hideTooltips({ chart });
      },
    },
  };
}
