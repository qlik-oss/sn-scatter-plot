import miniChartWindow from '..';

describe('custom rect', () => {
  let sandbox;
  let h;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    h = sandbox.stub();
    h.withArgs('div', {
      style: {
        position: 'relative',
        left: '0px',
        top: '1px',
        width: '2px',
        height: '3px',
        background: 'white',
        'border-style': 'solid',
        'border-color': 'red',
        'border-width': '1px',
        'border-radius': '4px',
      },
    }).returns('correct rect');
  });

  afterEach(() => {
    sandbox.restore();
  });
  it('should have correct object', () => {
    expect(miniChartWindow).to.have.all.keys(['require', 'defaultSettings', 'renderer', 'render']);
  });
  describe('defaultSettings', () => {
    describe('settings', () => {
      describe('rect', () => {
        it('should have correct default dimension', () => {
          expect(miniChartWindow.defaultSettings.settings.rect.x()).to.equal(100);
          expect(miniChartWindow.defaultSettings.settings.rect.y()).to.equal(100);
          expect(miniChartWindow.defaultSettings.settings.rect.width()).to.equal(100);
          expect(miniChartWindow.defaultSettings.settings.rect.height()).to.equal(100);
        });
      });
    });
  });
  describe('render', () => {
    it('should render correct rect', () => {
      miniChartWindow.settings = {
        show: sandbox.stub(),
        style: { borderColor: 'red', background: 'white', borderRadius: '4px' },
        settings: {
          rect: { x: sandbox.stub(), y: sandbox.stub(), width: sandbox.stub(), height: sandbox.stub() },
        },
      };
      miniChartWindow.settings.settings.rect.x.returns(0);
      miniChartWindow.settings.settings.rect.y.returns(1);
      miniChartWindow.settings.settings.rect.width.returns(2);
      miniChartWindow.settings.settings.rect.height.returns(3);
      expect(miniChartWindow.render(h)).to.deep.equal(['correct rect']);
    });
  });
});
