import * as animations from '../animations-properties-handler';
import * as KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import createChartModel from '..';
import * as getAutoFormatPatternFromRange from '../format-pattern-from-range';
import * as shouldUpdateTicks from '../should-update-ticks';
import * as createViewHandler from '../../../view-handler';
import * as getVisiblePoints from '../../../utils/get-visible-points';
import * as isProgressiveAllowed from '../../../utils/is-progressive-allowed';

describe('chart-model', () => {
  let sandbox;
  let chart;
  let localeInfo;
  let hyperCube;
  let layoutService;
  let largeDataService;
  let colorService;
  let trendLinesService;
  let actions;
  let progressive;
  let colorModelDataFn;
  let create;
  let viewHandler;
  let viewState;
  let viewCache;
  let extremumModel;
  let dataPages;
  let dataHandler;
  let options;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    global.requestAnimationFrame = (cb) => {
      cb();
    };
    global.cancelAnimationFrame = sandbox.spy();
    dataPages = [
      { qElemNumber: 7954, qNum: 1, qState: 'L', qText: [1732, 6, 1765, 5] },
      { qElemNumber: 7946, qNum: 1, qState: 'L', qText: [1599, 5, 1632, 4] },
    ];
    viewHandler = {
      getMeta: sandbox.stub().returns('isHomeState'),
      getInteractionInProgress: sandbox.stub(),
      setInteractionInProgress: sandbox.stub(),
      getDataView: sandbox.stub(),
    };
    dataHandler = {
      getMeta: sandbox.stub().returns({ isBinnedData: false }),
      binArray: () => dataPages,
      fetch: () => Promise.resolve({ isBinnedData: true }),
      getHomeStateBins: sandbox.stub(),
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
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: { MINI_CHART_POINT: 'mcp', X_AXIS_TITLE: 'xat', Y_AXIS_TITLE: 'yat' },
      DATA: { MAIN: 'dm', BIN: 'db' },
      FIELDS: { BIN: 'fb', BIN_X: 'fbx', BIN_Y: 'fby', BIN_DENSITY: 'fbd' },
    });
    chart = {
      update: sandbox.stub(),
      layoutComponents: sandbox.stub(),
      component: sandbox.stub(),
    };
    chart.component.withArgs('mcp').returns('mini-chart-component');
    localeInfo = { key: 'locale-info' };
    hyperCube = {
      dataPages: [{ key: 'page-0' }, { key: 'page-1' }],
    };
    layoutService = {
      meta: { isContinuous: false, isSnapshot: false, isBigData: false },
      getHyperCube: sandbox.stub().returns(hyperCube),
      getHyperCubeValue: sandbox.stub(),
      getLayout: sandbox.stub(),
    };
    trendLinesService = {
      getData: () => [{ trendlineData: 'here' }],
      update: sandbox.stub(),
    };
    actions = {
      setProgressive: sandbox.stub(),
    };
    progressive = { timer: null };
    extremumModel = { command: { updateExtrema: sandbox.stub() } };
    colorModelDataFn = sandbox.stub().returns([{ colorData: 'oh yes' }]);
    colorService = {
      getData: colorModelDataFn,
    };
    sandbox.stub(getAutoFormatPatternFromRange, 'default');
    sandbox.stub(shouldUpdateTicks, 'default').returns(false);
    sandbox.stub(getVisiblePoints, 'default').returns(new Array(100));
    sandbox.stub(isProgressiveAllowed, 'default').returns(false);
    options = { chartAnimations: true };
    largeDataService = {
      shouldUseProgressive: () => isProgressiveAllowed.default(),
    };
    viewCache = { set: sandbox.stub(), get: sandbox.stub() };
    sandbox.stub(animations, 'cacheProperties');
    sandbox.stub(animations, 'propertiesHaveChanged');

    create = () =>
      createChartModel({
        chart,
        localeInfo,
        layoutService,
        largeDataService,
        colorService,
        trendLinesService,
        actions,
        progressive,
        viewState,
        viewCache,
        extremumModel,
        dataHandler,
        options,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query', 'command']);
  });

  describe('query', () => {
    it('should have correct properties', () => {
      expect(create().query).to.have.all.keys([
        'getViewState',
        'getViewHandler',
        'getDataHandler',
        'getLocaleInfo',
        'getMeta',
        'getAutoFormatPattern',
        'animationsEnabled',
        'miniChartEnabled',
        'getChart',
        'areSameVisiblePoints',
      ]);
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

    describe('getDataHandler', () => {
      it('should return correct data handler object', () => {
        expect(create().query.getDataHandler()).to.have.all.keys(['getMeta', 'binArray', 'fetch', 'getHomeStateBins']);
      });
    });

    describe('getLocaleInfo', () => {
      it('should return correct locale info', () => {
        expect(create().query.getLocaleInfo()).to.deep.equal({ key: 'locale-info' });
      });
    });

    describe('getMeta', () => {
      it('should return correct meta', () => {
        expect(create().query.getMeta()).to.deep.equal({
          isPrelayout: true,
          isSizeChanging: undefined,
          isPartialUpdating: undefined,
          progressive: false,
        });
      });
    });

    describe('getAutoFormatPattern', () => {
      it('should call getAutoFormatPatternFromRange', () => {
        create().query.getAutoFormatPattern('x');
        expect(getAutoFormatPatternFromRange.default).to.have.been.calledOnce;
      });
    });

    describe('animationsEnabled', () => {
      let chartModel;

      beforeEach(() => {
        options.chartAnimations = true;
        animations.propertiesHaveChanged.returns(false);
        viewHandler.getInteractionInProgress.returns(false);
        isProgressiveAllowed.default.returns(false);
        layoutService.meta.isBigData = false;
        viewCache.get.withArgs('isBigData').returns(false);
        layoutService.getHyperCubeValue.returns(10);
        sandbox.stub(NUMBERS, 'MAX_NR_ANIMATION').value(11);
        chartModel = create();
        chartModel.command.setMeta({ isPartialUpdating: false, isSizeChanging: false });
      });

      it('should return true under favorable conditions', () => {
        expect(chartModel.query.animationsEnabled()).to.equal(true);
      });

      it('should return false if animation option is false', () => {
        options.chartAnimations = false;
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if properties have changed', () => {
        animations.propertiesHaveChanged.returns(true);
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if interaction is in progress', () => {
        viewHandler.getInteractionInProgress.returns(true);
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if isPartialUpdating is true', () => {
        chartModel = create();
        chartModel.command.setMeta({ isPartialUpdating: true, isSizeChanging: false });
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if isSizeChanging is true', () => {
        chartModel = create();
        chartModel.command.setMeta({ isPartialUpdating: false, isSizeChanging: true });
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if progressive rendering', () => {
        isProgressiveAllowed.default.returns(true);
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if changing from bubbles to heatmap', () => {
        layoutService.meta.isBigData = true;
        viewCache.get.withArgs('isBigData').returns(false);
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if changing from heatmap to bubbles', () => {
        layoutService.meta.isBigData = false;
        viewCache.get.withArgs('isBigData').returns(true);
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });

      it('should return false if showing bubbles, and the number of bubbles exceeds MAX_NR_ANIMATION', () => {
        layoutService.getHyperCubeValue.returns(12);
        viewCache.get.withArgs('isBigData').returns(true);
        chartModel = create();
        expect(chartModel.query.animationsEnabled()).to.equal(false);
      });
    });
  });

  describe('command', () => {
    it('should expose correct methods', () => {
      expect(create().command).to.have.all.keys(['layoutComponents', 'setMeta', 'update', 'brush']);
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
        dataHandler.getMeta.returns({ isBinnedData: true });
        create().command.layoutComponents({ settings: { key: 'settings' } });
        const argsObject = chart.layoutComponents.args[0][0];

        expect(chart.layoutComponents).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[1].key).to.equal('db');
        expect(argsObject.data[1].type).to.equal('matrix');
        expect(argsObject.data[1].data()).eql(dataPages);
        expect(argsObject.settings).eql({ key: 'settings' });
      });
    });

    describe('update', () => {
      it('should call update correctly', () => {
        const chartModel = create();
        chartModel.command.update({ settings: { key: 'settings' } });
        const argsObject = chart.update.args[0][0];
        expect(chartModel.query.getMeta().isPartialUpdating).to.equal(false);
        expect(chart.update).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[0].config.localeInfo).to.equal(localeInfo);
        expect(argsObject.settings).eql({ key: 'settings' });
      });

      it('should call update, when settings is implicit', () => {
        const chartModel = create();
        chartModel.command.update();
        expect(chartModel.query.getMeta().isPartialUpdating).to.equal(true);
        expect(chart.update).to.have.been.calledOnce;
      });

      it('should update correct binned data when calling update', () => {
        dataHandler.getMeta.returns({ isBinnedData: true });
        const chartModel = create();
        chartModel.command.update({ settings: { key: 'settings' } });
        const argsObject = chart.update.args[0][0];
        expect(chartModel.query.getMeta().isPartialUpdating).to.equal(false);
        expect(chart.update).to.have.been.calledOnce;
        expect(argsObject.data).to.be.an('array');
        expect(argsObject.data[1].key).to.equal('db');
        expect(argsObject.data[1].type).to.equal('matrix');
        expect(argsObject.data[1].data()).eql(dataPages);
        expect(argsObject.settings).eql({ key: 'settings' });
      });

      it('should call trendlinesserverce.update', () => {
        create().command.update();
        expect(trendLinesService.update).to.have.been.calledOnce;
      });

      it('should call animations cacheProperties', () => {
        const chartModel = create();
        chartModel.command.update({ settings: { key: 'settings' } });
        expect(animations.cacheProperties).calledOnce;
      });
    });

    describe('getBinnedDataConfig', () => {
      describe('the returned object', () => {
        it('should have correct config.parse.fields function', () => {
          dataHandler.getMeta.returns({ isBinnedData: true });
          create().command.update();
          const binnedDataConfigObject = chart.update.args[0][0].data[1];
          expect(binnedDataConfigObject.config.parse.fields()).to.deep.equal([
            {
              key: 'fb',
              title: 'Bin',
            },
            {
              key: 'fbx',
              title: 'X',
            },
            {
              key: 'fby',
              title: 'Y',
            },
            {
              key: 'fbd',
              title: 'Density',
            },
          ]);
        });

        it('should have correct config.parse.row function', () => {
          dataHandler.getMeta.returns({ isBinnedData: true });
          create().command.update();
          const binnedDataConfigObject = chart.update.args[0][0].data[1];
          const d = { qElemNumber: 1, qText: [1, 2, 3, 4], qNum: 5 };
          expect(binnedDataConfigObject.config.parse.row(d)).to.deep.equal({
            bin: 1,
            binX: 2,
            binY: 3,
            binDensity: 5,
          });
        });
      });
    });
  });

  describe('handle dataview update', () => {
    it('should not fetch data if interaction is in progress', () => {
      viewHandler.getInteractionInProgress.returns(true);
      dataHandler.fetch = sandbox.stub();
      create();
      viewState.dataView();
      expect(dataHandler.fetch).to.not.have.been.called;
    });

    describe('updatePartial', () => {
      it('should trigger chart.update properly (partial version), when not switching between binned and not binned data, and not toggling mini chart', async () => {
        sandbox.useFakeTimers();
        const { clock } = sandbox;
        chart.component.withArgs('mcp').returns(false);
        const chartModel = create();
        await viewState.dataView();
        await clock.tick(50);

        expect(chartModel.query.getMeta().isPartialUpdating).to.equal(true);
        expect(chart.update).to.have.been.calledWithExactly({
          partialData: true,
          excludeFromUpdate: ['xat', 'yat', 'mcp'],
        });
        expect(trendLinesService.update).to.have.been.calledOnce;
      });
    });

    describe('update', () => {
      it('should trigger chart.update properly (full version), when mini chart is off then on, and on then off', async () => {
        sandbox.useFakeTimers();
        const { clock } = sandbox;
        viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: -1, xAxisMax: 2, yAxisMin: 1, yAxisMax: 4 } });
        viewHandler.getDataView.returns({ xAxisMin: -1, xAxisMax: 1, yAxisMin: 1, yAxisMax: 4 });
        createViewHandler.default.returns(viewHandler);
        create();
        // off --> on
        await viewState.dataView();
        await clock.tick(50);

        expect(chart.update).to.have.been.calledWithExactly({
          data: [
            {
              type: 'q',
              key: 'dm',
              data: {
                dataPages: [{ key: 'page-0' }, { key: 'page-1' }],
              },
              config: {
                localeInfo: { key: 'locale-info' },
              },
            },
            { colorData: 'oh yes' },
            { trendlineData: 'here' },
          ],
          settings: undefined,
        });

        // on --> off
        viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: -1, xAxisMax: 1, yAxisMin: 1, yAxisMax: 4 } });
        await viewState.dataView();
        await clock.tick(50);

        expect(chart.update).to.have.been.calledWithExactly({
          data: [
            {
              type: 'q',
              key: 'dm',
              data: {
                dataPages: [{ key: 'page-0' }, { key: 'page-1' }],
              },
              config: {
                localeInfo: { key: 'locale-info' },
              },
            },
            { colorData: 'oh yes' },
            { trendlineData: 'here' },
          ],
          settings: undefined,
        });
      });

      it('should trigger chart.update even if data fetching fails', async () => {
        sandbox.useFakeTimers();
        const { clock } = sandbox;
        dataHandler.fetch = sandbox.stub().rejects();
        viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: -1, xAxisMax: 1, yAxisMin: 1, yAxisMax: 4 } });
        viewHandler.getDataView.returns({ xAxisMin: -1, xAxisMax: 1, yAxisMin: 1, yAxisMax: 4 });
        createViewHandler.default.returns(viewHandler);
        create();

        await viewState.dataView();
        await clock.tick(50);

        expect(chart.update).to.have.been.called;
      });

      it('should trigger chart.update when ticks length is updated', async () => {
        sandbox.useFakeTimers();
        const { clock } = sandbox;
        viewHandler.getMeta.returns({
          homeStateDataView: { xAxisMin: -1, xAxisMax: 1, yAxisMin: 1, yAxisMax: 4 },
        });
        viewHandler.getDataView.returns({ xAxisMin: -1, xAxisMax: 1, yAxisMin: 1, yAxisMax: 4 });
        createViewHandler.default.returns(viewHandler);
        shouldUpdateTicks.default.returns(true);
        create();

        await viewState.dataView();
        await clock.tick(50);

        expect(chart.update).to.have.been.called;
      });
    });
  });
});
