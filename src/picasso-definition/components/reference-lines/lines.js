import KEYS from '../../../constants/keys';

export default function createRefLines({ layoutService, scale, key, minimumLayoutMode }) {
  const path = scale === KEYS.SCALE.X ? 'refLine.refLinesX' : 'refLine.refLinesY';
  const refLines = layoutService
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
    style: {
      oob: {
        show: false,
      },
    },
    animations: { enabled: true },
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
