import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';

export default function createMiniChart({ chartModel }) {
  const s = NUMBERS.MINI_CHART.SCALE;
  let xMinCenter;
  let xMaxCenter;
  let yMinCenter;
  let yMaxCenter;
  let xMinNav;
  let xMaxNav;
  let yMinNav;
  let yMaxNav;
  let centerWidth;
  let centerHeight;
  let navX;
  let navY;
  let navWidth;
  let navHeight;
  let binWidth;
  let binHeight;
  let binWidthPx;
  let binHeightPx;
  let viewHandler = chartModel.query.getViewHandler();
  const homeStateBins = chartModel.query.getDataHandler().binArray.slice();
  if (homeStateBins.length) {
    const firstBin = homeStateBins[0];
    binWidth = Math.abs(firstBin.qText[0] - firstBin.qText[2]);
    binHeight = Math.abs(firstBin.qText[1] - firstBin.qText[3]);
  }
  const show = () => {
    const { isHomeState, scale } = viewHandler.getMeta();
    return !isHomeState && scale < 1;
  };
  const miniChartBackgroundDef = {
    key: 'my-mini-chart-bg',
    type: 'mini-chart-background',
    style: { borderColor: 'black', boxSizing: 'content-box' },
    rect: {
      x: () => centerWidth * (1 - s),
      y: () => centerHeight * (1 - s),
      width: () => centerWidth * s,
      height: () => centerHeight * s,
    },
    show,
    beforeRender: ({ size }) => {
      ({ width: centerWidth, height: centerHeight } = size);
      viewHandler = chartModel.query.getViewHandler();
    },
  };
  const miniChartNavRectDef = {
    key: 'my-mini-chart-nav',
    type: 'mini-chart-background',
    style: { borderColor: 'red', boxSizing: 'border-box' },
    rect: {
      x: () => centerWidth * (1 - s) + navX,
      y: () => centerHeight * (1 - s) + navY,
      width: () => navWidth,
      height: () => navHeight,
    },
    show,
    beforeRender: ({ size }) => {
      viewHandler = chartModel.query.getViewHandler();
      ({ width: centerWidth, height: centerHeight } = size);
      ({
        xAxisMin: xMinCenter,
        xAxisMax: xMaxCenter,
        yAxisMin: yMinCenter,
        yAxisMax: yMaxCenter,
      } = viewHandler.getMeta().homeStateDataView);
      ({ xAxisMin: xMinNav, xAxisMax: xMaxNav, yAxisMin: yMinNav, yAxisMax: yMaxNav } = viewHandler.getDataView());
      navWidth = (centerWidth * s * (xMaxNav - xMinNav)) / (xMaxCenter - xMinCenter);
      navHeight = (centerHeight * s * (yMaxNav - yMinNav)) / (yMaxCenter - yMinCenter);
      navX = (centerWidth * s * (xMinNav - xMinCenter)) / (xMaxCenter - xMinCenter);
      navY = (centerHeight * s * (yMaxCenter - yMaxNav)) / (yMaxCenter - yMinCenter);

      if (navX <= 0) {
        if (navX + navWidth <= 0) {
          navWidth = 0;
        } else {
          navWidth += navX;
        }

        navX = 0;
      }

      if (navX + navWidth >= centerWidth * s) {
        if (navX >= centerWidth * s) {
          navX = centerWidth * s;
          navWidth = 0;
        } else {
          navWidth = centerWidth * s - navX;
        }
      }

      if (navY <= 0) {
        if (navY + navHeight <= 0) {
          navHeight = 0;
        } else {
          navHeight += navY;
        }

        navY = 0;
      }

      if (navY + navHeight >= centerHeight * s) {
        if (navY >= centerHeight * s) {
          navY = centerHeight * s;
          navHeight = 0;
        } else {
          navHeight = centerHeight * s - navY;
        }
      }
    },
  };
  const miniChartDef = {
    key: 'my-mini-chart',
    type: 'point',
    data: {
      items: homeStateBins,
    },
    show,
    settings: {
      x: (d) => {
        const value = (d.datum.value.qText[0] + d.datum.value.qText[2]) / 2;
        ({ xAxisMin: xMinCenter, xAxisMax: xMaxCenter } = viewHandler.getMeta().homeStateDataView);
        const xCoordinate = ((value - xMinCenter) / (xMaxCenter - xMinCenter)) * s + (1 - s);
        return xCoordinate;
      },
      y: (d) => {
        const value = (d.datum.value.qText[1] + d.datum.value.qText[3]) / 2;
        ({ yAxisMin: yMaxCenter, yAxisMax: yMaxCenter } = viewHandler.getMeta().homeStateDataView);
        const yCoordinate = (1 - (value - yMinCenter) / (yMaxCenter - yMinCenter)) * s + (1 - s);
        return yCoordinate;
      },
      fill: {
        scale: KEYS.SCALE.HEAT_MAP_COLOR,
        fn: (d) => d.scale(d.datum.value.qNum),
      },
      shape: () => ({
        type: 'rect',
        width: binWidthPx,
        height: binHeightPx,
      }),
    },
    beforeRender: ({ size }) => {
      ({
        xAxisMin: xMinCenter,
        xAxisMax: xMaxCenter,
        yAxisMin: yMinCenter,
        yAxisMax: yMaxCenter,
      } = viewHandler.getMeta().homeStateDataView);
      binWidthPx = ((binWidth * size.width) / (xMaxCenter - xMinCenter)) * s;
      binHeightPx = ((binHeight * size.height) / (yMaxCenter - yMinCenter)) * s;
    },
  };
  return [miniChartDef, miniChartBackgroundDef, miniChartNavRectDef];
}
