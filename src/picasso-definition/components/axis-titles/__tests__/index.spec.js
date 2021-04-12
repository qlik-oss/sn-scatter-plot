import createAxisTitles from '../index';

describe('axis-titles', () => {
  let sandbox;
  let dockModel;
  let layout;
  let layoutModel;
  let themeModel;
  let axisTitles;
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
    axisTitles = createAxisTitles({ layoutModel, dockModel, themeModel });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create two axis titles', () => {
    expect(axisTitles.length).to.equal(2);
    expect(axisTitles[0].key).to.equal('x-axis-title');
    expect(axisTitles[1].key).to.equal('y-axis-title');
  });

  it('should have correct type proprty', () => {
    expect(axisTitles[0].type).to.equal('text');
    expect(axisTitles[1].type).to.equal('text');
  });

  it('should have correct text property', () => {
    const xTitle = layoutModel.getHyperCubeValue('qMeasureInfo.0.qFallbackTitle');
    expect(axisTitles[0].text).to.equal(xTitle);
    const yTitle = layoutModel.getHyperCubeValue('qMeasureInfo.1.qFallbackTitle');
    expect(axisTitles[1].text).to.equal(yTitle);
  });

  it('should have correct dock property', () => {
    expect(axisTitles[0].dock).to.equal(dockModel.x.dock);
    expect(axisTitles[1].dock).to.equal(dockModel.y.dock);
  });

  it('should have correct font size', () => {
    expect(axisTitles[0].style.text.fontSize).to.equal(style.axis.title.fontSize);
    expect(axisTitles[1].style.text.fontSize).to.equal(style.axis.title.fontSize);
  });
});
