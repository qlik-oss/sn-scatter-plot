import MODES from '../modes';

describe('modes', () => {
  it('should have correct group properties', () => {
    expect(MODES).to.have.all.keys([
      'AXIS',
      'AXIS_TITLE',
      'POINT_LABELS',
      'GRID_LINES',
      'REFERENCE_LINES',
      'REFERENCE_LINE_LABELS',
      'HEAT_MAP_LABELS',
      'HEAT_MAP_LEGEND',
      'MINI_CHART',
    ]);
  });

  describe('AXIS', () => {
    it('should have correct properties', () => {
      expect(MODES.AXIS).to.have.all.keys(['X', 'Y']);
    });
  });

  describe('AXIS_TITLE', () => {
    it('should have correct properties', () => {
      expect(MODES.AXIS_TITLE).to.have.all.keys(['X', 'Y']);
    });
  });
});
