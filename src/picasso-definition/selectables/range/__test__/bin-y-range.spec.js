describe('bin-y-Range', () => {
  let sandbox;
  let range;
  let actions;
  let selectionService;
  let dockService;
  let enableInteraction;
  let createBinYRange;
  let chart;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    range = sandbox.stub();
    createBinYRange = aw.mock(
      [
        ['**/src/interactive/index.js', () => ({ range })],
        [
          '**/src/constants/keys.js',
          () => ({
            SCALE: { BIN_Y: 'bin-y-scale' },
            COMPONENT: { Y_AXIS: 'y-axis-key', HEAT_MAP: 'heat-map-key' },
            FORMATTER: { Y: 'y-formatter' },
            BRUSH: {
              BIN_Y_RANGE: 'bin-y-range-brush',
            },
          }),
        ],
      ],
      ['../bin-y-range']
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
    chart = {
      formatter: sandbox.stub(),
    };
    create = () =>
      createBinYRange({
        chart,
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
    chart.formatter.withArgs('y-formatter').returns((datum) => `${datum}-formatted`);
  });

  after(() => {
    sandbox.restore();
  });

  it('should return false if is dimension is locked', () => {
    selectionService.getIsDimensionLocked.returns(true);
    expect(create()).to.be.false;
  });

  describe('bin x range config', () => {
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
        'toLabel',
      ]);
    });

    it('should have correct eventName', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.eventName).to.equal('binYRange');
    });

    it('should have correct key', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.key).to.equal('bin-y-range-brush');
    });

    it('should have correct targets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.targets).to.deep.equal(['y-axis-key', 'heat-map-key']);
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
      expect(config.scale).to.equal('bin-y-scale');
    });

    it('should have correct onEdited', () => {
      create();
      const [config] = range.getCall(0).args;
      config.onEdited();
      expect(actions.select.emit.withArgs('end', 'binYRange')).to.have.been.calledOnce;
    });

    it('should have correct toLabel', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(
        config.toLabel({
          datum: 2,
          data: [3, 10.6],
        })
      ).to.equal('2-formatted');
    });

    it('should have correct enableInteraction', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.enableInteraction).to.equal('enableInteraction');
    });
  });

  describe('bin x range options', () => {
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

  it('should return bin y range', () => {
    expect(create()).to.deep.equal({ key: 'range' });
  });
});
