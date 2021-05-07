import extend from 'extend';
import createDataFetcher from './data-fetcher';

function areIntervalsEqual(min1, max1, min2, max2, e) {
  // e is the relative tolerance; d is the absolute tolerence
  let d;
  if (e === undefined) d = 0;
  else d = Math.abs(max1 - min1) * e;
  return Math.abs(min2 - min1) <= d && Math.abs(max2 - max1) <= d;
}

export default function createZoomHandler({ layoutService, model, viewState }) {
  let dataFetcher;
  const meta = {};

  const zoomHandler = {
    getZoom: () => viewState.get('zoom'),
    // getPxOffsets: () => pixelOffsets,
    update() {
      dataFetcher = createDataFetcher({ layoutService, model });
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

      // Update isHomeState
      const { xAxisMin: x, xAxisMax: X, yAxisMin: y, yAxisMax: Y } = z;
      const { xAxisMin: x0, xAxisMax: X0, yAxisMin: y0, yAxisMax: Y0 } = meta.zoomAtHomeState;
      const e = 0.01;
      if (meta.zoomLevel === 0 && areIntervalsEqual(x, X, x0, X0, e) && areIntervalsEqual(y, Y, y0, Y0, e)) {
        meta.isHomeState = true;
        console.log('homestate');
      } else meta.isHomeState = false;
    },

    getMeta: () => meta,

    setMeta(newMeta) {
      extend(true, meta, newMeta);
    },

    changeZoomLevel(zoomChange = 0) {
      meta.zoomLevel += zoomChange;
    },
  };

  zoomHandler.update();

  return zoomHandler;
}
