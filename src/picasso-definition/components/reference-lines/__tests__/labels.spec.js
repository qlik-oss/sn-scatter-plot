import KEYS from '../../../../constants/keys';
import createRefLineLabels from '../labels';

describe('createRefLineLabels', () => {
  let sandbox;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'SCALE').returns({ X: 'x', Y: 'y' });
    layoutService = { getLayoutValue: sandbox.stub() };
    layoutService.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: true,
        label: 'X ref label',
        paletteColor: {
          color: 'red',
        },
        refLineExpr: {
          value: 1234,
          label: '1234',
        },
      },
    ]);

    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([
      {
        show: true,
        label: 'Y ref label',
        paletteColor: {
          color: 'blue',
        },
        refLineExpr: {
          value: 4321,
          label: '4321',
        },
      },
    ]);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if there is no reference line to show', () => {
    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([]);
    const dock = 'left';
    const scale = 'y';
    const themeStyle = 'theme';
    const rtl = false;
    const key = 'reference-line-Y';
    const localeInfo = 'valid localeInfo';
    const result = createRefLineLabels({ layoutService, dock, scale, themeStyle, rtl, key, localeInfo });
    expect(result).to.deep.equal(false);
  });

  it('should return correct x reference lables when show is enabled', () => {
    const dock = 'top';
    const scale = 'x';
    const themeStyle = {
      referenceLine: {
        label: { name: { fontFamily: '"font1", "font2", "fontType"', fontSize: '13px' } },
        outOfBounds: { backgroundColor: '#111111', color: '#ffffff', fontFamily: 'oob font', fontSize: 'oob fontSize' },
      },
    };
    const rtl = false;
    const key = 'reference-line-labels-X';
    const localeInfo = 'valid localeInfo';
    const result = createRefLineLabels({ layoutService, dock, scale, themeStyle, rtl, key, localeInfo });
    expect(result).to.deep.equal({
      key: 'reference-line-labels-X',
      type: 'reference-line-labels',
      renderer: 'svg',
      labels: [
        {
          text: 'X ref label',
          fill: 'red',
          value: 1234,
          valueLabel: '1234',
          scale: 'x',
        },
      ],
      scale: 'x',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'top', rtl: false },
      style: {
        label: {
          fontFamily: '"font1", "font2", "fontType"',
          fontSize: '13px',
          padding: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 2,
          },
          maxWidth: 100,
          maxNumLines: 3,
          gap: 16,
        },
        oob: {
          size: 8,
          fill: '#111111',
          text: { fontFamily: 'oob font', fontSize: 'oob fontSize', fill: '#ffffff', background: { fill: '#111111' } },
        },
      },
    });
  });

  it('should return false if x reference lines are selected but not enabled', () => {
    const dock = 'top';
    const scale = 'x';
    const themeStyle = '';
    const rtl = false;
    const key = 'reference-line-labels-X';
    const localeInfo = 'valid localeInfo';
    layoutService.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: false,
        label: 'X ref label',
      },
    ]);
    const result = createRefLineLabels({ layoutService, dock, scale, themeStyle, rtl, key, localeInfo });
    expect(result).to.deep.equal(false);
  });

  it('should return correct y reference lables when show is enabled', () => {
    const dock = 'right';
    const scale = 'y';
    const themeStyle = {
      referenceLine: {
        label: { name: { fontFamily: '"font1", "font2", "fontType"', fontSize: '13px' } },
        outOfBounds: { backgroundColor: '#111111', color: '#ffffff', fontFamily: 'oob font', fontSize: 'oob fontSize' },
      },
    };
    const rtl = false;
    const key = 'reference-line-labels-Y';
    const localeInfo = 'valid localeInfo';
    const result = createRefLineLabels({ layoutService, dock, scale, themeStyle, rtl, key, localeInfo });
    expect(result).to.deep.equal({
      key: 'reference-line-labels-Y',
      type: 'reference-line-labels',
      renderer: 'svg',
      labels: [
        {
          text: 'Y ref label',
          fill: 'blue',
          value: 4321,
          valueLabel: '4321',
          scale: 'y',
        },
      ],
      scale: 'y',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'right', rtl: false },
      style: {
        label: {
          fontFamily: '"font1", "font2", "fontType"',
          fontSize: '13px',
          padding: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 2,
          },
          maxWidth: 70,
          maxNumLines: 3,
          gap: 10,
        },
        oob: {
          size: 8,
          fill: '#111111',
          text: {
            fontFamily: 'oob font',
            fontSize: 'oob fontSize',
            fill: '#ffffff',
            background: {
              fill: '#111111',
            },
          },
        },
      },
    });
  });

  it('should return correct y reference lables when show is enabled, rtl is true, and some layout properties are missing', () => {
    const dock = 'left';
    const scale = 'y';
    const themeStyle = {
      referenceLine: {
        label: { name: { fontSize: '15px' } },
        outOfBounds: { color: '#ffffff', fontFamily: 'oob font' },
      },
    };
    const rtl = true;
    const key = 'reference-line-labels-Y';
    const localeInfo = 'valid localeInfo';
    const result = createRefLineLabels({ layoutService, dock, scale, themeStyle, rtl, key, localeInfo });
    expect(result).to.deep.equal({
      key: 'reference-line-labels-Y',
      type: 'reference-line-labels',
      renderer: 'svg',
      labels: [
        {
          text: 'Y ref label',
          fill: 'blue',
          value: 4321,
          valueLabel: '4321',
          scale: 'y',
        },
      ],
      scale: 'y',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'left', rtl: true },
      style: {
        label: {
          fontFamily: 'Source Sans Pro, sans-serif',
          fontSize: '15px',
          padding: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 4,
          },
          maxWidth: 70,
          maxNumLines: 3,
          gap: 10,
        },
        oob: {
          size: 8,
          fill: '#737373',
          text: {
            fontFamily: 'oob font',
            fontSize: '10px',
            fill: '#ffffff',
            background: {
              fill: '#737373',
            },
          },
        },
      },
    });
  });
});
