import * as KEYS from '../../../../constants/keys';
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
  let navigationPanel;
  let rtl;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      getLayoutValue: sandbox.stub(),
      meta: { isSnapshot: false },
    };
    viewHandler = {
      getMeta: sandbox.stub().returns({ homeStateDataView: { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 } }),
      setDataView: sandbox.stub(),
    };
    chartModel = { query: { getViewHandler: sandbox.stub().returns(viewHandler) } };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { NAVIGATION_PANEL: 'nav-pan' } });
    sandbox.stub(move, 'default');
    sandbox.stub(zoom, 'default');
    sandbox.stub(clearMinor, 'default');
    rtl = false;
    create = () => createNavigationPanel({ layoutService, chartModel, rtl });
    navigationPanel = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if is snapshot', () => {
    layoutService.meta.isSnapshot = true;
    expect(create()).to.be.false;
  });

  describe('the returned navigation panel object', () => {
    it('should have all keys', () => {
      expect(navigationPanel).to.have.all.keys(['key', 'type', 'show', 'settings']);
    });

    it('should have correct key', () => {
      expect(navigationPanel.key).to.equal('nav-pan');
    });

    it('should have correct type', () => {
      expect(navigationPanel.type).to.equal('navigation-panel');
    });

    it('should have correct show', () => {
      layoutService.getLayoutValue.returns(true);
      navigationPanel = create();
      expect(navigationPanel.show).to.equal(true);

      layoutService.getLayoutValue.returns(false);
      navigationPanel = create();
      expect(navigationPanel.show).to.equal(false);
    });

    describe('settings', () => {
      it('should have all keys', () => {
        expect(navigationPanel.settings).to.have.all.keys(['actions', 'isDisabled', 'rtl']);
      });
      describe('actions', () => {
        it('should have all keys', () => {
          expect(navigationPanel.settings.actions).to.have.all.keys([
            'home',
            'up',
            'down',
            'left',
            'right',
            'zoomIn',
            'zoomOut',
          ]);
        });
        describe('home', () => {
          it('should set home state data view as the new data view', () => {
            navigationPanel.settings.actions.home();
            expect(viewHandler.setDataView).to.have.been.calledWithExactly({
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
            });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });

        describe('left', () => {
          it('should call move with correct parameters', () => {
            navigationPanel.settings.actions.left();
            expect(move.default).to.have.been.calledWithExactly({
              viewHandler,
              direction: 'x',
              percent: -10,
              rtl: false,
            });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });

        describe('right', () => {
          it('should call move with correct parameters', () => {
            navigationPanel.settings.actions.right();
            expect(move.default).to.have.been.calledWithExactly({
              viewHandler,
              direction: 'x',
              percent: 10,
              rtl: false,
            });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });

        describe('up', () => {
          it('should call move with correct parameters', () => {
            navigationPanel.settings.actions.up();
            expect(move.default).to.have.been.calledWithExactly({ viewHandler, direction: 'y', percent: 10 });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });

        describe('down', () => {
          it('should call move with correct parameters', () => {
            navigationPanel.settings.actions.down();
            expect(move.default).to.have.been.calledWithExactly({ viewHandler, direction: 'y', percent: -10 });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });

        describe('zoomIn', () => {
          it('should call zoom with correct parameters', () => {
            navigationPanel.settings.actions.zoomIn();
            expect(zoom.default).to.have.been.calledWithExactly({ viewHandler, buttonZoomDirection: 'in' });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });

        describe('zoomOut', () => {
          it('should call zoom with correct parameters', () => {
            navigationPanel.settings.actions.zoomOut();
            expect(zoom.default).to.have.been.calledWithExactly({ viewHandler, buttonZoomDirection: 'out' });
            expect(clearMinor.default).to.have.been.calledOnce;
          });
        });
      });

      describe('isDisabled', () => {
        describe('home', () => {
          it('should return true if the view is at home state', () => {
            viewHandler.getMeta.returns({ isHomeState: true });
            expect(navigationPanel.settings.isDisabled.home()).to.equal(true);
          });

          it('should return false if the view is not at home state', () => {
            viewHandler.getMeta.returns({ isHomeState: false });
            expect(navigationPanel.settings.isDisabled.home()).to.equal(false);
          });
        });
      });
    });
  });
});
