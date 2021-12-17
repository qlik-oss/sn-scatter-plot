// eslint-disable-next-line no-unused-vars
import resolveDisclaimer from '..';
import * as disclaimers from '../disclaimers';

describe('resolve', () => {
  let sandbox;
  let layoutService;
  let flags;
  let resolved;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(disclaimers, 'default').value([
      { key: 'disclaimer-1', condition: sandbox.stub().returns(false) },
      { key: 'disclaimer-2', condition: sandbox.stub().returns(true) },
    ]);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return resolved disclaimer correctly', () => {
    resolved = resolveDisclaimer({ layoutService, flags });
    expect(resolved.key).to.equal('disclaimer-2');
  });
});
