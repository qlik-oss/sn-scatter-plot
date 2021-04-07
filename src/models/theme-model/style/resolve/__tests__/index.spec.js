import resolver from '..';

describe('resolve', () => {
  let sandbox;
  let theme;
  let base;
  let path;
  let attribute;
  let defaultValue;
  let resolve;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    theme = {
      getStyle: sandbox.stub(),
    };
    base = 'object.scatterplot';
    path = 'line';
    attribute = 'color';
    defaultValue = 'olive';
    resolve = () =>
      resolver({
        theme,
        base,
        path,
        attribute,
        defaultValue,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return defaultValue if has no theme and base is false', () => {
    theme = undefined;
    base = false;
    expect(resolve()).to.equal('olive');
  });

  it('should return defaultValue if has no theme and base is true', () => {
    theme = undefined;
    base = true;
    expect(resolve()).to.equal('olive');
  });

  it('should return defaultValue if has no theme and base is true', () => {
    base = true;
    expect(resolve()).to.equal('olive');
  });

  it('should get theme style', () => {
    resolve();
    expect(theme.getStyle.withArgs(base, path, attribute)).to.have.been.calledOnce;
  });

  it('should return value from theme style if not undefined', () => {
    theme.getStyle.returns('blue');
    expect(resolve()).to.equal('blue');
  });

  it('should return defaultValue if value from theme style is undefined', () => {
    theme.getStyle.returns(undefined);
    expect(resolve()).to.equal('olive');
  });
});
