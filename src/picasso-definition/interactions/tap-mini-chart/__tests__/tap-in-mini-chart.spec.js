import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';
import updateDataview from '../tap-in-mini-chart';

describe('tap in mini chart', () => {
  let sandbox;
  let create;
  let e;
  let viewHandler;
  let chart;
  const rect = { computedPhysical: { x: 10, y: 12, width: 160, height: 200 } };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: { MINI_CHART_POINT: 'mcp' },
    });
    chart = { component: sandbox.stub() };
    chart.component.withArgs('mcp').returns({ rect });
    e = { pointers: [{ offsetX: 80, offsetY: 162 }], deltaX: 0, deltaY: 0 };
    viewHandler = { getMeta: sandbox.stub(), setDataView: sandbox.stub() };
    viewHandler.getMeta.returns({
      scale: 0.5,
      homeStateDataView: { xAxisMin: -10, xAxisMax: 10, yAxisMin: -20, yAxisMax: 20 },
    });
    sandbox.stub(NUMBERS, 'default').value({
      MINI_CHART: { RATIO: 0.5, PADDING: 0 },
    });
    create = () => updateDataview({ e, viewHandler, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if there is no mini chart', () => {
    chart.component.withArgs('mcp').returns(null);
    const result = create();
    expect(result).to.equal(false);
    expect(viewHandler.setDataView).to.not.have.been.called;
  });

  it('should return false if there is mini chart but its show function returns false', () => {
    chart.component.withArgs('mcp').returns({ rect, show: sandbox.stub().returns(false) });
    const result = create();
    expect(result).to.equal(false);
    expect(viewHandler.setDataView).to.not.have.been.called;
  });

  it('should return false if the tapped point is outside of the mini chart', () => {
    chart.component.withArgs('mcp').returns({ rect, show: sandbox.stub().returns(true) });
    const result = create();
    expect(result).to.equal(false);
    expect(viewHandler.setDataView).to.not.have.been.called;
  });

  it('should return true if the tapped point is inside the mini chart', () => {
    chart.component.withArgs('mcp').returns({ rect, show: sandbox.stub().returns(true) });
    e.pointers = [{ offsetX: 130, offsetY: 162 }];
    const result = create();
    expect(result).to.equal(true);
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: -5,
      xAxisMax: 5,
      yAxisMin: -10,
      yAxisMax: 10,
      deltaX: 0,
      deltaY: 0,
    });
  });
});
