import KEYS from '../../../../constants/keys';
import createRefLines from '../lines';

describe('createRefLines', () => {
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
    const minimumLayoutMode = 'min-layout-mode';
    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([]);
    const result = createRefLines({ layoutService, scale, key, minimumLayoutMode });
    expect(result).to.deep.equal(false);
  });

  it('should return correct settings of x reference line, when show is enabled', () => {
    const scale = 'x';
    const key = 'reference-line-X';
    const minimumLayoutMode = 'min-layout-mode';
    const result = createRefLines({ layoutService, scale, key, minimumLayoutMode });
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
    });
  });

  it('should return false when x reference line is selected but its show option is disabled', () => {
    const scale = 'x';
    const key = 'reference-line-X';
    const minimumLayoutMode = 'min-layout-mode';
    layoutService.getLayoutValue.withArgs('refLine.refLinesX').returns([
      {
        show: false,
        label: 'X ref label',
      },
    ]);
    const result = createRefLines({ layoutService, scale, key, minimumLayoutMode });
    expect(result).to.deep.equal(false);
  });

  it('should return correct settings of y reference line, when show is enabled', () => {
    const scale = 'y';
    const key = 'reference-line-Y';
    const minimumLayoutMode = 'min-layout-mode';
    const result = createRefLines({ layoutService, scale, key, minimumLayoutMode });
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
    });
  });

  it('should return false when y reference line is selected but its show option is disabled', () => {
    const scale = 'y';
    const key = 'reference-line-Y';
    const minimumLayoutMode = 'min-layout-mode';
    layoutService.getLayoutValue.withArgs('refLine.refLinesY').returns([
      {
        show: false,
        label: 'Y ref label',
      },
    ]);
    const result = createRefLines({ layoutService, scale, key, minimumLayoutMode });
    expect(result).to.deep.equal(false);
  });
});
