import KEYS from '../../constants/keys';

export default {
  require: ['renderer', 'chart'],
  renderer: 'canvas',

  render() {
    const { element } = this.chart;
    // console.log(this.chart.component('bin-x-range-brush'));
    // this.chart.component('bin-x-range-brush').on('rangeMove', () => {
    //   console.log('sss');
    // });
    const { rangeSelectionView } = this.settings.settings;
    const { x1, x2 } = rangeSelectionView();
    const { x, y } = this.rect;
    console.log(x, y);
    const a = Math.abs(x1 - 87);
    const b = Math.abs(x2 - 87);
    console.log(a, b);
    const heatMapCanvas = element.querySelector(`[data-key=${KEYS.COMPONENT.HEAT_MAP}]`);
    const heatMapHighlightCanvas = element.querySelector(`[data-key=${KEYS.COMPONENT.HEAT_MAP_HIGH_LIGHT}]`);

    const imageData = heatMapCanvas.getContext('2d').getImageData(0, 0, heatMapCanvas.width, heatMapCanvas.height);

    const pixels = imageData.data;
    for (let i = 3, n = heatMapCanvas.width * heatMapCanvas.height * 4; i < n; i += 4) {
      pixels[i] = pixels[i] === 0 ? 0 : 255;
    }

    const ctx = heatMapHighlightCanvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0, a, b, 200, 200);
  },
};
