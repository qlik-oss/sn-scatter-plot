import * as createPointTooltip from '../point';
import * as createHeatMapTooltip from '../heat-map-tooltip';
import createTooltips from '../index';

describe('tooltips', () => {
  let sandbox;
  let models;
  let context;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(createPointTooltip, 'default').returns({ key: 'point-tooltip' });
    sandbox.stub(createHeatMapTooltip, 'default').returns({ key: 'heat-map-tooltip' });
    create = () => createTooltips({ models, context });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create point tooltip', () => {
    create();
    expect(createPointTooltip.default.withArgs({ models, context })).to.have.been.calledOnce;
  });

  it('should create heat map tooltip', () => {
    create();
    expect(createHeatMapTooltip.default.withArgs({ context })).to.have.been.calledOnce;
  });

  it('should return correct tooltips', () => {
    expect(create()).to.deep.equal([{ key: 'point-tooltip' }, { key: 'heat-map-tooltip' }]);
  });
});
