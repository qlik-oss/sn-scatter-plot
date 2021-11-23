import KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';
import updateDataview from '../tap-in-mini-chart';

describe('tap in mini chart', () => {
  let sandbox;
  let create;
  let e;
  let viewHandler;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    chart = { component: sandbox.stub() };
    chart.component
      .withArgs(KEYS.COMPONENT.POINT)
      .returns({ rect: { computedPhysical: { x: 10, y: 12, width: 160, height: 200 } } });
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

  it('should return 0 if the tapped point is outside of the mini chart', () => {
    const result = create();
    expect(result).to.equal(0);
    expect(viewHandler.setDataView).to.not.have.been.called;
  });

  it('should return 1 if the tapped point is inside the mini chart', () => {
    e.pointers = [{ offsetX: 130, offsetY: 162 }];
    const result = create();
    expect(result).to.equal(1);
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: -5,
      xAxisMax: 5,
      yAxisMin: -10,
      yAxisMax: 10,
      deltaX: 0,
      deltaY: 0,
    });
  });

  it('should return 0 if the tapped point is inside the mini chart but the scale is 1', () => {
    e.pointers = [{ offsetX: 130, offsetY: 162 }];
    viewHandler.getMeta.returns({
      scale: 1,
    });
    const result = create();
    expect(result).to.equal(0);
    expect(viewHandler.setDataView).to.not.have.been.called;
  });
});
