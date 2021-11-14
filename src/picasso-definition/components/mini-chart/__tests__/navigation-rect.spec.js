import createMiniChartNavigationRect from '../navigation-rect';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('createMiniChartNavigationRect', () => {
  let sandbox;
  let create;
  let models;
  let flags;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: { MINI_CHART_NAVIGATION: 'mini-chart-navigation' },
    });
    sandbox.stub(NUMBERS, 'default').value({
      MINI_CHART: { RATIO: 0.5, PADDING: 0 },
    });
    viewHandler = {
      getMeta: sandbox
        .stub()
        .returns({ scale: 0.5, homeStateDataView: { xAxisMin: 0, xAxisMax: 40, yAxisMin: 0, yAxisMax: 20 } }),
      getDataView: sandbox.stub().returns({ xAxisMin: 10, xAxisMax: 30, yAxisMin: 5, yAxisMax: 15 }),
    };
    models = {
      chartModel: { query: { getViewHandler: sandbox.stub().returns(viewHandler) } },
      layoutService: { meta: { isBigData: true } },
    };
    flags = { isEnabled: sandbox.stub() };
    flags.isEnabled.withArgs('DATA_BINNING').returns(true);
    create = () => createMiniChartNavigationRect({ models, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with correct keys', () => {
    expect(create()).to.have.all.keys(['key', 'type', 'style', 'rect', 'show', 'beforeRender']);
  });

  describe('rect', () => {
    it('should return correct navigation rect when it is not truncated', () => {
      const obj = create();
      obj.beforeRender({ size: { width: 200, height: 160 } });
      expect(obj.rect.x()).to.equal(125);
      expect(obj.rect.y()).to.equal(100);
      expect(obj.rect.width()).to.equal(50);
      expect(obj.rect.height()).to.equal(40);
    });

    it('should return correct navigation rect when it truncated at top left', () => {
      viewHandler.getDataView.returns({ xAxisMin: -10, xAxisMax: 10, yAxisMin: 15, yAxisMax: 25 });
      const obj = create();
      obj.beforeRender({ size: { width: 200, height: 160 } });
      expect(obj.rect.x()).to.equal(100);
      expect(obj.rect.y()).to.equal(80);
      expect(obj.rect.width()).to.equal(25);
      expect(obj.rect.height()).to.equal(20);
    });

    it('should return correct navigation rect when it truncated at bottom right', () => {
      viewHandler.getDataView.returns({ xAxisMin: 30, xAxisMax: 50, yAxisMin: -5, yAxisMax: 5 });
      const obj = create();
      obj.beforeRender({ size: { width: 200, height: 160 } });
      expect(obj.rect.x()).to.equal(175);
      expect(obj.rect.y()).to.equal(140);
      expect(obj.rect.width()).to.equal(25);
      expect(obj.rect.height()).to.equal(20);
    });
  });

  describe('show', () => {
    it('should not be true when scale is 1', () => {
      viewHandler = { getMeta: sandbox.stub().returns({ scale: 1 }) };
      models = {
        chartModel: { query: { getViewHandler: sandbox.stub().returns(viewHandler) } },
      };
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
});
