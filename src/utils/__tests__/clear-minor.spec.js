import clearMinor from '../clear-minor';

describe('clearMinor', () => {
  let sandbox;
  let chart;
  let actions;
  let brushFn;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    brushFn = {
      brushes: sandbox.stub().returns([{ type: 'value' }]),
    };
    chart = {
      brush: () => brushFn,
    };
    actions = {
      select: {
        emit: sandbox.stub(),
      },
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should not emit event when selection type is not range', () => {
    clearMinor({ chart, actions });
    expect(actions.select.emit).to.not.have.been.called;
  });

  it('should emit event when selection id is binData/binX', () => {
    brushFn.brushes = sandbox.stub().returns([{ id: 'binData/binX' }]);
    clearMinor({ chart, actions });
    expect(actions.select.emit.withArgs('start')).to.have.been.calledOnce;
    expect(actions.select.emit.withArgs('binRangeHighlightClear')).to.have.been.calledOnce;
  });

  it('should emit event when selection id is binData/binY', () => {
    brushFn.brushes = sandbox.stub().returns([{ id: 'binData/binY' }]);
    clearMinor({ chart, actions });
    expect(actions.select.emit.withArgs('start')).to.have.been.calledOnce;
    expect(actions.select.emit.withArgs('binRangeHighlightClear')).to.have.been.calledOnce;
  });
});
