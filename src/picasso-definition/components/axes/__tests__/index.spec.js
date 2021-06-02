import createAxes from '../index';

describe('axes', () => {
  let sandbox;
  let layout;
  let layoutService;
  let dockService;
  let axes;
  let gridLine;
  let themeService;
  let viewHandler;
  let chartModel;
  let models;
  let flags;
  const scales = {
    X: 'x',
    Y: 'y',
  };

  before(() => {
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
    themeService = { getStyles: () => style };
    viewHandler = {
      getMeta: () => {
        true;
      },
    };
    chartModel = {
      query: {
        getViewHandler: () => viewHandler,
      },
    };
    models = { layoutService, dockService, themeService, chartModel };
    flags = { isEnabled: sandbox.stub().returns(true) };
  });

  it('should create two axes', () => {
    axes = createAxes({ models, flags });
    expect(axes.length).to.equal(2);
    expect(axes[0].type).to.equal('axis');
    expect(axes[1].type).to.equal('axis');
  });

  it('should have correct scale', () => {
    expect(axes[0].scale).to.equal(scales.X);
    expect(axes[1].scale).to.equal(scales.Y);
  });

  it('should have correct layout', () => {
    expect(axes[0].layout.dock).to.equal(dockService.meta.x.dock);
    expect(axes[1].layout.dock).to.equal(dockService.meta.y.dock);
  });

  describe('settings', () => {
    it('should have correct show property for labels', () => {
      expect(axes[0].settings.labels.show).to.equal(true);
      expect(axes[1].settings.labels.show).to.equal(true);
      layout.yAxis.show = 'title';
      layout.xAxis.show = 'title';
      axes = createAxes({ models, flags });
      expect(axes[0].settings.labels.show).to.equal(false);
      expect(axes[1].settings.labels.show).to.equal(false);
    });

    it('should have correct font size property for labels', () => {
      const { fontSize } = themeService.getStyles().axis.label.name;
      expect(axes[0].settings.labels.fontSize).to.equal(fontSize);
    });
  });
});
