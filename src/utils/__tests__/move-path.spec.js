import movePath from '../move-path';

describe('movePath', () => {
  const path = 'M1 2 L3 4 L5 6 Z';
  const newPath = movePath(path, 1);
  expect(newPath).to.deep.equal('M2 2 L4 4 L6 6 Z');
});
