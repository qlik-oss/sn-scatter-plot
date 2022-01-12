import move from '../move';

describe('move', () => {
  let sandbox;
  let viewHandler;
  let direction;
  let rtl;
  const percent = 1;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewHandler = {
      getDataView: sandbox.stub().returns({
        xAxisMin: 0,
        xAxisMax: 1000,
        yAxisMin: 2000,
        yAxisMax: 3000,
      }),
      setDataView: sandbox.stub(),
    };
    rtl = false;
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should move the data view in x direction correctly', () => {
    direction = 'x';
    move({ viewHandler, direction, percent, rtl });
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: 10,
      xAxisMax: 1010,
      yAxisMin: 2000,
      yAxisMax: 3000,
    });
  });

  it('should move the data view in x direction correctly, when rtl is true', () => {
    direction = 'x';
    move({ viewHandler, direction, percent, rtl: true });
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: -10,
      xAxisMax: 990,
      yAxisMin: 2000,
      yAxisMax: 3000,
    });
  });

  it('should move the data view in y direction correctly', () => {
    direction = 'y';
    move({ viewHandler, direction, percent });
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: 0,
      xAxisMax: 1000,
      yAxisMin: 2010,
      yAxisMax: 3010,
    });
  });
});
