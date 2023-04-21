describe('isDark', () => {
  it('should return correct boolean value', () => {
    const sandbox = sinon.createSandbox();
    const d3ColorMock = {
      hcl: sandbox.stub().withArgs('dark blue').returns({ l: 60 }),
    };
    const [{ default: isDark }] = aw.mock([['d3-color', () => d3ColorMock]], ['../is-dark']);
    expect(isDark('dark blue')).to.equal(true);
    sandbox.restore();
  });
});
