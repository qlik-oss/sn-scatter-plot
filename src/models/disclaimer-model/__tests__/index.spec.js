// eslint-disable-next-line no-unused-vars
import createDisclaimerModel from '..';
import * as resolveDisclaimer from '../resolve';

describe('disclaimer-model', () => {
  let sandbox;
  let create;
  let layoutService;
  let flags;
  let api;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(resolveDisclaimer, 'default');
    create = () => createDisclaimerModel({ layoutService, flags });
    api = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('return object', () => {
    it('should have correct key', () => {
      expect(api).to.have.all.keys(['query']);
    });

    describe('query', () => {
      it('should have all keys', () => {
        expect(api.query).to.have.all.keys(['getHasSuppressingDisclaimer', 'getDisclaimer']);
      });

      describe('getHasSuppressingDisclaimer', () => {
        it('should return true if there is suppressing disclaimer', () => {
          resolveDisclaimer.default.returns({ key: 'disclaimer-2', alignment: 'center' });
          api = create();
          expect(api.query.getHasSuppressingDisclaimer()).to.equal(true);
        });

        it('should return false if there is no disclaimer', () => {
          resolveDisclaimer.default.returns(undefined);
          api = create();
          expect(api.query.getHasSuppressingDisclaimer()).to.equal(false);
        });

        it('should return false if there is no suppressing disclaimer', () => {
          resolveDisclaimer.default.returns({ key: 'disclaimer-2', alignment: 'bottom' });
          api = create();
          expect(api.query.getHasSuppressingDisclaimer()).to.equal(false);
        });
      });

      describe('getDisclaimer', () => {
        it('should return correct disclaimer if there is suppressing disclaimer', () => {
          resolveDisclaimer.default.returns({ key: 'disclaimer-2', alignment: 'center' });
          api = create();
          expect(api.query.getDisclaimer()).to.deep.equal({ key: 'disclaimer-2', alignment: 'center' });
        });
      });
    });
  });
});
