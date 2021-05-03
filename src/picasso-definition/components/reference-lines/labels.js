import extend from 'extend';
import KEYS from '../../../constants/keys';

const defaultStyle = {
  referenceLine: {
    label: {
      name: {
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '12px',
      },
    },
    outOfBounds: {
      backgroundColor: '#737373',
      color: '#e6e6e6',
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: '10px',
    },
  },
};

export default function createRefLineLabels({ layoutService, dock, scale, themeStyle, rtl, key, localeInfo }) {
  const path = scale === KEYS.SCALE.X ? 'refLine.refLinesX' : 'refLine.refLinesY';
  const refLineLabels = layoutService
    .getLayoutValue(path)
    .filter((refLine) => refLine.show !== false && refLine.show !== 0 && refLine.show !== '0');

  if (!refLineLabels.length) {
    return false;
  }

  const labels = refLineLabels.map((refLineLayout) => ({
    text: refLineLayout.label,
    fill: refLineLayout.paletteColor.color,
    value: refLineLayout.refLineExpr.value,
    valueLabel: refLineLayout.refLineExpr.label,
    scale,
  }));

  const style = extend(true, {}, defaultStyle, themeStyle);
  const refLineLabelsDef = {
    key,
    type: 'reference-line-labels',
    renderer: 'svg',
    labels,
    scale,
    localeInfo,
    layout: { dock, rtl },
    style: {
      label: {
        fontFamily: style.referenceLine.label.name.fontFamily,
        fontSize: style.referenceLine.label.name.fontSize,
        padding: {
          top: 2,
          bottom: 2,
          left: rtl ? 2 : 4,
          right: rtl ? 4 : 2,
        },
        maxWidth: dock === 'left' || dock === 'right' ? 70 : 100,
        maxNumLines: 3,
        gap: dock === 'left' || dock === 'right' ? 10 : 16,
      },
      oob: {
        size: 8,
        fill: style.referenceLine.outOfBounds.backgroundColor,
        text: {
          fontFamily: style.referenceLine.outOfBounds.fontFamily,
          fontSize: style.referenceLine.outOfBounds.fontSize,
          fill: style.referenceLine.outOfBounds.color,
          background: {
            fill: style.referenceLine.outOfBounds.backgroundColor,
          },
        },
      },
    },
  };

  return refLineLabelsDef;
}
