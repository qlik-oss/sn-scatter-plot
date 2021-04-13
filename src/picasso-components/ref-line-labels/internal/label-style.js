import textHelper from '../../../utils/text-helper';

export default function getLabelStyle(labelStyle) {
  const { fontFamily, fontSize, gap, maxWidth, maxNumLines, padding } = labelStyle;
  const font = `normal ${fontSize} ${fontFamily}`;
  return {
    fontFamily,
    fontSize,
    font,
    lineHeight: textHelper.getFontHeight(font),
    gap: gap || 12,
    maxLabelWidth: maxWidth || 75,
    maxNumLines: maxNumLines || 1,
    padding: {
      top: padding.top || 0,
      bottom: padding.bottom || 0,
      left: padding.left || 0,
      right: padding.right || 0,
    },
  };
}
