import textHelper from '../../../utils/text-helper';

export default function getLabelStyle(labelStyle) {
  const font = `normal ${labelStyle.fontSize} ${labelStyle.fontFamily}`;
  const fontHeight = textHelper.getFontHeight(font);
  const lineHeight = fontHeight;
  const gap = labelStyle.gap || 12;
  const maxLabelWidth = labelStyle.maxWidth || 75;
  const top = labelStyle.padding.top || 0;
  const bottom = labelStyle.padding.bottom || 0;
  const left = labelStyle.padding.left || 0;
  const right = labelStyle.padding.right || 0;
  return {
    font,
    lineHeight,
    gap,
    maxLabelWidth,
    top,
    bottom,
    left,
    right,
  };
}
