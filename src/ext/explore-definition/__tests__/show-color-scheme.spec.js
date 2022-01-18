import showColorScheme from '../show-color-scheme';
import * as showPersistentColors from '../show-persistent-colors';

describe('showColorScheme', () => {
  let sandbox;
  let data;
  let layout;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(showPersistentColors, 'default');
    data = { color: { mode: 'byDimension', useDimColVal: true } };
    layout = { qHyperCube: { qDimensionInfo: [{ qCardinal: 12 }] } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if qCardinal = 12', () => {
    const res = showColorScheme(data, layout);
    expect(showPersistentColors.default.callCount).to.equal(0);
    expect(res).to.equal(false);
  });

  it('should return false if qCardinal < 12', () => {
    layout.qHyperCube.qDimensionInfo[0].qCardinal = 11;
    const res = showColorScheme(data, layout);
    expect(showPersistentColors.default.callCount).to.equal(0);
    expect(res).to.equal(false);
  });

  describe('qCardinal > 12', () => {
    beforeEach(() => {
      layout.qHyperCube.qDimensionInfo[0].qCardinal = 13;
    });

    it('should return false if showPersistentColors = false', () => {
      showPersistentColors.default.returns(false);
      const res = showColorScheme(data, layout);
      expect(showPersistentColors.default.callCount).to.equal(1);
      expect(res).to.equal(false);
    });

    it('should return true if showPersistentColors = true', () => {
      showPersistentColors.default.returns(true);
      const res = showColorScheme(data, layout);
      expect(showPersistentColors.default.callCount).to.equal(1);
      expect(res).to.equal(true);
    });
  });

  describe('no dimension', () => {
    beforeEach(() => {
      layout.qHyperCube.qDimensionInfo = [];
    });

    it('should return false if showPersistentColors = false', () => {
      showPersistentColors.default.returns(false);
      const res = showColorScheme(data, layout);
      expect(showPersistentColors.default.callCount).to.equal(1);
      expect(res).to.equal(false);
    });

    it('should return true if showPersistentColors = true', () => {
      showPersistentColors.default.returns(true);
      const res = showColorScheme(data, layout);
      expect(showPersistentColors.default.callCount).to.equal(1);
      expect(res).to.equal(true);
    });
  });
});
