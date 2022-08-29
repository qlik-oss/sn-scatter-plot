describe('bin-x-Range', () => {
  let sandbox;
  let range;
  let actions;
  let selectionService;
  let dockService;
  let enableInteraction;
  let createBinXRange;
  let chart;
  let create;
  let isRangeSelectionsSupported;

  before(() => {
    sandbox = sinon.createSandbox();
    range = sandbox.stub();
    createBinXRange = aw.mock(
      [
        ['**/src/interactive/index.js', () => ({ range })],
        [
          '**/src/constants/keys.js',
          () => ({
            SCALE: { BIN_X: 'bin-x-scale' },
            COMPONENT: { X_AXIS: 'x-axis-key', HEAT_MAP: 'heat-map-key' },
            FORMATTER: { X: 'x-formatter' },
            BRUSH: {
              BIN_X_RANGE: 'bin-x-range-brush',
            },
          }),
        ],
      ],
      ['../bin-x-range']
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
        x: {
          dock: 'bottom',
        },
      },
    };
    enableInteraction = 'enableInteraction';
    chart = {
      formatter: sandbox.stub(),
    };
    create = () =>
      createBinXRange({
        chart,
        actions,
        selectionService,
        dockService,
        enableInteraction,
        isRangeSelectionsSupported,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    isRangeSelectionsSupported = true;
    range.returns({ key: 'range' });
    selectionService.getIsDimensionLocked.returns(false);
    chart.formatter.withArgs('x-formatter').returns((datum) => `${datum}-formatted`);
  });

  after(() => {
    sandbox.restore();
  });

  it('should return false if is dimension is locked', () => {
    selectionService.getIsDimensionLocked.returns(true);
    expect(create()).to.be.false;
  });

  it('should return false if range selections is not supported', () => {
    isRangeSelectionsSupported = false;
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
      expect(config.eventName).to.equal('binXRange');
    });

    it('should have correct key', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.key).to.equal('bin-x-range-brush');
    });

    it('should have correct targets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.targets).to.deep.equal(['x-axis-key', 'heat-map-key']);
    });

    it('should have correct fillTargets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.fillTargets).to.deep.equal(['x-axis-key']);
    });

    it('should have correct dock', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.dock).to.equal('bottom');
    });

    it('should have correct scale', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.scale).to.equal('bin-x-scale');
    });

    it('should have correct onEdited', () => {
      create();
      const [config] = range.getCall(0).args;
      config.onEdited();
      expect(actions.select.emit.withArgs('end', 'binXRange')).to.have.been.calledOnce;
    });

    it('should have correct toLabel', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(
        config.toLabel({
          datum: 2,
          data: [1, 10],
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

      expect(options).to.have.all.keys(['actions', 'chartModel', 'layoutService']);
    });

    it('should have correct actions', () => {
      const [, options] = range.getCall(0).args;
      expect(options.actions).to.equal(actions);
    });
  });

  it('should return bin x range', () => {
    expect(create()).to.deep.equal({ key: 'range' });
  });
});
