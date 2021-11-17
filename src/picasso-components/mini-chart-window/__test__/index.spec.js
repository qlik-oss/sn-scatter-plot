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
      },
    }).returns('correct rect');
  });

  afterEach(() => {
    sandbox.restore();
  });
  it('should have correct object', () => {
    expect(miniChartWindow).to.have.all.keys(['require', 'defaultSettings', 'renderer', 'render']);
  });
  describe('render', () => {
    it('should render nothing when show is false', () => {
      miniChartWindow.settings = { show: sandbox.stub() };
      miniChartWindow.settings.show.returns(false);
      expect(miniChartWindow.render(h)).to.equal(false);
    });

    it('should render correct rect when show is true', () => {
      miniChartWindow.settings = {
        show: sandbox.stub(),
        settings: {
          rect: { x: sandbox.stub(), y: sandbox.stub(), width: sandbox.stub(), height: sandbox.stub() },
          style: { borderColor: 'red', background: 'white' },
        },
      };
      miniChartWindow.settings.show.returns(true);
      miniChartWindow.settings.settings.rect.x.returns(0);
      miniChartWindow.settings.settings.rect.y.returns(1);
      miniChartWindow.settings.settings.rect.width.returns(2);
      miniChartWindow.settings.settings.rect.height.returns(3);
      expect(miniChartWindow.render(h)).to.deep.equal(['correct rect']);
    });
  });
});
