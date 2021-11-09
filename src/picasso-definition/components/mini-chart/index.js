export default function createMiniChart({ chartModel, tickModel }) {
  const scaleRatio = 0.25;
  let xMin;
  let xMax;
  let yMin;
  let yMax;
  let width;
  let height;
  let viewHandler = chartModel.query.getViewHandler();
  let dataHandler = chartModel.query.getDataHandler();
  let homeStateBins = dataHandler.binArray.slice();
  const show = () => {
    const { isHomeState, scale } = viewHandler.getMeta();
    return !isHomeState && scale < 1;
  };
  const miniChartBackgroundDef = {
    key: 'my-mini-chart-bg',
    type: 'mini-chart-background',
    style: { borderColor: 'gray' },
    rect: {
      x: () => width * (1 - scaleRatio),
      y: () => height * (1 - scaleRatio),
      width: () => width * scaleRatio,
      height: () => height * scaleRatio,
    },
    show,
    beforeRender: () => {
      ({ width, height } = tickModel.query.getSize());
      viewHandler = chartModel.query.getViewHandler();
    },
  };
  const miniChartNavRectDef = {
    key: 'my-mini-chart-nav',
    type: 'mini-chart-background',
    style: { borderColor: 'red' },
    rect: {
      x: () => 100,
      y: () => 100,
      width: () => 20,
      height: () => 20,
    },
    show,
    beforeRender: () => {
      ({ width, height } = tickModel.query.getSize());
      viewHandler = chartModel.query.getViewHandler();
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
        ({ xAxisMin: xMin, xAxisMax: xMax } = viewHandler.getMeta().homeStateDataView);
        const xCoordinate = ((value - xMin) / (xMax - xMin)) * scaleRatio + (1 - scaleRatio);
        return xCoordinate;
      },
      y: (d) => {
        const value = (d.datum.value.qText[1] + d.datum.value.qText[3]) / 2;
        ({ yAxisMin: yMin, yAxisMax: yMax } = viewHandler.getMeta().homeStateDataView);
        const yCoordinate = (1 - (value - yMin) / (yMax - yMin)) * scaleRatio + (1 - scaleRatio);
        return yCoordinate;
      },
      fill: 'blue',
      shape: () => ({
        type: 'rect',
        width: 2,
        height: 2,
      }),
    },
    beforeRender: () => {
      viewHandler = chartModel.query.getViewHandler();
      dataHandler = chartModel.query.getDataHandler();
      if (viewHandler.getMeta().isHomeState) {
        homeStateBins = dataHandler.binArray.slice();
      }
    },
  };
  return [miniChartDef, miniChartBackgroundDef, miniChartNavRectDef];
}
