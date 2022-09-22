import getVisiblePoints from '../get-visible-points';

describe('getVisiblePoints', () => {
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
    expect(getVisiblePoints({ layoutService, viewHandler }).length).to.equal(0);
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
    expect(getVisiblePoints({ layoutService, viewHandler })).to.deep.equal([
      [0, { qNum: 1 }, { qNum: 2000 }],
      [0, { qNum: 10 }, { qNum: 3000 }],
    ]);
  });
});
