import createMiniChartNavigationWindow from '../navigation-window';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('createMiniChartNavigationWindow', () => {
  let sandbox;
  let create;
  let chartModel;
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
    chartModel = { query: { getViewHandler: sandbox.stub().returns(viewHandler), miniChartEnabled: sandbox.stub() } };
    flags = { isEnabled: sandbox.stub() };
    flags.isEnabled.withArgs('DATA_BINNING').returns(true);
    create = () => createMiniChartNavigationWindow(chartModel);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with correct keys', () => {
    expect(create()).to.have.all.keys(['key', 'type', 'settings', 'style', 'show', 'beforeRender']);
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
    describe('rect', () => {
      it('should return correct navigation rect when it is not truncated', () => {
        const obj = create();
        obj.beforeRender({ size: { width: 200, height: 160 } });
        expect(obj.settings.rect.x()).to.equal(125);
        expect(obj.settings.rect.y()).to.equal(100);
        expect(obj.settings.rect.width()).to.equal(50);
        expect(obj.settings.rect.height()).to.equal(40);
      });

      it('should return correct navigation rect when it is truncated at top left', () => {
        viewHandler.getDataView.returns({ xAxisMin: -10, xAxisMax: 10, yAxisMin: 15, yAxisMax: 25 });
        const obj = create();
        obj.beforeRender({ size: { width: 200, height: 160 } });
        expect(obj.settings.rect.x()).to.equal(100);
        expect(obj.settings.rect.y()).to.equal(80);
        expect(obj.settings.rect.width()).to.equal(25);
        expect(obj.settings.rect.height()).to.equal(20);
      });

      it('should return correct navigation rect when it is completely outside, near top left', () => {
        viewHandler.getDataView.returns({ xAxisMin: -20, xAxisMax: 0, yAxisMin: 20, yAxisMax: 30 });
        const obj = create();
        obj.beforeRender({ size: { width: 200, height: 160 } });
        expect(obj.settings.rect.x()).to.equal(100);
        expect(obj.settings.rect.y()).to.equal(80);
        expect(obj.settings.rect.width()).to.equal(0);
        expect(obj.settings.rect.height()).to.equal(0);
      });

      it('should return correct navigation rect when it is truncated at bottom right', () => {
        viewHandler.getDataView.returns({ xAxisMin: 30, xAxisMax: 50, yAxisMin: -5, yAxisMax: 5 });
        const obj = create();
        obj.beforeRender({ size: { width: 200, height: 160 } });
        expect(obj.settings.rect.x()).to.equal(175);
        expect(obj.settings.rect.y()).to.equal(140);
        expect(obj.settings.rect.width()).to.equal(25);
        expect(obj.settings.rect.height()).to.equal(20);
      });

      it('should return correct navigation rect when it is completely outside, near bottom right', () => {
        viewHandler.getDataView.returns({ xAxisMin: 40, xAxisMax: 60, yAxisMin: -10, yAxisMax: 0 });
        const obj = create();
        obj.beforeRender({ size: { width: 200, height: 160 } });
        expect(obj.settings.rect.x()).to.equal(200);
        expect(obj.settings.rect.y()).to.equal(160);
        expect(obj.settings.rect.width()).to.equal(0);
        expect(obj.settings.rect.height()).to.equal(0);
      });
    });
  });
});
