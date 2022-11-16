import movePath from '../move-path';

describe('movePath', () => {
  it('should behave correctly', () => {
    const path = 'M1 2 L3 4 L5 6 Z';
    const newPath = movePath(path, 1, 2);
    expect(newPath).to.deep.equal('M2 4 L4 6 L6 8 Z');
  });
});
