import createMiniChartBackgroundRect from '../background-rect';
import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';

describe('createMiniChartBackgroundRect', () => {
  let sandbox;
  let create;
  let models;
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
    models = {
      chartModel: { query: { getViewHandler: sandbox.stub().returns(viewHandler) } },
      layoutService: { meta: { isBigData: true } },
    };
    flags = { isEnabled: sandbox.stub() };
    flags.isEnabled.withArgs('DATA_BINNING').returns(true);
    create = () => createMiniChartBackgroundRect({ models, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with correct keys', () => {
    expect(create()).to.have.all.keys(['key', 'type', 'style', 'rect', 'show', 'beforeRender']);
  });

  describe('rect', () => {
    it('should return correct rect', () => {
      const obj = create();
      obj.beforeRender({ size: { width: 200, height: 160 } });
      expect(obj.rect.x()).to.equal(100);
      expect(obj.rect.y()).to.equal(80);
      expect(obj.rect.width()).to.equal(100);
      expect(obj.rect.height()).to.equal(80);
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
