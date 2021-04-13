import labelLayout from './internal/label-layout';
import labelHelper from './internal/label-helper';
import getFormatter from './internal/formatter';
import { createArea, getPreferredSize } from './internal/area';
import getLabelTooltip from './internal/tooltip';
import getLabelStyle from './internal/label-style';
import { tokenizeLabels, retokenizeLabels } from './internal/tokenize';

const ellipsis = '…';

export default {
  require: ['renderer'],
  defaultSettings: {
    layout: {
      displayOrder: 0,
      prioOrder: 0,
    },
  },

  resolveLabels(labels) {
    return labels.map((label) => ({
      ...label,
      value: typeof label.value === 'function' ? label.value() : label.value,
    }));
  },

  measureText(text) {
    return this.renderer.measureText({
      text,
      fontSize: this.settings.style.label.fontSize,
      fontFamily: this.settings.style.label.fontFamily,
    });
  },

  preferredSize() {
    const { scale } = this;
    const { style } = this.settings;
    const { dock } = this.settings.layout;
    const formatter = getFormatter(scale);
    const labelStyle = getLabelStyle(style.label);
    const labels = this.resolveLabels(this.settings.labels);
    labelHelper.addLabelTitles(labels, formatter);
    const filteredLabels = labelHelper.filterOutOfScaleLabels(labels, scale);
    labelHelper.addLabelWidth(filteredLabels, this.measureText);
    const preferedSize = getPreferredSize(filteredLabels, dock, labelStyle);
    return preferedSize;
  },

  render() {
    const { scale } = this;
    const labels = this.resolveLabels(this.settings.labels);
    if (scale.domain().length <= 0 || labels.length <= 0) return false;
    const { dock } = this.settings.layout;
    const { style, localeInfo } = this.settings;
    const { fontSize, fontFamily, font, lineHeight, gap, maxLabelWidth, maxNumLines, padding } = getLabelStyle(
      style.label
    );
    const formatter = getFormatter(scale);
    const area = createArea(this.rect, dock, padding);
    const { orientation, majorAxis, majorDimension, majorSize, minorAxis, minorCenter } = area;
    const min = 0;
    const max = majorSize;

    labelHelper.addLabelTitles(labels, formatter, localeInfo);
    labelHelper.addLabelPositions(labels, scale, majorSize);

    // Tokenizing means breaking the label titles into many lines if it is too long
    tokenizeLabels(labels, font, maxLabelWidth, maxNumLines);
    if (orientation === 'vertical') {
      // In case there is not enough space vertically for some labels
      labelHelper.reduceMaxNumLines({ labels, min, max, gap, lineHeight, epsilon: gap * 0.05 });
      retokenizeLabels(labels, font, maxLabelWidth);
    }

    labelHelper.addLabelSizes(labels, maxLabelWidth, lineHeight, this.measureText);

    // A label's segment is the rectangle that will contain the label
    labelHelper.addLabelSegments(labels, majorDimension);
    const filteredLabels = labelLayout.createLayout(labels, min, max, gap);
    let renderedLabels = [];
    filteredLabels.forEach((label) => {
      const { lines } = label;
      const count = lines.length;
      const renderedTextLines = lines.map((line, idx) => {
        const obj = {
          fontSize,
          fontFamily,
          type: 'text',
          text: line,
          title: getLabelTooltip({
            title: label.title,
            font,
            ellipsis: `${ellipsis} ${label.valueString}`,
            maxNumLines,
            maxWidth: maxLabelWidth,
          }),
          dx: 0,
          dy: 0,
          maxWidth: maxLabelWidth,
          width: maxLabelWidth,
          fill: label.fill,
          baseline: 'central',
          anchor: 'middle',
          [minorAxis]: minorCenter,
          [majorAxis]: label.segment.position,
        };

        obj.y += (idx - (count - 1) / 2) * lineHeight;
        return obj;
      });

      renderedLabels = renderedLabels.concat(renderedTextLines);
    });

    return renderedLabels;
  },
};
