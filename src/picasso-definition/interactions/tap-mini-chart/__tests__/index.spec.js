import tap from '..';
import * as updateDataview from '../update-data-view';

describe('event', () => {
  let sandbox;
  let create;
  const eventName = 'tap';
  let viewHandler;
  let opts;
  let e;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(updateDataview, 'default');
    updateDataview.default.returns(true);
    opts = { customTooltipModel: 'custom-tooltip-model', debouncer: sandbox.stub() };
    e = { preventDefault: sandbox.stub() };
    create = () => tap({ eventName, viewHandler }, opts);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call tapInMiniChart', () => {
    const tapObj = create();
    tapObj.events.tap(e);
    expect(updateDataview.default).to.have.been.calledOnce;
  });
});
