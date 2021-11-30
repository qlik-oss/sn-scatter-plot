import NUMBERS from '../../../constants/numbers';
import KEYS from '../../../constants/keys';

// Translation (up/down/left/right)
function translate({ viewHandler, direction, percent }) {
  const { xAxisMax, xAxisMin, yAxisMax, yAxisMin } = viewHandler.getDataView();
  let deltaX = 0;
  let deltaY = 0;
  if (direction === 'x') {
    deltaX = ((xAxisMax - xAxisMin) * percent) / 100;
  } else {
    deltaY = ((yAxisMax - yAxisMin) * percent) / 100;
  }
  const dataView = {
    xAxisMin: xAxisMin + deltaX,
    xAxisMax: xAxisMax + deltaX,
    yAxisMax: yAxisMax + deltaY,
    yAxisMin: yAxisMin + deltaY,
  };
  viewHandler.setDataView(dataView);
}

// Zoom in/ Zoom out
function transform(scale, start, end, factor) {
  const range = end - start;
  const value = start + range * scale;
  const newStart = value - range * scale * factor;
  const newEnd = newStart + range * factor;
  return [newStart, newEnd];
}

function zoom({ viewHandler, zoomDirection }) {
  const { scale, maxScale, minScale } = viewHandler.getMeta();
  const zoomFactor = zoomDirection === 'in' ? 2 ** (-1 / 2) : 2 ** (1 / 2);
  const newScale = zoomFactor * scale;

  if (newScale > maxScale || newScale < minScale) {
    return;
  }
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getDataView();
  const [xMin, xMax] = transform(0.5, xAxisMin, xAxisMax, zoomFactor);
  const [yMax, yMin] = transform(0.5, yAxisMax, yAxisMin, zoomFactor);
  viewHandler.setDataView({
    xAxisMin: xMin,
    xAxisMax: xMax,
    yAxisMin: yMin,
    yAxisMax: yMax,
  });
  viewHandler.setMeta({ scale: newScale });
}

export default function createNavigationPanel({ layoutService, chartModel }) {
  const navigation = layoutService.getLayoutValue('navigation');
  const viewHandler = chartModel.query.getViewHandler();
  return {
    key: KEYS.COMPONENT.NAVIGATION_PANEL,
    type: 'navigation-panel',
    show: navigation,
    style: { padding: NUMBERS.NAVIGATION_PANEL.PADDING, gridWidth: NUMBERS.NAVIGATION_PANEL.GRID_WIDTH },
    buttonList: {
      home: {
        isDisabled: () => viewHandler.getMeta().isHomeState,
        callBack: () => {
          viewHandler.setDataView(viewHandler.getMeta().homeStateDataView);
        },
      },
      left: {
        callBack: () => {
          translate({ viewHandler, direction: 'x', percent: -10 });
        },
      },
      right: {
        callBack: () => {
          translate({ viewHandler, direction: 'x', percent: 10 });
        },
      },
      up: {
        callBack: () => {
          translate({ viewHandler, direction: 'y', percent: 10 });
        },
      },
      down: {
        callBack: () => {
          translate({ viewHandler, direction: 'y', percent: -10 });
        },
      },

      zoomIn: {
        callBack: () => {
          zoom({ viewHandler, zoomDirection: 'in' });
        },
      },

      zoomOut: {
        callBack: () => {
          zoom({ viewHandler, zoomDirection: 'out' });
        },
      },
    },
  };
}
