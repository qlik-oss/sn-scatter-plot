// eslint-disable-next-line no-unused-vars
import * as stardust from '@nebula.js/stardust';
import useRender from '../use-render';

describe('use-render', () => {
  let sandbox;
  let create;
  let settings;
  let models;
  let fn;
  let conditionArray;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    settings = 'stngs';
    models = {
      chartModel: { command: { update: sandbox.stub() } },
      dockService: { meta: { chart: { size: { width: 100, height: 200 } } } },
      layoutService: { meta: { isSnapshot: undefined } },
    };
    sandbox.stub(stardust, 'useEffect');
    chart = { element: { clientWidth: 100, clientHeight: 200 } };
    create = () => useRender({ settings, models, chart });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('useEffect', () => {
    it('should have the second argument being an array with only one element: settings', () => {
      create();
      conditionArray = stardust.useEffect.getCall(0).args[1];
      expect(conditionArray).to.be.deep.equal(['stngs']);
    });

    describe('the function in the useEffect arguments list', () => {
      it('should return nothing (undefined) if settings is undefined', () => {
        settings = undefined;
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        expect(fn()).to.equal(undefined);
      });

      it('should return nothing (undefined) if chart is undefined', () => {
        chart = undefined;
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        expect(fn()).to.equal(undefined);
      });

      it('should call chart update if it is snapshot', () => {
        models.layoutService.meta.isSnapshot = true;
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        expect(models.chartModel.command.update).to.have.been.calledOnce;
      });

      it('should call chart update if it is not snapshot, and chart dock size equal chart element size', () => {
        models.layoutService.meta.isSnapshot = false;
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        expect(models.chartModel.command.update).to.have.been.calledOnce;
      });

      it('should not call chart update if it is not snapshot, and chart dock size does not equal chart element size', () => {
        models.layoutService.meta.isSnapshot = false;
        chart.element.clientWidth = 101;
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        expect(models.chartModel.command.update).to.have.not.been.called;
      });
    });
  });
});
