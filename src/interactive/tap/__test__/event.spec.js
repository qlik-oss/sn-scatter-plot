import tap from '../event';
import * as tapInMiniChart from '../tap-in-mini-chart';

describe('event', () => {
  let sandbox;
  let create;
  const eventName = 'tap';
  let targets;
  let requireFailure;
  let components;
  let viewHandler;
  let opts;
  let recognizeWith;
  let e;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(tapInMiniChart, 'default');
    tapInMiniChart.default.returns(true);
    opts = { customTooltipModel: 'custom-tooltip-model', debouncer: sandbox.stub() };
    e = { preventDefault: sandbox.stub() };
    create = () => tap({ targets, requireFailure, recognizeWith, components, eventName, viewHandler }, opts);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call tapInMiniChart', () => {
    const tapObj = create();
    tapObj.events.tap(e);
    expect(tapInMiniChart.default).to.have.been.calledOnce;
  });
});
