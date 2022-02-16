import KEYS from '../../constants/keys';

export default function getFormatPatternFromRange(scaleName, viewHandler, layoutService) {
  let min;
  let max;
  if (scaleName === KEYS.SCALE.X) {
    ({ xAxisMin: min, xAxisMax: max } = viewHandler.getMeta().homeStateDataView);
  } else {
    ({ yAxisMin: min, yAxisMax: max } = viewHandler.getMeta().homeStateDataView);
  }
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return false;
  }
  let p = '';
  const minMagnitude = Math.floor(Math.log10(Math.abs(min)));
  const maxMagnitude = Math.floor(Math.log10(Math.abs(max)));
  const minDecimals = Math.min(Math.abs(minMagnitude), Math.abs(maxMagnitude));
  const range = Math.abs(max - min);
  const rangeMagnitude = Math.floor(Math.log10(Math.abs(range / 50)));

  let nDecimals = Math.abs(rangeMagnitude);

  const field = scaleName === KEYS.SCALE.X ? 'qMeasureInfo.0' : 'qMeasureInfo.1';
  const thousandDelimiter = layoutService.getHyperCubeValue(`${field}.qNumFormat.qThou`, false);
  const decimalDelimiter = layoutService.getHyperCubeValue(`${field}.qNumFormat.qDec`, '.');
  if (range === 0) {
    return '0'.concat(decimalDelimiter, '##');
  }

  let reduceBy;
  if (rangeMagnitude >= 0) {
    nDecimals = Math.max(2, minDecimals - rangeMagnitude);
  } else {
    reduceBy = (minDecimals - (minDecimals % 3)) * (maxMagnitude < 0 ? 1 : -1);
    nDecimals -= reduceBy;
  }

  p += thousandDelimiter ? '#'.concat(thousandDelimiter, '##0') : '0';
  if (nDecimals) {
    p += decimalDelimiter;
    for (let i = 0; i < nDecimals; i++) {
      p += '#';
    }
  }

  return p;
}
