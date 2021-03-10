import KEYS from '../keys';

describe('keys', () => {
  it('should have correct group properties', () => {
    expect(KEYS).to.have.all.keys(['DATA', 'SCALE', 'COMPONENT', 'COLLECTION', 'FORMATTER', 'FIELDS']);
  });

  it('should have correct data keys', () => {
    expect(KEYS.DATA).to.have.all.keys(['MAIN']);
  });

  it('should have correct scale keys', () => {
    expect(KEYS.SCALE).to.have.all.keys(['COLOR', 'SIZE', 'X', 'Y']);
  });

  it('should have correct component keys', () => {
    expect(KEYS.COMPONENT).to.have.all.keys([
      'GRID_LINES',
      'POINT',
      'POINT_TOOLTIP',
      'LEGEND',
      'LEGEND_CATEGORICAL',
      'LEGEND_CAT_TOOLTIP',
      'X_AXIS',
      'Y_AXIS',
      'X_AXIS_TITLE',
      'Y_AXIS_TITLE',
    ]);
  });

  it('should have correct collection keys', () => {
    expect(KEYS.COLLECTION).to.have.all.keys(['MAIN']);
  });

  it('should have correct formatter keys', () => {
    expect(KEYS.FORMATTER).to.have.all.keys(['COLOR']);
  });

  it('should have correct fields keys', () => {
    expect(KEYS.FIELDS).to.have.all.keys(['DIM', 'X', 'Y', 'SIZE']);
  });
});
