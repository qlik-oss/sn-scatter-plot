import pointHelper from './helpers';

export default function createSizeScale(layoutModel) {
  const { qMin, qMax } = layoutModel.getHyperCubeValue('qMeasureInfo.2', {});
  const [minDotSize, maxDotSize] = layoutModel.getLayoutValue('dataPoint.rangeBubbleSizes') || [];
  const dotSize = layoutModel.getLayoutValue('dataPoint.bubbleSizes');
  const props = {
    sizeDataMin: qMin,
    sizeDataMax: qMax,
    minDotSize,
    maxDotSize,
  };

  const getDotMeasureSize = (d, windowSizeMultiplier) =>
    pointHelper.getDotMeasureSize(d.datum.size.value, props, windowSizeMultiplier);

  const getDotSize = (d, windowSizeMultiplier) => {
    pointHelper.getDotSize(dotSize, windowSizeMultiplier);
  };

  return layoutModel.meta.hasSizeMeasure ? getDotMeasureSize : getDotSize;
}
