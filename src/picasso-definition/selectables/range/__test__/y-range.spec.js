describe('yRange', () => {
  let sandbox;
  let range;
  let actions;
  let selectionService;
  let dockService;
  let enableInteraction;
  let createYRange;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    range = sandbox.stub();
    createYRange = aw.mock(
      [
        ['**/src/interactive/index.js', () => ({ range })],
        [
          '**/src/constants/keys.js',
          () => ({
            SCALE: { Y: 'y-scale' },
            COMPONENT: { Y_AXIS: 'y-axis-key', POINT: 'point-key' },
          }),
        ],
      ],
      ['../y-range']
    )[0].default;
    actions = {
      select: {
        emit: sandbox.spy(),
      },
    };
    selectionService = {
      getIsDimensionLocked: sandbox.stub(),
    };
    dockService = {
      meta: {
        y: {
          dock: 'right',
        },
      },
    };
    enableInteraction = 'enableInteraction';
    create = () =>
      createYRange({
        actions,
        selectionService,
        dockService,
        enableInteraction,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    range.returns({ key: 'range' });
    selectionService.getIsDimensionLocked.returns(false);
  });

  after(() => {
    sandbox.restore();
  });

  it('should return false if is dimension is locked', () => {
    selectionService.getIsDimensionLocked.returns(true);
    expect(create()).to.be.false;
  });

  describe('y range config', () => {
    it('should have correct properties', () => {
      create();

      const [config] = range.getCall(0).args;

      expect(config).to.have.all.keys([
        'eventName',
        'key',
        'targets',
        'fillTargets',
        'dock',
        'scale',
        'onEdited',
        'enableInteraction',
      ]);
    });

    it('should have correct eventName', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.eventName).to.equal('yRange');
    });

    it('should have correct key', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.key).to.equal('y-range-brush');
    });

    it('should have correct targets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.targets).to.deep.equal(['y-axis-key', 'point-key']);
    });

    it('should have correct fillTargets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.fillTargets).to.deep.equal(['y-axis-key']);
    });

    it('should have correct dock', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.dock).to.equal('right');
    });

    it('should have correct scale', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.scale).to.equal('y-scale');
    });

    it('should have correct onEdited', () => {
      create();
      const [config] = range.getCall(0).args;
      config.onEdited();
      expect(actions.select.emit.withArgs('end', 'yRange')).to.have.been.calledOnce;
    });

    it('should have correct enableInteraction', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.enableInteraction).to.equal('enableInteraction');
    });
  });

  describe('y range options', () => {
    beforeEach(() => {
      create();
    });

    it('should have correct properties', () => {
      const [, options] = range.getCall(0).args;

      expect(options).to.have.all.keys(['actions']);
    });

    it('should have correct actions', () => {
      const [, options] = range.getCall(0).args;
      expect(options.actions).to.equal(actions);
    });
  });

  it('should return y range', () => {
    expect(create()).to.deep.equal({ key: 'range' });
  });
});
