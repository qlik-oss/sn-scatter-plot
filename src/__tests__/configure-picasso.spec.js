import * as renderer from '../picasso-components/react-components/react-renderer';
import * as disclaimer from '../picasso-components/react-components/disclaimer';

describe('configure-picasso', () => {
  let sandbox;
  let picasso;
  let picassoHammer;
  let createPicassoJS;
  let configurePicasso;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    picasso = {
      use: sandbox.spy(),
      component: sandbox.spy(),
      renderer: sandbox.spy(),
    };
    createPicassoJS = sandbox.stub().returns(picasso);
    picassoHammer = sandbox.stub();
    sandbox.stub(renderer, 'default');
    renderer.default.returns('renderer');
    sandbox.stub(disclaimer, 'default');
    disclaimer.default.returns('disclaimer');
    configurePicasso = aw.mock(
      [
        ['**/dist/picasso.js', () => createPicassoJS],
        ['**/dist/picasso-q.js', () => ({ key: 'picasso-q' })],
        ['**/dist/picasso-hammer.js', () => picassoHammer],
        ['**/hammer.js', () => 'touch it'],
        ['**/picasso-components/ref-line-labels/index.js', () => 'refLineLabelsComponent'],
        ['**/picasso-components/point-label/index.js', () => 'pointLabelComponent'],
        ['**/picasso-components/custom-rect/index.js', () => 'customRect'],
      ],
      ['../configure-picasso']
    )[0].default;

    picassoHammer.withArgs('touch it').returns('picasso hammered it');
    configurePicasso();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create picasso instance', () => {
    expect(createPicassoJS).to.have.been.calledOnce;
  });

  it('should use correct amount of components', () => {
    expect(picasso.use.callCount).to.equal(2);
  });

  it('should use picasso-q', () => {
    expect(picasso.use.withArgs({ key: 'picasso-q' })).to.have.been.calledOnce;
  });

  it('should use picasso-hammer', () => {
    expect(picassoHammer).to.have.been.calledWithExactly('touch it');
    expect(picasso.use.withArgs('picasso hammered it')).to.have.been.calledOnce;
  });

  it('should register all custom components', () => {
    expect(picasso.renderer.getCall(0).calledWith('react', 'renderer')).to.be.true;
    expect(picasso.component.getCall(0).calledWith('reference-line-labels', 'refLineLabelsComponent')).to.be.true;
    expect(picasso.component.getCall(1).calledWith('point-label', 'pointLabelComponent')).to.be.true;
    expect(picasso.component.getCall(2).calledWith('disclaimer', 'disclaimer')).to.be.true;
    expect(picasso.component.getCall(3).calledWith('custom-rect', 'customRect')).to.be.true;
  });

  it('should return picasso instance', () => {
    expect(configurePicasso()).to.equal(picasso);
  });
});
