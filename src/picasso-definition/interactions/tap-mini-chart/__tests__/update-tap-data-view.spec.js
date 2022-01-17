import updateTapDataView from '../update-tap-data-view';
import * as getTapPosition from '../tap-position';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('updateTapDataView', () => {
  let sandbox;
  let create;
  let viewHandler;
  let e;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewHandler = {
      getMeta: sandbox
        .stub()
        .returns({ scale: 0.25, homeStateDataView: { xAxisMin: 0, xAxisMax: 1000, yAxisMin: 10, yAxisMax: 15 } }),
      setDataView: sandbox.stub(),
    };
    sandbox.stub(getTapPosition, 'default').returns({ x: 1, y: 2 });
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { MINI_CHART_POINT: 'mcp' } });
    sandbox.stub(NUMBERS, 'default').value({ MINI_CHART: { RATIO: 0.5 } });
    chart = { component: sandbox.stub() };
    chart.component.withArgs('mcp').returns({ rect: { computedPhysical: { width: 100, height: 50 } } });
    create = () => updateTapDataView({ viewHandler, e, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should update dataView', () => {
    create();
    expect(viewHandler.setDataView).to.have.been.called;
  });
});
