import * as testRectRect from '../../../utils/math/collision/rect-rect';
import * as testRectCircle from '../../../utils/math/collision/rect-circle';
import { getLabels } from '../get-labels';

describe.skip('getLabels', () => {
  let sandbox;
  let measureText;
  let mode;
  let nodes;
  let label;
  let labelHeight;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    measureText = sandbox.stub().returns({ width: 2 });
    nodes = [
      { localBounds: { x: 1, y: 2, width: 3, height: 2 } },
      { localBounds: { x: 4, y: 5, width: 6, height: 2 } },
    ];
    label = sandbox.stub().returns('correct label');
    sandbox.stub(testRectRect, 'default');
    sandbox.stub(testRectCircle, 'default');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct topLabels and no bottomLabels if mode is ALL', () => {
    mode = 2;
    const result = getLabels({ measureText, mode, nodes, label, labelHeight });
    expect(result).to.deep.equal({
      topLabels: [
        { text: 'correct label', cx: 2.5, topRect: { y2: -4 } },
        { text: 'correct label', cx: 7, topRect: { y2: -1 } },
      ],
      bottomLabels: [],
    });
  });

  it('should return correct topLabels and bottomLabels if mode is AUTO, case 1: 1st node to top, 2nd node to bottom', () => {
    mode = 1;
    testRectCircle.default.onCall(0).returns(false);
    testRectCircle.default.onCall(1).returns(false);
    testRectRect.default.onCall(0).returns(true);
    testRectCircle.default.onCall(2).returns(false);
    testRectCircle.default.onCall(3).returns(false);
    testRectRect.default.onCall(1).returns(false);
    testRectCircle.default.onCall(4).returns(false);
    testRectCircle.default.onCall(5).returns(false);
    const result = getLabels({ measureText, mode, nodes, label, labelHeight: 1 });
    // const geoNodes = [
    //   {
    //     text: 'correct label',
    //     cx: 2.5,
    //     topRect: { x1: 1.5, y1: -5, x2: 3.5, y2: -4 },
    //     textWidth: 2,
    //     circle: { x: 2.5, y: 3, r: 1, height: 2 },
    //   },
    //   {
    //     text: 'correct label',
    //     cx: 7,
    //     topRect: { x1: 6, y1: -2, x2: 8, y2: -1 },
    //     textWidth: 2,
    //     circle: { x: 7, y: 6, r: 1, height: 2 },
    //   },
    // ];

    expect(result).to.deep.equal({
      topLabels: [
        {
          text: 'correct label',
          cx: 2.5,
          topRect: { x1: 1.5, y1: -5, x2: 3.5, y2: -4 },
          textWidth: 2,
          circle: { x: 2.5, y: 3, r: 1, height: 2 },
        },
      ],
      bottomLabels: [
        {
          text: 'correct label',
          cx: 7,
          topRect: { x1: 6, y1: -2, x2: 8, y2: -1 },
          // dy = 2 + 12 + 1 = 15
          bottomRect: { x1: 6, y1: 13, x2: 8, y2: 14 },
          textWidth: 2,
          circle: { x: 7, y: 6, r: 1, height: 2 },
        },
      ],
    });
  });

  it('should return correct topLabels and bottomLabels if mode is AUTO, case 2: 1st node to bottom, 2nd node to neither top nor bottom', () => {
    mode = 1;
    testRectCircle.default.onCall(0).returns(true);
    testRectCircle.default.onCall(1).returns(true);
    testRectCircle.default.onCall(2).returns(false);
    testRectCircle.default.onCall(3).returns(false);
    testRectRect.default.onCall(0).returns(true);
    const result = getLabels({ measureText, mode, nodes, label, labelHeight: 1 });
    // const geoNodes = [
    //   {
    //     text: 'correct label',
    //     cx: 2.5,
    //     topRect: { x1: 1.5, y1: -5, x2: 3.5, y2: -4 },
    //     textWidth: 2,
    //     circle: { x: 2.5, y: 3, r: 1, height: 2 },
    //   },
    //   {
    //     text: 'correct label',
    //     cx: 7,
    //     topRect: { x1: 6, y1: -2, x2: 8, y2: -1 },
    //     textWidth: 2,
    //     circle: { x: 7, y: 6, r: 1, height: 2 },
    //   },
    // ];

    expect(result).to.deep.equal({
      topLabels: [],
      bottomLabels: [
        {
          text: 'correct label',
          cx: 2.5,
          topRect: { x1: 1.5, y1: -5, x2: 3.5, y2: -4 },
          // dy = 2 + 12 + 1 = 15
          bottomRect: { x1: 1.5, y1: 10, x2: 3.5, y2: 11 },
          textWidth: 2,
          circle: { x: 2.5, y: 3, r: 1, height: 2 },
        },
      ],
    });
  });
});
