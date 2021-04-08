const labelHelper = {
  calculateLabelPositions({ labels, scale, size }) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const { value } = label;
      label.scaledValue = scale(value);
      label.center = label.scaledValue * size;
    }
  },

  getTitle(label) {
    if (label.showValue !== false) {
      if (label.showLabel !== false) {
        return `${label.text} ${label.valueString}`;
      }
      return label.valueString;
    }
    if (label.showLabel !== false) {
      return label.text;
    }
    return '';
  },

  getMaxTextWidth(labels) {
    const widths = labels.map((label) => label.totalWidth);
    const maxWidth = Math.max(...widths);
    return maxWidth;
  },

  addLabelsNeighborInfo({ labels, min, max, gap = 0 }) {
    const n = labels.length - 1;
    if (n < 0) {
      return;
    }
    let label;
    let nextLabel;
    [label] = labels;
    label.cMin = min;
    if (n === 0) {
      label.cMax = max;
      return;
    }
    for (let i = 0; i < n; i++) {
      label = labels[i];
      nextLabel = labels[i + 1];
      label.cMax = (label.center + nextLabel.center - gap) / 2;
      nextLabel.cMin = label.cMax + gap;
    }
    nextLabel.cMax = max;
  },

  getTotalNumLines(labels) {
    let numLines = 0;
    labels.forEach((label) => {
      numLines += label.maxNumLines;
    });
    return numLines;
  },

  reduceMaxNumLines({ labels, min, max, gap, lineHeight, epsilon = 0 }) {
    labelHelper.addLabelsNeighborInfo({ labels, min, max, gap });
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      label.maxNumLines = Math.max(
        1,
        Math.min(label.maxNumLines, Math.floor((Math.max(0, label.cMax - label.cMin) + epsilon) / lineHeight))
      );
    }
  },

  addLabelTitles({ labels, formatter }) {
    let valueString;
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      valueString = formatter ? formatter(label.value) : label.value;
      label.valueString = `(${valueString})`;
      label.title = labelHelper.getTitle(label);
    }
  },

  filterOutOfScaleLabels({ labels, scale }) {
    const [qMin, qMax] = scale.domain();
    return labels.filter((label) => label.value >= qMin && label.value <= qMax);
  },

  addLabelWidth({ labels, measureText }) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      label.totalWidth = measureText(label.title).width;
    }
  },
  addLabelsSize({ labels, maxLabelWidth, lineHeight = 15, measureText }) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      label.width = Math.min(maxLabelWidth, Math.max(...label.lines.map((line) => measureText(line).width)));
      label.height = label.lines.length * lineHeight;
    }
  },

  addLabelSegments({ labels, majorDimension }) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const { center } = label;
      const range = label[majorDimension];
      const radius = range / 2;
      label.segment = {
        center,
        range,
        min: center - radius,
        max: center + radius,
        radius,
      };
    }
  },
};
export default labelHelper;
