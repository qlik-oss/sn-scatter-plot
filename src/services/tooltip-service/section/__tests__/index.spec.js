import * as KEYS from '../../../../constants/keys';
import * as createNormal from '../normal';
import * as createHeatMap from '../heat-map';
import createSection from '..';

describe('section', () => {
  let sandbox;
  let translator;
  let measureProperties;
  let nodes;
  let dataset;
  let meta;
  let createAPI;
  let util;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        POINT: 'point',
        HEAT_MAP: 'heat-map',
      },
    }));
    sandbox.stub(createNormal, 'default');
    sandbox.stub(createHeatMap, 'default');
  });

  beforeEach(() => {
    sandbox.reset();
    createNormal.default.returns({ key: 'normal-section' });
    createHeatMap.default.returns({ key: 'heat-map-section' });
    translator = { key: 'translator' };
    measureProperties = { key: 'measure-properties' };
    nodes = { key: 'nodes' };
    dataset = { key: 'dataset' };
    meta = { triggerer: undefined };
    createAPI = { key: 'create' };
    util = { key: 'util' };
    create = () => createSection({ translator, measureProperties, nodes, dataset, meta, create: createAPI, util });
  });

  after(() => {
    sandbox.restore();
  });

  it('should create normal section by default', () => {
    meta.triggerer = undefined;
    create();
    expect(
      createNormal.default.withArgs({
        measureProperties,
        nodes,
        dataset,
        create: createAPI,
        util,
      })
    ).to.have.been.calledOnce;
  });

  it('should return normal section by default', () => {
    meta.triggerer = undefined;
    expect(create()).to.deep.equal({ key: 'normal-section' });
  });

  it('should create normal section when triggerer is point component', () => {
    meta.triggerer = 'point';
    create();
    expect(
      createNormal.default.withArgs({
        measureProperties,
        nodes,
        dataset,
        create: createAPI,
        util,
      })
    ).to.have.been.calledOnce;
  });

  it('should return normal section when triggerer is point component', () => {
    meta.triggerer = 'point';
    expect(create()).to.deep.equal({ key: 'normal-section' });
  });

  it('should create heat-map section when triggerer is heat-map component', () => {
    meta.triggerer = 'heat-map';
    create();
    expect(
      createHeatMap.default.withArgs({
        translator,
        nodes,
        create: createAPI,
      })
    ).to.have.been.calledOnce;
  });

  it('should return heat-map section when triggerer is heat-map component', () => {
    meta.triggerer = 'heat-map';
    expect(create()).to.deep.equal({ key: 'heat-map-section' });
  });
});
