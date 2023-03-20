import createAxes from '../index';
import NUMBERS from '../../../../constants/numbers';

describe('axes', () => {
  let sandbox;
  let layout;
  let layoutService;
  let dockService;
  let axes;
  let gridLine;
  let themeService;
  let viewHandler;
  let isHomeState;
  let chartModel;
  let styleModel;
  let models;
  const scales = {
    X: 'x',
    Y: 'y',
  };
  let animationsEnabled;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dockService = {
      meta: {
        chart: {
          size: {
            width: 700,
            height: 600,
          },
        },
        x: {
          dock: 'bottom',
        },
        y: {
          dock: 'left',
        },
      },
    };
    layout = {
      xAxis: {
        show: 'all',
        label: 'auto',
      },
      yAxis: {
        show: 'all',
      },
    };
    layoutService = {
      getLayout: () => layout,
      getLayoutValue: sandbox.stub(),
    };
    gridLine = {
      auto: true,
      spacing: 1,
    };
    layoutService.getLayoutValue.withArgs('gridLine', {}).returns(gridLine);
    const style = {
      axis: {
        line: {
          major: { color: '#595959' },
          minor: { color: '#595959' },
        },
      },
    };
    themeService = { getStyles: () => style };
    styleModel = {
      query: {
        axis: {
          label: {
            getStyle: sandbox.stub().returns({
              fill: '#595959',
              fontFamily: "'Source Sans Pro', 'Arial', 'sans-serif'",
              fontSize: '13px',
            }),
          },
        },
      },
    };
    isHomeState = false;
    viewHandler = { getMeta: sandbox.stub().returns(isHomeState) };
    chartModel = {
      query: {
        getViewHandler: () => viewHandler,
      },
    };
    models = { layoutService, dockService, themeService, chartModel, styleModel };
    animationsEnabled = () => true;
    axes = createAxes({ models, animationsEnabled });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('component', () => {
    it('should create two axes', () => {
      expect(axes.length).to.equal(2);
      expect(axes[0].type).to.equal('axis');
      expect(axes[1].type).to.equal('axis');
    });

    it('should have axis definition false when layout axis undefined', () => {
      layout.xAxis = undefined;
      layout.yAxis = undefined;
      axes = createAxes({ models, animationsEnabled });
      expect(axes).to.deep.equal([false, false]);
    });

    it('should have axis definition false when axis show is none', () => {
      layout.xAxis.show = 'none';
      layout.yAxis.show = 'none';
      axes = createAxes({ models, animationsEnabled });
      expect(axes).to.deep.equal([false, false]);
    });

    it('should have correct scale', () => {
      expect(axes[0].scale).to.equal(scales.X);
      expect(axes[1].scale).to.equal(scales.Y);
    });

    it('should have correct layout', () => {
      expect(axes[0].layout.dock).to.equal(dockService.meta.x.dock);
      expect(axes[1].layout.dock).to.equal(dockService.meta.y.dock);
    });
  });

  describe('settings', () => {
    it('should have correct show property for labels', () => {
      expect(axes[0].settings.labels.show).to.equal(true);
      expect(axes[1].settings.labels.show).to.equal(true);
      layout.yAxis.show = 'title';
      layout.xAxis.show = 'title';
      axes = createAxes({ models, animationsEnabled });
      expect(axes[0].settings.labels.show).to.equal(false);
      expect(axes[1].settings.labels.show).to.equal(false);
    });

    it('should have correct font size property for labels', () => {
      const { fontSize } = styleModel.query.axis.label.getStyle();
      expect(axes[0].settings.labels.fontSize).to.equal(fontSize);
    });

    it('should have correct paddingEnd', () => {
      layout.yAxis.show = 'title';
      expect(axes[1].settings.paddingEnd()).to.equal(0);
      layout.yAxis.show = 'all';
      isHomeState = true;
      const yAxis = createAxes({ models, animationsEnabled })[1];
      expect(yAxis.settings.paddingEnd()).to.equal(NUMBERS.AXIS.Y.PADDING.END);
    });
  });

  describe('animations for x axis', () => {
    describe('enabled', () => {
      it('should be true if animation is enabled', () => {
        expect(axes[0].animations.enabled()).to.equal(true);
      });

      it('should be false if animation is not enabled in chartModel', () => {
        animationsEnabled = () => false;
        axes = createAxes({ models, animationsEnabled });
        expect(axes[0].animations.enabled()).to.equal(false);
      });
    });

    describe('trackBy', () => {
      it('should be return correct IDs', () => {
        let node;
        let i = 0;
        expect(axes[0].animations.trackBy(node, i)).to.equal('axis');
        node = { type: 'text', tickValue: 1000 };
        i = 1;
        expect(axes[0].animations.trackBy(node, i)).to.equal('label: 1000');
        node = { tickValue: 1000 };
        expect(axes[0].animations.trackBy(node, i)).to.equal('mark: 1000');
      });
    });

    describe('compensateForLayoutChanges', () => {
      const currentNodes = [{ x1: 10, x2: 110, y1: 0, y2: 0 }];
      let currentRect = { width: 100 };
      let previousRect = { width: 100 };
      it('should not adjust axis if the rect does not change', () => {
        axes[0].animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 10, x2: 110, y1: 0, y2: 0 }]);
      });

      it('should adjust axis correctly if the rect shifts 5px to left and increases 10px in width', () => {
        currentRect = { width: 110, x: 5 };
        previousRect = { width: 100, x: 10 };
        axes[0].animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 5, x2: 115, y1: 0, y2: 0 }]);
      });
    });
  });

  describe('animations for y axis', () => {
    describe('enabled', () => {
      it('should be true if animation is enabled in chartModel', () => {
        expect(axes[1].animations.enabled()).to.equal(true);
      });

      it('should be true if animation is enabled in chartModel', () => {
        animationsEnabled = () => false;
        axes = createAxes({ models, animationsEnabled });
        expect(axes[1].animations.enabled()).to.equal(false);
      });
    });

    describe('trackBy', () => {
      it('should be return correct IDs', () => {
        let node;
        let i = 0;
        expect(axes[1].animations.trackBy(node, i)).to.equal('axis');
        node = { type: 'text', tickValue: 1000 };
        i = 1;
        expect(axes[1].animations.trackBy(node, i)).to.equal('label: 1000');
        node = { tickValue: 1000 };
        expect(axes[1].animations.trackBy(node, i)).to.equal('mark: 1000');
      });
    });

    describe('compensateForLayoutChanges', () => {
      let currentNodes = [{ x1: 20, x2: 20, y1: 0, y2: 100 }];
      let currentRect = { width: 20 };
      let previousRect = { width: 20 };
      it('should not adjust axis if the rect does not change', () => {
        axes[1].animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([{ x1: 20, x2: 20, y1: 0, y2: 100 }]);
      });

      it('should adjust axis and axis label correctly if the rect decrease 10px when it is docked to the left', () => {
        currentRect = { width: 10, height: 100, y: 0 };
        previousRect = { width: 20, height: 100 };
        currentNodes = [
          { type: 'line', x1: 20, x2: 20, y1: 0, y2: 100 },
          { type: 'text', x: 20, y: 50 },
        ];
        axes[1].animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
        expect(currentNodes).to.deep.equal([
          { type: 'line', x1: 10, x2: 10, y1: 0, y2: 100 },
          { type: 'text', x: 10, y: 50 },
        ]);
      });
    });
  });
});
