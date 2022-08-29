import * as updateSelection from '../../../../interactive/update-selection';

describe('xRange', () => {
  let sandbox;
  let range;
  let actions;
  let selectionService;
  let dockService;
  let enableInteraction;
  let createXRange;
  let layoutService;
  let chartModel;
  let create;
  let isRangeSelectionsSupported;

  before(() => {
    sandbox = sinon.createSandbox();
    range = sandbox.stub();
    createXRange = aw.mock(
      [
        ['**/src/interactive/index.js', () => ({ range })],
        [
          '**/src/constants/keys.js',
          () => ({
            SCALE: { X: 'x-scale' },
            COMPONENT: { X_AXIS: 'x-axis-key', POINT: 'point-key' },
            BRUSH: {
              X_RANGE: 'x-range-brush',
            },
          }),
        ],
      ],
      ['../x-range']
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
    chartModel = { query: { getChart: sandbox.stub().returns({}) } };
    sandbox.stub(updateSelection, 'updateLazySelectionOnEnd');
    create = () =>
      createXRange({
        actions,
        selectionService,
        dockService,
        enableInteraction,
        isRangeSelectionsSupported,
        layoutService,
        chartModel,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    isRangeSelectionsSupported = true;
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

  it('should return false if range selections is not supported', () => {
    isRangeSelectionsSupported = false;
    expect(create()).to.be.false;
  });

  describe('x range config', () => {
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
      expect(config.eventName).to.equal('xRange');
    });

    it('should have correct key', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.key).to.equal('x-range-brush');
    });

    it('should have correct targets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.targets).to.deep.equal(['x-axis-key', 'point-key']);
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
      expect(config.scale).to.equal('x-scale');
    });

    it('should have correct onEdited', () => {
      create();
      const [config] = range.getCall(0).args;
      config.onEdited();
      expect(actions.select.emit.withArgs('end', 'xRange')).to.have.been.calledOnce;
    });

    it('should have correct enableInteraction', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.enableInteraction).to.equal('enableInteraction');
    });
  });

  describe('x range options', () => {
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

  it('should return x range', () => {
    expect(create()).to.deep.equal({ key: 'range' });
  });
});
