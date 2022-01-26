import * as KEYS from '../../../../constants/keys';
import * as NUMBERS from '../../../../constants/numbers';
import createNavigationPanel from '..';
import * as move from '../../../../view-handler/move';
import * as zoom from '../../../../view-handler/zoom';
import * as clearMinor from '../../../../utils/clear-minor';

describe('createNavigationPanel', () => {
  let sandbox;
  let layoutService;
  let chartModel;
  let viewHandler;
  let create;
  let context;
  let chart;
  let actions;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      getLayoutValue: sandbox.stub().returns(false),
      meta: { isSnapshot: false },
    };
    viewHandler = {
      getMeta: sandbox
        .stub()
        .returns({ homeStateDataView: { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 }, isHomeState: false }),
      setDataView: sandbox.stub(),
    };
    chartModel = { query: { getViewHandler: sandbox.stub().returns(viewHandler) } };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { NAVIGATION_PANEL: 'nav-pan' } });
    sandbox
      .stub(NUMBERS, 'default')
      .value({ NAVIGATION_PANEL: { BUTTON_WIDTH: 100 }, LAYOUT_MODES: { MEDIUM_NAV: { width: 10, height: 20 } } });
    sandbox.stub(move, 'default');
    sandbox.stub(zoom, 'default');
    sandbox.stub(clearMinor, 'default');
    context = { rtl: false, translator: { get: sandbox.stub() }, model: 'model', constraints: { active: false } };
    chart = { element: { clientWidth: 11, clientHeight: 21 } };
    create = () => createNavigationPanel({ layoutService, chartModel, chart, actions, context });
    create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if is snapshot', () => {
    layoutService.meta.isSnapshot = true;
    expect(create()).to.be.false;
  });

  describe('the returned buttons', () => {
    describe('UP', () => {
      it('should have correct callback', () => {
        chartModel.query.getViewHandler.returns('vh');
        create()[0].settings.callback();
        expect(move.default).to.have.been.calledWithExactly({ viewHandler: 'vh', direction: 'y', percent: 10 });
      });
    });

    describe('LEFT', () => {
      it('should have correct callback', () => {
        chartModel.query.getViewHandler.returns('vh');
        create()[1].settings.callback();
        expect(move.default).to.have.been.calledWithExactly({
          viewHandler: 'vh',
          direction: 'x',
          percent: -10,
          rtl: false,
        });
      });

      it('should have correct horizontal coordinate', () => {
        expect(create()[1].settings.presentation.horizontal).to.equal(200);
        context.rtl = true;
        expect(create()[1].settings.presentation.horizontal).to.equal(0);
      });
    });

    describe('HOME', () => {
      it('should have correct disabled function (returning false when it is not home state, not constrained, and model is defined)', () => {
        expect(create()[2].settings.disabled()).to.equal(false);
      });

      it('should have correct callback function', () => {
        create()[2].settings.callback();
        expect(viewHandler.setDataView).to.have.been.calledWithExactly({
          xAxisMin: 0,
          xAxisMax: 1,
          yAxisMin: 2,
          yAxisMax: 3,
        });
      });

      it('should have correct show function (returning false if navigation is off and the chart is at home state', () => {
        viewHandler.getMeta.returns({ isHomeState: true });
        expect(create()[2].settings.show()).to.equal(false);
      });

      it('should have correct vertical and horizontal coordinates', () => {
        layoutService.getLayoutValue.returns(true);
        expect(create()[2].settings.presentation.vertical).to.equal(100);
        expect(create()[2].settings.presentation.horizontal).to.equal(100);
      });
    });

    describe('RIGHT', () => {
      it('should have correct disabled function', () => {
        expect(create()[3].settings.disabled()).to.equal(false);
      });

      it('should have correct callback', () => {
        chartModel.query.getViewHandler.returns('vh');
        create()[3].settings.callback();
        expect(move.default).to.have.been.calledWithExactly({
          viewHandler: 'vh',
          direction: 'x',
          percent: 10,
          rtl: false,
        });
      });

      it('should have correct horizontal coordinate', () => {
        expect(create()[3].settings.presentation.horizontal).to.equal(0);
        context.rtl = true;
        expect(create()[3].settings.presentation.horizontal).to.equal(200);
      });
    });

    describe('DOWN', () => {
      it('should have correct callback', () => {
        chartModel.query.getViewHandler.returns('vh');
        create()[4].settings.callback();
        expect(move.default).to.have.been.calledWithExactly({ viewHandler: 'vh', direction: 'y', percent: -10 });
      });
    });

    describe('ZOOM_IN', () => {
      it('should have correct callback', () => {
        chartModel.query.getViewHandler.returns('vh');
        create()[5].settings.callback();
        expect(zoom.default).to.have.been.calledWithExactly({ viewHandler: 'vh', buttonZoomDirection: 'in' });
      });
    });

    describe('ZOOM_OUT', () => {
      it('should have correct callback', () => {
        chartModel.query.getViewHandler.returns('vh');
        create()[6].settings.callback();
        expect(zoom.default).to.have.been.calledWithExactly({ viewHandler: 'vh', buttonZoomDirection: 'out' });
      });
    });
  });
});
