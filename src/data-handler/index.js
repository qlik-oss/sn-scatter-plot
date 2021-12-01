import createDataFetcher from './data-fetcher';
import createBinnedDataFetcher from './binned-data-fetcher';

export default function createDataHandler({ layoutService, model, extremumModel, flags }) {
  const dataFetcher = createDataFetcher({ layoutService, model });
  const binnedDataFetcher = createBinnedDataFetcher({ layoutService, extremumModel, model });
  const meta = {};
  let requestInProgress;
  let nextInLine;
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

      if (layoutService.meta.isBigData && flags.isEnabled('DATA_BINNING')) {
        requestInProgress = binnedDataFetcher.fetch();
      } else {
        requestInProgress = dataFetcher.fetch();
      }

      requestInProgress
        .then(() => {
          requestInProgress = null;
          meta.isBinnedData = !layoutService.getDataPages().length;
          if (nextInLine) {
            const tempRef = nextInLine;
            nextInLine = null;
            tempRef.resolve(dataHandler.fetch());
          }
        })
        .catch(() => {});

      return requestInProgress;
    },
  };

  return dataHandler;
}
