// eslint-disable-next-line no-unused-vars
import * as stardust from '@nebula.js/stardust';
import * as useViewState from '../use-view-state';
import * as useActions from '../use-actions';
import * as configurePicasso from '../../configure-picasso';
import useCore from '../use-core';

describe('use-core', () => {
  let sandbox;
  let create;
  let flags;
  let core;
  let setCore;
  let picasso;
  let picassoInstance;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(stardust, 'useEffect');
    sandbox.stub(stardust, 'useElement');
    sandbox.stub(stardust, 'useOptions');
    sandbox.stub(stardust, 'useState');
    flags = 'flgs';
    sandbox.stub(useActions, 'default');
    useActions.default.withArgs({ flags: 'flgs' }).returns('actns');
    sandbox.stub(useViewState, 'default');
    sandbox.stub(configurePicasso, 'default');
    setCore = sandbox.stub();
    stardust.useState.returns([core, setCore]);
    useViewState.default.returns('some-view-state');
    stardust.useElement.returns({ style: { overflow: undefined } });
    chart = { destroy: sandbox.stub() };
    picassoInstance = { chart: sandbox.stub() };
    picassoInstance.chart
      .withArgs({ element: { style: { overflow: 'hidden' } }, data: [], settings: {} })
      .returns(chart);
    picasso = sandbox.stub().returns(picassoInstance);
    configurePicasso.default.returns(picasso);
    stardust.useOptions.returns({ renderer: 'svg' });
    create = () => useCore({ flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('useEffect', () => {
    let fn;
    let conditionArray;

    it('should have the second argument being an array with viewState as its only element', () => {
      create();
      conditionArray = stardust.useEffect.getCall(0).args[1];
      expect(conditionArray).to.deep.equal(['some-view-state']);
    });

    describe('function in useEffect arguments list', () => {
      it('should return undefined if viewState is undefined', () => {
        useViewState.default.returns(undefined);
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        expect(fn()).to.equal(undefined);
      });

      it('should return a function if viewState is defined, case 1: renderer is defined', () => {
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        const destroyFn = fn();
        const setCoreArgs = setCore.getCall(0).args[0];
        expect(setCoreArgs.chart).to.be.a('object');
        expect(setCoreArgs.actions).to.equal('actns');
        expect(setCoreArgs.viewState).to.equal('some-view-state');
        expect(setCoreArgs.picassoInstance).to.be.a('object');
        expect(setCoreArgs.picasso).to.be.a('function');
        destroyFn();
        expect(chart.destroy).to.have.been.calledOnce;
      });

      it('should return a function if viewState is defined, case 2: renderer is undefined', () => {
        stardust.useOptions.returns({ renderer: undefined });
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        const setCoreArgs = setCore.getCall(0).args[0];
        expect(setCoreArgs.picassoInstance).to.be.a('object');
      });
    });
  });
});
