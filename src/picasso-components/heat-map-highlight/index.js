import KEYS from '../../constants/keys';
import getImageData from './extract-image-data';
import getPixelRatio from './get-pixel-ratio';

export default {
  require: ['renderer', 'chart'],
  renderer: 'canvas',

  render() {
    const { element } = this.chart;
    const heatMapCanvas = element.querySelector(`[data-key=${KEYS.COMPONENT.HEAT_MAP}]`);
    const heatMapHighlightCanvas = this.renderer.element();
    if (!heatMapCanvas || !heatMapHighlightCanvas) {
      return;
    }
    const { width, height } = this.rect;
    const dirtyImageData = {
      x: 0,
      y: 0,
      w: width,
      h: height,
    };
    const { actions, dataView, rtl } = this.settings.settings;
    const heatMapCanvasContext = heatMapCanvas.getContext('2d');
    const pixelRatio = getPixelRatio(heatMapCanvasContext);
    let imageData;
    const ctx = heatMapHighlightCanvas.getContext('2d');
    ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);

    const updateImageData = (range, axis) => {
      if (!imageData) return;
      ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
      const { x, y, w, h } = getImageData(range, axis, dataView, dirtyImageData, width, height, rtl);
      dirtyImageData.x = x;
      dirtyImageData.y = y;
      dirtyImageData.w = w;
      dirtyImageData.h = h;
      ctx.putImageData(imageData, 0, 0, x * pixelRatio, y * pixelRatio, w * pixelRatio, h * pixelRatio);
    };

    const onSelectionStart = () => {
      if (!imageData) {
        heatMapCanvas.style.opacity = 1;
        imageData = heatMapCanvasContext.getImageData(0, 0, heatMapCanvas.width, heatMapCanvas.height);
      }
    };

    const onBinXRange = (range) => {
      updateImageData(range, 'x');
    };

    const onBinYRange = (range) => {
      updateImageData(range, 'y');
    };

    const onBinRangeHighlightClear = () => {
      imageData = undefined;
      ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
    };

    const onBinsRangeSelectionClear = () => {
      ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
      dirtyImageData.x = 0;
      dirtyImageData.y = 0;
      dirtyImageData.w = width;
      dirtyImageData.h = height;
    };

    actions.select.removeAllListeners('selectionStart');
    actions.select.removeAllListeners('binXRange');
    actions.select.removeAllListeners('binYRange');
    actions.select.removeAllListeners('binRangeHighlightClear');
    actions.select.removeAllListeners('binsRangeSelectionClear');
    actions.select.on('selectionStart', onSelectionStart);
    actions.select.on('binXRange', onBinXRange);
    actions.select.on('binYRange', onBinYRange);
    actions.select.on('binRangeHighlightClear', onBinRangeHighlightClear);
    actions.select.on('binsRangeSelectionClear', onBinsRangeSelectionClear);
  },
};
