import oobHelper from '../../../utils/oob-helper';
import tooltip from './tooltip';

const ellipsis = '…';

const oob = {
  filterOobLabels(labels, minValue, maxValue) {
    let filteredLabels = labels.filter((label) => label.value >= minValue);
    filteredLabels = filteredLabels.filter((label) => label.value <= maxValue);
    const lowerOobs = labels.filter((label) => label.value < minValue);
    const upperOobs = labels.filter((label) => label.value > maxValue);
    const numLowerOobs = lowerOobs.length;
    const numUpperOobs = upperOobs.length;
    return {
      filteredLabels,
      lowerOobs,
      upperOobs,
      numLowerOobs,
      numUpperOobs,
    };
  },

  getOobSizes(measureText) {
    let max = 0;
    let s;
    for (let i = 1; i < 10; i++) {
      s = measureText(i);
      max = Math.max(max, Math.sqrt(s.width * s.width + s.height * s.height));
    }
    s = measureText('9+');
    return [max, Math.max(max, Math.sqrt(s.width * s.width + s.height * s.height))];
  },

  getCircleSize(numOobs, circleSizes) {
    return numOobs > 9 ? circleSizes[1] : circleSizes[0];
  },

  createOobsInfo({ labels, minValue, maxValue, orientation, style, padding, measureText }) {
    const { lowerOobs, upperOobs, numLowerOobs, numUpperOobs, filteredLabels } = oob.filterOobLabels(
      labels,
      minValue,
      maxValue
    );
    const circleSizes = oob.getOobSizes(measureText);
    const lowerCircleSize = oob.getCircleSize(numLowerOobs, circleSizes);
    const upperCircleSize = oob.getCircleSize(numUpperOobs, circleSizes);
    const [lowerPadding, upperPadding] =
      orientation === 'vertical' ? [padding.top, padding.bottom] : [padding.left, padding.right];
    const lowerOobSpace = numLowerOobs > 0 ? lowerPadding + style.oob.size + lowerCircleSize : 0;
    const upperOobSpace = numUpperOobs > 0 ? upperPadding + style.oob.size + upperCircleSize : 0;
    return {
      filteredLabels,
      lowerOobs,
      upperOobs,
      lowerCircleSize,
      upperCircleSize,
      lowerOobSpace,
      upperOobSpace,
    };
  },

  createOobs({ alignment, dockValue, oobs, style, rect, symbol, position, area, radius, font }) {
    const numOobs = oobs ? oobs.length : 0;
    if (numOobs < 1) {
      return [];
    }
    const { majorAxis, minorAxis, minorDimension } = area;
    const minorSize = rect[minorDimension];
    const oobSymbol = oobHelper.createOob({
      oob: oobHelper.getDefaultSettings({ size: style.size, fill: style.fill, alignment }),
      dockValue,
      boxCenter: 0.5,
      majorAxis,
      rendWidth: rect.width,
      rendHeight: rect.height,
      symbol,
    });

    const oobCircle = {
      type: 'circle',
      r: radius,
      stroke: 'transparent',
      fill: style.text.background.fill,
      strokeWidth: 0,
      [`c${minorAxis}`]: minorSize / 2,
      [`c${majorAxis}`]: position,
    };

    const oobText = {
      type: 'text',
      text: numOobs > 9 ? '9+' : numOobs,
      title: tooltip.getOobsTooltip({
        oobs,
        font,
        ellipsis,
      }),
      dx: 0,
      dy: 0,
      maxWidth: minorSize,
      width: minorSize,
      fontSize: style.text.fontSize,
      fontFamily: style.text.fontFamily,
      fill: style.text.fill,
      baseline: 'central',
      anchor: 'middle',
      [minorAxis]: minorSize / 2,
      [majorAxis]: position,
    };

    return [oobSymbol, oobCircle, oobText];
  },
};

export default oob;
