// eslint-disable-next-line no-unused-vars
import * as KEYS from '../../../../constants/keys';
import * as settings from '../settings';
import createLegend from '..';

describe('legend', () => {
  let sandbox;
  let create;
  let viewState;
  let chart;
  let options;
  let colorService;
  let actions;
  let styleModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    colorService = {
      getLegend: sandbox.stub().returns({ components: [{ layout: { dock: 'right' } }], interactions: [] }),
      getScales: sandbox.stub().returns({ colorRange: { invert: false } }),
    };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { LEGEND: 'legend-key' }, SCALE: { COLOR: 'color' } });
    viewState = 'view-state';
    chart = 'chart';
    options = { direction: 'rtl' };
    sandbox.stub(settings, 'default').returns('settings');
    actions = { interact: { enabled: sandbox.stub().returns(true) } };
    styleModel = { query: { legend: { title: { getStyle: () => {} }, label: { getStyle: () => {} } } } };
    create = () => createLegend({ viewState, chart, options, colorService, actions, styleModel });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call getLegend with correct parameter', () => {
    create();
    expect(colorService.getLegend).to.have.been.calledWithExactly(
      {
        eventName: 'legend-c',
        key: 'legend-key',
        viewState: 'view-state',
        chart: 'chart',
        styleReference: 'object.scatterPlot',
        styleOverrides: {
          title: styleModel.query.legend.title.getStyle(),
          label: styleModel.query.legend.label.getStyle(),
        },
        rtl: true,
        settings: 'settings',
      },
      {
        actions,
        navigationDisabled: false,
      }
    );
  });

  it('should set range invert to true if doc is right', () => {
    expect(create().scales.colorRange.invert).to.equal(true);
  });

  it('should set range invert to true if doc is left', () => {
    colorService.getLegend.returns({ components: [{ layout: { dock: 'left' } }], interactions: [] });
    expect(create().scales.colorRange.invert).to.equal(true);
  });

  it('should set range invert to true if doc is top and rtl is true', () => {
    colorService.getLegend.returns({ components: [{ layout: { dock: 'top' } }], interactions: [] });
    expect(create().scales.colorRange.invert).to.equal(true);
  });
});
