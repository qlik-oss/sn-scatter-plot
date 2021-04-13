import createThemeModel from '..';
import * as getStyle from '../style';

describe('theme-model', () => {
  let sandbox;
  let theme;
  let themeModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(getStyle, 'default').returns({ key: 'style' });
    theme = { key: 'theme' };
    themeModel = createThemeModel({ theme });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(themeModel).to.have.all.keys(['command', 'query']);
  });

  describe('query', () => {
    it('should expose correct methods', () => {
      expect(themeModel.query).to.have.all.keys(['getStyle']);
    });

    describe('getStyle', () => {
      it('should return style', () => {
        expect(themeModel.query.getStyle()).to.deep.equal({ key: 'style' });
      });
    });
  });
});
