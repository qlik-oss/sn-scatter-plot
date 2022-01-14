export default function imageData(range, axis, dataView, dirtyImageData, width, height) {
  let { x, y, w, h } = dirtyImageData;
  const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = dataView();
  const { min, max } = range;

  if (axis === 'x') {
    x = Number((Math.abs((min - xAxisMin) / (xAxisMax - xAxisMin)) * width).toFixed(2));
    w = Number((Math.abs((max - min) / (xAxisMax - xAxisMin)) * width).toFixed(2));
  } else {
    y = Number((Math.abs((yAxisMax - max) / (yAxisMax - yAxisMin)) * height).toFixed(2));
    h = Number((Math.abs((max - min) / (yAxisMax - yAxisMin)) * height).toFixed(2));
  }

  return { x, y, w, h };
}
