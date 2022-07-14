import KEYS from '../constants/keys';
import getMaxNumBubbles from '../utils/get-max-num-bubbles';

export default function createDataFetcher({ layoutService, model }) {
  let lastDataWindow;

  const dataFetcher = {
    fetch() {
      if (layoutService.meta.isSnapshot) {
        return Promise.resolve(layoutService.getDataPages());
      }

      const NR_POINTS_PER_FETCH = 2500;
      const MAX_NR = Math.min(getMaxNumBubbles(layoutService.getLayout()), layoutService.meta.size.y || 0);
      const numFetches = Math.ceil(MAX_NR / NR_POINTS_PER_FETCH);
      const dataRects = [];
      for (let i = 0; i < numFetches; i++) {
        dataRects[i] = {
          qTop: i * NR_POINTS_PER_FETCH,
          qLeft: 0,
          qWidth: 4,
          qHeight: NR_POINTS_PER_FETCH,
        };
      }

      // Do not fetch same data window twice in a row (important for performance)
      const dataWindow = JSON.stringify(dataRects[0]);
      if (lastDataWindow === dataWindow) {
        return Promise.reject(KEYS.REJECTION_TOKEN);
      }

      lastDataWindow = dataWindow;

      const queriesPromises = dataRects.map((dataRect) => model.getHyperCubeData('/qHyperCubeDef', [dataRect]));
      return Promise.all(queriesPromises).then((pagesArray) => {
        const pages = [
          {
            qArea: {
              qLeft: 0,
              qTop: 0,
              qWidth: pagesArray[pagesArray.length - 1][0].qArea.qWidth,
              qHeight: MAX_NR,
            },
            qMatrix: [],
            qTails: pagesArray[0][0].qTails,
          },
        ];
        pagesArray.forEach((p) => pages[0].qMatrix.push(...p[0].qMatrix));
        layoutService.setLayoutValue('dataPages', undefined);
        layoutService.setDataPages(pages);
        return pages;
      });
    },
  };

  return dataFetcher;
}
