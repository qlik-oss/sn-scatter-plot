import createDataFetcher from './data-fetcher';
import createBinnedDataFetcher from './binned-data-fetcher';

export default function createDataHandler({ layoutService, model, extremumModel, flags }) {
  const dataFetcher = createDataFetcher({ layoutService, model });
  const binnedDataFetcher = createBinnedDataFetcher({ layoutService, extremumModel, model });
  const meta = {};
  let requestInProgress;
  let binArrayCache;

  const dataHandler = {
    getMeta: () => meta,
    getHomeStateBins: (isHomeState) => {
      if (isHomeState) {
        binArrayCache = binnedDataFetcher.binArray.slice();
      }
      return binArrayCache;
    },
    get binArray() {
      return binnedDataFetcher.binArray;
    },
    get maxBinDensity() {
      return binnedDataFetcher.maxBinDensity;
    },
    fetch() {
      if (layoutService.meta.isBigData && flags.isEnabled('DATA_BINNING')) {
        requestInProgress = binnedDataFetcher.fetch();
      } else {
        requestInProgress = dataFetcher.fetch();
      }

      requestInProgress
        .then(() => {
          meta.isBinnedData = !layoutService.getDataPages().length;
        })
        .catch(() => {});

      return requestInProgress;
    },
  };

  return dataHandler;
}
