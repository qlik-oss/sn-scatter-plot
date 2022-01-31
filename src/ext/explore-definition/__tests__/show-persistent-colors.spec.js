import showPersistentColors from '../show-color-scheme';
import * as showUseDimValCol from '../../show-use-dim-val-col';

describe('showPersistentColors', () => {
  let sandbox;
  let data;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(showUseDimValCol, 'default');
    data = { color: { mode: 'byDimension', useDimColVal: true } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true if data.color = undefined', () => {
    data.color = undefined;
    const res = showPersistentColors(data);
    expect(showUseDimValCol.default.callCount).to.equal(0);
    expect(res).to.equal(true);
  });

  it('should return true if data.color.mode != byDimension', () => {
    data.color.mode = 'byMeasure';
    const res = showPersistentColors(data);
    expect(showUseDimValCol.default.callCount).to.equal(0);
    expect(res).to.equal(true);
  });

  it('should return true if data.color.useDimColVal = false', () => {
    data.color.useDimColVal = false;
    const res = showPersistentColors(data);
    expect(showUseDimValCol.default.callCount).to.equal(0);
    expect(res).to.equal(true);
  });

  it('should return false if showUseDimValCol = true', () => {
    showUseDimValCol.default.returns(true);
    const res = showPersistentColors(data);
    expect(res).to.equal(false);
  });

  it('should return true if showUseDimValCol = false', () => {
    showUseDimValCol.default.returns(false);
    const res = showPersistentColors(data);
    expect(res).to.equal(true);
  });
});
