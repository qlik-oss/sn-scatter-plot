import createDataFetcher from './data-fetcher';

export default function createZoomHandler({ layoutModel, model, viewState }) {
  let dataFetcher;

  const zoomHandler = {
    getZoom: () => viewState.get('zoom'),
    // getPxOffsets: () => pixelOffsets,
    update() {
      dataFetcher = createDataFetcher({ layoutModel, model });
    },
    fetchData() {
      // Calc data window (based on zoom, chart size, data size, settings?)
      const dataRect = {
        qTop: 0,
        qLeft: 0,
        qWidth: 4, // data.qHyperCube.qSize.qcx,
        qHeight: 2000, // data.qHyperCube.qSize.qcy
      };

      return dataFetcher.fetchData(dataRect);
    },
    setZoom(z) {
      // scrollUtil.getLimitedPixelOffsets(offsets);
      // relativePos.x = [limitedOffsets.x, limitedOffsets.x + 1];
      // relativePos.y = [limitedOffsets.y, limitedOffsets.y + 1];

      viewState.set('zoom', z);
    },
  };

  zoomHandler.update();

  return zoomHandler;
}
