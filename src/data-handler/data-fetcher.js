import KEYS from '../constants/keys';
import NUMBERS from '../constants/numbers';

export default function createDataFetcher({ layoutService, model }) {
  let lastDataWindow;

  const dataFetcher = {
    fetch() {
      if (layoutService.meta.isSnapshot) {
        return Promise.resolve(layoutService.getDataPages());
      }

      const dataRect = {
        qTop: 0,
        qLeft: 0,
        qWidth: 4,
        qHeight: layoutService.meta.isBinningSupported ? 2000 : NUMBERS.MAX_NR_SCATTER,
      };

      // Do not fetch same data window twice in a row (important for performance)
      const dataWindow = JSON.stringify(dataRect);
      if (lastDataWindow === dataWindow) {
        return Promise.reject(KEYS.REJECTION_TOKEN);
      }

      lastDataWindow = dataWindow;

      return model.getHyperCubeData('/qHyperCubeDef', [dataRect]).then((pages) => {
        layoutService.setLayoutValue('dataPages', undefined);
        layoutService.setDataPages(pages);
        return pages;
      });
    },
  };

  return dataFetcher;
}
