import KEYS from '../../constants/keys';
import NUMBERS from '../../constants/numbers';
import zoom from '../../utils/math/zoom';

export default function native({ chart, actions, viewHandler }) {
  const getPointTooltip = () => chart.component(KEYS.COMPONENT.POINT_TOOLTIP);
  const getLegendTooltip = () => chart.component(KEYS.COMPONENT.LEGEND_CAT_TOOLTIP);
  const getHeatMapTooltip = () => chart.component(KEYS.COMPONENT.HEAT_MAP_TOOLTIP);

  const hideTooltips = () => {
    const pointTooltip = getPointTooltip();
    if (pointTooltip?.show) {
      pointTooltip.emit('hide');
    }

    const legendTooltip = getLegendTooltip();
    if (legendTooltip?.show) {
      legendTooltip.emit('hide');
    }

    const heatMapTooltip = getHeatMapTooltip();
    if (heatMapTooltip?.show) {
      heatMapTooltip.emit('hide');
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
          [target] = chart
            .componentsFromPoint(point)
            .filter((c) => c.key === KEYS.COMPONENT.POINT || c.key === KEYS.COMPONENT.HEAT_MAP);
          if (target) {
            // TODO
            // use touch pad to zoom sometime gets console error, probbaly need to specify how much to zoom each time
            zoom({ e, chart, pointComponent: target, viewHandler });
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

          const heatMapTooltip = getHeatMapTooltip();
          if (heatMapTooltip?.show) {
            if (target.some((c) => c.key === KEYS.COMPONENT.HEAT_MAP)) {
              heatMapTooltip.emit('show', e);
            } else {
              heatMapTooltip.emit('hide');
            }
          }
        }
      },
      mouseup(e) {
        if (e.button === 2) {
          hideTooltips({ chart });
        }
      },
      mousedown(e) {
        e.preventDefault();

        // Handle click in mini chart
        const { x, y, width: W, height: H } = chart.component(KEYS.COMPONENT.POINT).rect.computedPhysical;

        // Coordinate of the clicked spot, relative to the point component
        const X0 = e.offsetX - x;
        const Y0 = e.offsetY - y;

        const ratio = NUMBERS.MINI_CHART.RATIO;
        const padding = NUMBERS.MINI_CHART.PADDING;

        // Top left corner of the mini chart, relative to the point component
        const Xmin = W * (1 - ratio) - padding;
        const Ymin = H * (1 - ratio) - padding;

        // Coordinate of the clicked spot, relative to the mini chart
        const u = X0 - Xmin;
        const v = Y0 - Ymin;
        if (u <= 0 || u >= W * ratio || v <= 0 || v >= H * ratio) {
          return;
        }

        const { homeStateDataView } = viewHandler.getMeta();
        const { xAxisMin: xMin0, xAxisMax: xMax0, yAxisMin: yMin0, yAxisMax: yMax0 } = homeStateDataView;
        const xCenter = xMin0 + (u * (xMax0 - xMin0)) / (W * ratio);
        const yCenter = yMax0 - (v * (yMax0 - yMin0)) / (H * ratio);
        const { scale } = viewHandler.getMeta();
        const xWidth = (xMax0 - xMin0) * scale;
        const yWidth = (yMax0 - yMin0) * scale;
        const xMin = xCenter - 0.5 * xWidth;
        const xMax = xCenter + 0.5 * xWidth;
        const yMin = yCenter - 0.5 * yWidth;
        const yMax = yCenter + 0.5 * yWidth;

        const dataView = {
          xAxisMin: xMin,
          xAxisMax: xMax,
          yAxisMin: yMin,
          yAxisMax: yMax,
          deltaX: 0,
          deltaY: 0,
        };

        viewHandler.setDataView(dataView);
      },
      mouseleave() {
        hideTooltips({ chart });
      },
    },
  };
}
