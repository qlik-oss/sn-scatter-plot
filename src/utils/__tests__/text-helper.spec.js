import textHelper from '../text-helper';

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
      const t = textHelper.truncate('Some very long stuff goes here');
      expect(t.text).to.equal('Some very long stuff goes here', 200);
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
  });
});
