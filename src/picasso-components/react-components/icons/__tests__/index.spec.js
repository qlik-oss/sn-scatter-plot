import icons from '..';

describe('icons', () => {
  it('should have all keys', () => {
    expect(icons).to.have.all.keys([
      'DRILL_DOWN',
      'LOCK',
      'TICK',
      'TRIANGLE_DOWN',
      'TRIANGLE_RIGHT',
      'HOME',
      'UP',
      'DOWN',
      'LEFT',
      'RIGHT',
      'ZOOM_IN',
      'ZOOM_OUT',
    ]);
  });
});
