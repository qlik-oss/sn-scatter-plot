import KEYS from '../../../../constants/keys';
import createRefLineLabels from '../labels';

describe('createRefLineLabels', () => {
  let sandbox;
  let layoutModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'SCALE').returns({ X: 'x', Y: 'y' });
    layoutModel = { getLayoutValue: sandbox.stub() };
    layoutModel.getLayoutValue.withArgs('refLine.refLinesX').returns([
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

    layoutModel.getLayoutValue.withArgs('refLine.refLinesY').returns([
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
    const scale = 'y';
    const key = 'reference-line-Y';
    const dock = 'left';
    const fontFamily = '"font1", "font2", "fontType"';
    const fontSize = '13px';
    const rtl = false;
    const localeInfo = 'valid localeInfo';
    layoutModel.getLayoutValue.withArgs('refLine.refLinesY').returns([]);
    const result = createRefLineLabels({ layoutModel, dock, scale, fontFamily, fontSize, rtl, key, localeInfo });
    expect(result).to.deep.equal(false);
  });

  it('should return correct x reference lables when show is enabled', () => {
    const scale = 'x';
    const key = 'reference-line-labels-X';
    const dock = 'top';
    const fontFamily = '"font1", "font2", "fontType"';
    const fontSize = '13px';
    const rtl = false;
    const localeInfo = 'valid localeInfo';
    const result = createRefLineLabels({ layoutModel, dock, scale, fontFamily, fontSize, rtl, key, localeInfo });
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
          maxWidth: 60,
          maxNumLines: 3,
          gap: 16,
        },
      },
    });
  });

  it('should return false if x reference lines are selected but not enabled', () => {
    const scale = 'x';
    const key = 'reference-line-labels-X';
    const dock = 'top';
    const fontFamily = '"font1", "font2", "fontType"';
    const fontSize = '13px';
    const localeInfo = 'valid localeInfo';
    const rtl = false;
    layoutModel.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: false,
        label: 'X ref label',
      },
    ]);
    const result = createRefLineLabels({ layoutModel, dock, scale, fontFamily, fontSize, rtl, key, localeInfo });
    expect(result).to.deep.equal(false);
  });

  it('should return correct y reference lables when show is enabled', () => {
    const scale = 'y';
    const key = 'reference-line-labels-Y';
    const dock = 'right';
    const fontFamily = '"font1", "font2", "fontType"';
    const fontSize = '13px';
    const localeInfo = 'valid localeInfo';
    const rtl = false;
    const result = createRefLineLabels({ layoutModel, dock, scale, fontFamily, fontSize, rtl, key, localeInfo });
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
          maxWidth: 60,
          maxNumLines: 3,
          gap: 10,
        },
      },
    });
  });

  it('should return correct y reference lables when show is enabled, rtl is true, and some layout properties are missing', () => {
    const scale = 'y';
    const key = 'reference-line-labels-Y';
    const dock = 'left';
    const fontFamily = false;
    const fontSize = false;
    const rtl = true;
    const localeInfo = 'valid localeInfo';
    const result = createRefLineLabels({ layoutModel, dock, scale, fontFamily, fontSize, rtl, key, localeInfo });
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
          fontSize: '12px',
          padding: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 4,
          },
          maxWidth: 60,
          maxNumLines: 3,
          gap: 10,
        },
      },
    });
  });
});
