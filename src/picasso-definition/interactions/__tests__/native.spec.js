describe('native', () => {
  let sandbox;
  let createNative;
  let pointTooltip;
  let legendTooltip;
  let actions;
  let legend;
  let create;
  let e;
  let chart;
  let zoomHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    createNative = aw.mock(
      [
        [
          '**/src/constants/keys.js',
          () => ({
            COMPONENT: {
              POINT_TOOLTIP: 'tooltip',
              POINT: 'point-component',
              LEGEND_CATEGORICAL: 'legend-categorical',
              LEGEND_CAT_TOOLTIP: 'legend-cat-tooltip',
            },
          }),
        ],
      ],
      ['../native']
    )[0].default;
    legend = { key: 'legend-categorical', emit: sandbox.spy() };
    pointTooltip = {
      show: true,
      emit: sandbox.spy(),
    };
    legendTooltip = {
      show: true,
      emit: sandbox.spy(),
    };
    chart = {
      component: sandbox.stub(),
      componentsFromPoint: sandbox.stub(),
    };
    zoomHandler = {
      xScrollEnabled: sandbox.stub().returns(true),
      yScrollEnabled: sandbox.stub().returns(true),
      getPxOffsets: sandbox.stub().returns({
        x: 1,
        y: 2,
      }),
      setPxOffsets: sandbox.spy(),
    };
    chart.component.withArgs('tooltip').returns(pointTooltip);
    chart.component.withArgs('legend-cat-tooltip').returns(legendTooltip);
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
    create = () =>
      createNative({
        chart,
        actions,
        zoomHandler,
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

        it('should emit on legend if interact is enabled', () => {
          chart.componentsFromPoint.withArgs({ x: 50, y: 100 }).returns([legend]);
          create().events.wheel(e);
          expect(legend.emit).to.have.been.calledOnce;
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

        it('should not show nor hide legend tooltip if no point tooltip component', () => {
          chart.component.withArgs('legend-cat-tooltip').returns(undefined);
          create().events.mousemove(e);
          expect(legendTooltip.emit).not.to.have.been.called;
        });

        it('should not show nor hide legend tooltip if point tooltip show is false', () => {
          legendTooltip.show = false;
          create().events.mousemove(e);
          expect(legendTooltip.emit).not.to.have.been.called;
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
