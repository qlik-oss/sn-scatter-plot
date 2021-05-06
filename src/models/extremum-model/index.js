import KEYS from '../../constants/keys';

export default function createExtremumModel(layoutService, viewStateOptions = {}) {
  function resolveExtrema(scaleName) {
    // Choose between data min/max and explicit min/max. Explicit values have higher priority
    let holder = scaleName === KEYS.SCALE.X ? 'qMeasureInfo.0' : 'qMeasureInfo.1';
    let minFromLayout = layoutService.getHyperCubeValue(`${holder}.qMin`, 0);
    let maxFromLayout = layoutService.getHyperCubeValue(`${holder}.qMax`, 1);
    let explicitType = 'none';

    holder = scaleName === KEYS.SCALE.X ? 'xAxis' : 'yAxis';
    const { autoMinMax, minMax, min, max } = layoutService.getLayoutValue(holder);
    if (!autoMinMax) {
      explicitType = minMax;
      switch (minMax) {
        case 'min':
          minFromLayout = min;
          break;
        case 'max':
          maxFromLayout = max;
          break;
        default:
          minFromLayout = min;
          maxFromLayout = max;
          break;
      }
    }

    const source = layoutService.meta.isSnapshot
      ? layoutService.getLayoutValue('snapshotData.content.chartData', {})
      : viewStateOptions;
    holder = scaleName === KEYS.SCALE.X ? 'xAxis' : 'yAxis';
    let axisMin = typeof source[`${holder}Min`] === 'number' ? source[`${holder}Min`] : minFromLayout;
    let axisMax = typeof source[`${holder}Max`] === 'number' ? source[`${holder}Max`] : maxFromLayout;

    if (typeof source[`${holder}Min`] === 'number' && typeof source[`${holder}Max`] === 'number')
      explicitType = 'minMax';
    else if (typeof source[`${holder}Min`] === 'number') {
      // Updating explicit type: merging the new explicit info. with the old one.
      switch (explicitType) {
        case 'max':
        case 'minMax':
          explicitType = 'minMax';
          break;
        default:
          explicitType = 'min';
          break;
      }
    } else if (typeof source[`${holder}Max`] === 'number') {
      switch (explicitType) {
        case 'min':
        case 'minMax':
          explicitType = 'minMax';
          break;
        default:
          explicitType = 'max';
          break;
      }
    }

    // Add 10% padding to the ends that are not explicit.
    let padding = (axisMax - axisMin) / 10;
    // Special case: padding === 0 because data has only one point and min/max are non-explicit
    if (padding === 0) padding = Math.abs(axisMin) / 10;
    switch (explicitType) {
      case 'min':
        axisMax += padding;
        break;
      case 'max':
        axisMin -= padding;
        break;
      case 'none':
        axisMin -= padding;
        axisMax += padding;
        break;
      default:
        break;
    }

    return {
      [`${holder}Min`]: axisMin,
      [`${holder}Max`]: axisMax,
      [`${holder}ExplicitType`]: explicitType,
    };
  }

  const xExtrema = resolveExtrema(KEYS.SCALE.X);
  const yExtrema = resolveExtrema(KEYS.SCALE.Y);

  let isHomeState = true;

  const model = {
    query: {
      getXExtrema: () => xExtrema,
      getYExtrema: () => yExtrema,
      getIsHomeState: () => isHomeState,
      updateExtrema: (newZoom) => {
        xExtrema.xAxisMin = newZoom.xAxisMin;
        xExtrema.xAxisMax = newZoom.xAxisMax;
        xExtrema.xAxisExplicitType = 'minMax';
        yExtrema.yAxisMin = newZoom.yAxisMin;
        yExtrema.yAxisMax = newZoom.yAxisMax;
        yExtrema.yAxisExplicitType = 'minMax';
        isHomeState = false;
      },
    },
  };

  return model;
}
