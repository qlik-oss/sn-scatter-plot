/* eslint-disable no-param-reassign */
import extend from 'extend';
import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import getContrastColors from '../../../utils/color/get-contrast-colors';

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

const getOobColors = (style, theme) => {
  const oobStyle = theme.getStyle('object', 'referenceLine', 'outOfBounds');
  if (oobStyle) {
    return style.referenceLine.outOfBounds;
  }
  const foreColor = theme.getStyle('object', '', 'color');
  return getContrastColors(foreColor);
};

export default function createRefLineLabels({ models, context, scale, key, dock, minimumLayoutMode }) {
  const { layoutService, themeService } = models;
  const { rtl, localeInfo } = context;
  const themeStyle = themeService.getStyles();
  const theme = themeService.getTheme();

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
  const oobColors = getOobColors(style, theme);

  const refLineLabelsDef = {
    key,
    type: 'reference-line-labels',
    renderer: 'svg',
    labels,
    scale,
    localeInfo,
    layout: { dock, minimumLayoutMode, rtl },
    style: {
      label: {
        fontFamily: style.referenceLine.label.name.fontFamily,
        fontSize: style.referenceLine.label.name.fontSize,
        padding: {
          top: NUMBERS.REF_LABELS.PADDING.TOP,
          bottom: NUMBERS.REF_LABELS.PADDING.BOTTOM,
          left: rtl ? NUMBERS.REF_LABELS.PADDING.END : NUMBERS.REF_LABELS.PADDING.START,
          right: rtl ? NUMBERS.REF_LABELS.PADDING.START : NUMBERS.REF_LABELS.PADDING.END,
        },
        maxWidth: dock === 'left' || dock === 'right' ? NUMBERS.REF_LABELS.MAX_WIDTH.Y : NUMBERS.REF_LABELS.MAX_WIDTH.X,
        maxNumLines: NUMBERS.REF_LABELS.MAX_NUM_LINES,
        gap: dock === 'left' || dock === 'right' ? NUMBERS.REF_LABELS.GAP.Y : NUMBERS.REF_LABELS.GAP.X,
      },
      oob: {
        size: NUMBERS.REF_LABELS.OOB.SIZE,
        fill: oobColors.backgroundColor,
        text: {
          fontFamily: style.referenceLine.outOfBounds.fontFamily,
          fontSize: style.referenceLine.outOfBounds.fontSize,
          fill: oobColors.color,
          background: {
            fill: oobColors.backgroundColor,
          },
        },
      },
    },
    animations: {
      enabled: true,
      trackBy: (node) => `${node.labelID}: ${node.text}`,
      compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
        const deltaX = currentRect.x - previousRect.x;
        currentNodes.forEach((node) => {
          node.x -= deltaX;
        });
      },
    },
  };

  return refLineLabelsDef;
}
