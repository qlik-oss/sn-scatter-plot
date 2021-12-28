// eslint-disable-next-line no-unused-vars
import * as stardust from '@nebula.js/stardust';
import * as KEYS from '../constants/keys';
import snapshot from '../snapshot';

describe('snapshot', () => {
  let sandbox;
  let create;
  let core;
  let models;
  let viewState;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(stardust, 'onTakeSnapshot');
    sandbox.stub(stardust, 'useImperativeHandle');
    viewState = {
      get: sandbox.stub().returns({
        xAxisMin: 0,
        xAxisMax: 1,
        yAxisMin: 2,
        yAxisMax: 3,
      }),
    };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { LEGEND_CATEGORICAL: 'lc' } });
    core = { chart: { component: sandbox.stub() } };
    core.chart.component.withArgs('lc').returns({ _DO_NOT_USE_getInfo: sandbox.stub().returns({ offset: 100 }) });
    create = () => snapshot({ core, models });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('useImperativeHandle', () => {
    describe('argument function', () => {
      let fn;
      describe('return object', () => {
        describe('getViewState', () => {
          it('should return undefined if models is undefine', () => {
            create();
            fn = stardust.useImperativeHandle.getCall(0).args[0];
            expect(fn().getViewState()).to.equal(undefined);
          });

          it('should return correct view state, when legend _DO_NOT_USE_getInfo returns an offset', () => {
            models = {
              chartModel: {
                query: {
                  getViewState: sandbox.stub().returns(viewState),
                },
              },
            };
            create();
            fn = stardust.useImperativeHandle.getCall(0).args[0];
            expect(fn().getViewState()).to.deep.equal({
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
              legendScrollOffset: 100,
            });
          });
        });
      });
    });
  });
});
