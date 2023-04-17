// eslint-disable-next-line no-unused-vars
import stardust from '@nebula.js/stardust';
import useRender from '../use-render';

describe('use-render', () => {
  let sandbox;
  let create;
  let settings;
  let models;
  let fn;
  let conditionArray;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    settings = 'stngs';
    models = {
      chartModel: { command: { update: sandbox.stub().resolves(undefined) } },
    };
    sandbox.stub(stardust, 'usePromise').returns([undefined, undefined]);
    create = () => useRender({ settings, models });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('usePromise', () => {
    it('should have the second argument being an array with only one element: settings', () => {
      create();
      conditionArray = stardust.usePromise.getCall(0).args[1];
      expect(conditionArray).to.be.deep.equal(['stngs']);
    });

    describe('the function in the usePromise arguments list', () => {
      it('should return nothing (undefined) if settings is undefined', () => {
        settings = undefined;
        create();
        fn = stardust.usePromise.getCall(0).args[0];
        const promise = fn();
        promise.then((res) => {
          expect(res).to.equal(undefined);
        });
        // expect(fn()).to.equal(undefined);
      });

      it('should call chart update if settings are defined', () => {
        create();
        fn = stardust.usePromise.getCall(0).args[0];
        const promise = fn();
        promise.then(() => {
          expect(models.chartModel.command.update).to.have.been.calledOnce;
        });
      });
    });
  });
});
