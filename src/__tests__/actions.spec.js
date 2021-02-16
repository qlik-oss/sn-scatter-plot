import createActions from '../actions';

describe('actions', () => {
  it('should contain correct actions', () => {
    const constraints = {};
    const actions = createActions(constraints);
    expect(Object.keys(actions)).to.deep.equal(['zoom', 'interact', 'tooltip']);
  });

  it('should enable correct actions based on constraints', () => {
    const constraints = {
      active: false,
      passive: false,
    };
    const actions = createActions(constraints);
    expect(actions.zoom.enabled()).to.be.true;
    expect(actions.interact.enabled()).to.be.true;
    expect(actions.tooltip.enabled()).to.be.true;
  });
});
