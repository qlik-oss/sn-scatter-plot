import extend from 'extend';
import KEYS from '../../constants/keys';
import NUMBERS from '../../constants/numbers';
import createViewHandler from '../../view-handler';
import getFormatPatternFromRange from './format-pattern-from-range';
import shouldUpdateTicks from './should-update-ticks';
import { getPointNodesWithKey } from '../../utils/get-point-nodes';
import isProgressiveAllowed from '../../utils/is-progressive-allowed';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  colorService,
  viewState,
  extremumModel,
  dataHandler,
  trendLinesService,
  getCurrentYTicks,
  getYTicks,
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
    layoutService,
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
    previousConstraints: undefined,
    updateWithSettings: undefined,
    constraintsHaveChanged: undefined,
    progressive: false,
  };

  let dataPages = [];
  let enableDataPagesExtract = true;
  let timer = null;

  function extractDataPages() {
    if (enableDataPagesExtract) {
      // To avoid extract a chunk during progressive rendering
      dataPages = layoutService.getDataPages();
      layoutService.setDataPages([]);
      enableDataPagesExtract = false;
    }
  }

  function insertDataPages() {
    layoutService.setDataPages(dataPages);
    dataPages = [];
    enableDataPagesExtract = true;
  }

  function updateMeta() {
    const nodes = getPointNodesWithKey(chart, KEYS.COMPONENT.POINT);
    meta.numVisibleBubbles = nodes.length;
    meta.isLargeNumVisibleBubbles = nodes.length > layoutService.meta.largeNumDataPoints;
  }

  function renderOnce() {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(() => {
      chart.update({
        partialData: true,
        excludeFromUpdate: EXCLUDE,
      });
      updateMeta();
    });
  }

  const renderProgressive = () => {
    const tempPages = layoutService.getDataPages();
    if (!tempPages.length) return;
    const dataSize = tempPages[0].qMatrix.length;
    const nbrOfChunks = Math.ceil(dataSize / NUMBERS.CHUNK_SIZE);
    if (nbrOfChunks <= 1) {
      renderOnce();
      return;
    }

    let renderCount = -1; // To clear before rendering

    const renderChunk = () => {
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(() => {
        extractDataPages();
        const start = renderCount * NUMBERS.CHUNK_SIZE;
        const end = (renderCount + 1) * NUMBERS.CHUNK_SIZE;
        meta.progressive = renderCount === -1 ? false : { start, end, isLastStep: renderCount === nbrOfChunks - 1 };
        const chunk = [
          {
            ...dataPages[0],
            qMatrix: renderCount === -1 ? [] : dataPages[0].qMatrix.slice(start, end),
          },
        ];
        layoutService.setDataPages(chunk);
        chart.update({
          partialData: true,
          excludeFromUpdate:
            renderCount === -1 || renderCount === nbrOfChunks - 1 ? EXCLUDE : EXCLUDE_DURING_PROGRESSIVE,
        });
        insertDataPages();
        renderCount++;
        if (renderCount < nbrOfChunks) {
          renderChunk();
        } else {
          meta.progressive = false;
          updateMeta();
        }
      });
    };

    renderChunk();
  };

  function updatePartial(interactionInProgress = false) {
    meta.updateWithSettings = false;
    trendLinesService.update();
    if (interactionInProgress || !isProgressiveAllowed(layoutService)) {
      renderOnce();
    } else {
      renderProgressive(interactionInProgress);
    }
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
    meta.updateWithSettings = !!settings;
    trendLinesService.update();
    if (!isProgressiveAllowed(layoutService)) {
      chart.update({
        data: getData(),
        settings,
      });
      updateMeta();
    } else {
      // Render the first time without data
      extractDataPages();
      chart.update({
        data: getData(),
        settings,
      });
      insertDataPages();
      renderProgressive();
    }
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

  const animationEnabled = () => {
    const interactionInProgress = viewHandler.getInteractionInProgress();
    if (interactionInProgress || !meta.updateWithSettings || meta.constraintsHaveChanged) {
      return false;
    }

    if (layoutService.meta.isBigData) {
      return true;
    }

    return layoutService.getHyperCubeValue('qSize.qcy', 0) <= NUMBERS.MAX_NR_ANIMATION && !interactionInProgress;
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
      getFormatPattern: (scaleName) => getFormatPatternFromRange(scaleName, viewHandler, layoutService),
      getMeta: () => meta,
      animationEnabled,
      miniChartEnabled,
      getChart: () => chart,
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
    },
  };

  return chartModel;
}
