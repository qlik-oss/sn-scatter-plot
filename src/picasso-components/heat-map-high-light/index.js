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

    const handleRangesChange = (ranges) => {
      clearRect();
      if (ranges.length === 1) {
        const { qMin, qMax } = ranges[0].qRange;
        const isXRange = ranges[0].qMeasureIx === 0;
        imageX = isXRange ? Math.abs((qMin - xAxisMin) / (xAxisMax - xAxisMin)) * width : 0;
        imageWidth = isXRange ? Math.abs((qMax - qMin) / (xAxisMax - xAxisMin)) * width : width;
        imageY = isXRange ? 0 : Math.abs((yAxisMax - qMax) / (yAxisMax - yAxisMin)) * height;
        imageHeight = isXRange ? height : Math.abs((qMax - qMin) / (yAxisMax - yAxisMin)) * height;
      }

      if (ranges.length === 2) {
        ranges.forEach((r) => {
          if (r.qMeasureIx === 0) {
            imageX = Math.abs((r.qRange.qMin - xAxisMin) / (xAxisMax - xAxisMin)) * width;
            imageWidth = Math.abs((r.qRange.qMax - r.qRange.qMin) / (xAxisMax - xAxisMin)) * width;
          }
          if (r.qMeasureIx === 1) {
            imageY = Math.abs((yAxisMax - r.qRange.qMax) / (yAxisMax - yAxisMin)) * height;
            imageHeight = Math.abs((r.qRange.qMax - r.qRange.qMin) / (yAxisMax - yAxisMin)) * height;
          }
        });
      }

      ctx.putImageData(imageData, 0, 0, imageX, imageY, imageWidth, imageHeight);
    };

    const handleSelectionClear = () => {
      clearRect();
    };

    actions.select.on('binsRangeSelection', handleRangesChange);
    actions.select.on('binsRangeSelectionClear', handleSelectionClear);
  },
};
