import * as CONSTANTS from '../../../../constants/keys';
import * as getTicks from '../ticks';
import createResolver from '..';

describe('resolve', () => {
  let sandbox;
  let layoutModel;
  let chartModel;
  let dockModel;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    layoutModel = { key: 'layout-model' };
    chartModel = {
      query: {
        getViewState: sandbox.stub(),
      },
    };
    sandbox.stub(getTicks, 'default');

    create = () =>
      createResolver({
        layoutModel,
        chartModel,
        dockModel,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    sandbox.stub(CONSTANTS, 'default').returns({ SCALE: { X: 'x', Y: 'y' } });
    dockModel = {
      chartSize: {
        width: 201,
        height: 304,
      },
    };
    chartModel.query.getViewState.returns({
      get: sandbox.stub().withArgs('zoom').returns({
        xAxisMin: 0,
        xAxisMax: 100,
        yAxisMin: -200,
        yAxisMax: -100,
      }),
    });
  });

  after(() => {
    sandbox.restore();
  });

  it('should return a resolve function', () => {
    expect(create()).to.be.a('function');
  });

  it('should call "getTicks" with arguments of X when the scale is "x"', () => {
    const resolve = create();
    resolve('x');
    expect(
      getTicks.default.withArgs({
        layoutModel,
        size: 201,
        min: 0,
        max: 100,
      })
    ).to.have.been.calledOnce;
  });

  it('should call "getTicks" with arguments of Y when the scale is "y"', () => {
    const resolve = create();
    resolve('y');
    expect(
      getTicks.default.withArgs({
        layoutModel,
        size: 304,
        min: -200,
        max: -100,
      })
    ).to.have.been.calledOnce;
  });
});
