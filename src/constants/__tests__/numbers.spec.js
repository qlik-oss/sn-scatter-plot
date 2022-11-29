import NUMBERS from '../numbers';

describe('numbers', () => {
  it('should have correct group properties', () => {
    expect(NUMBERS).to.have.all.keys([
      'REF_LABELS',
      'AXIS',
      'GRID_DISTANCE',
      'LEGEND_CAT',
      'LAYOUT_MODES',
      'MAX_NR_SCATTER',
      'MAX_VISIBLE_BUBBLES',
      'CHUNK_SIZE',
      'DEFAULT_VISIBLE_BUBBLES',
      'LARGE_NUM_DATA_POINTS',
      'MAX_NR_ANIMATION',
      'MINI_CHART',
      'NAVIGATION_PANEL',
      'WINDOW_SIZE_BASE',
      'DIAMETER_OVER_RADIUS',
      'OOB_SPACE',
      'OOB_SIZE',
    ]);
  });

  it('should have correct reference labels keys', () => {
    expect(NUMBERS.REF_LABELS).to.have.all.keys(['MAX_WIDTH', 'PADDING', 'GAP', 'MAX_NUM_LINES', 'OOB']);
  });

  it('should have correct axis keys', () => {
    expect(NUMBERS.AXIS).to.have.all.keys(['X', 'Y']);
  });

  it('should have correct grid distance keys', () => {
    expect(NUMBERS.GRID_DISTANCE).to.have.all.keys(['NARROW', 'MEDIUM', 'WIDE', 'FALLBACK']);
  });

  it('should have correct legen cat keys', () => {
    expect(NUMBERS.LEGEND_CAT).to.have.all.keys(['SYMBOL']);
  });

  it('should have correct layout mode keys', () => {
    expect(NUMBERS.LAYOUT_MODES).to.have.all.keys(['FULL', 'MEDIUM', 'MEDIUM_NAV', 'SMALL', 'XSMALL', 'SPARK']);
  });

  it('should have correct mini chart keys', () => {
    expect(NUMBERS.MINI_CHART).to.have.all.keys(['RATIO', 'PADDING']);
  });

  it('should have correct navigation panel keys', () => {
    expect(NUMBERS.NAVIGATION_PANEL).to.have.all.keys(['BUTTON_WIDTH']);
  });
});
