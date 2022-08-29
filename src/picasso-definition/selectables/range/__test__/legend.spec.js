import * as updateSelection from '../../../../interactive/update-selection';

describe('legend', () => {
  let sandbox;
  let range;
  let actions;
  let selectionService;
  let scales;
  let legend;
  let enableInteraction;
  let createLegendRange;
  let layoutService;
  let chartModel;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    range = sandbox.stub();
    createLegendRange = aw.mock([['**/src/interactive/index.js', () => ({ range })]], ['../legend'])[0].default;
    actions = {
      select: {
        emit: sandbox.spy(),
      },
    };
    selectionService = {
      getIsDimensionLocked: sandbox.stub(),
    };
    enableInteraction = 'enableInteraction';
    chartModel = { query: { getChart: sandbox.stub().returns({}) } };
    sandbox.stub(updateSelection, 'updateLazySelectionOnEnd');
    create = () =>
      createLegendRange({
        actions,
        selectionService,
        scales,
        legend,
        enableInteraction,
        layoutService,
        chartModel,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    range.returns({ key: 'range' });
    selectionService.getIsDimensionLocked.returns(false);
    scales = {
      colorRange: {
        min: 100,
        max: 200,
      },
    };
    legend = [
      {
        type: 'legend-seq',
        key: 'legend-0',
        layout: {
          dock: 'right',
        },
      },
    ];
  });

  after(() => {
    sandbox.restore();
  });

  it('should return false if no legend component', () => {
    legend.length = 0;
    expect(create()).to.be.false;
  });

  it('should return false if dimension is locked', () => {
    selectionService.getIsDimensionLocked.returns(true);
    expect(create()).to.be.false;
  });

  it('should return false if type is not legend-seq', () => {
    legend[0].type = 'legend-cat';
    expect(create()).to.be.false;
  });

  it('should return false if no color range scale', () => {
    delete scales.colorRange;
    expect(create()).to.be.false;
  });

  it('should return false if color range min is larger than max', () => {
    scales.colorRange.min = 200;
    scales.colorRange.max = 100;
    expect(create()).to.be.false;
  });

  it('should return false if color range min is equal to max', () => {
    scales.colorRange.min = 200;
    scales.colorRange.max = 200;
    expect(create()).to.be.false;
  });

  it('should create legend range', () => {
    create();
    expect(range).to.have.been.calledOnce;
  });

  it('should return legend range', () => {
    expect(create()).to.deep.equal({ key: 'range' });
  });

  describe('legend range config', () => {
    it('should have correct properties', () => {
      create();

      const [config] = range.getCall(0).args;

      expect(config).to.have.all.keys([
        'eventName',
        'key',
        'targets',
        'fillTargets',
        'targetSelector',
        'targetFillSelector',
        'dock',
        'scale',
        'bubblesPlacement',
        'onEdited',
        'enableInteraction',
      ]);
    });

    it('should have correct eventName', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.eventName).to.equal('legendRange');
    });

    it('should have correct key', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.key).to.equal('legend-range-brush');
    });

    it('should have correct targets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.targets).to.deep.equal(['legend-0']);
    });

    it('should have correct fillTargets', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.fillTargets).to.deep.equal(['legend-0']);
    });

    it('should have correct dock', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.dock).to.equal('right');
    });

    it('should have correct scale', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.scale).to.equal('colorRange');
    });

    it('should have correct bubblesPlacement', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.bubblesPlacement).to.equal('outside');
    });

    it('should have correct onEdited', () => {
      create();
      const [config] = range.getCall(0).args;
      config.onEdited();
      expect(actions.select.emit.withArgs('end', 'legendRange')).to.have.been.calledOnce;
    });

    it('should have correct enableInteraction', () => {
      create();
      const [config] = range.getCall(0).args;
      expect(config.enableInteraction).to.equal('enableInteraction');
    });
  });

  describe('legend range options', () => {
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
});
