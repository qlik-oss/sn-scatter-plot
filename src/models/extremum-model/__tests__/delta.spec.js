import getDelta from '../delta';

describe('getDelta', () => {
  let sandbox;
  let create;
  let layoutService;
  let value;
  let measureIndex;
  let matrix;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    measureIndex = 0;
    layoutService = { getHyperCubeValue: sandbox.stub() };
    create = () => getDelta({ layoutService, value, measureIndex });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return value/10, if all points line up at value, and value is not zero', () => {
    matrix = [
      [{}, { id: 1, qNum: 200 }, {}],
      [{}, { id: 2, qNum: 200 }, {}],
      [{}, { id: 3, qNum: 200 }, {}],
    ];
    value = 200;
    layoutService.getHyperCubeValue.returns(matrix);
    expect(create()).to.equal(20);
  });

  it('should return 10, if all points line up at value, and value is zero', () => {
    matrix = [
      [{}, { id: 1, qNum: 0 }, {}],
      [{}, { id: 2, qNum: 0 }, {}],
      [{}, { id: 3, qNum: 0 }, {}],
    ];
    value = 0;
    layoutService.getHyperCubeValue.returns(matrix);
    expect(create()).to.equal(10);
  });

  it('should return half of the distance to the closest point (excluding points at value), if not that all points line up at value', () => {
    matrix = [
      [{}, { id: 1, qNum: 200 }, {}],
      [{}, { id: 2, qNum: 210 }, {}],
      [{}, { id: 3, qNum: 220 }, {}],
    ];
    layoutService.getHyperCubeValue.returns(matrix);
    value = 200;
    expect(create()).to.equal(5);
  });
});
