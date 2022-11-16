import KEYS from '../../../../constants/keys';
import createRefLineLabels from '../labels';
import * as getContrastColors from '../../../../utils/color/get-contrast-colors';

describe('createRefLineLabels', () => {
  let sandbox;
  let models;
  let colorService;
  let layoutService;
  let themeService;
  let context;
  let theme;
  let create;
  let scale;
  let key;
  let dock;
  let minimumLayoutMode;
  let animationsEnabled;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'SCALE').returns({ X: 'x', Y: 'y' });
    sandbox.stub(getContrastColors, 'default');
    colorService = { getPaletteColor: (paletteColor) => paletteColor.color };
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

    theme = { getStyle: sandbox.stub().returns('#000000') };

    themeService = {
      getStyles: sandbox.stub().returns('theme'),
      getTheme: sandbox.stub().returns(theme),
    };
    models = {
      colorService,
      layoutService,
      themeService,
    };
    animationsEnabled = () => true;
    context = { rtl: false, localeInfo: 'valid localeInfo' };
    create = () => createRefLineLabels({ models, context, scale, key, dock, minimumLayoutMode, animationsEnabled });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if there is no reference line to show', () => {
    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([]);
    dock = 'left';
    scale = 'y';
    key = 'reference-line-Y';
    const result = create();
    expect(result).to.deep.equal(false);
  });

  it('should return false if x reference lines are selected but not enabled', () => {
    dock = 'top';
    scale = 'x';
    key = 'reference-line-labels-X';
    layoutService.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: false,
        label: 'X ref label',
      },
    ]);
    const result = create();
    expect(result).to.deep.equal(false);
  });

  it('should return correct x reference lables when show is enabled', () => {
    dock = 'top';
    minimumLayoutMode = 'XSMALL';
    scale = 'x';
    const themeStyle = {
      referenceLine: {
        label: { name: { fontFamily: '"font1", "font2", "fontType"', fontSize: '13px' } },
        outOfBounds: { backgroundColor: '#111111', color: '#ffffff', fontFamily: 'oob font', fontSize: 'oob fontSize' },
      },
    };
    themeService.getStyles = sandbox.stub().returns(themeStyle);

    key = 'reference-line-labels-X';
    const result = create();
    result.animations.enabled = 'function';
    result.animations.trackBy = 'function';
    result.animations.compensateForLayoutChanges = 'function';
    expect(result).to.deep.equal({
      key: 'reference-line-labels-X',
      type: 'reference-line-labels',
      labels: [
        {
          text: 'X ref label',
          fill: 'red',
          value: 1234,
          valueLabel: '1234',
          scale: 'x',
          showLabel: true,
          showValue: true,
        },
      ],
      scale: 'x',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'top', minimumLayoutMode: 'XSMALL', rtl: false },
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
      animations: {
        enabled: 'function',
        trackBy: 'function',
        compensateForLayoutChanges: 'function',
      },
    });
  });

  it('should return correct x reference lables when show is enabled and theme does not have oob style', () => {
    dock = 'top';
    minimumLayoutMode = 'XSMALL';
    scale = 'x';
    theme = { getStyle: sandbox.stub().returns(false) };
    themeService.getTheme = sandbox.stub().returns(theme);
    getContrastColors.default.returns({ backgroundColor: '#123456', color: '#654321' });
    const themeStyle = {
      referenceLine: {
        label: { name: { fontFamily: '"font1", "font2", "fontType"', fontSize: '13px' } },
        outOfBounds: { backgroundColor: '#111111', color: '#ffffff', fontFamily: 'oob font', fontSize: 'oob fontSize' },
      },
    };
    themeService.getStyles = sandbox.stub().returns(themeStyle);

    key = 'reference-line-labels-X';
    const result = create();
    result.animations.enabled = 'function';
    result.animations.trackBy = 'function';
    result.animations.compensateForLayoutChanges = 'function';
    expect(result).to.deep.equal({
      key: 'reference-line-labels-X',
      type: 'reference-line-labels',
      labels: [
        {
          text: 'X ref label',
          fill: 'red',
          value: 1234,
          valueLabel: '1234',
          scale: 'x',
          showLabel: true,
          showValue: true,
        },
      ],
      scale: 'x',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'top', minimumLayoutMode: 'XSMALL', rtl: false },
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
          fill: '#123456',
          text: { fontFamily: 'oob font', fontSize: 'oob fontSize', fill: '#654321', background: { fill: '#123456' } },
        },
      },
      animations: {
        enabled: 'function',
        trackBy: 'function',
        compensateForLayoutChanges: 'function',
      },
    });
  });

  it('should return correct y reference lables when show is enabled', () => {
    dock = 'right';
    minimumLayoutMode = 'SMALL';
    scale = 'y';
    const themeStyle = {
      referenceLine: {
        label: { name: { fontFamily: '"font1", "font2", "fontType"', fontSize: '13px' } },
        outOfBounds: { backgroundColor: '#111111', color: '#ffffff', fontFamily: 'oob font', fontSize: 'oob fontSize' },
      },
    };
    themeService.getStyles = sandbox.stub().returns(themeStyle);
    key = 'reference-line-labels-Y';
    const result = create();
    result.animations.enabled = 'function';
    result.animations.trackBy = 'function';
    result.animations.compensateForLayoutChanges = 'function';
    expect(result).to.deep.equal({
      key: 'reference-line-labels-Y',
      type: 'reference-line-labels',
      labels: [
        {
          text: 'Y ref label',
          fill: 'blue',
          value: 4321,
          valueLabel: '4321',
          scale: 'y',
          showLabel: true,
          showValue: true,
        },
      ],
      scale: 'y',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'right', minimumLayoutMode: 'SMALL', rtl: false },
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
      animations: {
        enabled: 'function',
        trackBy: 'function',
        compensateForLayoutChanges: 'function',
      },
    });
  });

  it('should return correct y reference lables when show is enabled, rtl is true, and some layout properties are missing', () => {
    dock = 'left';
    minimumLayoutMode = 'SMALL';
    scale = 'y';
    const themeStyle = {
      referenceLine: {
        label: { name: { fontSize: '15px' } },
        outOfBounds: { color: '#ffffff', fontFamily: 'oob font' },
      },
    };
    themeService.getStyles = sandbox.stub().returns(themeStyle);
    context.rtl = true;
    key = 'reference-line-labels-Y';
    const result = create();
    result.animations.enabled = 'function';
    result.animations.trackBy = 'function';
    result.animations.compensateForLayoutChanges = 'function';
    expect(result).to.deep.equal({
      key: 'reference-line-labels-Y',
      type: 'reference-line-labels',
      labels: [
        {
          text: 'Y ref label',
          fill: 'blue',
          value: 4321,
          valueLabel: '4321',
          scale: 'y',
          showLabel: true,
          showValue: true,
        },
      ],
      scale: 'y',
      localeInfo: 'valid localeInfo',
      layout: { dock: 'left', minimumLayoutMode: 'SMALL', rtl: true },
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
      animations: {
        enabled: 'function',
        trackBy: 'function',
        compensateForLayoutChanges: 'function',
      },
    });
  });

  describe('animation', () => {
    scale;
    dock;
    minimumLayoutMode;
    key;

    describe('enabled', () => {
      it('should be true if animation is enabled', () => {
        const refLineLabels = create();
        expect(refLineLabels.animations.enabled()).to.equal(true);
      });

      it('should be false if animation is not enabled', () => {
        animationsEnabled = () => false;
        const refLineLabels = create();
        expect(refLineLabels.animations.enabled()).to.equal(false);
      });
    });

    describe('trackBy', () => {
      it('should be return correct IDs', () => {
        const node = { labelID: 'x1', text: 'part-1' };
        const refLineLabels = create();
        expect(refLineLabels.animations.trackBy(node)).to.equal('x1: part-1');
      });
    });

    describe('compensateForLayoutChanges', () => {
      let currentNodes = [{ x: 50, y: 100 }];
      let currentRect = { x: 100 };
      let previousRect = { x: 100 };

      it('should not adjust node if the rect does not change', () => {
        const refLineLabels = create();
        refLineLabels.animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x: 50, y: 100 }]);
      });

      it('should adjust label correctly if the rect shifts 5px to right', () => {
        currentRect = { x: 105 };
        previousRect = { x: 100 };
        currentNodes = [
          { labelID: 'x-0', x: 150, y: 10 },
          { labelID: 'y-0', x: 150, y: 100 },
        ];
        const refLineLabels = create();
        refLineLabels.animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([
          { labelID: 'x-0', x: 145, y: 10 },
          { labelID: 'y-0', x: 145, y: 100 },
        ]);
      });
    });
  });
});
