import translate from '../translate';

describe('translate', () => {
  let sandbox;
  let viewHandler;
  let direction;
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
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should translate the data view in x direction correctly', () => {
    direction = 'x';
    translate({ viewHandler, direction, percent });
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: 10,
      xAxisMax: 1010,
      yAxisMin: 2000,
      yAxisMax: 3000,
    });
  });

  it('should translate the data view in y direction correctly', () => {
    direction = 'y';
    translate({ viewHandler, direction, percent });
    expect(viewHandler.setDataView).to.have.been.calledWithExactly({
      xAxisMin: 0,
      xAxisMax: 1000,
      yAxisMin: 2010,
      yAxisMax: 3010,
    });
  });
});
