import textHelper from '../../../utils/text-helper';

const ellipsis = '…';

// Tokenizing means breaking a label's title into many lines if it is too long
export function tokenizeLabels(labels, font, maxLabelWidth, defaultMaxNumLines) {
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    label.lines = textHelper.tokenize(
      label.title,
      font,
      `${ellipsis} ${label.valueString}`,
      defaultMaxNumLines,
      maxLabelWidth
    );
    label.maxNumLines = label.lines.length;
  }
}

export function retokenizeLabels(labels, font, maxLabelWidth = 70) {
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
