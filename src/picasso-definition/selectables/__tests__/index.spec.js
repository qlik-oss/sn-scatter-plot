// eslint-disable-next-line no-unused-vars
import * as createTap from '../tap';
import * as createRange from '../range';
import * as createLasso from '../lasso';
import createSelectables from '..';

describe('selectables', () => {
  let sandbox;
  let create;
  let models;
  let actions;
  let scales;
  let flags;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    models = 'models';
    actions = 'actions';
    scales = 'scales';
    flags = 'flags';
    chart = 'chart';
    sandbox.stub(createTap, 'default');
    sandbox.stub(createRange, 'default');
    sandbox.stub(createLasso, 'default');
    create = () => createSelectables({ models, actions, scales, flags, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return no components or gestures if tap, range, and lasso are empty', () => {
    expect(create()).to.deep.equal({
      components: [],
      gestures: [],
    });
  });

  it('should return correct components and gestures if tap, range, and lasso are not empty', () => {
    createTap.default
      .withArgs({ models: 'models', actions: 'actions', flags: 'flags' })
      .returns({ components: [{ key: 'tc1' }, { key: 'tc2' }], interactions: [{ key: 'ti1' }, { key: 'ti2' }] });

    createRange.default
      .withArgs({ models: 'models', actions: 'actions', scales: 'scales', chart: 'chart' })
      .returns({ components: [{ key: 'rc1' }, { key: 'rc2' }], interactions: [{ key: 'ri1' }, { key: 'ri2' }] });

    createLasso.default
      .withArgs({ models: 'models', actions: 'actions' })
      .returns({ components: [{ key: 'lc1' }, { key: 'lc2' }], interactions: [{ key: 'li1' }, { key: 'li2' }] });

    expect(create()).to.deep.equal({
      components: [{ key: 'tc1' }, { key: 'tc2' }, { key: 'rc1' }, { key: 'rc2' }, { key: 'lc1' }, { key: 'lc2' }],
      gestures: [{ key: 'ti1' }, { key: 'ti2' }, { key: 'ri1' }, { key: 'ri2' }, { key: 'li1' }, { key: 'li2' }],
    });
  });
});
