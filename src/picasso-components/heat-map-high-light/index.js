import KEYS from '../../constants/keys';

export default {
  require: ['renderer', 'chart'],
  renderer: 'canvas',

  render() {
    const { element } = this.chart;
    const heatMapCanvas = element.querySelector(`[data-key=${KEYS.COMPONENT.HEAT_MAP}]`);
    const heatMapHighlightCanvas = element.querySelector(`[data-key=${KEYS.COMPONENT.HEAT_MAP_HIGH_LIGHT}]`);
    const { width, height } = this.rect;
    let imageX = 0;
    let imageY = 0;
    let imageWidth = width;
    let imageHeight = height;
    const { actions, dataView } = this.settings.settings;
    const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = dataView();
    const imageData = heatMapCanvas.getContext('2d').getImageData(0, 0, heatMapCanvas.width, heatMapCanvas.height);
    const pixels = imageData.data;
    for (let i = 3, n = heatMapCanvas.width * heatMapCanvas.height * 4; i < n; i += 4) {
      pixels[i] = pixels[i] === 0 ? 0 : 255;
    }
    const ctx = heatMapHighlightCanvas.getContext('2d');

    const clearRect = () => {
      ctx.clearRect(0, 0, width, height);
    };

    const handleXRange = (range) => {
      clearRect();
      const min = Math.min(...range);
      const max = Math.max(...range);
      imageX = (Math.abs((min - xAxisMin) / (xAxisMax - xAxisMin)) * width).toFixed(2);
      imageWidth = (Math.abs((max - min) / (xAxisMax - xAxisMin)) * width).toFixed(2);
      ctx.putImageData(imageData, 0, 0, imageX, imageY, imageWidth, imageHeight);
    };

    const handleYRange = (range) => {
      clearRect();
      const min = Math.min(...range);
      const max = Math.max(...range);
      imageY = (Math.abs((yAxisMax - max) / (yAxisMax - yAxisMin)) * height).toFixed(2);
      imageHeight = (Math.abs((max - min) / (yAxisMax - yAxisMin)) * height).toFixed(2);
      ctx.putImageData(imageData, 0, 0, imageX, imageY, imageWidth, imageHeight);
    };

    const handleSelectionClear = () => {
      clearRect();
      imageX = 0;
      imageY = 0;
      imageWidth = width;
      imageHeight = height;
    };

    actions.select.on('binsXRange', handleXRange);
    actions.select.on('binsYRange', handleYRange);
    actions.select.on('binsRangeSelectionClear', handleSelectionClear);
  },
};
