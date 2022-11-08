import KEYS from '../../../../constants/keys';
import createRefLines from '../lines';

describe('createRefLines', () => {
  let sandbox;
  let colorService;
  let layoutService;
  let chartModel;
  let animationsEnabled;
  let create;
  let scale;
  let key;
  let minimumLayoutMode;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'SCALE').returns({ X: 'x', Y: 'y' });
    colorService = { getPaletteColor: (paletteColor) => paletteColor.color };
    layoutService = { getLayoutValue: sandbox.stub() };
    layoutService.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: true,
        label: 'X ref label',
        paletteColor: {
          color: 'red',
        },
        style: {
          lineType: 'dashed',
        },
        refLineExpr: {
          value: 1234,
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
        style: {
          lineType: 'solid',
        },
        refLineExpr: {
          value: 4321,
        },
      },
    ]);
    animationsEnabled = () => true;
    create = () =>
      createRefLines({
        colorService,
        layoutService,
        chartModel,
        scale,
        key,
        minimumLayoutMode,
        animationsEnabled,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if there is no reference line to show', () => {
    scale = 'y';
    key = 'reference-line-Y';
    minimumLayoutMode = 'min-layout-mode';
    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([]);
    const result = create();
    expect(result).to.deep.equal(false);
  });

  it('should return correct settings of x reference line, when show is enabled', () => {
    scale = 'x';
    key = 'reference-line-X';
    minimumLayoutMode = 'min-layout-mode';
    const result = create();
    result.animations.enabled = 'function';
    result.animations.compensateForLayoutChanges = 'function';
    expect(result).to.deep.equal({
      key: 'reference-line-X',
      type: 'ref-line',
      layout: {
        minimumLayoutMode: 'min-layout-mode',
      },
      lines: {
        y: [],
        x: [
          {
            line: {
              stroke: 'red',
              strokeWidth: 2,
              strokeDasharray: 'dashed',
            },
            scale: 'x',
            value: 1234,
          },
        ],
      },
      style: {
        oob: {
          show: false,
        },
      },
      animations: {
        compensateForLayoutChanges: 'function',
        enabled: 'function',
      },
    });
  });

  it('should return false when x reference line is selected but its show option is disabled', () => {
    scale = 'x';
    key = 'reference-line-X';
    minimumLayoutMode = 'min-layout-mode';
    layoutService.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: false,
        label: 'X ref label',
      },
    ]);
    const result = create();
    expect(result).to.deep.equal(false);
  });

  it('should return correct settings of y reference line, when show is enabled', () => {
    scale = 'y';
    key = 'reference-line-Y';
    minimumLayoutMode = 'min-layout-mode';
    const result = create();
    result.animations.enabled = 'function';
    result.animations.compensateForLayoutChanges = 'function';
    expect(result).to.deep.equal({
      key: 'reference-line-Y',
      type: 'ref-line',
      layout: {
        minimumLayoutMode: 'min-layout-mode',
      },
      lines: {
        x: [],
        y: [
          {
            line: {
              stroke: 'blue',
              strokeWidth: 2,
              strokeDasharray: 'solid',
            },
            scale: 'y',
            value: 4321,
          },
        ],
      },
      style: {
        oob: {
          show: false,
        },
      },
      animations: {
        compensateForLayoutChanges: 'function',
        enabled: 'function',
      },
    });
  });

  it('should return false when y reference line is selected but its show option is disabled', () => {
    scale = 'y';
    key = 'reference-line-Y';
    minimumLayoutMode = 'min-layout-mode';
    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([
      {
        show: false,
        label: 'Y ref label',
      },
    ]);
    const result = create();
    expect(result).to.deep.equal(false);
  });

  describe('animation', () => {
    scale = 'y';
    key = 'reference-line-Y';
    minimumLayoutMode = 'min-layout-mode';

    describe('enabled', () => {
      it('should be true if animation is enabled in chartModel', () => {
        const refLines = create();
        expect(refLines.animations.enabled()).to.equal(true);
      });

      it('should be false if animation is not enabled in chartModel', () => {
        animationsEnabled = () => false;
        const refLines = create();
        expect(refLines.animations.enabled()).to.equal(false);
      });
    });

    describe('compensateForLayoutChanges', () => {
      let currentNodes = [{ x1: 50, x2: 50, y1: 10, y2: 200 }];
      let currentRect = { x: 10 };
      let previousRect = { x: 10 };

      it('should not adjust node if the rect does not change, case 1: X', () => {
        scale = 'x';
        key = 'reference-line-X';
        const refLines = create();
        refLines.animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 50, x2: 50, y1: 10, y2: 200 }]);
      });

      it('should not adjust node if the rect does not change, case 2: Y', () => {
        scale = 'y';
        key = 'reference-line-Y';
        currentNodes = [{ x1: 10, x2: 210, y1: 50, y2: 50 }];
        currentRect = { width: 200 };
        previousRect = { width: 200 };
        const refLines = create();
        refLines.animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 10, x2: 210, y1: 50, y2: 50 }]);
      });

      it('should adjust ref lines X correctly if the rect shifts 5px to right', () => {
        scale = 'x';
        key = 'reference-line-X';
        currentNodes = [{ x1: 50, x2: 50, y1: 10, y2: 200 }];
        currentRect = { x: 15 };
        previousRect = { x: 10 };
        const refLines = create();
        refLines.animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 45, x2: 45, y1: 10, y2: 200 }]);
      });

      it('should adjust ref lines Y correctly if the rect width increases 10px', () => {
        scale = 'y';
        key = 'reference-line-Y';
        currentNodes = [{ x1: 10, x2: 210, y1: 50, y2: 50 }];
        currentRect = { width: 210 };
        previousRect = { width: 200 };
        const refLines = create();
        refLines.animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 10, x2: 220, y1: 50, y2: 50 }]);
      });
    });
  });
});
