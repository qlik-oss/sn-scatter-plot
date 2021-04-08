import labelLayout from './internal/label-layout';
import labelHelper from './internal/label-helper';
import getFormatter from './internal/formatter';
import { createArea, getPreferredSize, createAreaProps } from './internal/area';
import getLabelTooltip from './internal/tooltip';
import getLabelStyle from './internal/label-style';
import { tokenizeLabels, retokenizeLabels } from './internal/tokenize';

const ellipsis = '…';

const resolveLabels = (labels) =>
  labels.map((label) => ({
    ...label,
    value: typeof label.value === 'function' ? label.value() : label.value,
  }));

export default {
  require: ['renderer', 'chart', 'symbol'],
  defaultSettings: {
    layout: {
      displayOrder: 0,
      prioOrder: 0,
    },
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
    const labels = resolveLabels(this.settings.labels);
    const formatter = getFormatter(scale);
    const { dock } = this.settings.layout;
    const labelStyle = getLabelStyle(style.label);

    labelHelper.addLabelTitles({ labels, formatter });
    const filteredLabels = labelHelper.filterOutOfScaleLabels({ labels, scale });
    labelHelper.addLabelWidth({ labels: filteredLabels, measureText: this.measureText });
    const preferedSize = getPreferredSize({ dock, labels: filteredLabels, labelStyle });

    return preferedSize;
  },

  render() {
    const { scale } = this;
    const labels = resolveLabels(this.settings.labels);
    if (!scale.domain().length || labels.length === 0) {
      return undefined;
    }
    const { style } = this.settings;
    const formatter = getFormatter(scale);
    const { dock } = this.settings.layout;
    const { fontSize, fontFamily, padding } = style.label;
    const { font, lineHeight, gap, maxLabelWidth } = getLabelStyle(style.label);
    const areaProps = createAreaProps(dock);
    const area = createArea(this.rect, areaProps, padding);
    const { majorAxis, minorAxis, orientation, majorDimension } = areaProps;
    const { majorSize, minorCenter } = area;
    const min = 0;
    const max = majorSize;

    labelHelper.addLabelTitles({ labels, formatter });
    labelHelper.calculateLabelPositions({ labels, scale, size: majorSize });
    tokenizeLabels({ labels, font, maxLabelWidth });
    labels.sort((l1, l2) => l1.center - l2.center);

    if (orientation === 'vertical') {
      labelHelper.reduceMaxNumLines({ labels, min, max, gap, lineHeight, epsilon: gap * 0.05 });
      retokenizeLabels({ labels, font, maxLabelWidth });
    }

    labelHelper.addLabelsSize({ labels, maxLabelWidth, lineHeight, measureText: this.measureText });
    labelHelper.addLabelSegments({ labels, majorDimension });
    labelLayout.layout({
      segments: labels.map((label) => label.segment),
      min,
      max,
      gap: style.label.gap,
    });

    const filteredLabels = labels.filter((label) => labelLayout.isInside(label.segment, min, max));
    let renderedLabels = [];
    filteredLabels.forEach((label) => {
      const { lines } = label;
      const count = lines.length;
      const renderedTextLines = lines.map((line, idx) => {
        const obj = {
          type: 'text',
          text: line,
          title: getLabelTooltip({ title: label.title, font, ellipsis: `${ellipsis} ${label.valueString}` }),
          dx: 0,
          dy: 0,
          maxWidth: maxLabelWidth,
          width: maxLabelWidth,
          fontSize,
          fontFamily,
          fill: label.fill,
          baseline: 'central',
          anchor: 'middle',
        };
        obj[minorAxis] = minorCenter;
        obj[majorAxis] = label.segment.position;
        obj.y += (idx - (count - 1) / 2) * lineHeight;
        return obj;
      });
      renderedLabels = renderedLabels.concat(renderedTextLines);
    });
    return renderedLabels;
  },
};
