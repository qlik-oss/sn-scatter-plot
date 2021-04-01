import refLine from './line/ref-line';
import KEYS from '../../../../constants/keys';

export default function createRefLines({ layoutModel, scale, key, minimumLayoutMode }) {
  const path = scale === KEYS.SCALE.X ? 'refLine.refLinesX' : 'refLine.refLinesY';
  const refLines = layoutModel.getLayoutValue(path);

  if (!refLines.length) {
    return false;
  }

  const setting = {
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
    preferredSize() {
      return {
        size: 0,
        edgeBleed: {
          left: 1,
          right: 1,
          top: 1,
          bottom: 1,
        },
      };
    },
  };

  refLines.forEach((refLineLayout) => {
    setting.lines[scale].push(
      refLine({
        refLineLayout,
        scale,
      })
    );
  });

  return setting;
}
