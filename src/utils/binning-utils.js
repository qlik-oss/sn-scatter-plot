import { debouncer } from 'qlik-chart-modules';
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

  const rePaint = function () {
    // self._fetchedData = true;
    // self.prePaint(self._data);
    // return Deferred.all([self._updateData(self._data)]).then(() => {
    //   deferred.resolve();
    //   if (self._destroyed) {
    //     return;
    //   }
    //   if (self.backendApi.isSnapshot) {
    //     self._isBigData =
    //       !!self._data.dataPages && self._data.dataPages.length > 0 && self._data.dataPages[0].qMatrix.length > 0; // if snapshot was taken when zoomed in - data may not be 'bigData' anymore.
    //     self.components.dataArea.setIsBigData(self._isBigData);
    //   }
    // });
  };

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

  // this.$scope.throbberApi.trackRequest(requestPromise);

  return requestPromise.then((dataPages) => {
    if (dataPages[0].qMatrix.length > 0) {
      const splittedDataPages = splitJSONDataPages([dataPages[0]]);
      console.log(splittedDataPages);
      /*
      self.components.dataArea.setHeatMapData(splittedDataPages); // the first row is meta data
      self._heatMapData = self.components.dataArea.getHeatMapData(); // removed the first row which is meta data

      // Set the max min of the custom color map to the number of items in the largest cluster
      self._heatColorMap.setMaxMin(splittedDataPages[0][0].qNum, 0);

      //   if (self._needUpdateMiniMap) {
      //     self.$scope.$emit('onUpdateMiniMapData', splittedDataPages);
      //   }
      self.components.dataArea.setIsReduced(true);
      */
    } else {
      /*
      self._isReduced = false;
      self._data.qHyperCube.isReduced = false;
      self._data.qHyperCube.qDataPages = [dataPages[1]];
      self.components.dataArea.setIsReduced(false);
      // allowLasso.call( self, true );
      */
    }
    return rePaint();
  });
};

const debouncedUpdateLayout = debouncer(
  ({ app, flags, layoutService, tickModel, model }) => {
    const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
    const requestNewDataOnInteraction = isBigData(qcy, app.layout, flags) && !layoutService.meta.isSnapshot;
    const [xAxisMin, xAxisMax] = tickModel.query.getXMinMax();
    const [yAxisMin, yAxisMax] = tickModel.query.getYMinMax();
    const { qMin, qMax } = layoutService.getHyperCubeValue('qMeasureInfo.1', {});
    const zoomLevel = Math.floor(Math.sqrt((qMax - qMin) / (yAxisMax - yAxisMin)));
    if (requestNewDataOnInteraction) {
      getBinnedData(xAxisMin, yAxisMax, xAxisMax - xAxisMin, yAxisMax - yAxisMin, zoomLevel, layoutService, model);
      // .then(paintWithTransition());
    } else {
      // paintWithTransition();
    }
  },
  400,
  this
);

export { debouncedUpdateLayout, getBinnedData };
