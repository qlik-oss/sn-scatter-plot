import createMiniChartPoints from '../mini-points';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('createMiniChartPoints', () => {
  let sandbox;
  let create;
  let models;
  let flags;
  let viewHandler;
  let dataHandler;
  let d;

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
    models = {
      chartModel: {
        query: {
          getViewHandler: sandbox.stub().returns(viewHandler),
          getDataHandler: sandbox.stub().returns(dataHandler),
        },
      },
      layoutService: { meta: { isBigData: true } },
    };
    flags = { isEnabled: sandbox.stub() };
    flags.isEnabled.withArgs('DATA_BINNING').returns(true);
    d = { datum: { value: { qText: [8, 8, 12, 12], qNum: 3 } }, scale: sandbox.stub() };
    d.scale.withArgs(3).returns(0.3);
    create = () => createMiniChartPoints({ models, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with correct keys', () => {
    expect(create()).to.have.all.keys(['key', 'type', 'data', 'show', 'settings', 'beforeRender']);
  });

  describe('show', () => {
    it('should not be true when scale is 1', () => {
      viewHandler.getMeta.returns({ scale: 1 });
      const obj = create();
      expect(obj.show()).to.equal(false);
    });

    it('should not be true when data is not big', () => {
      models.layoutService.meta.isBigData = false;
      const obj = create();
      expect(obj.show()).to.equal(false);
    });

    it('should not be true when flag is not enabled', () => {
      flags.isEnabled.withArgs('DATA_BINNING').returns(false);
      const obj = create();
      expect(obj.show()).to.equal(false);
    });

    it('should be true when scale less than 1, data is big, and flag is enabled', () => {
      const obj = create();
      expect(obj.show()).to.equal(true);
    });
  });

  describe('settings', () => {
    it('should return correct point', () => {
      const obj = create();
      obj.beforeRender({ size: { width: 200, height: 160 } });
      expect(obj.settings.x(d)).to.equal(125 / 200);
      expect(obj.settings.y(d)).to.equal(120 / 160);
      expect(obj.settings.fill.fn(d)).to.equal(0.3);
      expect(obj.settings.shape()).to.deep.equal({ type: 'rect', width: 5, height: 8 });
    });
  });
});
