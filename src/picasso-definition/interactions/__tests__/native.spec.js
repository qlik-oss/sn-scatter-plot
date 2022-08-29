import * as KEYS from '../../../constants/keys';
import * as zoom from '../../../view-handler/zoom';
import native from '../native';
import * as clearMinor from '../../../utils/clear-minor';
import * as isInBinValueSelection from '../../../utils/is-in-bin-value-selection';
import * as isZoomByImage from '../is-zoom-by-image';

describe('native', () => {
  let sandbox;
  let actions;
  let legend;
  let create;
  let e;
  let chart;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        POINT: 'point-component',
        LEGEND_CATEGORICAL: 'legend-categorical',
        HEAT_MAP: 'heat-map-component',
      },
    });
    legend = { key: 'legend-categorical', emit: sandbox.spy() };
    chart = {
      component: sandbox.stub(),
      componentsFromPoint: sandbox.stub(),
    };
    viewHandler = {
      xScrollEnabled: sandbox.stub().returns(true),
      yScrollEnabled: sandbox.stub().returns(true),
      getPxOffsets: sandbox.stub().returns({
        x: 1,
        y: 2,
      }),
      setPxOffsets: sandbox.spy(),
      setInteractionInProgress: sandbox.spy(),
    };
    chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point-component' }]);
    actions = {
      zoom: {
        enabled: sandbox.stub().returns(true),
      },
      interact: {
        enabled: sandbox.stub().returns(true),
      },
      tooltip: {
        enabled: sandbox.stub().returns(true),
      },
    };
    sandbox.stub(zoom, 'default');
    sandbox.stub(clearMinor, 'default');
    sandbox.stub(isInBinValueSelection, 'default').returns(false);
    sandbox.stub(isZoomByImage, 'default').returns(false);
    create = () =>
      native({
        chart,
        actions,
        viewHandler,
      });
    e = {
      preventDefault: sandbox.spy(),
      clientX: 50,
      clientY: 100,
      deltaX: 10,
      deltaY: 100,
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('definition', () => {
    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['type', 'events']);
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('native');
    });

    describe('events', () => {
      it('should have correct properties', () => {
        expect(create().events).to.have.all.keys(['wheel']);
      });

      describe('wheel', () => {
        it('should not zoom if is in bin value selection', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point-component' }]);
          isInBinValueSelection.default.returns(true);
          create().events.wheel(e);
          expect(zoom.default).not.to.have.been.called;
          expect(clearMinor.default).not.to.have.been.called;
        });

        it('should get components', () => {
          create().events.wheel(e);
          expect(chart.componentsFromPoint.withArgs({ x: 50, y: 100 })).to.have.been.called;
        });

        it('should emit on zoom if zoom is enabled to point component', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point-component' }]);
          create().events.wheel(e);
          expect(zoom.default).to.have.been.calledOnce;
          expect(clearMinor.default).to.have.been.calledOnce;
        });

        it('should not emit on zoom if zoom is not enabled to point component', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point-component' }]);
          actions.zoom.enabled.returns(false);
          create().events.wheel(e);
          expect(zoom.default).not.to.have.been.called;
        });

        it('should emit on zoom if zoom is enabled to heat map component', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'heat-map-component' }]);
          create().events.wheel(e);
          expect(zoom.default).to.have.been.calledOnce;
          expect(clearMinor.default).to.have.been.calledOnce;
        });

        it('should not emit on zoom if zoom is not enabled to heat map component', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'heat-map-component' }]);
          actions.zoom.enabled.returns(false);
          create().events.wheel(e);
          expect(zoom.default).not.to.have.been.called;
        });

        it('should emit on legend if interact is enabled, case 1: scroll to next', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([legend]);
          create().events.wheel(e);
          expect(legend.emit.withArgs('next')).to.have.been.calledOnce;
        });

        it('should emit on legend if interact is enabled, case 2: scroll to previous', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([legend]);
          e.deltaY = -100;
          create().events.wheel(e);
          expect(legend.emit.withArgs('prev')).to.have.been.calledOnce;
        });

        it('should emit on legend if interact is enabled, case 3: scroll to previous in X direction', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([legend]);
          e.deltaX = -200;
          create().events.wheel(e);
          expect(legend.emit.withArgs('prev')).to.have.been.calledOnce;
        });

        it('should not emit on legend if interact is not enabled', () => {
          actions.interact.enabled.returns(false);
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point' }, legend]);
          create().events.wheel(e);
          expect(legend.emit).not.to.have.been.called;
        });
      });
    });
  });
});
