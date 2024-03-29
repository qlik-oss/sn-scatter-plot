// eslint-disable-next-line no-unused-vars
import * as NUMBERS from '../../../../constants/numbers';
import disclaimers from '../disclaimers';

describe('disclaimers', () => {
  let sandbox;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      getHyperCubeValue: sandbox.stub(),
      getLayout: sandbox.stub().returns({ showDisclaimer: true }),
      meta: { isBigData: undefined, maxVisibleBubbles: 100 },
    };
    sandbox.stub(NUMBERS, 'default').value({ MAX_NR_SCATTER: 100 });
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

  describe('OnlyNanData', () => {
    it('should have all keys', () => {
      expect(disclaimers[1]).to.have.all.keys(['key', 'alignment', 'condition']);
    });

    describe('condition', () => {
      it('should return true one of the measure has qMax < qMin or has qMax equals to NaN, false if otherwise', () => {
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo').returns([
          { qMax: 1, qMin: 2 },
          { qMax: 3, qMin: 2 },
        ]);
        expect(disclaimers[1].condition({ layoutService })).to.equal(true);
        layoutService.getHyperCubeValue.withArgs('qMeasureInfo').returns([
          { qMax: 2, qMin: 1 },
          { qMax: 3, qMin: 2 },
        ]);
        expect(disclaimers[1].condition({ layoutService })).to.equal(false);
      });
    });
  });

  describe('LimitedData', () => {
    it('should have all keys', () => {
      expect(disclaimers[2]).to.have.all.keys(['key', 'alignment', 'condition']);
    });

    describe('condition', () => {
      it('should return false if showDisclaimer is false', () => {
        layoutService.getLayout.returns({ showDisclaimer: false });
        expect(disclaimers[2].condition({ layoutService })).to.equal(false);
      });

      it('should return false if qcy exceeds the limit for numbers of points and is big data', () => {
        layoutService.getHyperCubeValue.withArgs('qSize.qcy', 0).returns(101);
        layoutService.meta.isBigData = true;
        expect(disclaimers[2].condition({ layoutService })).to.equal(false);
      });

      it('should return true if qcy exceeds the limit for numbers of points and is not big data', () => {
        layoutService.getHyperCubeValue.withArgs('qSize.qcy', 0).returns(101);
        layoutService.meta.isBigData = false;
        expect(disclaimers[2].condition({ layoutService })).to.equal(true);
      });
    });
  });

  describe('OverviewData', () => {
    it('should have all keys', () => {
      expect(disclaimers[3]).to.have.all.keys(['key', 'alignment', 'condition']);
    });

    describe('condition', () => {
      it('should return the same value as isBigData if showDisclaimer is true ', () => {
        layoutService.getLayout.returns({ showDisclaimer: true });
        layoutService.meta.isBigData = true;
        expect(disclaimers[3].condition({ layoutService })).to.equal(true);
      });
    });
  });
});
