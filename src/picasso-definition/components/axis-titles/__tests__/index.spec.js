import createAxisTitles from '../index';
import KEYS from '../../../../constants/keys';

describe('axis-titles', () => {
  let sandbox;
  let dockModel;
  let layout;
  let layoutService;
  let themeService;
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
    layoutService = {
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
    themeService = { getStyles: () => style };
    axisTitles = createAxisTitles({ layoutService, dockModel, themeService });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create two axis titles', () => {
    expect(axisTitles.length).to.equal(2);
    expect(axisTitles[0].key).to.equal(KEYS.COMPONENT.X_AXIS_TITLE);
    expect(axisTitles[1].key).to.equal(KEYS.COMPONENT.Y_AXIS_TITLE);
  });

  it('should have correct type proprty', () => {
    expect(axisTitles[0].type).to.equal('text');
    expect(axisTitles[1].type).to.equal('text');
  });

  it('should have correct text property', () => {
    const xTitle = layoutService.getHyperCubeValue('qMeasureInfo.0.qFallbackTitle');
    expect(axisTitles[0].text).to.equal(xTitle);
    const yTitle = layoutService.getHyperCubeValue('qMeasureInfo.1.qFallbackTitle');
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
