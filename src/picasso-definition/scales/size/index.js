import pointHelper from './helpers';

export default function createSizeScale(layoutService) {
  const { qMin: sizeDataMin, qMax: sizeDataMax } = layoutService.getHyperCubeValue('qMeasureInfo.2', {});
  const [minDotSize, maxDotSize] = layoutService.getLayoutValue('dataPoint.rangeBubbleSizes') || [];
  const dotSize = layoutService.getLayoutValue('dataPoint.bubbleSizes');

  const getDotMeasureSize = (d, windowSizeMultiplier) => {
    const { value } = d.datum?.size || d.size || {};
    if (value === 'NaN' || value === undefined) {
      return undefined;
    }
    return pointHelper.getDotMeasureSize({
      sizeDataMin,
      sizeDataMax,
      minDotSize,
      maxDotSize,
      value,
      windowSizeMultiplier,
    });
  };

  const getDotSize = (d, windowSizeMultiplier) => pointHelper.getDotSize({ dotSize, windowSizeMultiplier });

  return layoutService.meta.hasSizeMeasure ? getDotMeasureSize : getDotSize;
}
