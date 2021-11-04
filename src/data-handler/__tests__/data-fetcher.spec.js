import createDataFetcher from '../data-fetcher';

describe('createDataFetcher', () => {
  let sandbox;
  let create;
  let layoutService;
  let model;
  let dataFetcher;
  let pages;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      meta: {
        isSnapshot: false,
      },
      getDataPages: sinon.stub().returns([{ snapshotData: true }]),
    };

    pages = [{ realDataPageBlabla: true, qNodes: [] }];
    model = {
      getHyperCubeData: sinon.stub().callsFake(async () => pages),
    };
    create = () => createDataFetcher({ layoutService, model });
    dataFetcher = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get data pages from layoutService for snapshots', async () => {
    layoutService.meta.isSnapshot = true;
    const dataPages = await dataFetcher.fetchData({});
    expect(dataPages[0].snapshotData).to.be.true;
  });

  it('should send correct params to getHyperCubeData', async () => {
    const dataRect = {
      top: 1,
      left: 2,
      width: 5,
      height: 6,
    };
    const dataPages = await dataFetcher.fetchData(dataRect);
    expect(dataPages[0].realDataPageBlabla).to.be.true;
    expect(model.getHyperCubeData).to.have.been.calledWith('/qHyperCubeDef', [
      {
        top: 1,
        left: 2,
        width: 5,
        height: 6,
      },
    ]);
  });

  it('should reject promise when trying to fetch the same data window twice in a row', async () => {
    const someRejectFn = sinon.spy();
    const dataRect = {
      top: 1,
      left: 2,
      width: 5,
      height: 6,
    };

    await dataFetcher.fetchData(dataRect).catch(someRejectFn);
    await dataFetcher.fetchData(dataRect).catch(someRejectFn);
    expect(someRejectFn).to.have.been.calledOnce;
  });

  it('should await ongoing request before sending new', async () => {
    const fakePages = [{ realDataPage: true, qNodes: [] }];
    model.getHyperCubeData = sinon.stub().callsFake(
      async (path, dataRectArray) =>
        new Promise((resolve) => {
          fakePages[0].testTop = dataRectArray[0].top;
          setTimeout(() => {
            resolve(fakePages);
          }, 20);
        })
    );
    const rejectCb1 = sinon.spy();
    const rejectCb2 = sinon.spy();
    const rejectCb3 = sinon.spy();
    const rejectCb4 = sinon.spy();

    dataFetcher.fetchData({ top: 1, left: 2, width: 3, height: 4 }).catch(rejectCb1);
    dataFetcher.fetchData({ top: 2, left: 2, width: 3, height: 4 }).catch(rejectCb2);
    dataFetcher.fetchData({ top: 3, left: 2, width: 3, height: 4 }).catch(rejectCb3);
    const p = await dataFetcher.fetchData({ top: 4, left: 2, width: 3, height: 4 }).catch(rejectCb4);

    expect(rejectCb1).to.not.have.been.called;
    expect(rejectCb2).to.have.been.calledOnce;
    expect(rejectCb3).to.have.been.calledOnce;
    expect(rejectCb4).to.not.have.been.called;
    expect(p[0].testTop).to.equal(4);
  });
});
