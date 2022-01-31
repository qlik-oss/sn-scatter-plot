import * as tapMiniChart from '../tap-mini-chart';
import * as tapButton from '../tap-button';

describe('interactions', () => {
  let sandbox;
  let createNative;
  let create;
  let gestures;
  let colorService;
  let tooltipService;
  let actions;
  let args;
  let chart;
  let viewHandler;
  let models;
  let rtl;
  let pan;
  let pinch;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    createNative = sandbox.stub().returns({ key: 'native' });
    pan = sandbox.stub().returns({ key: 'panorama' });
    pinch = sandbox.stub().returns({ key: 'pinchZoom' });
    create = aw.mock(
      [
        ['**/src/picasso-definition/interactions/native.js', () => createNative],
        ['**/src/picasso-definition/interactions/pan.js', () => pan],
        ['**/src/picasso-definition/interactions/pinch.js', () => pinch],
      ],
      ['../index']
    )[0].default;
    chart = { key: 'chart' };
    viewHandler = {};
    models = { chartModel: {} };
    rtl = false;
    gestures = [
      { key: 'gesture-1', prio: 2 },
      { key: 'gesture-2', prio: 2 },
      { key: 'gesture-3', prio: 1 },
    ];
    colorService = {
      custom: {
        legendInteractions: sandbox.stub().returns(['legend-i1', 'legend-i2']),
      },
    };
    tooltipService = {
      getInteractions: sandbox.stub().returns({
        gestures: [{ key: 'tooltip-gesture-0' }, { key: 'tooltip-gesture-1' }],
        native: { key: 'tooltip-native' },
      }),
    };
    actions = { key: 'actions' };
    args = {
      chart,
      actions,
      viewHandler,
      gestures,
      colorService,
      tooltipService,
      models,
      rtl,
    };
    sandbox.stub(tapMiniChart, 'default').returns({
      key: 'event:tap-mini-chart',
    });
    sandbox.stub(tapButton, 'default').returns({
      key: 'event:tap-button',
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create native interactions', () => {
    create(args);
    expect(createNative).calledWithExactly({
      chart,
      actions,
      viewHandler,
    }).calledOnce;
  });

  it('should return correct interactions', () => {
    expect(create(args)).to.deep.equal([
      {
        key: 'native',
      },
      {
        key: 'tooltip-native',
      },
      {
        type: 'hammer',
        enable: true,
        gestures: [
          'legend-i1',
          'legend-i2',
          { key: 'event:tap-button' },
          { key: 'event:tap-mini-chart' },
          { key: 'gesture-1', prio: 2 },
          { key: 'gesture-2', prio: 2 },
          { key: 'gesture-3', prio: 1 },
          { key: 'panorama' },
          { key: 'pinchZoom' },
          { key: 'tooltip-gesture-0' },
          { key: 'tooltip-gesture-1' },
        ],
      },
    ]);
  });

  it('should still work if gestures have no prio attribute', () => {
    gestures = [{ key: 'gesture-1' }, { key: 'gesture-2' }, { key: 'gesture-3' }];
    args = {
      chart,
      actions,
      viewHandler,
      gestures,
      colorService,
      tooltipService,
      models,
    };
    expect(create(args)).to.deep.equal([
      {
        key: 'native',
      },
      {
        key: 'tooltip-native',
      },
      {
        type: 'hammer',
        enable: true,
        gestures: [
          'legend-i1',
          'legend-i2',
          { key: 'event:tap-button' },
          { key: 'event:tap-mini-chart' },
          { key: 'gesture-1' },
          { key: 'gesture-2' },
          { key: 'gesture-3' },
          { key: 'panorama' },
          { key: 'pinchZoom' },
          { key: 'tooltip-gesture-0' },
          { key: 'tooltip-gesture-1' },
        ],
      },
    ]);
  });
});
