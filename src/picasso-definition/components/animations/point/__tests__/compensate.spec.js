import * as movePath from '../../../../../utils/move-path';
import compensateForLayoutChanges from '../compensate';

describe('compensateForLayoutChanges', () => {
  let currentNodes = [
    { type: 'circle', cx: 50, cy: 100 },
    { type: 'path', d: 'old-path' },
  ];
  let currentRect = { x: 100, y: 200 };
  let previousRect = { x: 100, y: 200 };
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(movePath, 'default').returns('new-path');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should not adjust node if the rect does not change', () => {
    compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
    expect(currentNodes).to.deep.equal([
      { type: 'circle', cx: 50, cy: 100 },
      { type: 'path', d: 'old-path' },
    ]);
  });

  it('should adjust label correctly if the rect shifts 5px to right', () => {
    currentRect = { x: 15, y: 200 };
    previousRect = { x: 10, y: 200 };
    currentNodes = [
      { type: 'circle', cx: 50, cy: 100 },
      { type: 'path', d: 'old-path' },
    ];
    compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
    expect(currentNodes).to.deep.equal([
      { type: 'circle', cx: 45, cy: 100 },
      { type: 'path', d: 'new-path' },
    ]);
  });
});
