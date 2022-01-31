import * as KEYS from '../../../constants/keys';
import * as customTooltipNodes from '../../../custom-tooltip/picasso-definitions/nodes';
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
    sandbox.stub(customTooltipNodes.default, 'getNode');
    customTooltipNodes.default.getNode
      .withArgs({ key: 'layout' }, { dimensionCount: 1 })
      .returns({ key: 'custom-tooltip-attr-exps' });
    layoutService = {
      getLayout: () => ({ key: 'layout' }),
      meta: { hasSizeMeasure: true },
    };
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
              customTooltipAttrExps: { key: 'custom-tooltip-attr-exps' },
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
