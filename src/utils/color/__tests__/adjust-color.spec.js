describe('adjust-color', () => {
  let sandbox;
  let d3ColorMock;
  let darker;
  let brighter;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    d3ColorMock = {};
    [{ makeDarker: darker, makeBrighter: brighter }] = aw.mock([['d3-color', () => d3ColorMock]], ['../adjust-color']);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should make the color darker', () => {
    const mockedColor = { l: 48.19379114255456, toString: sandbox.spy() };
    d3ColorMock.hcl = sandbox.stub().withArgs('#4477aa').returns(mockedColor);
    darker('#4477aa');
    expect(mockedColor.l).to.equal(8.19379114255456);
    expect(mockedColor.toString).to.have.been.calledOnce;
  });

  it('should make the color brighter', () => {
    const mockedColor = { l: 48.19379114255456, toString: sandbox.spy() };
    d3ColorMock.hcl = sandbox.stub().withArgs('#4477aa').returns(mockedColor);
    brighter('#4477aa');
    expect(mockedColor.l).to.equal(58.19379114255456);
    expect(mockedColor.toString).to.have.been.calledOnce;
  });
});
