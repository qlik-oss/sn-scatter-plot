import NUMBERS from '../constants/numbers';
import populateBins from '../utils/bins-util';

export default function createBinnedDataFetcher({ layoutService, extremumModel, model }) {
  const DEFAULT_RESOLUTION_LEVEL = 6;
  const MAX_RESOLUTION_LEVEL = 8;
  const bins = [];
  let maxBinDensity = 0;
  let nextInLine;
  let requestInProgress;

  const getBinnedData = (left, top, width, height, zoomLevel) => {
    const layout = layoutService.getLayout();
    const queryLevel = layout?.compressionResolution || DEFAULT_RESOLUTION_LEVEL;
    const heatMapLevelZoomChange = zoomLevel ? zoomLevel - 1 : 0;
    const resolutionLevel = Math.min(queryLevel + heatMapLevelZoomChange, MAX_RESOLUTION_LEVEL);

    const requestPromise = model.getHyperCubeBinnedData(
      '/qHyperCubeDef',
      layout === undefined
        ? undefined
        : [
            {
              qTop: 0,
              qLeft: 0,
              qWidth: layout.qHyperCube.qSize.qcx,
              qHeight: layout.qHyperCube.qSize.qcy,
            },
          ],
      { width: 0, height: 0 },
      [
        {
          qLeft: left,
          qTop: top,
          qWidth: width,
          qHeight: height,
        },
      ],
      NUMBERS.MAX_NR_SCATTER,
      resolutionLevel,
      0
    );

    return requestPromise.then((dataPages) => {
      if (dataPages[0].qMatrix?.length) {
        layoutService.setLayoutValue('dataPages', dataPages);
        layoutService.setDataPages([]);
        populateBins([dataPages[0]], bins);
        maxBinDensity = dataPages[0].qMatrix[0][0].qNum;
      } else {
        layoutService.setLayoutValue('dataPages', undefined);
        layoutService.setDataPages([dataPages[1]]);
      }
    });
  };

  const binnedDataFetcher = {
    get binArray() {
      return bins;
    },
    get maxBinDensity() {
      return maxBinDensity;
    },
    fetch: () => {
      if (layoutService.meta.isSnapshot) {
        const dataPages = layoutService.getLayoutValue('dataPages');
        if (dataPages[1]) {
          populateBins(dataPages, bins);
          maxBinDensity = dataPages[0].qMatrix[0][0].qNum;
        }
        return Promise.resolve(dataPages);
      }

      // TODO: To improve performance further - introduce debouncer to avoid
      // fetching data too often during interaction (pan/zoom).
      if (requestInProgress) {
        return new Promise((resolve, reject) => {
          if (nextInLine) {
            nextInLine.reject();
          }
          nextInLine = { resolve, reject };
        });
      }

      const { xAxisMin, xAxisMax } = extremumModel.query.getXExtrema();
      const { yAxisMin, yAxisMax } = extremumModel.query.getYExtrema();
      const { qMin, qMax } = layoutService.getHyperCubeValue('qMeasureInfo.1', {});
      const zoomLevel = Math.floor(Math.sqrt((qMax - qMin) / (yAxisMax - yAxisMin)));

      requestInProgress = getBinnedData(xAxisMin, yAxisMax, xAxisMax - xAxisMin, yAxisMax - yAxisMin, zoomLevel);

      requestInProgress.then(() => {
        requestInProgress = null;
        if (nextInLine) {
          const tempRef = nextInLine;
          nextInLine = null;
          tempRef.resolve(binnedDataFetcher.fetch());
        }
      });

      return requestInProgress;
    },
  };

  return binnedDataFetcher;
}
