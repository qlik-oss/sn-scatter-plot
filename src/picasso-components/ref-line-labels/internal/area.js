import labelHelper from './label-helper';
import { tokenizeLabels } from './tokenize';

export const createVerticalAreaProps = (dock) => ({
  dock,
  orientation: 'vertical',
  majorAxis: 'y',
  minorAxis: 'x',
  majorDimension: 'height',
  minorDimension: 'width',
  flipXY: false,
});

export const createHorizontalAreaProps = (dock) => ({
  dock,
  orientation: 'horizontal',
  majorAxis: 'x',
  minorAxis: 'y',
  majorDimension: 'width',
  minorDimension: 'height',
  flipXY: true,
});

export function createAreaProps(dock) {
  return dock === 'left' || dock === 'right' ? createVerticalAreaProps(dock) : createHorizontalAreaProps(dock);
}

export function createArea(rect, areaProps, padding) {
  const minorSize = rect[areaProps.minorDimension];
  const majorSize = rect[areaProps.majorDimension];
  const minorCenter =
    areaProps.orientation === 'vertical'
      ? (minorSize - padding.right - padding.left) / 2 + padding.left
      : (minorSize - padding.top - padding.bottom) / 2 + padding.top;
  return { minorSize, majorSize, minorCenter };
}

export function getPreferredWidth(labels, labelStyle) {
  const { left, right, maxLabelWidth } = labelStyle;
  return Math.min(maxLabelWidth, labelHelper.getMaxTextWidth(labels)) + left + right;
}

export function getPreferredHeight(labels, labelStyle) {
  const { font, lineHeight, top, bottom, maxLabelWidth } = labelStyle;
  let numLines = 1;
  if (labelHelper.getMaxTextWidth(labels) > maxLabelWidth) {
    tokenizeLabels({ labels, font, maxLabelWidth });
    numLines = Math.max(...labels.map((label) => label.lines.length));
  }
  return numLines * lineHeight + top + bottom;
}

export function getPreferredSize({ dock, labels, labelStyle }) {
  return dock === 'top' || dock === 'bottom'
    ? getPreferredHeight(labels, labelStyle)
    : getPreferredWidth(labels, labelStyle);
}
