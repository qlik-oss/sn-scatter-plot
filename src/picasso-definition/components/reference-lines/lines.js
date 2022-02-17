/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';

export default function createRefLines({ colorService, layoutService, chartModel, scale, key, minimumLayoutMode }) {
  const path = scale === KEYS.SCALE.X ? 'refLine.refLinesX' : 'refLine.refLinesY';
  const refLines = layoutService
    .getLayoutValue(path)
    .filter((refLine) => refLine.show !== false && refLine.show !== 0 && refLine.show !== '0');

  if (!refLines.length) {
    return false;
  }

  const colorModel = { resolveUIColor: colorService.getPaletteColor };

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
    animations: {
      enabled: () => chartModel.query.animationEnabled(),
      compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
        switch (scale) {
          case KEYS.SCALE.X:
            if (currentRect.x !== previousRect.x) {
              const deltaX = currentRect.x - previousRect.x;
              currentNodes.forEach((node) => {
                node.x1 -= deltaX;
                node.x2 -= deltaX;
              });
            }
            break;
          case KEYS.SCALE.Y:
            if (currentRect.width !== previousRect.width) {
              const deltaWidth = currentRect.width - previousRect.width;
              currentNodes.forEach((node) => {
                node.x2 += deltaWidth;
              });
            }
            break;
          default:
            break;
        }
      },
    },
  };

  refLines.forEach((refLineLayout) => {
    settings.lines[scale].push({
      line: {
        stroke: colorModel.resolveUIColor(refLineLayout.paletteColor || { index: refLineLayout.color }),
        strokeWidth: refLineLayout.style?.lineThickness || 2,
        strokeDasharray: refLineLayout.style?.lineType,
      },
      scale,
      value: refLineLayout.refLineExpr.value,
    });
  });

  return settings;
}
