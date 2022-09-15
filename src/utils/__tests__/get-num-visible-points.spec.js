import getNumVisiblePoints from '../get-num-visible-points';

describe('getNumVisiblePoints', () => {
  let sandbox;
  let layoutService;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getDataPages: sandbox.stub() };
    viewHandler = { getDataView: sandbox.stub() };
    viewHandler.getDataView.returns({});
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return 0 if qMatrix is falsy', () => {
    layoutService.getDataPages.returns([]);
    expect(getNumVisiblePoints({ layoutService, viewHandler })).to.equal(0);
  });

  it('should return correct number of points inside the view', () => {
    viewHandler.getDataView.returns({ xAxisMin: 0, xAxisMax: 100, yAxisMin: 1000, yAxisMax: 10000 });
    layoutService.getDataPages.returns([
      {
        qMatrix: [
          [0, { qNum: -1 }, { qNum: -2000 }],
          [0, { qNum: -1 }, { qNum: 2000 }],
          [0, { qNum: 1 }, { qNum: 2000 }],
          [0, { qNum: 10 }, { qNum: 3000 }],
          [0, { qNum: 10 }, { qNum: 300000 }],
        ],
      },
    ]);
    expect(getNumVisiblePoints({ layoutService, viewHandler })).to.equal(2);
  });
});
