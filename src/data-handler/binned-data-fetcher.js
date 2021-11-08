import NUMBERS from '../constants/numbers';

export default function createBinnedDataFetcher({ layoutService, extremumModel, model }) {
  const DEFAULT_RESOLUTION_LEVEL = 6;
  const MAX_RESOLUTION_LEVEL = 8;
  const bins = [];
  let maxBinDensity = 0;

  const populateBins = (dp) => {
    bins.length = 0;
    const matrix = dp[0].qMatrix;
    let i;

    // Hack for snapshot
    if (dp[0].reformatted) {
      for (i = 1; i < matrix.length; i++) {
        try {
          bins.push(matrix[i][0]);
        } catch (err) {
          // console.log( err );
        }
      }
    } else {
      for (i = 1; i < matrix.length; i++) {
        try {
          matrix[i][0].qText = JSON.parse(matrix[i][0].qText);
          bins.push(matrix[i][0]);
        } catch (err) {
          // console.log( err );
        }
      }
      // eslint-disable-next-line no-param-reassign
      dp[0].reformatted = true;
    }
  };

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
        populateBins([dataPages[0]]);
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
      if (!layoutService.meta.isBigData || layoutService.meta.isSnapshot) {
        const dataPages = layoutService.getLayoutValue('dataPages');
        populateBins(dataPages);
        return Promise.resolve(dataPages);
      }

      const { xAxisMin, xAxisMax } = extremumModel.query.getXExtrema();
      const { yAxisMin, yAxisMax } = extremumModel.query.getYExtrema();
      const { qMin, qMax } = layoutService.getHyperCubeValue('qMeasureInfo.1', {});
      const zoomLevel = Math.floor(Math.sqrt((qMax - qMin) / (yAxisMax - yAxisMin)));

      return getBinnedData(xAxisMin, yAxisMax, xAxisMax - xAxisMin, yAxisMax - yAxisMin, zoomLevel);
    },
  };

  return binnedDataFetcher;
}
