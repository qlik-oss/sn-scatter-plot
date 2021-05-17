import * as isDark from '../is-dark';
import getContrastColors from '../get-contrast-colors';

describe('getContrasColors', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(isDark, 'default');
    isDark.default.withArgs('dark blue').returns(true);
    isDark.default.withArgs('light red').returns(false);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct color and background color when the forecolor is dark', () => {
    expect(getContrastColors('dark blue')).to.deep.equal({ backgroundColor: '#595959', color: '#E6E6E6' });
  });
  it('should return correct color and background color when the forecolor is light', () => {
    expect(getContrastColors('light red')).to.deep.equal({ backgroundColor: '#E6E6E6', color: '#595959' });
  });
});
