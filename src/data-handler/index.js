import KEYS from '../constants/keys';
import createDataFetcher from './data-fetcher';
import createBinnedDataFetcher from './binned-data-fetcher';
import isBinnedData from './is-binned-data';
import isLargeNumBubblesFromBigData from './is-large-num-bubbles-from-big-data';

export default function createDataHandler({ layoutService, model, extremumModel }) {
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
      if (layoutService.meta.isBigData) {
        requestInProgress = binnedDataFetcher.fetch();
      } else {
        requestInProgress = dataFetcher.fetch();
      }

      requestInProgress
        .then(() => {
          meta.isBinnedData = isBinnedData(layoutService);
          meta.isLargeNumBubblesFromBigData = isLargeNumBubblesFromBigData(layoutService); // On zoom in from bin data
        })
        .catch((e) => {
          if (e !== KEYS.REJECTION_TOKEN) {
            throw e;
          }
        });

      return requestInProgress;
    },
  };

  return dataHandler;
}
