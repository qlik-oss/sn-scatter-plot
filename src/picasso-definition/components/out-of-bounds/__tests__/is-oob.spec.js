import isOob from '../is-oob';

describe('isOob', () => {
  let sandbox;
  let nodeData;
  let chart;
  let sizeScaleFn;
  let viewHandler;

  const xAxisMin = 50;
  const xAxisMax = 150;
  const yAxisMin = 100;
  const yAxisMax = 300;
  const dataView = {
    xAxisMax,
    xAxisMin,
    yAxisMin,
    yAxisMax,
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    nodeData = { x: { value: 100 }, y: { value: 200 } };
    chart = { component: sandbox.stub().returns({ rect: { width: 50, height: 50 } }) };
    sizeScaleFn = sandbox.stub().returns('10px');
    viewHandler = {
      getDataView: () => dataView,
    };
  });

  afterEach(() => sandbox.restore());

  it('should return true if nodeData.x.value < xAxisMin - xBuffer', () => {
    nodeData.x.value = 20;
    expect(isOob({ nodeData, chart, sizeScaleFn, viewHandler })).to.equal(true);
  });

  it('should return true if nodeData.x.value > xAxisMax + xBuffer', () => {
    nodeData.x.value = 170;
    expect(isOob({ nodeData, chart, sizeScaleFn, viewHandler })).to.equal(true);
  });

  it('should return true if nodeData.y.value < yAxisMin - yBuffer', () => {
    nodeData.y.value = 70;
    expect(isOob({ nodeData, chart, sizeScaleFn, viewHandler })).to.equal(true);
  });

  it('should return true if nodeData.y.value > yAxisMax + yBuffer', () => {
    nodeData.y.value = 330;
    expect(isOob({ nodeData, chart, sizeScaleFn, viewHandler })).to.equal(true);
  });

  it('should return false if none of above true', () => {
    expect(isOob({ nodeData, chart, sizeScaleFn, viewHandler })).to.equal(false);
  });
});
