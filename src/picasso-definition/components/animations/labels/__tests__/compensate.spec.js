import compensateForLayoutChanges from '../compensate';

describe('compensateForLayoutChanges', () => {
  let currentNodes = [{ x1: 10, x2: 10, y1: 10, y2: 100 }];
  let currentRect = { x: 100, y: 200 };
  let previousRect = { x: 100, y: 200 };

  it('should not adjust node if the rect does not change', () => {
    compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
    expect(currentNodes).to.deep.equal([{ x1: 10, x2: 10, y1: 10, y2: 100 }]);
  });

  it('should adjust label correctly if the rect shifts 5px to right', () => {
    currentRect = { x: 15, y: 200 };
    previousRect = { x: 10, y: 200 };
    currentNodes = [
      { type: 'text', x: 50, y: 10 },
      { type: 'line', x1: 51, x2: 51, y1: 11, y2: 15 },
      { type: 'rect', x: 50, y: 10 },
    ];
    compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
    expect(currentNodes).to.deep.equal([
      { type: 'text', x: 45, y: 10 },
      { type: 'line', x1: 46, x2: 46, y1: 11, y2: 15 },
      { type: 'rect', x: 45, y: 10 },
    ]);
  });
});
