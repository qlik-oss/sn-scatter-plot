import customRect from '..';

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
    expect(customRect).to.have.all.keys(['require', 'defaultSettings', 'renderer', 'render']);
  });
  describe('render', () => {
    it('should render nothing when show is false', () => {
      customRect.settings = { show: sandbox.stub() };
      customRect.settings.show.returns(false);
      expect(customRect.render(h)).to.equal(false);
    });

    it('should render correct rect when show is true', () => {
      customRect.settings = {
        show: sandbox.stub(),
        rect: { x: sandbox.stub(), y: sandbox.stub(), width: sandbox.stub(), height: sandbox.stub() },
        style: { borderColor: 'red', background: 'white' },
      };
      customRect.settings.show.returns(true);
      customRect.settings.rect.x.returns(0);
      customRect.settings.rect.y.returns(1);
      customRect.settings.rect.width.returns(2);
      customRect.settings.rect.height.returns(3);
      expect(customRect.render(h)).to.deep.equal(['correct rect']);
    });
  });
});
