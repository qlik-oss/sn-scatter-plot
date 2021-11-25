import qBrush, { extractFieldFromId } from '../q-brush';
import * as calculateDataRects from '../extract-range';

describe('q-brush', () => {
  let brush;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(calculateDataRects, 'default').returns([
      [
        { idx: 0, range: { min: 2, max: 4 }, type: 'measure' },
        { idx: 1, range: { min: 10, max: 15 }, type: 'measure' },
      ],
    ]);
    brush = {
      isActive: sinon.stub(),
      brushes: sinon.stub(),
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return empty when no brushes exist', () => {
    brush.brushes.returns([]);
    expect(qBrush(brush).length).to.equal(0);
  });

  it('should reset made selections when brush is active but contain no values', () => {
    brush.isActive.returns(true);
    brush.brushes.returns([
      {
        id: 'binData/binX',
        type: 'value',
        brush: {
          values: () => [],
        },
      },
    ]);
    const selections = qBrush(brush);
    expect(selections[0].method).to.equal('resetMadeSelections');
    expect(selections[0].params).to.eql([]);
  });

  describe('rangeSelectHyperCubeValues', () => {
    beforeEach(() => {
      brush.brushes.returns([
        {
          id: '/binData/binX',
          type: 'range',
          brush: {
            ranges: () => [
              { min: 13, max: 17 },
              { min: 4, max: 9 },
            ],
          },
        },
        {
          id: '/binData/binY',
          type: 'range',
          brush: {
            ranges: () => [{ min: -13, max: 6 }],
          },
        },
      ]);
    });

    it('should have method="rangeSelectHyperCubeValues"', () => {
      const selections = qBrush(brush);
      expect(selections[0].method).to.equal('rangeSelectHyperCubeValues');
    });

    it('should have valid params if opts = {} ', () => {
      const selections = qBrush(brush);
      expect(selections[0].params).to.eql([
        '/qHyperCubeDef',
        [
          {
            qMeasureIx: 0,
            qRange: {
              qMin: 13,
              qMax: 17,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
          {
            qMeasureIx: 0,
            qRange: {
              qMin: 4,
              qMax: 9,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
          {
            qMeasureIx: 1,
            qRange: {
              qMin: -13,
              qMax: 6,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
        ],
        [],
        true,
      ]);
    });

    it('should have valid params if opts = { orMode: true }', () => {
      const selections = qBrush(brush, { orMode: true });
      expect(selections[0].params).to.eql([
        '/qHyperCubeDef',
        [
          {
            qMeasureIx: 0,
            qRange: {
              qMin: 13,
              qMax: 17,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
          {
            qMeasureIx: 0,
            qRange: {
              qMin: 4,
              qMax: 9,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
          {
            qMeasureIx: 1,
            qRange: {
              qMin: -13,
              qMax: 6,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
        ],
        [],
        true,
      ]);
    });

    it('should have valid params if opts = { orMode: false }', () => {
      const selections = qBrush(brush, { orMode: false });
      expect(selections[0].params).to.eql([
        '/qHyperCubeDef',
        [
          {
            qMeasureIx: 0,
            qRange: {
              qMin: 13,
              qMax: 17,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
          {
            qMeasureIx: 0,
            qRange: {
              qMin: 4,
              qMax: 9,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
          {
            qMeasureIx: 1,
            qRange: {
              qMin: -13,
              qMax: 6,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          },
        ],
        [],
        false,
      ]);
    });
  });

  describe('multiRangeSelectHyperCubeValues', () => {
    beforeEach(() => {
      brush.brushes.returns([
        {
          id: '/binData',
          type: 'value',
          brush: {
            values: () => [3, 2, 7],
          },
        },
      ]);
    });

    it('should have method="multiRangeSelectHyperCubeValues"', () => {
      const selections = qBrush(brush);
      expect(selections[0].method).to.equal('multiRangeSelectHyperCubeValues');
    });

    it('should have valid params', () => {
      const selections = qBrush(brush);
      expect(selections[0].params).to.eql([
        '/qHyperCubeDef',
        [
          {
            qRanges: [
              {
                qMeasureIx: 0,
                qRange: {
                  qMax: 4,
                  qMaxInclEq: true,
                  qMin: 2,
                  qMinInclEq: true,
                },
              },
              {
                qMeasureIx: 1,
                qRange: {
                  qMax: 15,
                  qMaxInclEq: true,
                  qMin: 10,
                  qMinInclEq: true,
                },
              },
            ],
          },
        ],
      ]);
    });
  });

  describe('extractFieldFromId', () => {
    it('should map measure /binData/binX to measure 0', () => {
      const v = extractFieldFromId('/binData/binX');
      expect(v).to.eql({
        path: '/qHyperCubeDef',
        measureIdx: 0,
        measureCount: -1,
      });
    });

    it('should map measure /binData/binY to measure 1', () => {
      const v = extractFieldFromId('/binData/binY');
      expect(v).to.eql({
        path: '/qHyperCubeDef',
        measureIdx: 1,
        measureCount: -1,
      });
    });

    it('should map /binData to correct vaule ', () => {
      const v = extractFieldFromId('/binData');
      expect(v).to.eql({
        path: '/qHyperCubeDef',
        measureIdx: -1,
        measureCount: 2,
      });
    });
  });
});
