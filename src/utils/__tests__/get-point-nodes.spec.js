import { getPointNodes, getPointNodesWithKey } from '../get-point-nodes';

describe('getPointNodes', () => {
  let sandbox;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    chart = { findShapes: sandbox.stub() };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return [] if chart.findShapes = []', () => {
    chart.findShapes.returns([]);
    expect(getPointNodes(chart)).to.deep.equal([]);
  });

  it('should return correct array with chart.findShapes("circle")', () => {
    chart.findShapes.withArgs('circle').returns([1, 2]);
    chart.findShapes.withArgs('path').returns([]);
    expect(getPointNodes(chart)).to.deep.equal([1, 2]);
  });

  it('should return correct array with chart.findShapes("path")', () => {
    chart.findShapes.withArgs('circle').returns([]);
    chart.findShapes.withArgs('path').returns(['a', 'b']);
    expect(getPointNodes(chart)).to.deep.equal(['a', 'b']);
  });

  it('should return correct array with chart.findShapes("circle") and chart.findShapes("path")', () => {
    chart.findShapes.withArgs('circle').returns([1, 2]);
    chart.findShapes.withArgs('path').returns(['a', 'b']);
    expect(getPointNodes(chart)).to.deep.equal([1, 2, 'a', 'b']);
  });

  describe('getPointNodesWithKey', () => {
    it('should return [] if chart.findShapes = []', () => {
      chart.findShapes.returns([]);
      expect(getPointNodesWithKey(chart, 'x')).to.deep.equal([]);
    });

    it('should return correct array with chart.findShapes("circle") and chart.findShapes("path")', () => {
      chart.findShapes.withArgs('circle').returns([{ key: 1 }, { key: 'x', a: 1 }]);
      chart.findShapes.withArgs('path').returns([{ key: 10 }, { key: 'x', b: 2 }]);
      expect(getPointNodesWithKey(chart, 'x')).to.deep.equal([
        { key: 'x', a: 1 },
        { key: 'x', b: 2 },
      ]);
    });
  });
});
