import * as CONSTANTS from '../../../constants/keys';
import * as createResolver from '../resolve';
import createTickModel from '..';

describe('tick-model', () => {
  let sandbox;
  let resolve;
  let layoutModel;
  let chartModel;
  let dockModel;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    resolve = sandbox.stub();
    sandbox.stub(createResolver, 'default').returns(resolve);
    layoutModel = { key: 'layout-model' };
    chartModel = { key: 'chart-model' };
    dockModel = { key: 'dock-model' };
    sandbox.stub(CONSTANTS, 'default').returns({ SCALE: { X: 'x', Y: 'y' } });
    create = () =>
      createTickModel({
        layoutModel,
        chartModel,
        dockModel,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create resolver', () => {
    create();
    expect(createResolver.default).to.have.been.calledOnceWithExactly({
      layoutModel,
      chartModel,
      dockModel,
    });
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query']);
  });

  describe('query', () => {
    it('should expose correct methods', () => {
      expect(create().query).to.have.all.keys(['getXTicks', 'getYTicks']);
    });

    describe('getXTicks', () => {
      it('should call resolve once with correct argument', () => {
        create().query.getXTicks();
        expect(resolve).to.have.been.calledOnceWithExactly('x');
      });
    });
    describe('getYTicks', () => {
      it('should call resolve once with correct argument', () => {
        create().query.getYTicks();
        expect(resolve).to.have.been.calledOnceWithExactly('y');
      });
    });
  });
});
