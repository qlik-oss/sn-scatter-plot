describe('interactions', () => {
  let sandbox;
  let createNative;
  let create;
  let gestures;
  let actions;
  let args;
  let chart;
  let zoomHandler;
  let pan;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    createNative = sandbox.stub().returns({ key: 'native' });
    pan = sandbox.stub().returns({ key: 'panorama' });
    create = aw.mock(
      [
        ['**/src/picasso-definition/interactions/native.js', () => createNative],
        ['**/src/picasso-definition/interactions/pan.js', () => pan],
      ],
      ['../index']
    )[0].default;
    chart = { key: 'chart' };
    zoomHandler = {};
    gestures = [
      { key: 'gesture-1', prio: 2 },
      { key: 'gesture-2', prio: 2 },
      { key: 'gesture-3', prio: 1 },
    ];
    actions = { key: 'actions' };
    args = {
      chart,
      actions,
      zoomHandler,
      gestures,
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
      zoomHandler,
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
          { key: 'gesture-1', prio: 2 },
          { key: 'gesture-2', prio: 2 },
          { key: 'gesture-3', prio: 1 },
          { key: 'panorama' },
        ],
      },
    ]);
  });
});
