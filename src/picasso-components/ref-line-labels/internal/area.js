import { tokenizeLabels } from './tokenize';

export function createArea(rect, dock, padding) {
  if (dock === 'left' || dock === 'right')
    return {
      orientation: 'vertical',
      majorAxis: 'y',
      majorDimension: 'height',
      majorSize: rect.height,
      minorAxis: 'x',
      minorCenter: (rect.width - padding.right - padding.left) / 2 + padding.left,
    };
  return {
    orientation: 'horizontal',
    majorAxis: 'x',
    majorDimension: 'width',
    majorSize: rect.width,
    minorAxis: 'y',
    minorCenter: (rect.height - padding.top - padding.bottom) / 2 + padding.top,
  };
}

export function getPreferredSize(labels, dock, labelStyle) {
  if (dock === 'left' || dock === 'right') {
    const { padding, maxLabelWidth } = labelStyle;
    const maxWidthAmongLabels = Math.max(...labels.map((label) => label.totalWidth));
    const preferredWidth = Math.min(maxLabelWidth, maxWidthAmongLabels) + padding.left + padding.right;
    return preferredWidth;
  }

  const { padding, maxLabelWidth, maxNumLines, font, lineHeight } = labelStyle;
  let numLines = 1;
  const maxWidthAmongLabels = Math.max(...labels.map((label) => label.totalWidth));
  if (maxWidthAmongLabels > maxLabelWidth) {
    tokenizeLabels(labels, font, maxLabelWidth, maxNumLines);
    numLines = Math.max(...labels.map((label) => label.lines.length));
  }

  const preferredHeight = numLines * lineHeight + padding.top + padding.bottom;
  return preferredHeight;
}
