import createAxes from '../index';

describe('axes', () => {
  let sandbox;
  let layout;
  let layoutModel;
  let dockModel;
  let axes;
  let gridLine;
  let themeModel;
  const scales = {
    X: 'x',
    Y: 'y',
  };

  before(() => {
    sandbox = sinon.createSandbox();
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
  });

  it('should create two axes', () => {
    axes = createAxes({ layoutModel, dockModel, themeModel });
    expect(axes.length).to.equal(2);
    expect(axes[0].type).to.equal('axis');
    expect(axes[1].type).to.equal('axis');
  });

  it('should have correct scale', () => {
    expect(axes[0].scale).to.equal(scales.X);
    expect(axes[1].scale).to.equal(scales.Y);
  });

  it('should have correct layout', () => {
    expect(axes[0].layout.dock).to.equal(dockModel.x.dock);
    expect(axes[1].layout.dock).to.equal(dockModel.y.dock);
  });

  describe('settings', () => {
    it('should have correct show property for labels', () => {
      expect(axes[0].settings.labels.show).to.equal(true);
      expect(axes[1].settings.labels.show).to.equal(true);
      layout.yAxis.show = 'title';
      layout.xAxis.show = 'title';
      axes = createAxes({ layoutModel, dockModel, themeModel });
      expect(axes[0].settings.labels.show).to.equal(false);
      expect(axes[1].settings.labels.show).to.equal(false);
    });

    it('should have correct font size property for labels', () => {
      const { fontSize } = themeModel.query.getStyle().axis.label.name;
      expect(axes[0].settings.labels.fontSize).to.equal(fontSize);
    });
  });
});
