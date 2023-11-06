import createMiniChartPoints from '../mini-points';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('createMiniChartPoints', () => {
  let sandbox;
  let create;
  let chartModel;
  let viewHandler;
  let dataHandler;
  let d;
  let rtl;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: { MINI_CHART_POINT: 'mini-chart-points' },
      SCALE: { HEAT_MAP_CLOR: 'heat-map-color' },
    });
    sandbox.stub(NUMBERS, 'default').value({
      MINI_CHART: { RATIO: 0.5, PADDING: 0 },
    });
    viewHandler = {
      getMeta: sandbox.stub().returns({
        scale: 0.5,
        homeStateDataView: { xAxisMin: 0, xAxisMax: 40, yAxisMin: 0, yAxisMax: 20 },
        isHomeState: true,
      }),
    };
    dataHandler = { getHomeStateBins: sandbox.stub().returns([{ qText: [1, 2, 3, 4] }]) };
    chartModel = {
      query: {
        getViewHandler: sandbox.stub().returns(viewHandler),
        getDataHandler: sandbox.stub().returns(dataHandler),
        miniChartEnabled: sandbox.stub(),
      },
    };
    d = { datum: { value: { qText: [8, 12, 12, 8], qNum: 3 } }, scale: sandbox.stub() };
    d.scale.withArgs(3).returns(0.3);
    rtl = false;
    create = () => createMiniChartPoints(chartModel, rtl);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with correct keys', () => {
    expect(create()).to.have.all.keys(['key', 'type', 'layout', 'data', 'show', 'settings', 'beforeRender']);
  });

  describe('show', () => {
    it('should not be true when mini chart is not enabled in chartModel', () => {
      chartModel.query.miniChartEnabled.returns(false);
      const obj = create();
      expect(obj.show()).to.equal(false);
    });

    it('should be true when mini chart is enabled in chartModel', () => {
      chartModel.query.miniChartEnabled.returns(true);
      const obj = create();
      expect(obj.show()).to.equal(true);
    });
  });

  describe('settings', () => {
    it('should return correct point', () => {
      const obj = create();
      obj.beforeRender({ size: { width: 200, height: 160 } });
      expect(obj.settings.x(d)).to.equal(126 / 200);
      expect(obj.settings.y(d)).to.equal(121 / 160);
      expect(obj.settings.fill.fn(d)).to.equal(0.3);
      expect(obj.settings.shape(d)).to.deep.equal({ type: 'rect', width: 5, height: 8 });
    });
  });
});
