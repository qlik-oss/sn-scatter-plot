import createAxisTitles from '../index';

describe('axis-titles', () => {
  let sandbox;
  let dockModel;
  let layout;
  let layoutModel;
  let themeModel;
  let axisTitles;
  let style;

  before(() => {
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
  });

  it('should create two axis titles', () => {
    axisTitles = createAxisTitles({ layoutModel, dockModel, themeModel });
    expect(axisTitles.length).to.equal(2);
    expect(axisTitles[0].key).to.equal('x-axis-title');
    expect(axisTitles[1].key).to.equal('y-axis-title');
  });
});
