import icons from '..';

describe('icons', () => {
  it('should have all keys', () => {
    expect(icons).to.have.all.keys([
      'DRILLDOWN',
      'LOCK',
      'TICK',
      'TRIANGLEDOWN',
      'TRIANGLERIGHT',
      'home',
      'up',
      'down',
      'left',
      'right',
      'zoomIn',
      'zoomOut',
    ]);
  });
});
