import textHelper from '../../../utils/text-helper';

const ellipsis = '…';

export function tokenizeLabels({ labels, font, maxLabelWidth = 70 }) {
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    label.lines = textHelper.tokenize(label.title, font, `${ellipsis} ${label.valueString}`, 3, maxLabelWidth);
    label.maxNumLines = label.lines.length;
  }
}

export function retokenizeLabels({ labels, font, maxLabelWidth = 70 }) {
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    if (label.lines.length > label.maxNumLines) {
      label.lines = textHelper.tokenize(
        label.title,
        font,
        `${ellipsis} ${label.valueString}`,
        label.maxNumLines,
        maxLabelWidth
      );
    }
  }
}
