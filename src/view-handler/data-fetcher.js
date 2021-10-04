// import { debouncedUpdateLayout } from '../utils/binning-utils';
// import isBigData from '../utils/is-big-data';

export default function createDataFetcher({ layoutService, model }) {
  let lastDataWindow;
  let requestInProgress;
  let nextInLine;

  const dataFetcher = {
    fetchData(dataRect) {
      if (layoutService.meta.isSnapshot) {
        return Promise.resolve(layoutService.getDataPages());
      }

      // Do not fetch same data window twice in a row (important for performance)
      const dataWindow = JSON.stringify(dataRect);
      if (lastDataWindow === dataWindow) {
        return Promise.reject();
      }

      if (requestInProgress) {
        return new Promise((resolve, reject) => {
          if (nextInLine) {
            nextInLine.reject();
          }
          nextInLine = { resolve, reject, dataRect };
        });
      }

      lastDataWindow = dataWindow;

      // const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);

      // isBigData(qcy, app.layout, flags)
      //   ? debouncedUpdateLayout({ app, flags, layoutService, viewHandler, model })

      requestInProgress = model.getHyperCubeData('/qHyperCubeDef', [dataRect]).then((pages) => {
        requestInProgress = null;
        if (nextInLine) {
          const tempRef = nextInLine;
          nextInLine = null;
          tempRef.resolve(dataFetcher.fetchData(tempRef.dataRect));
        }
        return pages;
      });

      return requestInProgress;
    },
  };

  return dataFetcher;
}
