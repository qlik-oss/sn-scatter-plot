import createChartModel from '..';
import * as createViewHandler from '../../../view-handler';

describe('chart-model', () => {
  let sandbox;
  let chart;
  let localeInfo;
  let hyperCube;
  let layoutService;
  let colorService;
  let dockService;
  let model;
  let picassoInstance;
  let picassoDataFn;
  let colorModelDataFn;
  let create;
  let viewHandler;
  let viewState;
  let extremumModel;
  let app;
  let flags;
  let dataPoint;
  let binnedData;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    global.requestAnimationFrame = (cb) => setTimeout(cb, 20);
    dataPoint = { qText: [2000, 5, 2200, 4], qNum: 1, qElemNumber: 7964 };
    viewHandler = {
      getMeta: sandbox.stub().returns('isHomeState'),
    };
    sandbox.stub(createViewHandler, 'default').returns(viewHandler);
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
    chart = {
      update: sandbox.stub(),
      layoutComponents: sandbox.stub(),
    };
    localeInfo = { key: 'locale-info' };
    hyperCube = {
      dataPages: [{ key: 'page-0' }, { key: 'page-1' }],
    };
    binnedData = [[{ qNum: 1164, qElemNumber: 0 }, dataPoint]];
    layoutService = {
      meta: { isContinuous: false, isSnapshot: false, isBigData: false },
      getHyperCube: sandbox.stub().returns(hyperCube),
      getDataPages: sandbox.stub().returns(hyperCube.dataPages),
      setDataPages: sandbox.stub().callsFake((pages) => {
        hyperCube.dataPages = pages;
      }),
      getHyperCubeValue: (path, defaultValue) => defaultValue,
      getLayoutValue: sandbox.stub().withArgs('dataPages').returns(binnedData),
      setLayoutValue: sandbox.stub(),
    };
    extremumModel = { command: { updateExtrema: sandbox.stub() } };
    colorModelDataFn = sandbox.stub().returns([{ colorData: 'oh yes' }]);
    colorService = {
      getData: colorModelDataFn,
    };
    picassoDataFn = sandbox.stub().returns('correct dataset');
    picassoInstance = {
      data: () => picassoDataFn,
    };
    dockService = {};
    model = {};
    app = {
      layout: [],
    };
    flags = { isEnabled: sandbox.stub().returns(false) };
    create = () =>
      createChartModel({
        chart,
        localeInfo,
        layoutService,
        dockService,
        colorService,
        model,
        picasso: picassoInstance,
        viewState,
        extremumModel,
        app,
        flags,
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

  describe('query', () => {
    it('should have correct properties', () => {
      expect(create().query).to.have.all.keys([
        'getDataset',
        'getViewState',
        'getViewHandler',
        'getLocaleInfo',
        'isPrelayout',
        'isInteractionInProgess',
        'getFormatter',
        'getSettings',
      ]);
    });

    describe('getDataSet', () => {
      it('should return correct data set', () => {
        expect(create().query.getDataset()).to.deep.equal('correct dataset');
      });
    });

    describe('getViewState', () => {
      it('should return correct viewstate object', () => {
        expect(create().query.getViewState()).to.have.all.keys(['get', 'set', 'onChanged', 'dataView']);
      });
    });

    describe('getViewHandler', () => {
      it('should return correct view handler object', () => {
        expect(create().query.getViewHandler().getMeta()).to.equal('isHomeState');
      });
    });

    describe('getLocaleInfo', () => {
      it('should return correct locale info', () => {
        expect(create().query.getLocaleInfo()).to.deep.equal({ key: 'locale-info' });
      });
    });

    describe('isInteractionInProgess', () => {
      it('should return correct isInteractionInProgess value', () => {
        expect(create().query.isInteractionInProgess()).to.deep.equal(false);
      });
    });

    describe('isPrelayout', () => {
      it('should return correct isPrelayout value', () => {
        expect(create().query.isPrelayout()).to.equal(true);
      });
    });

    describe('getFormatter', () => {
      it('should return correct getFormatter value', () => {
        picassoDataFn.returns({
          field: sandbox
            .stub()
            .withArgs('x')
            .returns({ formatter: sandbox.stub().returns('x-formatter') }),
        });
        expect(create().query.getFormatter('x')).to.deep.equal('x-formatter');
      });
    });

    describe('getSettings', () => {
      it('should return correct setting value', () => {
        const chartModel = create();
        chartModel.command.layoutComponents({ settings: { key: 'settings' } });
        expect(chartModel.query.getSettings()).eql({ key: 'settings' });
      });
    });
  });

  describe('command', () => {
    it('should expose correct methods', () => {
      expect(create().command).to.have.all.keys(['layoutComponents', 'update']);
    });

    describe('layoutComponents', () => {
      it('should call layoutComponents correctly', () => {
        create().command.layoutComponents({ settings: { key: 'settings' } });
        const argsObject = chart.layoutComponents.args[0][0];

        expect(chart.layoutComponents).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[0].config.localeInfo).to.equal(localeInfo);
        expect(argsObject.settings).eql({ key: 'settings' });
      });

      it('should call layoutComponents, when settings is implicit', () => {
        create().command.layoutComponents();
        expect(chart.layoutComponents).to.have.been.calledOnce;
      });

      it('should set correct binned data when calling layoutComponents', () => {
        layoutService.meta.isBigData = true;
        flags.isEnabled.returns(true);
        create().command.layoutComponents({ settings: { key: 'settings' } });
        const argsObject = chart.layoutComponents.args[0][0];

        expect(chart.layoutComponents).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[1].key).to.equal('binData');
        expect(argsObject.data[1].type).to.equal('matrix');
        expect(argsObject.data[1].data[0]).eql(dataPoint);
        expect(argsObject.settings).eql({ key: 'settings' });
      });
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

      it('should call update, when settings is implicit', () => {
        create().command.update();
        expect(chart.update).to.have.been.calledOnce;
      });

      it('should update correct binned data when calling update', () => {
        layoutService.meta.isBigData = true;
        flags.isEnabled.returns(true);
        create().command.update({ settings: { key: 'settings' } });
        const argsObject = chart.update.args[0][0];

        expect(chart.update).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[1].key).to.equal('binData');
        expect(argsObject.data[1].type).to.equal('matrix');
        expect(argsObject.data[1].data[0]).eql(dataPoint);
        expect(argsObject.settings).eql({ key: 'settings' });
      });
    });

    describe('partial update', () => {
      it('should trigger chart.update properly when dataView (viewState) change', async () => {
        sandbox.useFakeTimers();
        const { clock } = sandbox;
        create();
        viewState.dataView();
        await clock.tick(50);
        expect(extremumModel.command.updateExtrema).to.have.been.calledOnce;
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
