import heatMapHighlight from '..';

describe('heatMapHighlight', () => {
  it('should have correct keys', () => {
    expect(heatMapHighlight).to.have.all.keys(['require', 'renderer', 'render']);
  });
});
