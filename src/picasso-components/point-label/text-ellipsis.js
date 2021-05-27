export const ELLIPSIS_CHAR = '…';

export function ellipsText({ text, textWidth, maxWidth, measureText }) {
  // eslint-disable-next-line no-param-reassign
  text = typeof text === 'string' ? text : `${text}`;
  if (maxWidth === undefined) {
    return text;
  }
  if (textWidth <= maxWidth) {
    return text;
  }

  let min = 0;
  let max = text.length - 1;
  while (min <= max) {
    const reduceIndex = Math.floor((min + max) / 2);
    const reduceText = text.substr(0, reduceIndex) + ELLIPSIS_CHAR;
    if (measureText(reduceText).width <= maxWidth) {
      min = reduceIndex + 1;
    } else {
      max = reduceIndex - 1;
    }
  }
  return text.substr(0, max) + ELLIPSIS_CHAR;
}
