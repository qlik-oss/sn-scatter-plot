import * as testRectRect from '../../../utils/math/collision/rect-rect';
import * as testRectCircle from '../../../utils/math/collision/rect-circle';
import { getLabels } from '../get-labels';

describe('getLabels', () => {
  let sandbox;
  let measureText;
  let mode;
  let nodes;
  let label;
  let labelHeight;
  let component;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    measureText = sandbox.stub().returns({ width: 2 });
    nodes = [
      { localBounds: { x: 313, y: 230, width: 25, height: 25 } },
      { localBounds: { x: 267, y: 279, width: 24, height: 24 } },
    ];
    label = sandbox.stub().returns('correct label');
    sandbox.stub(testRectRect, 'default');
    sandbox.stub(testRectCircle, 'default');
    component = {
      rect: {
        width: 558,
        height: 582,
      },
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct topLabels and no bottomLabels if mode is ALL', () => {
    mode = 2;
    const result = getLabels({ measureText, mode, nodes, label, labelHeight, component });
    expect(result).to.deep.equal({
      topLabels: [
        { text: 'correct label', cx: 325.5, topRect: { y2: 224 } },
        { text: 'correct label', cx: 279, topRect: { y2: 273 } },
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
    const result = getLabels({ measureText, mode, nodes, label, labelHeight: 1, component });

    expect(result).to.deep.equal({
      topLabels: [
        {
          text: 'correct label',
          cx: 325.5,
          topRect: { x1: 324.5, y1: 223, x2: 326.5, y2: 224 },
          textWidth: 2,
          circle: { x: 325.5, y: 242.5, r: 12.5, height: 25 },
          ellipsed: 'correct label',
          isEllipsisChar: false,
          maxWidth: 465,
        },
      ],
      bottomLabels: [
        {
          text: 'correct label',
          cx: 279,
          topRect: { x1: 278, y1: 272, x2: 280, y2: 273 },
          bottomRect: { x1: 278, y1: 309, x2: 280, y2: 310 },
          textWidth: 2,
          circle: { x: 279, y: 291, r: 12, height: 24 },
          ellipsed: 'correct label',
          isEllipsisChar: false,
          maxWidth: 558,
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
    const result = getLabels({ measureText, mode, nodes, label, labelHeight: 1, component });

    expect(result).to.deep.equal({
      topLabels: [],
      bottomLabels: [
        {
          text: 'correct label',
          cx: 325.5,
          topRect: { x1: 324.5, y1: 223, x2: 326.5, y2: 224 },
          bottomRect: { x1: 324.5, y1: 261, x2: 326.5, y2: 262 },
          textWidth: 2,
          circle: { x: 325.5, y: 242.5, r: 12.5, height: 25 },
          ellipsed: 'correct label',
          isEllipsisChar: false,
          maxWidth: 465,
        },
      ],
    });
  });
});
