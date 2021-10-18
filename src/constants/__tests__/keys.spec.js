import KEYS from '../keys';

describe('keys', () => {
  it('should have correct group properties', () => {
    expect(KEYS).to.have.all.keys(['DATA', 'SCALE', 'COMPONENT', 'COLLECTION', 'FORMATTER', 'FIELDS']);
  });

  it('should have correct data keys', () => {
    expect(KEYS.DATA).to.have.all.keys(['MAIN', 'BIN']);
  });

  it('should have correct scale keys', () => {
    expect(KEYS.SCALE).to.have.all.keys(['COLOR', 'SIZE', 'X', 'Y']);
  });

  it('should have correct component keys', () => {
    expect(KEYS.COMPONENT).to.have.all.keys([
      'GRID_LINES',
      'REFERENCE_LINES_X',
      'REFERENCE_LINES_Y',
      'REFERENCE_LINE_LABELS_X',
      'REFERENCE_LINE_LABELS_Y',
      'POINT',
      'POINT_TOOLTIP',
      'POINT_LABELS',
      'LEGEND',
      'LEGEND_CATEGORICAL',
      'LEGEND_CAT_TOOLTIP',
      'OUT_OF_BOUNDS',
      'X_AXIS',
      'Y_AXIS',
      'X_AXIS_TITLE',
      'Y_AXIS_TITLE',
      'HEAT_MAP',
      'HEAT_MAP_LABELS',
      'HEAT_MAP_TOOLTIP',
    ]);
  });

  it('should have correct collection keys', () => {
    expect(KEYS.COLLECTION).to.have.all.keys(['MAIN']);
  });

  it('should have correct formatter keys', () => {
    expect(KEYS.FORMATTER).to.have.all.keys(['COLOR', 'X', 'Y']);
  });

  it('should have correct fields keys', () => {
    expect(KEYS.FIELDS).to.have.all.keys(['DIM', 'X', 'Y', 'SIZE', 'BIN', 'BIN_DENSITY', 'BIN_X', 'BIN_Y']);
  });
});
