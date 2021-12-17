import KEYS from '../../constants/keys';
import createViewHandler from '../../view-handler';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  colorService,
  picasso,
  viewState,
  extremumModel,
  dataHandler,
}) {
  const EXCLUDE = [
    KEYS.COMPONENT.X_AXIS_TITLE,
    KEYS.COMPONENT.Y_AXIS_TITLE,
    KEYS.COMPONENT.MINI_CHART_POINT,
    // KEYS.COMPONENT.X_AXIS,
    // KEYS.COMPONENT.Y_AXIS,
    // KEYS.COMPONENT.GRID_LINES,
  ];

  function updatePartial() {
    requestAnimationFrame(() => {
      // TODO: cancel requests as well to optimize???
      // const startTime = Date.now();
      chart.update({
        partialData: true,
        excludeFromUpdate: EXCLUDE,
        // transforms: [
        //   {
        //     key: KEYS.COMPONENT.POINT,
        //     transform: { a: 1, b: 0, c: 0, d: 1, e: x, f: y },
        //   },
        // ],
      });
      // TODO: debounce -> interactionInProgess = false
      // console.log('chart rendered in ', Date.now() - startTime, ' ms');
    });
  }

  const viewHandler = createViewHandler({
    extremumModel,
    layoutService,
    viewState,
    updatePartial,
  });

  const mainConfig = {
    key: KEYS.DATA.MAIN,
    data: layoutService.getHyperCube(),
    config: {
      localeInfo,
    },
  };

  const getBinnedDataConfig = () => {
    if (!dataHandler.getMeta().isBinnedData) {
      return [];
    }

    return [
      {
        key: KEYS.DATA.BIN,
        type: 'matrix',
        data: dataHandler.binArray,
        config: {
          parse: {
            fields() {
              return [
                {
                  key: KEYS.FIELDS.BIN,
                  title: 'Bin',
                },
                {
                  key: KEYS.FIELDS.BIN_X,
                  title: 'X',
                },
                {
                  key: KEYS.FIELDS.BIN_Y,
                  title: 'Y',
                },
                {
                  key: KEYS.FIELDS.BIN_DENSITY,
                  title: 'Density',
                },
              ];
            },
            row(d) {
              return {
                bin: d.qElemNumber,
                binX: (d.qText[0] + d.qText[2]) / 2,
                binY: (d.qText[1] + d.qText[3]) / 2,
                binDensity: d.qNum,
              };
            },
          },
        },
      },
    ];
  };

  const dataset = picasso.data('q')(mainConfig);

  const update = ({ settings } = {}) => {
    chart.update({
      data: [
        {
          type: 'q',
          ...mainConfig,
        },
        ...getBinnedDataConfig(),
        ...colorService.getData(),
      ],
      settings,
    });
  };

  const miniChartEnabled = () => {
    const homeStateBins = dataHandler.getHomeStateBins(viewHandler.getMeta().isHomeState);
    if (homeStateBins.length) {
      const binXValues = [];
      const binYValues = [];
      homeStateBins.forEach((bin) => {
        binXValues.push(bin.qText[0], bin.qText[2]);
        binYValues.push(bin.qText[1], bin.qText[3]);
      });
      const binsViewState = {
        xAxisMin: Math.min(...binXValues),
        xAxisMax: Math.max(...binXValues),
        yAxisMin: Math.min(...binYValues),
        yAxisMax: Math.max(...binYValues),
      };
      const isInside = (smallRect, largeRect) =>
        smallRect.xAxisMin >= largeRect.xAxisMin &&
        smallRect.xAxisMax <= largeRect.xAxisMax &&
        smallRect.yAxisMin >= largeRect.yAxisMin &&
        smallRect.yAxisMax <= largeRect.yAxisMax;
      return !isInside(binsViewState, viewHandler.getDataView());
    }
    return false;
  };

  let miniChartOn = false;

  const handleDataViewUpdate = () => {
    if (viewHandler.getInteractionInProgress()) {
      updatePartial();
      return;
    }
    const binnedBeforeFetch = dataHandler.getMeta().isBinnedData;
    dataHandler
      .fetch()
      // Promise rejected if trying to fetch same data window twice in a row
      .catch(() => {})
      .finally(() => {
        const miniChartWillBeOn = chart.component(KEYS.COMPONENT.MINI_CHART_POINT) && miniChartEnabled();
        const miniChartIsToggled =
          (!miniChartOn && miniChartWillBeOn) || // Off -> On
          (miniChartOn && !miniChartWillBeOn); // On -> Off
        miniChartOn = miniChartWillBeOn;
        // Requires complete chart update when switching between binned and not binned data, or when show/hide mini chart
        if (binnedBeforeFetch !== dataHandler.getMeta().isBinnedData || miniChartIsToggled) {
          update();
        } else {
          updatePartial();
        }
      });
  };

  viewState.onChanged('dataView', handleDataViewUpdate);

  const state = { isPrelayout: true };

  const chartModel = {
    query: {
      getViewState: () => viewState,
      getViewHandler: () => viewHandler,
      getDataHandler: () => dataHandler,
      getLocaleInfo: () => localeInfo,
      getFormatter: (fieldName) => dataset.field(fieldName).formatter(),
      isPrelayout: () => state.isPrelayout,
      miniChartEnabled,
    },
    command: {
      layoutComponents: ({ settings } = {}) => {
        chart.layoutComponents({
          data: [
            {
              type: 'q',
              ...mainConfig,
            },
            ...getBinnedDataConfig(),
            ...colorService.getData(),
          ],
          settings,
        });
        state.isPrelayout = false;
      },
      update,
      updatePartial,
    },
  };

  return chartModel;
}
