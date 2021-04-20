import KEYS from '../../../constants/keys';

export default function createRefLines({ layoutModel, scale, key, minimumLayoutMode }) {
  const path = scale === KEYS.SCALE.X ? 'refLine.refLinesX' : 'refLine.refLinesY';
  const refLines = layoutModel
    .getLayoutValue(path)
    .filter((refLine) => refLine.show !== false && refLine.show !== 0 && refLine.show !== '0');

  if (!refLines.length) {
    return false;
  }

  const settings = {
    key,
    type: 'ref-line',
    layout: {
      minimumLayoutMode,
    },
    lines: {
      y: [],
      x: [],
    },
  };

  refLines.forEach((refLineLayout) => {
    settings.lines[scale].push({
      line: {
        stroke: refLineLayout.paletteColor.color,
        strokeWidth: 2,
      },
      scale,
      value: refLineLayout.refLineExpr.value,
    });
  });

  return settings;
}