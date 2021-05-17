import textHelper from '../text-helper';

describe('Text helper (for testing measureTextWidth)', () => {
  let sandbox;
  let element;
  let context;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    context = { measureText: () => ({ width: 100 }) };
    element = {
      getContext: () => context,
    };
    global.document = { createElement: () => element };
  });

  afterEach(() => {
    sandbox.restore();
    delete global.document;
  });

  describe('measureTextWidth', () => {
    it('should return correct text width', () => {
      expect(textHelper.measureTextWidth('someText')).to.equal(100);
    });
  });
});

describe('Text helper', () => {
  let sandbox;
  let element;
  let context;
  let measureText;
  let letterWidth;
  const measuredStrings = {
    i: 2.85,
    few: 19.18,
    ew: 15.77,
    w: 9.67,
    b: 6.88,
    wooords: 46.69,
    words: 33.1,
    ord: 17.75,
    rd: 10.96,
    d: 6.88,
    M: 10.2239990234375,
    '-': 3.85198974609375,
    ' ': 2.399993896484375,
    '…': 8.74798583984375,
    'Word-': 32.57,
    'Wor-': 26.05,
    'Wo-': 21.61,
    'W-': 15.05,
    'ord-': 21.61,
    'or-': 15.08,
    'o-': 10.64,
    'r-': 8.29,
    'd-': 10.73,
    'More than': 53.36,
    'More than one': 75.38,
    'than one': 45.77,
    'one word': 49.27,
    'f-': 7.52,
    'e-': 9.95,
    'w-': 13.52,
    'w b': 18.95,
    ' b': 9.28,
    'b-': 10.73,
    'A few': 29.07,
    'A few words': 64.58,
    'A few word…': 67.47,
    'A few wor…': 60.22,
    'A few wo…': 56.38,
    'A few wooords': 78.16,
    'wooord…': 49.58,
    'wooor…': 42.33,
    'wooo…': 38.49,
    'woo…': 31.7,
  };

  function getSum(total, num) {
    return total + num;
  }

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    letterWidth = 6;
    textHelper.measureTextWidth = (text) => {
      if (typeof measuredStrings[text] !== 'undefined') {
        return measuredStrings[text];
      }
      const chars = text.split('');
      const widths = chars.map((c) => measuredStrings[c] || letterWidth);
      if (widths && widths.length) {
        return widths.reduce(getSum);
      }
      return 0;
    };
    context = { measureText };
    element = {
      getContext: () => context,
    };
    global.document = { createElement: () => element };
  });

  afterEach(() => {
    sandbox.restore();
    delete global.document;
  });

  describe('lineWrap', () => {
    it('be able to handle empty text', () => {
      const lines = textHelper.lineWrap('');
      expect(lines.length).to.equal(1);
      expect(lines[0]).to.equal('');
    });

    it('be able to handle one word', () => {
      const lines = textHelper.lineWrap('Word');
      expect(lines.length).to.equal(1);
      expect(lines[0]).to.equal('Word');
    });

    it('be able to handle more than one word without wrapping', () => {
      const lines = textHelper.lineWrap('More than one word');
      expect(lines.length).to.equal(1);
      expect(lines[0]).to.equal('More than one word');
    });

    it('be able to handle more than one word with wrapping', () => {
      const lines = textHelper.lineWrap('More than one word', 55, '12px QlikView Sans, sans-serif');
      expect(lines.length).to.equal(2);
      expect(lines).to.deep.equal(['More than', 'one word']);
    });

    it('should not generate more lines than words', () => {
      const lines = textHelper.lineWrap('More than one word', 1, '12px QlikView Sans, sans-serif');
      expect(lines.length).to.equal(4);
      expect(lines).to.deep.equal(['More', 'than', 'one', 'word']);
    });

    it('should not generate more lines than the given limit', () => {
      const lines = textHelper.lineWrap('More than one word', 1, '12px QlikView Sans, sans-serif', 2);
      expect(lines.length).to.equal(2);
      expect(lines).to.deep.equal(['More', 'than one word']);
    });

    it('should return correct result when text has more lines than maxNumLines', () => {
      const lines = textHelper.lineWrap('More than\n one line', 1, '12px QlikView Sans, sans-serif', 1);
      expect(lines.length).to.equal(1);
      expect(lines).to.deep.equal(['More than']);
    });

    it('should return correct result when font is undefined', () => {
      const lines = textHelper.lineWrap('A few wooords', 79, undefined, 3);
      expect(lines.length).to.equal(1);
      expect(lines).to.deep.equal(['A few wooords']);
    });
  });

  describe('truncate', () => {
    it('should be able to handle empty input', () => {
      const t = textHelper.truncate('');
      expect(t.text).to.equal('');
      expect(t.rest).to.be.undefined;
    });

    it('should not truncate if width is not defined', () => {
      const t = textHelper.truncate('Some very long stuff goes here');
      expect(t.text).to.equal('Some very long stuff goes here');
      expect(t.rest).to.be.undefined;
    });

    it('should not truncate if text if shorter than specified width', () => {
      const t = textHelper.truncate('Some very long stuff goes here', 2000);
      expect(t.text).to.equal('Some very long stuff goes here');
      expect(t.rest).to.be.undefined;
    });

    it('should truncate if text is longer than specified width', () => {
      const t = textHelper.truncate('M MM MMM', 50, '12px QlikView Sans, sans-serif'); // 6 M(*9px), 2 Spaces(*3px) => text = 60px wide
      // 50px - 12px ellipsis -> 38px for text ->  M MM...
      expect(t.text).to.equal('M MM…');
      expect(t.rest).to.equal('MMM');
    });

    it("should only return ellipsis if first letter can't fit", () => {
      const t = textHelper.truncate('M MM MMM', 1);
      expect(t.text).to.equal('…');
      expect(t.rest).to.equal('M MM MMM');
    });
  });

  describe('splitWord', () => {
    it('should be able to handle empty input', () => {
      const t = textHelper.splitWord();
      expect(t).to.deep.equal([]);
    });

    it('should not generate more items than letters in word without setting a limit', () => {
      const t = textHelper.splitWord('Word', 1, '12px QlikView Sans, sans-serif');
      expect(t).to.deep.equal(['W', 'o', 'r', 'd']);
    });

    it('should not generate more items than letters in word', () => {
      const t = textHelper.splitWord('Word', 1, '12px QlikView Sans, sans-serif', 10);
      expect(t).to.deep.equal(['W', 'o', 'r', 'd']);
    });
    it('should generate hyphen if there is space', () => {
      const t = textHelper.splitWord('Word', 15, '12px QlikView Sans, sans-serif', 10);
      expect(t).to.deep.equal(['W', 'o-', 'rd']);
    });

    it('should be able to handle a simple word', () => {
      const t = textHelper.splitWord('MMMMMM', 30, '12px QlikView Sans, sans-serif', 2); // M x2 = 18px
      expect(t).to.deep.equal(['MM-', 'MMMM']);
    });
  });

  describe('wordWrap', () => {
    it('should be able to handle undefined and empty lines', () => {
      expect(textHelper.wordWrap().length).to.equal(0);
      expect(textHelper.wordWrap([]).length).to.equal(0);
    });

    it('should return the given lines if no width is specified', () => {
      const lines = textHelper.wordWrap(['Some lines', 'goes here']);
      expect(lines).to.deep.equal(['Some lines', 'goes here']);
    });

    it('should not generate more lines than there are letters', () => {
      const lines = textHelper.wordWrap(['A', 'few', 'b'], 1, '12px QlikView Sans, sans-serif');
      expect(lines).to.deep.equal(['A', 'f', 'e', 'w', 'b']);
    });

    it('should not generate more lines than there are letters, maxNumLines specified', () => {
      const lines = textHelper.wordWrap(['A', 'few', 'b'], 1, '12px QlikView Sans, sans-serif', 10);
      expect(lines).to.deep.equal(['A', 'f', 'e', 'w', 'b']);
    });

    it('should not generate more lines than maxNumLines', () => {
      const lines = textHelper.wordWrap(['A', 'few', 'b'], 1, '12px QlikView Sans, sans-serif', 2);
      expect(lines).to.deep.equal(['A', '…']);
    });
  });

  describe('wrapText', () => {
    it('should not generate more lines than the limit', () => {
      const lines = textHelper.wrapText('A few words', 35, '12px QlikView Sans, sans-serif', 2);
      expect(lines).to.deep.equal(['A few', 'words']);
    });

    it('should truncate if text does not fit', () => {
      // TODO can not run on Jenkins...
      const lines = textHelper.wrapText('A few words', 60, '12px QlikView Sans, sans-serif', 1);
      expect(lines).to.deep.equal(['A few wo…']);
    });

    it('should truncate only last line if text does not fit', () => {
      const lines = textHelper.wrapText('A few wooords', 35, '12px QlikView Sans, sans-serif', 2);
      expect(lines).to.deep.equal(['A few', 'woo…']);
    });

    it('should not add uneccesary hyphens', () => {
      const lines = textHelper.wrapText('MMMM MM MMMMMM MMM', 32, '12px QlikView Sans');
      expect(lines).to.deep.equal(['MM-', 'MM', 'MM', 'MM-', 'MM-', 'MM', 'MMM']);
    });

    it('should return input text if maxWidth is undefined', () => {
      const lines = textHelper.wrapText('MMMM MM MMMMMM MMM', undefined, '12px QlikView Sans');
      expect(lines).to.deep.equal(['MMMM MM MMMMMM MMM']);
    });
  });

  describe('getFontHeight', () => {
    it('should return correct font height, when font is specified', () => {
      expect(textHelper.getFontHeight('font')).to.equal(9);
    });

    it('should return correct font height, when font is not specified', () => {
      expect(textHelper.getFontHeight()).to.equal(9);
    });
  });

  describe('tokenize', () => {
    it('should return empty string if the max height is less than font height (not enough space for even one line of text)', () => {
      expect(textHelper.tokenize('A few wooords', 'font', '...', 10, 50, 8, 1)).to.deep.equal([]);
    });

    it('should return empty string if the max height is less than font height (not enough space for even one line of text), font is not specified', () => {
      expect(textHelper.tokenize('A few wooords', '', '...', 10, 50, 8, 1)).to.deep.equal([]);
    });

    it('should return empty string if the max height is less than font height (not enough space for even one line of text), lineHeightMultiplicator is not specified', () => {
      expect(textHelper.tokenize('A few wooords', '', '...', 10, 50, 8)).to.deep.equal([]);
    });

    it('should return correct result, when text and maxNumLines are not arrays', () => {
      sandbox.stub(textHelper, 'wrapText');
      textHelper.wrapText.withArgs('A few wooords', 50, 'font', 1, '...').returns(['A few', 'wooords']);
      expect(textHelper.tokenize('A few wooords', 'font', '...', 10, 50, 10, 1)).to.deep.equal(['A few', 'wooords']);
    });

    it('should return correct result, when text and maxNumLines are not arrays, and lineHeightMultiplicator and maxHeight are not specified', () => {
      sandbox.stub(textHelper, 'wrapText');
      textHelper.wrapText.withArgs('A few wooords', 50, 'font', 10, '...').returns(['A few', 'wooords']);
      expect(textHelper.tokenize('A few wooords', 'font', '...', 10, 50)).to.deep.equal(['A few', 'wooords']);
    });

    it('should return correct result, when text and maxNumLines are not arrays, and lineHeightMultiplicator and maxHeight are not specified, and maxNumLines is an empty string', () => {
      sandbox.stub(textHelper, 'wrapText');
      textHelper.wrapText.withArgs('A few wooords', 50, 'font', 1, '...').returns(['A few', 'wooords']);
      expect(textHelper.tokenize('A few wooords', 'font', '...', '', 50)).to.deep.equal(['A few', 'wooords']);
    });

    it('should return correct result, when maxNumLines is an array', () => {
      sandbox.stub(textHelper, 'wrapText');
      textHelper.wrapText.withArgs('A few wooords', 50, 'font', 1).returns(['A few']);
      textHelper.wrapText.withArgs('Other text', 50, 'font', 2).returns(['Other', 'text']);
      expect(textHelper.tokenize(['A few wooords', 'Other text'], 'font', '...', [1, 2], 50, 90, 1)).to.deep.equal([
        'A few',
        'Other',
        'text',
      ]);
    });

    it('should return correct result, when maxNumLines is an array, and some of the elements are negative', () => {
      sandbox.stub(textHelper, 'wrapText');
      textHelper.wrapText.withArgs('A few wooords', 50, 'font', 1).returns(['A few']);
      textHelper.wrapText.withArgs('Other text', 50, 'font', 7).returns(['Other', 'text']);
      textHelper.wrapText.withArgs('Yet other text', 50, 'font', 7).returns(['Yet other', 'text']);
      textHelper.wrapText.withArgs('The last text', 50, 'font', 2).returns(['The last', 'text']);
      expect(
        textHelper.tokenize(
          ['A few wooords', 'Other text', 'Yet other text', 'The last text'],
          'font',
          '...',
          [1, -1, -1, 2],
          50,
          90,
          1
        )
      ).to.deep.equal(['A few', 'Other', 'text', 'Yet other', 'text', 'The last', 'text']);
    });

    it('should return correct result, when maxNumLines is an array, and some of the elements are negative, and the total of lines exceed maxAllowedLines', () => {
      sandbox.stub(textHelper, 'wrapText');
      textHelper.wrapText.withArgs('A few wooords', 50, 'font', 1).returns(['A few']);
      textHelper.wrapText.withArgs('Other text', 50, 'font', 2).returns(['Other', 'text']);
      expect(
        textHelper.tokenize(
          ['A few wooords', 'Other text', 'Yet other text', 'The last text'],
          'font',
          '...',
          [1, -1, -1, 0],
          50,
          27,
          1
        )
      ).to.deep.equal(['A few', 'Other', 'text']);
    });
  });
});
