// eslint-disable-next-line no-unused-vars
import getPluginArgs from '../plugin-args';

describe('plugin-args', () => {
  let sandbox;
  let create;
  let layoutService;
  let pluginArgs;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getLayout: sandbox.stub().returns('correct-layout') };
    create = () => getPluginArgs(layoutService);
    pluginArgs = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('pluginArgs', () => {
    it('should have all keys', () => {
      expect(pluginArgs).to.have.all.keys(['layout', 'keys']);
    });

    describe('layout', () => {
      it('should get layout from layoutService', () => {
        expect(pluginArgs.layout).to.equal('correct-layout');
      });
    });

    describe('keys', () => {
      it('should have all keys', () => {
        expect(pluginArgs.keys).to.have.all.keys(['SCALE', 'COMPONENT']);
      });

      describe('SCALE', () => {
        it('should have all keys', () => {
          expect(pluginArgs.keys.SCALE).to.have.all.keys(['X', 'Y']);
        });
      });

      describe('COMPONENT', () => {
        it('should have all keys', () => {
          expect(pluginArgs.keys.COMPONENT).to.have.all.keys(['X_AXIS', 'Y_AXIS', 'POINT']);
        });
      });
    });
  });
});
