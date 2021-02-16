import * as objectDefinition from '../object-definition';
import * as dataDefinition from '../data-definition';
import createQae from '../index';

describe('qae', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(objectDefinition, 'default').returns({ key: 'object-definition' });
    sandbox.stub(dataDefinition, 'default').returns({ key: 'data-definition' });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create object definition', () => {
    const flags = { key: 'flags' };
    createQae(flags);
    expect(objectDefinition.default.withArgs(flags)).to.have.been.calledOnce;
  });

  it('should return correct qae definition', () => {
    expect(createQae({})).to.deep.equal({
      properties: { key: 'object-definition' },
      data: {
        targets: [
          {
            path: '/qHyperCubeDef',
            key: 'data-definition',
          },
        ],
      },
    });
  });
});
