import * as pp from '../property-definition';
import ext from '../ext';

describe('ext', () => {
  let sandbox;
  let env;
  let create;

  beforeEach(() => {
    env = 'correct env';
    sandbox = sinon.createSandbox();
    sandbox.stub(pp, 'default').withArgs('correct env').returns('correct def');
    create = () => ext(env);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct properties', () => {
    expect(create()).to.have.all.keys(['definition', 'support']);
  });

  describe('definition', () => {
    it('should return correct definition', () => {
      expect(create().definition).to.deep.equal('correct def');
    });
  });

  describe('support', () => {
    it('should have correct properties', () => {
      expect(create().support).to.have.all.keys(['snapshot', 'export', 'exportData', 'sharing', 'viewData']);
    });

    describe('snapshot', () => {
      let layout;
      it('should return false when called, case 1: layout is undefined', () => {
        layout = undefined;
        const createdSnapshot = create().support.snapshot;
        expect(createdSnapshot(layout)).to.deep.equal(false);
      });

      it('should return true when called, case 2: layout is defined and has valid properties', () => {
        layout = { qHyperCube: { qSize: { qcy: 1 } } };
        const createdSnapshot = create().support.snapshot;
        expect(createdSnapshot(layout)).to.deep.equal(true);
      });
    });
  });
});
