import calculateDataRects, { getSelectedBins, mergeRectsByDim } from '../extract-range';
import * as populateBins from '../../../../utils/bins-util';

describe('calculateDataRects', () => {
  let sandbox;
  const layout = {
    dataPages: [
      {
        qMatrix: [
          [{ qNum: 1291, qElemNumber: 0, qState: 'L' }],
          [{ qElemNumber: 7070, qNum: 1, qState: 'L', qText: [1732, 6, 1765, 5] }],
          [{ qElemNumber: 7067, qNum: 1, qState: 'L', qText: [1599, 5, 1632, 4] }],
          [{ qElemNumber: 7000, qNum: 1, qState: 'L', qText: [1580, 9, 1680, 6] }],
        ],
      },
      {},
    ],
  };
  const values = [7070, 7067];

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(populateBins, 'default').returns([
      { qElemNumber: 7070, qNum: 1, qState: 'L', qText: [1732, 6, 1765, 5] },
      { qElemNumber: 7067, qNum: 1, qState: 'L', qText: [1599, 5, 1632, 4] },
      { qElemNumber: 7000, qNum: 1, qState: 'L', qText: [1580, 9, 1680, 6] },
    ]);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('calculateDataRects', () => {
    it('should return correct rects ranges', () => {
      expect(calculateDataRects({ layout, values })).to.eql([
        [
          {
            idx: 0,
            range: {
              max: 1632,
              min: 1599,
            },
            type: 'measure',
          },
          {
            idx: 1,
            range: {
              max: 5,
              min: 4,
            },
            type: 'measure',
          },
        ],
        [
          {
            idx: 0,
            range: {
              max: 1765,
              min: 1732,
            },
            type: 'measure',
          },
          {
            idx: 1,
            range: {
              max: 6,
              min: 5,
            },
            type: 'measure',
          },
        ],
      ]);
    });
  });

  describe('getSelectedBins', () => {
    it('should return correct selected bins array', () => {
      expect(getSelectedBins({ layout, values })).to.eql([
        { qElemNumber: 7070, qNum: 1, qState: 'L', qText: [1732, 6, 1765, 5] },
        { qElemNumber: 7067, qNum: 1, qState: 'L', qText: [1599, 5, 1632, 4] },
      ]);
    });
  });

  describe('mergeRectsByDim', () => {
    it('should return correct merged rects by dimension', () => {
      const rects = [
        { xMin: 1732, xMax: 1765, yMin: 5, yMax: 6 },
        { xMin: 1599, xMax: 1632, yMin: 4, yMax: 5 },
      ];
      expect(mergeRectsByDim(mergeRectsByDim(rects, 'x'), 'y')).to.eql([
        { xMin: 1599, xMax: 1632, yMin: 4, yMax: 5 },
        { xMin: 1732, xMax: 1765, yMin: 5, yMax: 6 },
      ]);
    });
  });
});
