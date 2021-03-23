import pointHelper from './helpers';

export default function createSizeScale(layoutModel) {
  const { qMin: sizeDataMin, qMax: sizeDataMax } = layoutModel.getHyperCubeValue('qMeasureInfo.2', {});
  const [minDotSize, maxDotSize] = layoutModel.getLayoutValue('dataPoint.rangeBubbleSizes') || [];
  const dotSize = layoutModel.getLayoutValue('dataPoint.bubbleSizes');

  const getDotMeasureSize = (d, windowSizeMultiplier) => {
    const { value } = d.datum.size;
    return pointHelper.getDotMeasureSize({
      sizeDataMin,
      sizeDataMax,
      minDotSize,
      maxDotSize,
      value,
      windowSizeMultiplier,
    });
  };

  const getDotSize = (d, windowSizeMultiplier) => pointHelper.getDotSize(dotSize, windowSizeMultiplier);

  return layoutModel.meta.hasSizeMeasure ? getDotMeasureSize : getDotSize;
}
