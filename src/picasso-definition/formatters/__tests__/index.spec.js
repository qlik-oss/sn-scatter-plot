// eslint-disable-next-line no-unused-vars
import * as KEYS from '../../../constants/keys';
import createFormatters from '..';

describe('createFormatters', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      FORMATTER: { X: 'fmt-x', Y: 'fmt-y' },
      FIELDS: { X: 'f-x', Y: 'f-y' },
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct formatters', () => {
    expect(createFormatters()).to.deep.equal({
      'fmt-x': { data: { fields: ['f-x'] } },
      'fmt-y': { data: { fields: ['f-y'] } },
    });
  });
});
