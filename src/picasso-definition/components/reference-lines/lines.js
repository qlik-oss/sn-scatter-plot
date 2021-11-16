/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';

export default function createRefLines({ layoutService, chartModel, scale, key, minimumLayoutMode }) {
  const viewHandler = chartModel.query.getViewHandler();
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
    animations: {
      enabled: () => !viewHandler.getInteractionInProgress(),
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
        stroke: refLineLayout.paletteColor.color,
        strokeWidth: 2,
      },
      scale,
      value: refLineLayout.refLineExpr.value,
    });
  });

  return settings;
}
