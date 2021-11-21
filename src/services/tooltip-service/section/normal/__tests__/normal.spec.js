import * as getMeasureValue from '../measure-value';
import createNormalSection from '..';

describe('normal', () => {
  let sandbox;
  let measureProperties;
  let nodes;
  let dataset;
  let createAPI;
  let util;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(getMeasureValue, 'default');
  });

  beforeEach(() => {
    sandbox.reset();
    getMeasureValue.default.callsFake((args) => `measure-value-${args.data.value}`);
    measureProperties = ['x', 'y'];
    nodes = [
      {
        data: {
          label: '1',
          value: 1,
          x: {
            value: '1-x',
            source: {
              key: '1-x-source-key',
              field: '1-x-source-field',
            },
          },
          y: {
            value: '1-y',
            source: {
              key: '1-y-source-key',
              field: '1-y-source-field',
            },
          },
        },
      },
      {
        data: {
          label: '2',
          value: 2,
          x: {
            value: '2-x',
            source: {
              key: '2-x-source-key',
              field: '2-x-source-field',
            },
          },
          y: {
            value: '2-y',
            source: {
              key: '2-y-source-key',
              field: '2-y-source-field',
            },
          },
        },
      },
    ];
    dataset = { key: 'dataset' };
    createAPI = {
      text: sandbox.stub(),
      color: sandbox.stub(),
      measure: sandbox.stub(),
    };
    createAPI.text.callsFake((args) => ({
      type: 'text',
      value: args.value,
      style: args.style,
    }));
    createAPI.color.callsFake((args) => ({
      type: 'color',
      nodes: args.nodes,
      property: args.property,
    }));
    createAPI.measure.callsFake((args) => ({
      type: 'measure',
      label: args.label,
      value: args.value,
    }));
    util = {
      dataset: {
        title: sandbox.stub(),
      },
    };
    util.dataset.title.callsFake((key, field) => `title-${key}-${field}`);
    create = () => createNormalSection({ measureProperties, nodes, dataset, create: createAPI, util });
  });

  after(() => {
    sandbox.restore();
  });

  it('should create header text correctly', () => {
    create();
    expect(createAPI.text.callCount).to.equal(1);
    expect(
      createAPI.text.withArgs({
        value: '1',
        style: {
          bold: true,
        },
      })
    ).to.have.been.calledOnce;
  });

  it('should create color correctly', () => {
    create();
    expect(createAPI.color.callCount).to.equal(1);
    expect(
      createAPI.color.withArgs({
        nodes,
        property: 'color',
      })
    ).to.have.been.calledOnce;
  });

  it('should get dataset field title for each measure property for each node', () => {
    create();
    expect(util.dataset.title.callCount).to.equal(4);
    expect(util.dataset.title.withArgs('1-x-source-key', '1-x-source-field')).to.have.been.calledOnce;
    expect(util.dataset.title.withArgs('1-y-source-key', '1-y-source-field')).to.have.been.calledOnce;
    expect(util.dataset.title.withArgs('2-x-source-key', '2-x-source-field')).to.have.been.calledOnce;
    expect(util.dataset.title.withArgs('2-y-source-key', '2-y-source-field')).to.have.been.calledOnce;
  });

  it('should get measure value for each measure property for each node', () => {
    create();
    expect(getMeasureValue.default.callCount).to.equal(4);
    expect(getMeasureValue.default.withArgs({ dataset, data: nodes[0].data.x })).to.have.been.calledOnce;
    expect(getMeasureValue.default.withArgs({ dataset, data: nodes[0].data.y })).to.have.been.calledOnce;
    expect(getMeasureValue.default.withArgs({ dataset, data: nodes[1].data.x })).to.have.been.calledOnce;
    expect(getMeasureValue.default.withArgs({ dataset, data: nodes[1].data.y })).to.have.been.calledOnce;
  });

  it('should create measures correctly', () => {
    create();
    expect(createAPI.measure.callCount).to.equal(4);
    expect(createAPI.measure.withArgs({ label: 'title-1-x-source-key-1-x-source-field', value: 'measure-value-1-x' }))
      .to.have.been.calledOnce;
    expect(createAPI.measure.withArgs({ label: 'title-1-y-source-key-1-y-source-field', value: 'measure-value-1-y' }))
      .to.have.been.calledOnce;
    expect(createAPI.measure.withArgs({ label: 'title-2-x-source-key-2-x-source-field', value: 'measure-value-2-x' }))
      .to.have.been.calledOnce;
    expect(createAPI.measure.withArgs({ label: 'title-2-y-source-key-2-y-source-field', value: 'measure-value-2-y' }))
      .to.have.been.calledOnce;
  });

  it('should return correct section', () => {
    expect(create()).to.deep.equal([
      {
        type: 'text',
        value: '1',
        style: {
          bold: true,
        },
      },
      {
        type: 'color',
        nodes,
        property: 'color',
      },
      {
        type: 'measure',
        label: 'title-1-x-source-key-1-x-source-field',
        value: 'measure-value-1-x',
      },
      {
        type: 'measure',
        label: 'title-1-y-source-key-1-y-source-field',
        value: 'measure-value-1-y',
      },
      {
        type: 'measure',
        label: 'title-2-x-source-key-2-x-source-field',
        value: 'measure-value-2-x',
      },
      {
        type: 'measure',
        label: 'title-2-y-source-key-2-y-source-field',
        value: 'measure-value-2-y',
      },
    ]);
  });
});
