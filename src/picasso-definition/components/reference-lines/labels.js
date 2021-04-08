import KEYS from '../../../constants/keys';

export default function createRefLineLabels({ layoutModel, dock, scale, fontFamily, fontSize, rtl, key }) {
  const path = scale === KEYS.SCALE.X ? 'refLine.refLinesX' : 'refLine.refLinesY';
  const refLineLabels = layoutModel
    .getLayoutValue(path)
    .filter((refLine) => refLine.show !== false && refLine.show !== 0 && refLine.show !== '0');

  if (!refLineLabels.length) {
    return false;
  }

  const refLineLabelDefs = [];
  const labels = refLineLabels.map((refLineLayout) => ({
    text: refLineLayout.label,
    fill: refLineLayout.paletteColor.color,
    inputValue: refLineLayout.refLineExpr.value,
    inputValueLabel: refLineLayout.refLineExpr.label,
    scale,
    value: refLineLayout.refLineExpr.value,
  }));

  refLineLabelDefs.push({
    key,
    type: 'reference-line-labels',
    renderer: 'svg',
    labels,
    scale,
    layoutModel,
    layout: { dock, rtl },
    style: {
      label: {
        fontFamily: fontFamily || 'Source Sans Pro, sans-serif',
        fontSize: fontSize || '12px',
        padding: {
          top: 2,
          bottom: 2,
          left: rtl ? 2 : 4,
          right: rtl ? 4 : 2,
        },
        maxWidth: 50,
        gap: dock === 'left' || dock === 'right' ? 10 : 16,
      },
    },
  });

  return refLineLabelDefs;
}
