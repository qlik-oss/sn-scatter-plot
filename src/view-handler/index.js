import extend from 'extend';
import { throttler } from 'qlik-chart-modules';
import createDataFetcher from './data-fetcher';
import fetchBinnedData from './binned-data-fetcher';

function areIntervalsEqual(min1, max1, min2, max2, e) {
  // e is the relative tolerance; d is the absolute tolerence
  let d;
  if (e === undefined) d = 0;
  else d = Math.abs(max1 - min1) * e;
  return Math.abs(min2 - min1) <= d && Math.abs(max2 - max1) <= d;
}

export default function createViewHandler({ layoutService, extremumModel, model, viewState, flags }) {
  let dataFetcher;
  const meta = { homeStateDataView: {}, scale: 1, maxScale: 2 ** 4.1, minScale: 2 ** -9.1 };

  const viewHandler = {
    getDataView: () => viewState.get('dataView'),
    // getPxOffsets: () => pixelOffsets,
    update() {
      dataFetcher = createDataFetcher({ layoutService, model });
    },
    fetchData() {
      // Calc data window (based on dataView, chart size, data size, settings?)
      const dataRect = {
        qTop: 0,
        qLeft: 0,
        qWidth: 4, // data.qHyperCube.qSize.qcx,
        qHeight: 2000, // data.qHyperCube.qSize.qcy
      };

      return layoutService.meta.isBigData && flags.isEnabled('DATA_BINNING')
        ? fetchBinnedData({ layoutService, extremumModel, model })
        : dataFetcher.fetchData(dataRect);
    },

    throttledFetchData(chartModel) {
      return throttler(() => {
        if (layoutService.meta.isBigData && flags.isEnabled('DATA_BINNING')) {
          viewHandler.fetchData().then((pages) => {
            // Transition between bin data and normal data
            if (pages[0].qMatrix?.length) {
              layoutService.setDataPages(pages);
              layoutService.setLayoutValue('dataPages', [[]]);
              viewHandler.setMeta({ heatMapView: false });
            } else {
              layoutService.setLayoutValue('dataPages', pages);
              layoutService.setDataPages([]);
              viewHandler.setMeta({ heatMapView: true });
            }
            chartModel.command.update({ settings: chartModel.query.getSettings() });
          });
        }
      }, 100);
    },

    setDataView(dataView) {
      // scrollUtil.getLimitedPixelOffsets(offsets);
      // relativePos.x = [limitedOffsets.x, limitedOffsets.x + 1];
      // relativePos.y = [limitedOffsets.y, limitedOffsets.y + 1];

      viewState.set('dataView', dataView);

      // Update isHomeState
      const { xAxisMin: xMin1, xAxisMax: xMax1, yAxisMin: yMin1, yAxisMax: yMax1 } = dataView;
      const { xAxisMin: xMin2, xAxisMax: xMax2, yAxisMin: yMin2, yAxisMax: yMax2 } = meta.homeStateDataView;
      const e = 1e-4;
      if (areIntervalsEqual(xMin1, xMax1, xMin2, xMax2, e) && areIntervalsEqual(yMin1, yMax1, yMin2, yMax2, e)) {
        meta.isHomeState = true;
      } else meta.isHomeState = false;
    },

    getMeta: () => meta,

    setMeta(newMeta) {
      extend(true, meta, newMeta);
    },
  };

  viewHandler.update();

  return viewHandler;
}
