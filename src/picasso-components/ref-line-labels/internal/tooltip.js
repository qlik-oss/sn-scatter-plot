import textHelper from '../../../utils/text-helper';

export default function getLabelTooltip({ title, font, ellipsis, maxNumLines = 5, maxWidth = 200 }) {
  const lines = textHelper.tokenize(title, font, ellipsis, maxNumLines, maxWidth);
  const numLines = lines.length;
  let text = '';
  if (numLines) {
    [text] = lines;
    for (let i = 1; i < numLines; i++) {
      text = `${text}\n${lines[i]}`;
    }
  }
  return text;
}
