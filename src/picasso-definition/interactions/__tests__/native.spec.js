import * as KEYS from '../../../constants/keys';
import * as zoom from '../../../utils/math/zoom';
import native from '../native';

describe('native', () => {
  let sandbox;
  let pointTooltip;
  let legendTooltip;
  let heatMapTooltip;
  let actions;
  let legend;
  let create;
  let e;
  let chart;
  let viewHandler;
  let chartModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        POINT_TOOLTIP: 'tooltip',
        POINT: 'point-component',
        LEGEND_CATEGORICAL: 'legend-categorical',
        LEGEND_CAT_TOOLTIP: 'legend-cat-tooltip',
        HEAT_MAP: 'heat-map-component',
        HEAT_MAP_TOOLTIP: 'heat-map-tooltip',
      },
    });
    legend = { key: 'legend-categorical', emit: sandbox.spy() };
    pointTooltip = {
      show: true,
      emit: sandbox.spy(),
    };
    legendTooltip = {
      show: true,
      emit: sandbox.spy(),
    };
    heatMapTooltip = {
      show: true,
      emit: sandbox.spy(),
    };
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
    };
    chartModel = {};
    chart.component.withArgs('tooltip').returns(pointTooltip);
    chart.component.withArgs('legend-cat-tooltip').returns(legendTooltip);
    chart.component.withArgs('heat-map-tooltip').returns(heatMapTooltip);
    chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'tooltip' }]);
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
    create = () =>
      native({
        chart,
        actions,
        viewHandler,
        chartModel,
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
        expect(create().events).to.have.all.keys(['wheel', 'mousemove', 'mouseup', 'mouseleave']);
      });

      describe('wheel', () => {
        it('should get components', () => {
          create().events.wheel(e);
          expect(chart.componentsFromPoint.withArgs({ x: 50, y: 100 })).to.have.been.called;
        });

        it('should emit on zoom if zoom is enabled to point component', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point-component' }]);
          create().events.wheel(e);
          expect(zoom.default).to.have.been.calledOnce;
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

        it('should not hide point tooltip if exists and is not shown', () => {
          pointTooltip.show = false;
          create().events.wheel(e);
          expect(pointTooltip.emit).not.to.have.been.called;
        });

        it('should hide point tooltip if exists and is shown', () => {
          create().events.wheel(e);
          expect(pointTooltip.emit.withArgs('hide')).to.have.been.calledOnce;
        });

        it('should not hide legend tooltip if exists and is not shown', () => {
          legendTooltip.show = false;
          create().events.wheel(e);
          expect(legendTooltip.emit).not.to.have.been.called;
        });

        it('should hide legend tooltip if exists and is shown', () => {
          create().events.wheel(e);
          expect(legendTooltip.emit.withArgs('hide')).to.have.been.calledOnce;
        });

        it('should not hide heat map tooltip if exists and is not shown', () => {
          heatMapTooltip.show = false;
          create().events.wheel(e);
          expect(heatMapTooltip.emit).not.to.have.been.called;
        });

        it('should hide heat map tooltip if exists and is shown', () => {
          create().events.wheel(e);
          expect(heatMapTooltip.emit.withArgs('hide')).to.have.been.calledOnce;
        });
      });

      describe('mousemove', () => {
        beforeEach(() => {
          chart.componentsFromPoint
            .withArgs({ x: 50, y: 100 })
            .returns([{ key: 'component-1' }, { key: 'component-2' }, legend]);
        });

        it('should get components from point', () => {
          create().events.mousemove(e);
          expect(
            chart.componentsFromPoint.withArgs({
              x: 50,
              y: 100,
            })
          ).to.have.been.calledOnce;
        });

        it('should not get any component if tooltip action not enabled', () => {
          actions.tooltip.enabled.returns(false);
          create().events.mousemove(e);
          expect(chart.component).not.to.have.been.called;
        });

        it('should not show nor hide point tooltip if no point tooltip component', () => {
          chart.component.withArgs('tooltip').returns(undefined);
          create().events.mousemove(e);
          expect(pointTooltip.emit).not.to.have.been.called;
        });

        it('should not show nor hide point tooltip if point tooltip show is false', () => {
          pointTooltip.show = false;
          create().events.mousemove(e);
          expect(pointTooltip.emit).not.to.have.been.called;
        });

        it('should show point tooltip if target is point component', () => {
          pointTooltip.show = true;
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'point-component' }]);
          create().events.mousemove(e);
          expect(pointTooltip.emit.withArgs('show', e)).to.have.been.called;
        });

        it('should not show nor hide legend tooltip if no legend tooltip component', () => {
          chart.component.withArgs('legend-cat-tooltip').returns(undefined);
          create().events.mousemove(e);
          expect(legendTooltip.emit).not.to.have.been.called;
        });

        it('should not show nor hide legend tooltip if legend tooltip show is false', () => {
          legendTooltip.show = false;
          create().events.mousemove(e);
          expect(legendTooltip.emit).not.to.have.been.called;
        });

        it('should not show nor hide heat map tooltip if no heat map tooltip component', () => {
          chart.component.withArgs('heat-map-tooltip').returns(undefined);
          create().events.mousemove(e);
          expect(heatMapTooltip.emit).not.to.have.been.called;
        });

        it('should not show nor hide heat map tooltip if heat map tooltip show is false', () => {
          heatMapTooltip.show = false;
          create().events.mousemove(e);
          expect(heatMapTooltip.emit).not.to.have.been.called;
        });

        it('should show heat map tooltip if target is heat map component', () => {
          pointTooltip.show = true;
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([{ key: 'heat-map-component' }]);
          create().events.mousemove(e);
          expect(heatMapTooltip.emit.withArgs('show', e)).to.have.been.called;
        });
      });

      describe('mouseup', () => {
        it('should work when tooltips do not exist', () => {
          chart.component.returns(undefined);
          create().events.mouseup(e);
        });

        it('should not call mouseup when event not equals to 2', () => {
          e.button = 1;
          create().events.mouseup(e);
          expect(pointTooltip.emit).not.to.have.been.called;
          expect(legendTooltip.emit).not.to.have.been.called;
        });

        it('should call mouseup when event equals to 2', () => {
          e.button = 2;
          create().events.mouseup(e);
          expect(pointTooltip.emit).to.have.been.called;
          expect(legendTooltip.emit).to.have.been.called;
        });
      });

      describe('mouseleave', () => {
        it('should call pointTooltip', () => {
          create().events.mouseleave();
          expect(pointTooltip.emit).to.have.been.called;
          expect(legendTooltip.emit).to.have.been.called;
        });
      });
    });
  });
});
