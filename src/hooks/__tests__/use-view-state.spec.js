// eslint-disable-next-line no-unused-vars
import stardust from '@nebula.js/stardust';
import * as chartModules from 'qlik-chart-modules';
import useViewState from '../use-view-state';

describe('use-view-state', () => {
  let sandbox;
  let create;
  let viewState;
  let setViewState;
  let viewCache;
  let setViewCache;
  let fn;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewState = undefined;
    setViewState = sandbox.stub();
    setViewCache = sandbox.stub();
    sandbox.stub(stardust, 'useState');
    stardust.useState.onCall(0).returns([viewState, setViewState]);
    stardust.useState.onCall(1).returns([viewCache, setViewCache]);
    sandbox.stub(stardust, 'useEffect');
    sandbox.stub(chartModules, 'storage');
    sandbox.stub(chartModules, 'cache');
    create = () => useViewState();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('useEffect', () => {
    describe('the function in argument list', () => {
      it('should call setViewState', () => {
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        expect(chartModules.storage).to.have.been.calledOnce;
        expect(setViewState).to.have.been.calledOnce;
      });
    });
  });
});
