import labelLayout from './internal/label-layout';
import labelHelper from './internal/label-helper';
import getFormatter from './internal/formatter';
import { createArea, getPreferredSize } from './internal/area';
import getLabelTooltip from './internal/tooltip';
import getLabelStyle from './internal/label-style';
import { tokenizeLabels, retokenizeLabels } from './internal/tokenize';
import * as oob from './internal/oob';

const ellipsis = '…';

export default {
  require: ['renderer', 'symbol'],
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
    const formatter = getFormatter(scale);
    const labels = labelHelper.resolveLabels(this.settings.labels);
    labelHelper.addLabelTitles(labels, formatter);
    const { numLowerOobs, numUpperOobs, filteredLabels } = labelHelper.filterOobLabels(labels, scale);
    let preferredSize;
    if (filteredLabels && filteredLabels.length) {
      const labelStyle = getLabelStyle(style.label);
      const { dock } = this.settings.layout;
      labelHelper.addLabelWidth(filteredLabels, this.measureText);
      preferredSize = getPreferredSize(filteredLabels, dock, labelStyle);
      return preferredSize;
    }
    const circleSizes = oob.getOobSizes(this.measureText);
    const maxCircleSize = numUpperOobs ? oob.getCircleSize(numUpperOobs, circleSizes) : 0;
    const minCircleSize = numLowerOobs ? oob.getCircleSize(numLowerOobs, circleSizes) : 0;
    preferredSize = Math.max(maxCircleSize, minCircleSize);
    return preferredSize;
  },

  render() {
    const { scale, rect, symbol } = this;
    const labels = labelHelper.resolveLabels(this.settings.labels);
    if (scale.domain().length <= 0 || labels.length <= 0) return false;
    const { dock } = this.settings.layout;
    const { style, localeInfo } = this.settings;
    const { fontSize, fontFamily, font, lineHeight, gap, maxLabelWidth, maxNumLines, padding } = getLabelStyle(
      style.label
    );
    const formatter = getFormatter(scale);
    const area = createArea(rect, dock, padding);
    const { orientation, majorAxis, majorDimension, majorSize, minorAxis, minorCenter } = area;

    labelHelper.addLabelTitles(labels, formatter, localeInfo);
    labelHelper.addLabelPositions(labels, scale, majorSize);

    // filteredLabels: labels that are not out of bounds
    const {
      filteredLabels,
      lowerOobs,
      upperOobs,
      lowerCircleSize,
      upperCircleSize,
      lowerOobSpace,
      upperOobSpace,
    } = oob.createOobsInfo({
      labels,
      minValue: scale.domain()[0],
      maxValue: scale.domain()[1],
      orientation,
      style,
      padding,
      measureText: this.measureText,
    });

    const [min, max] =
      majorAxis === 'x' ? [lowerOobSpace, majorSize - upperOobSpace] : [upperOobSpace, majorSize - lowerOobSpace];

    // Tokenizing means breaking the label titles into many lines if it is too long
    tokenizeLabels(filteredLabels, font, maxLabelWidth, maxNumLines);
    if (orientation === 'vertical') {
      // In case there is not enough space vertically for some labels
      labelHelper.reduceMaxNumLines({ labels: filteredLabels, min, max, gap, lineHeight, epsilon: gap * 0.05 });
      retokenizeLabels(filteredLabels, font, maxLabelWidth);
    }

    labelHelper.addLabelSizes(filteredLabels, maxLabelWidth, lineHeight, this.measureText);

    // A label's segment is the rectangle that will contain the label
    labelHelper.addLabelSegments(filteredLabels, majorDimension);

    // filteredLabels2: filteredLabels whose segments are not out of bounds
    const filteredLabels2 = labelLayout.createLayout(filteredLabels, min, max, gap);
    let renderedLabels = [];
    filteredLabels2.forEach((label) => {
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

    let lowerPosition = style.oob.size + lowerCircleSize / 2;
    let upperPosition = majorSize - (style.oob.size + upperCircleSize / 2);
    if (majorAxis === 'y') [lowerPosition, upperPosition] = [upperPosition, lowerPosition];

    const renderedLowerOobs = oob.createOobs({
      alignment: 0,
      dockValue: 0,
      oobs: lowerOobs,
      style: style.oob,
      rect,
      symbol,
      position: lowerPosition,
      area,
      radius: lowerCircleSize / 2,
      font,
    });
    const renderedUpperOobs = oob.createOobs({
      alignment: 1,
      dockValue: 1,
      oobs: upperOobs,
      style: style.oob,
      rect,
      symbol,
      position: upperPosition,
      area,
      radius: upperCircleSize / 2,
      font,
    });

    return renderedLabels.concat([...renderedLowerOobs, ...renderedUpperOobs]);
  },
};
