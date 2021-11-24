// eslint-disable-next-line no-unused-vars
import disclaimers from '../disclaimers';

describe('disclaimers', () => {
  let sandbox;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getHyperCubeValue: sandbox.stub() };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should contain four elemens', () => {
    expect(disclaimers.length).to.equal(4);
  });

  describe('NoDataExist', () => {
    it('should have all keys', () => {
      expect(disclaimers[0]).to.have.all.keys(['key', 'alignment', 'condition']);
    });

    describe('condition', () => {
      it('should return true if qcx or qcy is zero', () => {
        layoutService.getHyperCubeValue.returns({ qcx: 0, qcy: 1000 });
        expect(disclaimers[0].condition({ layoutService })).to.equal(true);
        layoutService.getHyperCubeValue.returns({ qcx: 2000, qcy: 0 });
        expect(disclaimers[0].condition({ layoutService })).to.equal(true);
      });

      it('should return false if qcx and qcy are not zero', () => {
        layoutService.getHyperCubeValue.returns({ qcx: 1, qcy: 1000 });
        expect(disclaimers[0].condition({ layoutService })).to.equal(false);
      });
    });
  });
});
