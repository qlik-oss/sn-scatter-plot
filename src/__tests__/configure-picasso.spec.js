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
    };
    createPicassoJS = sandbox.stub().returns(picasso);
    picassoHammer = sandbox.stub();
    configurePicasso = aw.mock(
      [
        ['**/dist/picasso.js', () => createPicassoJS],
        ['**/dist/picasso-q.js', () => ({ key: 'picasso-q' })],
        ['**/dist/picasso-hammer.js', () => picassoHammer],
        ['**/hammer.js', () => 'touch it'],
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

  it('should return picasso instance', () => {
    expect(configurePicasso()).to.equal(picasso);
  });
});
