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
    const { width, height } = this.rect;
    const dirtyImageData = {
      x: 0,
      y: 0,
      w: width,
      h: height,
    };
    const { actions, dataView } = this.settings.settings;
    const heatMapCanvasContext = heatMapCanvas.getContext('2d');
    const pixelRatio = getPixelRatio(heatMapCanvasContext);
    const imageData = heatMapCanvasContext.getImageData(0, 0, heatMapCanvas.width, heatMapCanvas.height);
    const pixels = imageData.data;
    for (let i = 3, n = heatMapCanvas.width * heatMapCanvas.height * 4; i < n; i += 4) {
      pixels[i] = pixels[i] === 0 ? 0 : 255;
    }
    const ctx = heatMapHighlightCanvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    const updateImageData = (range, axis) => {
      ctx.clearRect(0, 0, width, height);
      const { x, y, w, h } = getImageData(range, axis, dataView, dirtyImageData, width, height);
      dirtyImageData.x = x;
      dirtyImageData.y = y;
      dirtyImageData.w = w;
      dirtyImageData.h = h;
      ctx.putImageData(imageData, 0, 0, x * pixelRatio, y * pixelRatio, w * pixelRatio, h * pixelRatio);
    };

    const handleXRange = (range) => {
      updateImageData(range, 'x');
    };

    const handleYRange = (range) => {
      updateImageData(range, 'y');
    };

    const handleSelectionClear = () => {
      ctx.clearRect(0, 0, width, height);
      dirtyImageData.x = 0;
      dirtyImageData.y = 0;
      dirtyImageData.w = width;
      dirtyImageData.h = height;
    };

    actions.select.on('binXRange', handleXRange);
    actions.select.on('binYRange', handleYRange);
    actions.select.on('binsRangeSelectionClear', handleSelectionClear);
  },
};
