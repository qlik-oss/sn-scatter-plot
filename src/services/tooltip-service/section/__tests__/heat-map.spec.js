import createHeatMapSection from '../heat-map';

describe('heat-map', () => {
  let sandbox;
  let translator;
  let nodes;
  let createAPI;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    sandbox.reset();
    translator = {
      get: sandbox.stub(),
    };
    translator.get.callsFake((v) => `${v}-translated`);
    nodes = [
      {
        data: {
          binDensity: {
            label: 'bin-density-label',
          },
        },
      },
    ];
    createAPI = {
      measure: sandbox.stub(),
    };
    createAPI.measure.returns({ key: 'measure' });
    create = () => createHeatMapSection({ translator, nodes, create: createAPI });
  });

  after(() => {
    sandbox.restore();
  });

  it('should get correct translation', () => {
    create();
    expect(translator.get.withArgs('properties.compression.density')).to.have.been.calledOnce;
  });

  it('should create measure correctly', () => {
    create();
    expect(
      createAPI.measure.withArgs({
        label: 'properties.compression.density-translated',
        value: 'bin-density-label',
      })
    ).to.have.been.calledOnce;
  });

  it('should return correct section', () => {
    expect(create()).to.deep.equal([{ key: 'measure' }]);
  });
});
