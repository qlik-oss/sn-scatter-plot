import * as chartModules from 'qlik-chart-modules';
import KEYS from '../../../constants/keys';
import createTrendlinesService from '..';

describe('trendlines-service', () => {
  let sandbox;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(chartModules, 'trendlinesService').returns('service');
  });

  after(() => {
    sandbox.restore();
  });

  it('create', () => {
    const chart = 'chart';
    const colorService = 'colorService';
    const enableAnimations = 'enableAnimations';
    const flags = 'flags';
    const layoutService = 'layoutService';
    const translator = 'translator';
    const viewState = 'viewState';
    createTrendlinesService({
      chart,
      colorService,
      enableAnimations,
      flags,
      layoutService,
      translator,
      viewState,
    });
    expect(chartModules.trendlinesService).to.be.calledWith({
      layoutService,
      getMinMax: sinon.match.func,
      colorService,
      chart,
      translator,
      orientation: 'horizontal',
      keys: {
        majorScale: KEYS.SCALE.X,
        minorScale: KEYS.SCALE.Y,
        trendlines: KEYS.COMPONENT.TRENDLINES,
      },
      isEnabled: sinon.match.func,
      animations: {
        enabled: enableAnimations,
        trackBy: sinon.match.func,
        compensateForLayoutChanges: sinon.match.func,
      },
    });
  });
});
