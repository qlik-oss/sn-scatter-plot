import createXaxis from '..';

describe('x-axis', () => {
  let sandbox;
  let context;
  let layout;
  let layoutModel;
  let dockModel;
  let themeModel;
  let axis;
  let gridLine;
  const scales = {
    X: 'x',
    Y: 'y',
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    context = {
      rtl: false,
      theme: {
        getStyle: sandbox.spy(),
      },
    };
    dockModel = {
      chartSize: {
        width: 700,
        height: 600,
      },
      x: {
        dock: 'bottom',
      },
      y: {
        dock: 'left',
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
    layoutModel = {
      getLayout: () => layout,
      getLayoutValue: sandbox.stub(),
      getHyperCubeValue: sandbox.stub(),
    };
    gridLine = {
      auto: true,
      spacing: 1,
    };
    layoutModel.getLayoutValue.withArgs('gridLine', {}).returns(gridLine);
    const style = {
      axis: {
        label: {
          name: {
            color: '#595959',
            fontFamily: "'Source Sans Pro', 'Arial', 'sans-serif'",
            fontSize: '13px',
          },
        },
        line: {
          major: { color: '#595959' },
          minor: { color: '#595959' },
        },
      },
    };
    themeModel = {
      query: {
        getStyle: () => style,
      },
    };
    axis = createXaxis({
      context,
      layoutModel,
      dockModel,
      themeModel,
    });
  });

  describe('settings', () => {
    it('should have correct scale', () => {
      expect(axis.scale).to.equal(scales.X);
    });

    it('should have correct show property for labels', () => {
      expect(axis.settings.labels.show).to.equal(true);
      layout.xAxis.show = 'title';
      axis = createXaxis({ context, layoutModel, dockModel, themeModel });
      expect(axis.settings.labels.show).to.equal(false);
    });

    it('should have correct font size property for labels', () => {
      const { fontSize } = themeModel.query.getStyle().axis.label.name;
      expect(axis.settings.labels.fontSize).to.equal(fontSize);
    });

    it('should have correct show property for line', () => {
      expect(axis.settings.line.show).to.equal(false);
      gridLine = {
        auto: false,
        spacing: 0,
      };
      layoutModel.getLayoutValue.withArgs('gridLine', {}).returns(gridLine);
      axis = createXaxis({ context, layoutModel, dockModel, themeModel });
      expect(axis.settings.line.show).to.equal(true);
    });
  });
});
