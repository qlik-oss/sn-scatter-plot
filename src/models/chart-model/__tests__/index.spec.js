describe('chart-model', () => {
  let sandbox;
  let chart;
  let localeInfo;
  let hyperCube;
  let layoutModel;
  let colorModel;
  let dockModel;
  let model;
  let options;
  let picassoInstance;
  let picassoDataFn;
  let colorModelDataFn;
  let create;
  let zoomHandler;
  let createChartModel;
  let fakeStorageObject;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    global.requestAnimationFrame = (cb) => setTimeout(cb, 20);
    zoomHandler = {};
    fakeStorageObject = {
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
    createChartModel = aw.mock(
      [
        [
          '**/src/models/chart-model/viewstate.js',
          () => (props) => {
            fakeStorageObject.props = props;
            return fakeStorageObject;
          },
        ],
        ['**/src/zoom-handler/index.js', () => () => zoomHandler],
      ],
      ['../index']
    )[0].default;
    chart = {
      update: sandbox.stub(),
    };
    localeInfo = { key: 'locale-info' };
    hyperCube = {
      dataPages: [{ key: 'page-0' }, { key: 'page-1' }],
    };
    layoutModel = {
      meta: { isContinuous: false, isSnapshot: false },
      getHyperCube: sandbox.stub().returns(hyperCube),
      getDataPages: sandbox.stub().returns(hyperCube.dataPages),
      setDataPages: sandbox.stub().callsFake((pages) => {
        hyperCube.dataPages = pages;
      }),
      getHyperCubeValue: (path, defaultValue) => defaultValue,
    };
    colorModelDataFn = sandbox.stub().returns([{ colorData: 'oh yes' }]);
    colorModel = {
      main: {
        model: () => ({
          data: colorModelDataFn,
        }),
      },
    };
    picassoDataFn = sandbox.spy();
    picassoInstance = {
      data: () => picassoDataFn,
    };
    dockModel = {};
    model = {};
    options = {};
    create = () =>
      createChartModel({
        chart,
        localeInfo,
        layoutModel,
        dockModel,
        colorModel,
        model,
        picasso: picassoInstance,
        options,
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
        fakeStorageObject.zoom();
        await clock.tick(50);
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
