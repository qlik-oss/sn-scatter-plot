import isBigData from '../is-big-data';

describe('isBigData', () => {
  let sandbox;
  let qcy;
  let layout;
  let flags;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layout = { qIsBDILiveMode: false };
    flags = { isEnabled: sandbox.stub().returns(false) };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false when qcy is smaller than 1000', () => {
    qcy = 999;
    expect(isBigData(qcy, layout, flags)).to.equal(false);
  });

  it('should return false when qcy is larger than 1000, qIsBDILiveMode is true, BDI_CLIENT_ADAPT is enabled', () => {
    qcy = 1001;
    layout.qIsBDILiveMode = true;
    flags.isEnabled.returns(true);
    expect(isBigData(qcy, layout, flags)).to.equal(false);
  });

  it('should return true when qcy is larger than 1000, qIsBDILiveMode is false, BDI_CLIENT_ADAPT is not enabled', () => {
    qcy = 1001;
    layout.qIsBDILiveMode = false;
    flags.isEnabled.returns(false);
    expect(isBigData(qcy, layout, flags)).to.equal(true);
  });
});
