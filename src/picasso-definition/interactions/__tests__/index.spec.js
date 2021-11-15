describe('interactions', () => {
  let sandbox;
  let createNative;
  let create;
  let gestures;
  let colorService;
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
    actions = { key: 'actions' };
    args = {
      chart,
      actions,
      viewHandler,
      gestures,
      colorService,
      models,
      rtl,
    };
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
        type: 'hammer',
        enable: true,
        gestures: [
          'legend-i1',
          'legend-i2',
          { key: 'gesture-1', prio: 2 },
          { key: 'gesture-2', prio: 2 },
          { key: 'gesture-3', prio: 1 },
          { key: 'panorama' },
          { key: 'pinchZoom' },
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
      models,
    };
    expect(create(args)).to.deep.equal([
      {
        key: 'native',
      },
      {
        type: 'hammer',
        enable: true,
        gestures: [
          'legend-i1',
          'legend-i2',
          { key: 'gesture-1' },
          { key: 'gesture-2' },
          { key: 'gesture-3' },
          { key: 'panorama' },
          { key: 'pinchZoom' },
        ],
      },
    ]);
  });
});
