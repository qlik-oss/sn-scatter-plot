describe('chart-model', () => {
  let sandbox;
  let chart;
  let localeInfo;
  let hyperCube;
  let layoutService;
  let colorService;
  let dockModel;
  let model;
  let picassoInstance;
  let picassoDataFn;
  let colorModelDataFn;
  let create;
  let zoomHandler;
  let createChartModel;
  let viewState;
  let extremumModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    global.requestAnimationFrame = (cb) => setTimeout(cb, 20);
    zoomHandler = {};
    viewState = {
      get() {
        return this.props;
      },
      set(p) {
        this.props = p;
      },
      onChanged(key, cb) {
        this[key] = cb;
      },
    };
    createChartModel = aw.mock([['**/src/zoom-handler/index.js', () => () => zoomHandler]], ['../index'])[0].default;
    chart = {
      update: sandbox.stub(),
    };
    localeInfo = { key: 'locale-info' };
    hyperCube = {
      dataPages: [{ key: 'page-0' }, { key: 'page-1' }],
    };
    layoutService = {
      meta: { isContinuous: false, isSnapshot: false },
      getHyperCube: sandbox.stub().returns(hyperCube),
      getDataPages: sandbox.stub().returns(hyperCube.dataPages),
      setDataPages: sandbox.stub().callsFake((pages) => {
        hyperCube.dataPages = pages;
      }),
      getHyperCubeValue: (path, defaultValue) => defaultValue,
    };
    extremumModel = { query: { updateExtrema: sandbox.stub() } };
    colorModelDataFn = sandbox.stub().returns([{ colorData: 'oh yes' }]);
    colorService = {
      getData: colorModelDataFn,
    };
    picassoDataFn = sandbox.spy();
    picassoInstance = {
      data: () => picassoDataFn,
    };
    dockModel = {};
    model = {};
    create = () =>
      createChartModel({
        chart,
        localeInfo,
        layoutService,
        dockModel,
        colorService,
        model,
        picasso: picassoInstance,
        viewState,
        extremumModel,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query', 'command']);
  });

  it('should prepare dataset properly', () => {
    create();
    expect(picassoDataFn).to.have.been.calledWith({
      key: 'qHyperCube',
      data: hyperCube,
      config: {
        localeInfo,
      },
    });
  });

  describe('command', () => {
    it('should expose correct methods', () => {
      expect(create().command).to.have.all.keys(['update']);
    });

    describe('update', () => {
      it('should call update correctly', () => {
        create().command.update({ settings: { key: 'settings' } });
        const argsObject = chart.update.args[0][0];

        expect(chart.update).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[0].config.localeInfo).to.equal(localeInfo);
        expect(argsObject.settings).eql({ key: 'settings' });
      });
    });

    describe('partial update', () => {
      it('should trigger chart.update properly when zoom (viewState) change', async () => {
        sandbox.useFakeTimers();
        const { clock } = sandbox;
        create();
        viewState.zoom();
        await clock.tick(50);
        expect(extremumModel.query.updateExtrema).to.have.been.calledOnce;
        expect(
          chart.update.withArgs({
            partialData: true,
            excludeFromUpdate: ['x-axis-title', 'y-axis-title'],
          })
        ).to.have.been.calledOnce;
      });
    });
  });
});
