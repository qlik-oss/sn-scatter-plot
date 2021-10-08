import isBigData from './is-big-data';
import NUMBERS from '../constants/numbers';

const DefaultResolutionLevel = 6;
const MaxResolutionLevel = 8;

const splitJSONDataPages = (dp) => {
  const bins = [];
  const matrix = dp[0].qMatrix;
  let i;

  bins.push(matrix[0][0]);

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
  return [bins];
};

const getBinnedData = (left, top, width, height, zoomLevel, layoutService, model) => {
  const layout = layoutService.getLayout();
  const queryLevel = layout?.compressionResolution || DefaultResolutionLevel;
  const heatMapLevelZoomChange = zoomLevel ? zoomLevel - 1 : 0;
  const resolutionLevel = Math.min(queryLevel + heatMapLevelZoomChange, MaxResolutionLevel);

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

  return requestPromise.then((dataPages) =>
    dataPages[0].qMatrix.length > 0 ? splitJSONDataPages([dataPages[0]]) : [dataPages[1]]
  );
};

const updateBinnedData = ({ app, flags, layoutService, extremumModel, model }) => {
  const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
  const requestNewDataOnInteraction = isBigData(qcy, app.layout, flags) && !layoutService.meta.isSnapshot;
  const { xAxisMin, xAxisMax } = extremumModel.query.getXExtrema();
  const { yAxisMin, yAxisMax } = extremumModel.query.getYExtrema();
  const { qMin, qMax } = layoutService.getHyperCubeValue('qMeasureInfo.1', {});
  const zoomLevel = Math.floor(Math.sqrt((qMax - qMin) / (yAxisMax - yAxisMin)));
  if (requestNewDataOnInteraction) {
    return getBinnedData(xAxisMin, yAxisMax, xAxisMax - xAxisMin, yAxisMax - yAxisMin, zoomLevel, layoutService, model);
  }
  return layoutService.getLayoutValue('dataPages');
};

export { updateBinnedData, getBinnedData };
