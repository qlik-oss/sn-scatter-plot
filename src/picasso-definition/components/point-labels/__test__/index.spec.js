import * as KEYS from '../../../../constants/keys';
import createPointLabels from '..';

describe('point-labels', () => {
  let sandbox;
  let layoutService;
  let themeService;
  let labels;
  let create;
  let component;
  let chartModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getLayoutValue: sandbox.stub() };
    themeService = { getStyles: sandbox.stub() };
    chartModel = { query: { getViewHandler: sandbox.stub() } };
    chartModel.query.getViewHandler.returns({ redererSettings: 'renderer-settings' });
    create = () => createPointLabels({ layoutService, themeService, chartModel });
    labels = { mode: 1 };
    layoutService.getLayoutValue.withArgs('labels').returns(labels);
    themeService.getStyles.returns({ label: { value: { fontFamily: 'Sans serif', fontSize: '1px', color: 'red' } } });
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        POINT: 'point-component',
        POINT_LABELS: 'point-labels',
      },
    });
  });

  afterEach(() => {
    sandbox.restore();
  });
  // No labels
  it('should return false if is label mode is 0', () => {
    labels.mode = 0;
    expect(create()).to.be.false;
  });
  // Auto
  it('should return a component if label mode is 1', () => {
    labels.mode = 1;
    expect(create()).to.be.an('object');
  });
  // All
  it('should return a component if label mode is 2', () => {
    labels.mode = 2;
    expect(create()).to.be.an('object');
  });

  it('should return a component if style is empty', () => {
    labels.mode = 2;
    themeService.getStyles.returns({});
    expect(create()).to.be.an('object');
  });

  describe('component', () => {
    it('should have correct key', () => {
      expect(create().key).to.equal('point-labels');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('point-label');
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['label', 'mode']);
      });

      describe('label', () => {
        it('should return correct node data label', () => {
          component = create();
          expect(component.settings.label({ data: { label: 'correct label' } })).to.deep.equal('correct label');
        });
      });
    });

    describe('style', () => {
      it('should have correct properties', () => {
        expect(create().style).to.have.all.keys(['fontFamily', 'fontSize', 'fill', 'backgroundColor']);
      });
    });
  });
});
