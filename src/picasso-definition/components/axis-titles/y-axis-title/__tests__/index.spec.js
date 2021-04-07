import createYAxisTitle from '..';

describe('y-axis-title', () => {
  let sandbox;
  let dockModel;
  let layout;
  let layoutModel;
  let themeModel;
  let axisTitle;
  let style;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dockModel = {
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
      getHyperCubeValue: sandbox.stub(),
    };
    style = {
      axis: {
        title: {
          color: '#595959',
          fontFamily: "'Source Sans Pro', 'Arial', 'sans-serif'",
          fontSize: '13px',
        },
      },
    };
    themeModel = {
      query: {
        getStyle: () => style,
      },
    };
    axisTitle = createYAxisTitle({
      layoutModel,
      dockModel,
      themeModel,
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be of type text', () => {
    expect(axisTitle.type).to.equal('text');
  });

  it('should have correct text property', () => {
    const yTitle = layoutModel.getHyperCubeValue('qMeasureInfo.1.qFallbackTitle');
    expect(axisTitle.text).to.equal(yTitle);
  });

  it('should have correct dock property', () => {
    const yDock = dockModel.y.dock;
    expect(axisTitle.dock).to.equal(yDock);
  });

  it('should have correct font size', () => {
    expect(axisTitle.style.text.fontSize).to.equal(style.axis.title.fontSize);
  });
});
