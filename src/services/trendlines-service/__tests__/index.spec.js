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
    const animationsEnabled = 'animationsEnabled';
    const flags = 'flags';
    const layoutService = 'layoutService';
    const translator = 'translator';
    const viewState = 'viewState';
    createTrendlinesService({
      chart,
      colorService,
      animationsEnabled,
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
        enabled: animationsEnabled,
        trackBy: sinon.match.func,
        compensateForLayoutChanges: sinon.match.func,
      },
    });

    // animations.compensateForLayoutChanges
    const currentNodes = [
      {
        major: { size: 1000, p: 'x' },
        minor: { size: 500, p: 'y' },
        points: [
          { major: 0.25, minor: 0.75, minor0: 1 },
          { major: 0.75, minor: 0.25, minor0: 1 },
        ],
      },
    ];

    const previousRect = { width: 1000, height: 500, x: 80, y: 50 };
    const currentRect = { width: 1040, height: 470, x: 40, y: 80 };
    const { compensateForLayoutChanges } = chartModules.trendlinesService.getCall(0).args[0].animations;
    compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
    expect(currentNodes).to.deep.equal([
      {
        major: { size: 1000, p: 'x' },
        minor: { size: 500, p: 'y' },
        points: [
          { major: 40 / 1000 + 0.25, minor: -30 / 500 + 0.75, minor0: -30 / 500 + 1, modified: true },
          { major: 40 / 1000 + 0.75, minor: -30 / 500 + 0.25, minor0: -30 / 500 + 1, modified: true },
        ],
      },
    ]);

    // not compensate for nodes that have already modified
    compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
    expect(currentNodes).to.deep.equal([
      {
        major: { size: 1000, p: 'x' },
        minor: { size: 500, p: 'y' },
        points: [
          { major: 40 / 1000 + 0.25, minor: -30 / 500 + 0.75, minor0: -30 / 500 + 1, modified: true },
          { major: 40 / 1000 + 0.75, minor: -30 / 500 + 0.25, minor0: -30 / 500 + 1, modified: true },
        ],
      },
    ]);
  });
});
