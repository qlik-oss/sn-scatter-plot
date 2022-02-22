import KEYS from '../../constants/keys';
import getDelta from './delta';
import isBinnedData from '../../data-handler/is-binned-data';
import getBinMinMax from './get-bin-extremum';

export default function createExtremumModel(layoutService, viewStateOptions = {}) {
  function resolveExtrema(scaleName) {
    // Choose between data min/max and explicit min/max. Explicit values have higher priority
    const measurePath = scaleName === KEYS.SCALE.X ? 'qMeasureInfo.0' : 'qMeasureInfo.1';
    const measureIndex = scaleName === KEYS.SCALE.X ? 0 : 1;
    let minFromLayout = layoutService.getHyperCubeValue(`${measurePath}.qMin`, 0);
    let maxFromLayout = layoutService.getHyperCubeValue(`${measurePath}.qMax`, 1);
    const dataPages = layoutService.getLayoutValue('dataPages');
    if (minFromLayout === maxFromLayout && isBinnedData(layoutService) && dataPages?.length) {
      let { min, max } = getBinMinMax({ layoutService, scaleName });
      const delta = 15 * (max - min);
      if (max !== minFromLayout) {
        max += delta;
      }
      if (min !== minFromLayout) {
        min -= delta;
      }
      minFromLayout = Math.min(minFromLayout, min);
      maxFromLayout = Math.max(maxFromLayout, max);
    }
    let explicitType = 'none';

    const axis = scaleName === KEYS.SCALE.X ? 'xAxis' : 'yAxis';
    const { autoMinMax, minMax, min, max } = layoutService.getLayoutValue(axis);
    if (!autoMinMax) {
      explicitType = minMax;
      switch (minMax) {
        case 'min':
          minFromLayout = min;
          maxFromLayout = Math.max(minFromLayout, maxFromLayout);
          break;
        case 'max':
          maxFromLayout = max;
          minFromLayout = Math.min(minFromLayout, maxFromLayout);
          break;
        default:
          minFromLayout = Math.min(min, max);
          maxFromLayout = Math.max(min, max);
          break;
      }
    }

    const source = layoutService.meta.isSnapshot
      ? layoutService.getLayoutValue('snapshotData.content.chartData', {})
      : viewStateOptions;
    let axisMin = typeof source[`${axis}Min`] === 'number' ? source[`${axis}Min`] : minFromLayout;
    let axisMax = typeof source[`${axis}Max`] === 'number' ? source[`${axis}Max`] : maxFromLayout;

    if (typeof source[`${axis}Min`] === 'number' && typeof source[`${axis}Max`] === 'number') {
      explicitType = 'minMax';
    } else if (typeof source[`${axis}Min`] === 'number') {
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
    } else if (typeof source[`${axis}Max`] === 'number') {
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

    // Add 5% padding to the ends that are not explicit.
    let padding = (axisMax - axisMin) / 20;
    // Special case: padding === 0 because data has only one point and min/max are non-explicit
    if (padding === 0) {
      padding = Math.abs(axisMin) > 0 ? Math.abs(axisMin) / 10 : 10;
    }
    switch (explicitType) {
      case 'minMax':
        if (axisMin === axisMax) {
          padding = getDelta({ layoutService, value: axisMin, measureIndex });
          axisMin -= padding;
          axisMax += padding;
        }
        break;
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
      [`${axis}Min`]: axisMin,
      [`${axis}Max`]: axisMax,
      [`${axis}ExplicitType`]: explicitType,
    };
  }

  let xExtrema = resolveExtrema(KEYS.SCALE.X);
  let yExtrema = resolveExtrema(KEYS.SCALE.Y);

  const model = {
    query: {
      getXExtrema: () => xExtrema,
      getYExtrema: () => yExtrema,
    },
    command: {
      updateExtrema: (dataView, isHomeState) => {
        const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = dataView;
        xExtrema.xAxisMin = xAxisMin;
        xExtrema.xAxisMax = xAxisMax;
        yExtrema.yAxisMin = yAxisMin;
        yExtrema.yAxisMax = yAxisMax;
        if (!isHomeState) {
          xExtrema.xAxisExplicitType = 'minMax';
          yExtrema.yAxisExplicitType = 'minMax';
        }
      },
      resetExtrema: () => {
        xExtrema = resolveExtrema(KEYS.SCALE.X);
        yExtrema = resolveExtrema(KEYS.SCALE.Y);
      },
    },
  };

  return model;
}
