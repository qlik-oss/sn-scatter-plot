import MODES from '../modes';

describe('modes', () => {
  it('should have correct group properties', () => {
    expect(MODES).to.have.all.keys(['AXIS', 'AXIS_TITLE']);
  });

  describe('AXIS', () => {
    it('should have correct properties', () => {
      expect(MODES.AXIS).to.have.all.keys(['X', 'Y']);
    });

    describe('X', () => {
      it('should have correct properties', () => {
        expect(MODES.AXIS.X).to.have.all.keys(['width', 'height']);
      });
    });
  });

  describe('AXIS_TITLE', () => {
    it('should have correct properties', () => {
      expect(MODES.AXIS_TITLE).to.have.all.keys(['X', 'Y']);
    });

    describe('X', () => {
      it('should have correct properties', () => {
        expect(MODES.AXIS_TITLE.X).to.have.all.keys(['width', 'height']);
      });
    });
  });
});
