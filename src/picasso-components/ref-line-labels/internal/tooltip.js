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

export function getOobsTooltip({ oobs, font, ellipsis, maxNumLines = 5, maxWidth = 200 }) {
  const tooltips = oobs.map((oob) =>
    getLabelTooltip({
      title: oob.title,
      font,
      ellipsis: `${ellipsis} ${oob.valueString}`,
      maxNumLines,
      maxWidth,
    })
  );
  const numTooltips = tooltips.length;
  let text = '';
  if (numTooltips) {
    [text] = tooltips;
    for (let i = 1; i < numTooltips; i++) {
      text = `${text}\n\n${tooltips[i]}`;
    }
  }
  return text;
}
