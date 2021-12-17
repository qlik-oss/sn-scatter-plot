// eslint-disable-next-line no-unused-vars
import * as KEYS from '../../../../constants/keys';
import isLocked from '../is-locked';

describe('is-locked', () => {
  let sandbox;
  let create;
  let selectionService;
  let colorService;
  let components;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    selectionService = { getIsSelectionLocked: sandbox.stub(), getIsDimensionLocked: sandbox.stub().returns(false) };
    colorService = { isSelectionLocked: sandbox.stub().returns(true) };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { LEGEND_CATEGORICAL: 'lgc' } });
    components = [{ key: 'lgc' }, {}];
    create = () => isLocked({ selectionService, colorService });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return isDimensionLocked from colorService, if the legend is categorical', () => {
    expect(create()(components)).to.equal(true);
  });

  it('should return isDimensionLocked from selectionService, if the legend is not categorical', () => {
    components = [{ key: 'not-lgc' }, {}];
    expect(create()(components)).to.equal(false);
  });
});
