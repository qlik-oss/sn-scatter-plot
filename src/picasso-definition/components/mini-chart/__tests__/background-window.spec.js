import createMiniChartBackgroundWindow from '../background-window';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('createMiniChartBackgroundWindow', () => {
  let sandbox;
  let create;
  let chartModel;
  let flags;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: { MINI_CHART_BACKGROUND: 'mini-chart-background' },
    });
    sandbox.stub(NUMBERS, 'default').value({
      MINI_CHART: { RATIO: 0.5, PADDING: 0 },
    });
    viewHandler = { getMeta: sandbox.stub().returns({ scale: 0.5 }) };
    chartModel = {
      query: {
        getViewHandler: sandbox.stub().returns(viewHandler),
        miniChartEnabled: sandbox.stub(),
      },
    };
    flags = { isEnabled: sandbox.stub() };
    flags.isEnabled.withArgs('DATA_BINNING').returns(true);
    create = () => createMiniChartBackgroundWindow(chartModel);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with correct keys', () => {
    expect(create()).to.have.all.keys(['key', 'type', 'layout', 'show', 'style', 'settings', 'beforeRender']);
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
      it('should return correct rect', () => {
        const obj = create();
        obj.beforeRender({ size: { width: 200, height: 160 } });
        expect(obj.settings.rect.x()).to.equal(100);
        expect(obj.settings.rect.y()).to.equal(80);
        expect(obj.settings.rect.width()).to.equal(100);
        expect(obj.settings.rect.height()).to.equal(80);
      });
    });
  });
});
