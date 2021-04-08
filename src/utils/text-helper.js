let dummyContext;

function setDummyContext() {
  dummyContext = dummyContext || document.createElement('canvas').getContext('2d');
}

const defaultEllipsis = '…';
const defaultHyphen = '-';

const textHelper = {
  measureTextWidth(text) {
    setDummyContext();
    const { width } = dummyContext.measureText(text);
    return width;
  },

  lineWrap(text, width, font, maxNumLines) {
    // wrap text at white space
    setDummyContext();
    let n;
    let r;
    const textLines = text ? text.split(/\n+|\r+|\r\n/) : [];
    const lines = [];
    let testLine;
    let testWidth;
    let words = text ? text.split(/\s+/) : [];
    let line = textLines[0];
    let remainder;
    let textLine;
    if (typeof width !== 'number' || width <= 0) {
      return [text];
    }

    if (typeof maxNumLines === 'number' && textLines.length >= maxNumLines) {
      return textLines.slice(0, maxNumLines);
    }

    if (font) {
      dummyContext.font = font;
    }

    for (r = 0; r < textLines.length; r++) {
      textLine = textLines[r] || '';
      words = textLine.split(/\s+/);
      [line] = words;
      remainder = '';
      for (n = 1; n < words.length; n++) {
        testLine = `${line} ${words[n]}`;
        testWidth = textHelper.measureTextWidth(testLine);
        if (testWidth > width && (typeof maxNumLines !== 'number' || maxNumLines > lines.length)) {
          lines.push(line);
          line = words[n];
        } else {
          line = testLine;
        }

        if (typeof maxNumLines === 'number' && lines.length >= maxNumLines) {
          remainder = words.slice(n + 1).join(' ');
          break;
        }
      }

      if (typeof maxNumLines !== 'number' || lines.length < maxNumLines) {
        lines.push(line);
      } else {
        lines[Math.max(0, lines.length - 1)] = `${lines[Math.max(0, lines.length - 1)] || ''} ${line} ${remainder}`;
      }
    }

    return lines;
  },

  wordWrap(lines, width, font, maxNumLines, ellipsis) {
    setDummyContext();
    if (!lines || !lines.length) {
      return [];
    }

    if (font) {
      dummyContext.font = font;
    }

    let result = [];
    const cLines = lines.slice();
    let exploded;
    let remainder;
    let line;
    let i;

    cLines.filter((s) => !!s);

    if (typeof width !== 'number' || width < 0) {
      return lines.slice();
    }

    for (i = 0; i < cLines.length; i++) {
      line = cLines[i];
      remainder = null;
      if (line) {
        if (line.length <= 1 || textHelper.measureTextWidth(line) <= width) {
          result.push(line);
        } else {
          exploded = textHelper.splitWord(line, width, undefined, maxNumLines - result.length);
          if (exploded.length <= 1) {
            // could not shorten current line -> add it to results
            result.push(exploded[0]);
          } else {
            remainder = exploded.pop(); // last element could be longer than width limit
            result = result.concat(exploded);

            if (cLines[i + 1]) {
              // add remainder to next line
              if (
                textHelper.measureTextWidth(`${remainder} ${cLines[i + 1]}`) > width &&
                result.length + cLines.length - i <= maxNumLines
              ) {
                // If adding to the next line will force that to break as well and we are not close to the max limit, then create a new line inbetween instead
                cLines.splice(i + 1, 0, remainder);
              } else {
                cLines[i + 1] = `${remainder} ${cLines[i + 1]}`;
              }
            } else {
              // TODO - safeguard against endless loop (mek)
              cLines.push(remainder);
            }
          }
        }
      }
    }

    result.forEach((s, k, arr) => {
      // eslint-disable-next-line no-param-reassign
      arr[k] = s ? s.trim() : s;
    });

    if (result.length > maxNumLines) {
      result = result.splice(0, maxNumLines); // if more lines than allowed, truncate the last line
      result[result.length - 1] = textHelper.truncate(result[result.length - 1], width, font, ellipsis).text;
    } else {
      // truncate last line only if that line does not fit
      line = result[result.length - 1];
      if (line && line.length > 1 && textHelper.measureTextWidth(line) > width) {
        result[result.length - 1] = textHelper.truncate(line, width, font, ellipsis).text;
      }
    }

    return result;
  },

  /**
   * Truncates a single line of text if the text does not fit inside the given width.
   * @param text
   * @param {Number} width
   * @param {String} font
   * @returns {{text: String, rest: String}}
   */
  truncate(text, width, font, ellipsis = defaultEllipsis) {
    setDummyContext();
    let s = text;
    let i;
    let temp;
    let tempEllipsis;
    let rest;
    const minCharWidth = textHelper.measureTextWidth('i');
    const maxNumLetters = Math.ceil(width / minCharWidth);
    if (font) {
      dummyContext.font = font;
    }

    if (!text || !width) {
      rest = undefined;
    } else if (textHelper.measureTextWidth(s) > width) {
      for (i = Math.min(maxNumLetters, s.length); i > 0; i--) {
        temp = s.substring(0, i - 1);
        tempEllipsis = temp.trim() + ellipsis;
        if (textHelper.measureTextWidth(tempEllipsis) <= width) {
          rest = s.substring(i - 1);
          s = tempEllipsis;
          break;
        }
      }
      if (!i) {
        rest = s;
        s = defaultEllipsis;
      }
    }
    return {
      text: s,
      rest,
    };
  },

  isNumber(v) {
    return typeof v === 'number' && Number.isFinite(v);
  },

  /**
   * Splits a word into parts <= width .
   * @ignore
   * @param text
   * @param width
   * @param maxNumLines
   */
  explodeWord(text, width, maxNumLines, charWidth) {
    setDummyContext();
    let i;
    let left = text;
    let right = '';
    let lastChar;
    let result = [];

    if (textHelper.isNumber(maxNumLines) && maxNumLines <= 1) {
      return [text];
    }

    const maxNumChars = Math.ceil(width / charWidth);
    const num = Math.min(text.length, maxNumChars);

    for (i = num; i > 0; i--) {
      left = text.substring(0, i);
      lastChar = text.substring(i - 1, i);
      // When remainder is added to a new line there is a chance of breaking at a space
      if (lastChar === ' ') {
        left = text.substring(0, i - 1);
      } else {
        left += defaultHyphen;
      }
      right = text.substring(i);
      if (textHelper.measureTextWidth(left) <= width) {
        break;
      }
    }
    if ((!i && !left) || textHelper.measureTextWidth(left) > width) {
      left = text.substring(0, 1);
      right = text.substring(1);
    }

    result.push(left);
    if (!right) {
      return result;
    }

    if (textHelper.measureTextWidth(right) > width) {
      right = textHelper.explodeWord(right, width, maxNumLines - 1, charWidth);
      result = result.concat(right);
    } else {
      result.push(right);
    }
    // Remove any spaces added by the remainder
    return result.filter((item) => item.trim() !== '');
  },

  splitWord(text, width, font, maxNumLines) {
    setDummyContext();
    if (!text || !width) {
      return [];
    }
    if (font) {
      dummyContext.font = font;
    }
    return textHelper.explodeWord(text, width, maxNumLines, Math.max(1, textHelper.measureTextWidth('i')));
  },

  wrapText(text, maxWidth, font, maxNumLines, ellipsis) {
    let lines;
    if (Number.isNaN(maxWidth)) {
      return [text];
    }
    lines = maxNumLines > 1 ? textHelper.lineWrap(text, maxWidth, font, maxNumLines) : [text];
    lines = textHelper.wordWrap(lines, maxWidth, font, maxNumLines, ellipsis);
    return lines;
  },

  getFontHeight(font) {
    setDummyContext();
    if (font) {
      dummyContext.font = font;
    }
    return textHelper.measureTextWidth('m') * 1.5;
  },

  tokenize(text, font, ellipsis, maxNumLines, maxWidth, maxHeight, lineHeightMultiplicator = 1) {
    setDummyContext();
    if (font) {
      dummyContext.font = font;
    }

    const fontHeight = textHelper.getFontHeight();
    const lineHeight = lineHeightMultiplicator * fontHeight;
    let maxLines = [];
    let totalMaxNumLines = 0;
    let lines = [];

    if (maxHeight < fontHeight) {
      return [];
    }

    const maxAllowedLines = maxHeight ? Math.max(1, Math.floor(maxHeight / lineHeight)) : maxNumLines || 1;

    if (Array.isArray(maxNumLines)) {
      maxNumLines.forEach((v) => {
        totalMaxNumLines += Number.isNaN(v) || v <= 0 ? 0 : v;
      });

      maxNumLines.forEach((v) => {
        maxLines.push(Number.isNaN(v) || v <= 0 ? maxAllowedLines - totalMaxNumLines : v); // if v < 0 then use the number of lines that are available
      });
    } else {
      maxLines = [
        Number.isNaN(maxNumLines) || maxNumLines <= 0 ? maxAllowedLines : Math.min(maxAllowedLines, maxNumLines),
      ];
    }

    if (Array.isArray(text)) {
      text.forEach((s, i) => {
        if (lines.length < maxAllowedLines) {
          lines = lines.concat(textHelper.wrapText(s, maxWidth, font, maxLines[i]));
        }
      });
    } else {
      lines = textHelper.wrapText(text, maxWidth, font, maxLines[0], ellipsis);
    }

    return lines;
  },
};

export default textHelper;
