/* eslint-disable no-param-reassign */
import extend from 'extend';
import KEYS from '../../constants/keys';
import NUMBERS from '../../constants/numbers';
import createViewHandler from '../../view-handler';
import getAutoFormatPatternFromRange from './format-pattern-from-range';
import shouldUpdateTicks from './should-update-ticks';
import getVisiblePoints from '../../utils/get-visible-points';
import areSameVisiblePoints from '../../utils/are-same-visible-points';
import { cacheProperties, propertiesHaveChanged } from './animations-properties-handler';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  largeDataService,
  colorService,
  viewState,
  viewCache,
  extremumModel,
  dataHandler,
  trendLinesService,
  actions,
  progressive,
  getCurrentYTicks,
  getYTicks,
  options,
}) {
  const EXCLUDE = [
    KEYS.COMPONENT.X_AXIS_TITLE,
    KEYS.COMPONENT.Y_AXIS_TITLE,
    KEYS.COMPONENT.MINI_CHART_POINT,
    // KEYS.COMPONENT.X_AXIS,
    // KEYS.COMPONENT.Y_AXIS,
    // KEYS.COMPONENT.GRID_LINES,
  ];

  const EXCLUDE_DURING_PROGRESSIVE = [
    KEYS.COMPONENT.X_AXIS_TITLE,
    KEYS.COMPONENT.Y_AXIS_TITLE,
    KEYS.COMPONENT.MINI_CHART_POINT,
    KEYS.COMPONENT.POINT_LABELS,
    KEYS.COMPONENT.X_AXIS,
    KEYS.COMPONENT.Y_AXIS,
    KEYS.COMPONENT.GRID_LINES,
  ];

  const viewHandler = createViewHandler({
    extremumModel,
    viewState,
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

  const meta = {
    isPrelayout: true,
    isPartialUpdating: undefined,
    isSizeChanging: undefined,
    progressive: false,
  };

  let dataPages = [];

  function extractDataPages() {
    dataPages = layoutService.getDataPages();
    layoutService.setDataPages([]);
  }

  function insertDataPages() {
    layoutService.setDataPages(dataPages);
  }

  function updateMeta() {
    meta.visiblePoints = getVisiblePoints({ layoutService, viewHandler });
    meta.numVisiblePoints = meta.visiblePoints.length;
    meta.isLargeNumVisibleBubbles = meta.numVisiblePoints > layoutService.meta.largeNumDataPoints;
  }

  function resetProgressive() {
    if (progressive.timer !== null) {
      cancelAnimationFrame(progressive.timer);
      progressive.timer = null;
      progressive.renderPromise?.resolve();
      progressive.renderPromise = null;
    }
  }

  function renderOnce() {
    actions.setProgressive(false);
    meta.progressive = false;
    resetProgressive();
    chart.update({
      partialData: true,
      excludeFromUpdate: EXCLUDE,
    });
    updateMeta();
  }

  const renderProgressive = (resolve) => {
    resetProgressive();
    progressive.renderPromise = { resolve };

    actions.setProgressive(false);
    const tempPages = layoutService.getDataPages();
    if (!tempPages.length) return;
    const dataSize = tempPages[0].qMatrix.length;
    const nbrOfChunks = Math.ceil(dataSize / NUMBERS.CHUNK_SIZE);
    if (nbrOfChunks <= 1) {
      renderOnce();
      resolve();
      return;
    }

    actions.setProgressive(true);
    updateMeta(); // This can be done before progressive rendering
    let renderCount = 0;

    const onFinishProgressive = () => {
      requestAnimationFrame(() => {
        meta.progressive = false;
        actions.setProgressive(false);
        progressive.timer = null;
        resolve();
      });
    };

    const renderChunk = () => {
      progressive.timer = requestAnimationFrame(() => {
        if (!chart?.update) {
          resetProgressive();
          return;
        }
        extractDataPages();
        const start = renderCount * NUMBERS.CHUNK_SIZE;
        const end = Math.min(dataSize, (renderCount + 1) * NUMBERS.CHUNK_SIZE);
        meta.progressive = { start, end, isFirst: renderCount === 0, isLast: renderCount === nbrOfChunks - 1 };
        const chunk = [
          {
            ...dataPages[0],
            qMatrix: dataPages[0].qMatrix.slice(start, end),
          },
        ];
        layoutService.setDataPages(chunk);
        chart.update({
          partialData: true,
          excludeFromUpdate:
            renderCount === 0 || renderCount === nbrOfChunks - 1 ? EXCLUDE : EXCLUDE_DURING_PROGRESSIVE,
        });
        insertDataPages();
        renderCount++;
        if (renderCount < nbrOfChunks) {
          renderChunk();
        } else {
          onFinishProgressive();
        }
      });
    };

    renderChunk();
  };

  function updatePartial(interactionInProgress = false) {
    meta.isPartialUpdating = true;
    trendLinesService.update();
    if (interactionInProgress || !largeDataService.shouldUseProgressive()) {
      renderOnce();
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      renderProgressive(resolve);
    });
  }

  const getData = () => [
    {
      type: 'q',
      ...mainConfig,
    },
    ...getBinnedDataConfig(),
    ...colorService.getData(),
    ...trendLinesService.getData(),
  ];

  const update = ({ settings } = {}) => {
    resetProgressive();
    meta.progressive = false;
    meta.isPartialUpdating = settings === undefined;
    trendLinesService.update();
    if (!largeDataService.shouldUseProgressive()) {
      chart.update({
        data: getData(),
        settings,
      });
      updateMeta();
      viewCache.set('isBigData', layoutService.meta.isBigData);
      cacheProperties({ viewCache, layout: layoutService.getLayout() });
      return Promise.resolve();
    }
    // Render the first time without data
    extractDataPages();
    chart.update({
      data: getData(),
      settings,
    });
    insertDataPages();
    viewCache.set('isBigData', layoutService.meta.isBigData);
    cacheProperties({ viewCache, layout: layoutService.getLayout() });
    return new Promise((resolve) => {
      renderProgressive(resolve);
    });
  };

  const brush = ({ render, nodes }) => {
    resetProgressive();

    const nbrOfChunks = Math.ceil(nodes.length / NUMBERS.CHUNK_SIZE);
    if (nbrOfChunks <= 1) {
      render(nodes);
      return;
    }

    let renderCount = 0;

    const renderChunk = () => {
      progressive.timer = requestAnimationFrame(() => {
        if (!chart?.update) {
          resetProgressive();
          return;
        }
        const start = renderCount * NUMBERS.CHUNK_SIZE;
        const end = Math.min(nodes.length, (renderCount + 1) * NUMBERS.CHUNK_SIZE);
        meta.progressive = { start, end, isFirst: renderCount === 0, isLast: renderCount === nbrOfChunks - 1 };
        render(nodes.slice(start, end));
        renderCount++;
        if (renderCount < nbrOfChunks) {
          renderChunk();
        } else {
          meta.progressive = false;
          progressive.timer = null;
        }
      });
    };

    renderChunk();
  };

  let miniChartOn = false;

  const miniChartEnabled = () => {
    const dataView = viewHandler.getDataView();
    const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewHandler.getMeta().homeStateDataView;
    const xUpperLimit = xAxisMax - 0.1 * (xAxisMax - xAxisMin);
    const xLowerLimit = xAxisMin + 0.1 * (xAxisMax - xAxisMin);
    const yUpperLimit = yAxisMax - 0.1 * (yAxisMax - yAxisMin);
    const yLowerLimit = yAxisMin + 0.1 * (yAxisMax - yAxisMin);
    return (
      dataView.xAxisMax <= xUpperLimit ||
      dataView.xAxisMin >= xLowerLimit ||
      dataView.yAxisMax <= yUpperLimit ||
      dataView.yAxisMin >= yLowerLimit
    );
  };

  const animationsEnabled = () => {
    const interactionInProgress = viewHandler.getInteractionInProgress();
    const numOfPoints = layoutService.getHyperCubeValue('qSize.qcy', 0);
    if (
      options.chartAnimations === false ||
      interactionInProgress ||
      meta.isPartialUpdating ||
      meta.isSizeChanging ||
      largeDataService.shouldUseProgressive() ||
      layoutService.meta.isBigData !== viewCache.get('isBigData') ||
      (!layoutService.meta.isBigData && numOfPoints > NUMBERS.MAX_NR_ANIMATION) ||
      propertiesHaveChanged({ viewCache, layout: layoutService.getLayout() })
    ) {
      return false;
    }

    return true;
  };

  let updateTicks = false;
  const updateTicksState = [];

  const handleDataViewUpdate = () => {
    updateTicks = shouldUpdateTicks(chart, getCurrentYTicks, getYTicks);
    if (viewHandler.getInteractionInProgress()) {
      updateTicksState.push(updateTicks);
      updatePartial(true);
      return;
    }
    const ticksNeedUpdate = updateTicks || updateTicksState.filter((s) => s).length > 0;
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
        if (binnedBeforeFetch !== dataHandler.getMeta().isBinnedData || miniChartIsToggled || ticksNeedUpdate) {
          update();
        } else {
          updatePartial(false);
        }
      });

    updateTicksState.length = 0;
  };

  viewState.onChanged('dataView', handleDataViewUpdate);

  const chartModel = {
    query: {
      getViewState: () => viewState,
      getViewHandler: () => viewHandler,
      getDataHandler: () => dataHandler,
      getLocaleInfo: () => localeInfo,
      getAutoFormatPattern: (scaleName) => getAutoFormatPatternFromRange(scaleName, viewHandler, localeInfo),
      getMeta: () => meta,
      animationsEnabled,
      miniChartEnabled,
      getChart: () => chart,
      areSameVisiblePoints: () => areSameVisiblePoints(meta.visiblePoints),
    },
    command: {
      setMeta(newMeta) {
        extend(meta, newMeta);
      },
      layoutComponents: ({ settings } = {}) => {
        chart.layoutComponents({
          data: getData(),
          settings,
        });
        meta.isPrelayout = false;
      },
      update,
      brush,
    },
  };

  return chartModel;
}
