// eslint-disable-next-line no-unused-vars
import * as KEYS from '../../../constants/keys';
import createCollections from '..';

describe('createCollections', () => {
  let sandbox;
  let create;
  let layoutService;
  let colorService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox
      .stub(KEYS, 'default')
      .value({ COLLECTION: { MAIN: 'main-collection' }, FIELDS: { DIM: 'dimension', X: 'x', Y: 'y', SIZE: 'size' } });
    layoutService = { meta: { hasSizeMeasure: true } };
    colorService = { getDatumProps: sandbox.stub() };
    colorService.getDatumProps.withArgs(0).returns({ prop0: 'value-0', prop1: 'value-1' });
    create = () => createCollections({ layoutService, colorService });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct collection', () => {
    const collectionDefinition = create();
    expect(collectionDefinition).to.deep.equal([
      {
        key: 'main-collection',
        data: {
          extract: {
            field: 'dimension',
            props: {
              x: { field: 'x' },
              y: { field: 'y' },
              size: { field: 'size' },
              selectionDimension: {
                field: 'dimension',
              },
              prop0: 'value-0',
              prop1: 'value-1',
            },
          },
        },
      },
    ]);
  });

  it('should return correct collection, when size is not defined', () => {
    layoutService.meta.hasSizeMeasure = false;
    const collectionDefinition = create();
    expect(collectionDefinition[0].data.extract.props.size).to.equal(undefined);
  });
});
