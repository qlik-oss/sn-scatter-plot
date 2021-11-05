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
      setLayoutValue: sandbox.stub(),
      setDataPages: sandbox.stub(),
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
    const dataPages = await dataFetcher.fetch({});
    expect(dataPages[0].snapshotData).to.be.true;
  });

  it('should send correct params to getHyperCubeData', async () => {
    const dataPages = await dataFetcher.fetch();

    expect(model.getHyperCubeData).to.have.been.calledWith('/qHyperCubeDef', [
      {
        qTop: 0,
        qLeft: 0,
        qWidth: 4,
        qHeight: 2000,
      },
    ]);
    expect(dataPages).to.eql(pages);
    expect(layoutService.setLayoutValue.withArgs('dataPages', undefined)).to.have.been.calledOnce;
    expect(layoutService.setDataPages.withArgs(pages)).to.have.been.calledOnce;
  });

  it('should reject promise when trying to fetch the same data window twice in a row', async () => {
    const someRejectFn = sinon.spy();
    await dataFetcher.fetch().catch(someRejectFn);
    await dataFetcher.fetch().catch(someRejectFn);
    expect(someRejectFn).to.have.been.calledOnce;
  });
});
