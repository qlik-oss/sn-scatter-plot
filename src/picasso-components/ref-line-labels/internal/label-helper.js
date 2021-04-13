const labelHelper = {
  addLabelPositions(labels, scale, size) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const { value } = label;
      const scaledValue = scale(value);
      label.center = scaledValue * size;
    }

    labels.sort((l1, l2) => l1.center - l2.center);
  },

  addLabelWidth(labels, measureText) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      label.totalWidth = measureText(label.title).width;
    }
  },

  addLabelSizes(labels, maxLabelWidth, lineHeight, measureText) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      label.width = Math.min(maxLabelWidth, Math.max(...label.lines.map((line) => measureText(line).width)));
      label.height = label.lines.length * lineHeight;
    }
  },

  addLabelSegments(labels, majorDimension) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const { center } = label;
      const range = label[majorDimension];
      const radius = range / 2;
      label.segment = {
        position: center,
        radius,
      };
    }
  },

  addLabelTitles(labels, formatter, localeInfo) {
    let valueString;
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const { value, valueLabel } = label;
      if (labelHelper.hasEngineFormat(value, valueLabel, localeInfo)) {
        valueString = valueLabel;
      } else {
        valueString = formatter ? formatter(value) : value;
      }
      label.valueString = `(${valueString})`;
      label.title = `${label.text} ${label.valueString}`;
    }
  },

  filterOutOfScaleLabels(labels, scale) {
    const [qMin, qMax] = scale.domain();
    return labels.filter((label) => label.value >= qMin && label.value <= qMax);
  },

  hasEngineFormat(value, valueLabel, localeInfo) {
    if (value === undefined || valueLabel === undefined || value.toString() === valueLabel) {
      return false;
    }
    if (!localeInfo) {
      return true;
    }

    /**
     * If encounter +, -, decimal separator, or thousand separator (what ever characters they are),
     * then replace each of them with itself accompanied by an escape charactor. For example:
     * '+-.,' becomes '\+\-\.,' (the comma doesn't need escape charactor to be used in a regex)
     */
    const specialChars = `+-${localeInfo.qDecimalSep || ''}${localeInfo.qThousandSep || ''}`.replace(
      /[-[\]/{}()*+?.\\^$|]/g,
      '\\$&'
    );

    // Remove any special character
    const s = valueLabel.replace(new RegExp(`[0-9e${specialChars}]`, 'g'), '');
    return s.length > 0;
  },

  // Reduce max num lines of a label if the vertical space is not enough
  reduceMaxNumLines({ labels, min, max, gap = 0, lineHeight, epsilon = 0 }) {
    const n = labels.length - 1;
    if (n < 0) return;
    let thisLabel;
    let nextLabel;
    [thisLabel] = labels;
    thisLabel.cMin = min;
    if (n === 0) {
      thisLabel.cMax = max;
      return;
    }
    for (let i = 0; i < n; i++) {
      thisLabel = labels[i];
      nextLabel = labels[i + 1];
      thisLabel.cMax = (thisLabel.center + nextLabel.center - gap) / 2;
      nextLabel.cMin = thisLabel.cMax + gap;
    }

    nextLabel.cMax = max;

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const a = Math.floor((Math.max(0, label.cMax - label.cMin) + epsilon) / lineHeight);
      const b = Math.min(a, label.maxNumLines);
      label.maxNumLines = Math.max(b, 1);
    }
  },
};

export default labelHelper;
